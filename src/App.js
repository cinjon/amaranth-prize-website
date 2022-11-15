import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HomeScreen } from "./screens/HomeScreen";

export const App = () => {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  )

}

export default App;
