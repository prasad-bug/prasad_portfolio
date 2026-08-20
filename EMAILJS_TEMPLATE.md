# EmailJS Template Specification

This document contains copy-pasteable templates (both HTML and Plain Text) that you can use in your **EmailJS Dashboard** to receive beautifully formatted emails from your portfolio's contact form.

---

## 1. HTML Email Template (Recommended)

Copy the entire HTML block below and paste it into the **HTML Source** editor (`</>` button in the EmailJS Template Editor):

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Inquiry</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #f3f4f6;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #f3f4f6;
      padding: 30px 10px;
      box-sizing: border-box;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      border: 1px solid #e5e7eb;
    }
    .header {
      background: linear-gradient(135deg, #7c3aed, #5b21b6);
      padding: 30px 20px;
      text-align: center;
    }
    .header h1 {
      color: #ffffff;
      font-size: 24px;
      font-weight: 800;
      margin: 0;
      letter-spacing: -0.02em;
    }
    .content {
      padding: 30px 24px;
    }
    .meta-box {
      background-color: #f9fafb;
      border: 1px solid #f3f4f6;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 24px;
    }
    .meta-row {
      margin-bottom: 8px;
      font-size: 14px;
    }
    .meta-row:last-child {
      margin-bottom: 0;
    }
    .meta-label {
      font-weight: 700;
      color: #4b5563;
      display: inline-block;
      width: 100px;
    }
    .meta-val {
      color: #111827;
    }
    .meta-val a {
      color: #7c3aed;
      text-decoration: none;
    }
    .message-box {
      font-size: 16px;
      line-height: 1.6;
      color: #1f2937;
      white-space: pre-wrap;
      background-color: #ffffff;
      border-left: 4px solid #7c3aed;
      padding: 4px 16px;
      margin: 0;
    }
    .footer {
      background-color: #f9fafb;
      padding: 20px;
      text-align: center;
      border-top: 1px solid #e5e7eb;
      font-size: 12px;
      color: #9ca3af;
    }
    .footer a {
      color: #9ca3af;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <!-- Header -->
      <div class="header">
        <h1>New Portfolio Inquiry</h1>
      </div>

      <!-- Content -->
      <div class="content">
        <!-- Sender Meta info -->
        <div class="meta-box">
          <div class="meta-row">
            <span class="meta-label">Sender Name:</span>
            <span class="meta-val">{{from_name}}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">Email:</span>
            <span class="meta-val"><a href="mailto:{{from_email}}">{{from_email}}</a></span>
          </div>
        </div>

        <!-- Message Body -->
        <blockquote class="message-box">
{{message}}
        </blockquote>
      </div>

      <!-- Footer Info -->
      <div class="footer">
        Sent from your <a href="https://prasad-bug.github.io/react-portfolio-template" target="_blank">Developer Portfolio Website</a>.
      </div>
    </div>
  </div>
</body>
</html>
```

---

## 2. Plain Text Alternative

If you prefer a lightweight, plain-text email template, paste this into the editor instead:

```text
==================================================
New Portfolio Message from {{from_name}}
==================================================

Sender Name:  {{from_name}}
Sender Email: {{from_email}}

--------------------------------------------------
Message:
--------------------------------------------------
{{message}}

--------------------------------------------------
Origin: Portfolio Contact Form
```

---

## 3. Recommended EmailJS Settings

When configuring your template in the EmailJS dashboard, use the following settings for the best user experience:

- **Subject**: `New Portfolio Message from {{from_name}}`
- **To Email**: (Leave empty to default to your EmailJS account email)
- **From Name**: `Portfolio Contact Form`
- **From Email**: (Optional, default is `agent@emailjs.com`)
- **Reply-To**: `{{from_email}}` (This allows you to hit "Reply" in your email client to directly reply to the user)
