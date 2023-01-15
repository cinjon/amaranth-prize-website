import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from 'react-ga';

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { HomeScreen } from "./screens/HomeScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { WinningPapersScreen } from "./screens/WinningPapers";
import { TermsOfServiceScreen } from "./screens/TermsOfService";
import { PrivacyPolicyScreen } from "./screens/PrivacyPolicy";

const TRACKING_ID = process.env.REACT_APP_ANALYTICS_TRACKING_ID
// ReactGA.initialize(TRACKING_ID, {debug:true});
ReactGA.initialize(TRACKING_ID, {
    gaOptions: {
        siteSpeedSampleRate: 100
    }
})

export const App = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

  return (
    <div className="Container">
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/winning-papers" element={<WinningPapersScreen />} />
            <Route path="/terms-of-service" element={<TermsOfServiceScreen />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyScreen />} />
          </Routes>
          <div className="flex-spacer" />
          <Footer />
          </Router>
      </div>
    </div>
  )

}

export default App;
