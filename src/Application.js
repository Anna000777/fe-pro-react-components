import React from 'react';
import Header from './components/Header';
import Content from "./components/Content";
import Footer from "./components/Footer";

const Application = () => {
  return (
      <div className="wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
  );
};

export default Application;
