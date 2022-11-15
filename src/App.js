import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { HomeScreen } from "./screens/HomeScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { WinningPapersScreen } from "./screens/WinningPapers";
import { TermsOfServiceScreen } from "./screens/TermsOfService";
import { PrivacyPolicyScreen } from "./screens/PrivacyPolicy";

export const App = () => {

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
