import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-blue-200 flex flex-col items-center">
      <Header></Header>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
