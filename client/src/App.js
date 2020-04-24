import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import SignIn from "./components/Join/Join";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={SignIn} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;
