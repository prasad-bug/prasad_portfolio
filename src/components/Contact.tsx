import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

// ─────────────────────────────────────────────────────────────────────────────
// ✏️  PLUG YOUR EMAILJS CREDENTIALS IN HERE
//
//  1. Go to https://www.emailjs.com and create a free account.
//  2. Add an Email Service (Gmail, Outlook, etc.) → copy the Service ID below.
//  3. Create an Email Template and note the Template ID.
//     Your template variables should match the field names used in `sendEmail`:
//       {{from_name}}   – sender's name
//       {{from_email}}  – sender's email
//       {{message}}     – the message body
//       {{to_name}}     – your name (set as a static value in the template or here)
//  4. Go to Account → API Keys → copy your Public Key below.
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'abcDEFghiJKL_mno'
// ─────────────────────────────────────────────────────────────────────────────

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [message, setMessage] = useState('');

  const [nameError,    setNameError]    = useState(false);
  const [emailError,   setEmailError]   = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  // ── Validators ──────────────────────────────────────────────────────────────
  const isValidEmail = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const validate = (): boolean => {
    const nameErr    = name.trim() === '';
    const emailErr   = !isValidEmail(email.trim());
    const messageErr = message.trim() === '';

    setNameError(nameErr);
    setEmailError(emailErr);
    setMessageError(messageErr);

    return !nameErr && !emailErr && !messageErr;
  };

  // ── Submit handler ───────────────────────────────────────────────────────────
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitState('sending');

    const templateParams = {
      from_name:  name.trim(),
      from_email: email.trim(),
      message:    message.trim(),
      to_name:    'Prasad',
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitState('success');
      setName('');
      setEmail('');
      setMessage('');
      // Reset back to idle after 5 s so the form is re-usable
      setTimeout(() => setSubmitState('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setSubmitState('error');
      // Allow retry after 4 s
      setTimeout(() => setSubmitState('idle'), 4000);
    }
  };

  // ── Button label & state ─────────────────────────────────────────────────────
  const buttonContent = () => {
    if (submitState === 'sending') return <>Sending…</>;
    if (submitState === 'success') return <>✓ Sent!</>;
    if (submitState === 'error')   return <>✗ Failed — try again</>;
    return <><SendIcon sx={{ mr: 0.5, fontSize: '1rem' }} />Send message</>;
  };

  const isBusy    = submitState === 'sending';
  const isSuccess = submitState === 'success';
  const isError   = submitState === 'error';

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                id="contact-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => { setName(e.target.value); if (nameError) setNameError(false); }}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
                disabled={isBusy || isSuccess}
              />
              <TextField
                required
                id="contact-email"
                label="Email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(false); }}
                error={emailError}
                helperText={emailError ? 'Please enter a valid email address' : ''}
                disabled={isBusy || isSuccess}
              />
            </div>

            <TextField
              required
              id="contact-message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => { setMessage(e.target.value); if (messageError) setMessageError(false); }}
              error={messageError}
              helperText={messageError ? 'Please enter your message' : ''}
              disabled={isBusy || isSuccess}
            />

            {/* ── Submit button ── */}
            <Button
              type="submit"
              variant="contained"
              disabled={isBusy || isSuccess}
              className={`contact-submit-btn${isSuccess ? ' contact-submit-btn--success' : ''}${isError ? ' contact-submit-btn--error' : ''}`}
            >
              {buttonContent()}
            </Button>

            {/* ── Status banner ── */}
            {isSuccess && (
              <p className="contact-status contact-status--success">
                🎉 Your message was sent successfully! I'll get back to you soon.
              </p>
            )}
            {isError && (
              <p className="contact-status contact-status--error">
                Something went wrong. Please try again, or email me directly.
              </p>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;