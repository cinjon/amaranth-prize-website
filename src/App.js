import React, {useEffect} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ReactGA from 'react-ga4';

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { HomeScreen } from "./screens/HomeScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { WinningPapersScreen } from "./screens/WinningPapers";
import { TermsOfServiceScreen } from "./screens/TermsOfService";
import { PrivacyPolicyScreen } from "./screens/PrivacyPolicy";

const TRACKING_ID = process.env.REACT_APP_ANALYTICS_TRACKING_ID
if (TRACKING_ID !== undefined) {
    console.log("Initialized GA in App.js")
    ReactGA.initialize(TRACKING_ID, {
        legacyDimensionMetric: false,
        gaOptions: {
            siteSpeedSampleRate: 100
        }
    })    
}

export const App = () => {
    const location = useLocation();
    const page = location.pathname + location.search

    useEffect(() => {
        // track pageview with gtag / react-ga / react-ga4, for example:
        if (TRACKING_ID !== undefined) {
            ReactGA.send({ hitType: "pageview", page: page})
        }
    }, [page]);

  return (
    <div className="Container">
      <div className="App">
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
      </div>
    </div>
  )

}

export default App;
