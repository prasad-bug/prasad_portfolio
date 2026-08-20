import React, {useState, useEffect} from "react";
import Main from "./Main";
import Expertise from "./Expertise";
import CurrentlyBuilding from "./CurrentlyBuilding";
import Timeline from "./Timeline";
import Project from "./Project";
import GitHubGraph from "./GitHubGraph";
import Contact from "./Contact";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ClickSpark from "./ClickSpark";
import FadeIn from './FadeIn';

function HomePage() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <ClickSpark
      sparkColor={mode === 'dark' ? '#a855f7' : '#5000ca'}
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={400}
    >
      <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
          <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
          <FadeIn transitionDuration={700}>
              <Main/>
              <Expertise/>
              <CurrentlyBuilding/>
              <Timeline/>
              <Project/>
              <GitHubGraph/>
              <Contact/>
          </FadeIn>
          <Footer />
      </div>
    </ClickSpark>
    );
}

export default HomePage;
