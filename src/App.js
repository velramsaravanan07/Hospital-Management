import React, { useState } from "react";
import Top from "./Top";
import "./App.css";
import NextPageComponent from "./NextPage";
import NextPage2 from "./NextPage2";
import NextPage3 from "./NextPage3";
import NextPage4 from "./NextPage4";
import NextPage5 from "./NextPage5";
import Footer from "./Footer";
import Login from "./Login";

const App = () => {
  const [isAdminLoggedIn, setAdminLoggedIn] = useState(false);

  const handleAdminLogin = () => {
    setAdminLoggedIn(true);
  };

  return (
    <div>
      <div className="header">{isAdminLoggedIn && <Top />}</div>
      <div className="content">
        {!isAdminLoggedIn && <Login onLogin={handleAdminLogin} />}
        {isAdminLoggedIn && (
          <>
            <NextPageComponent />
            <NextPage2 />
            <NextPage3 />
            <NextPage4 />
            <NextPage5 />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
