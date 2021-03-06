import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Esim from '../../components/order/Esim'


const EsimOrder = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="main">
          <Esim />
        </div>
      </div>
    </div>
  );
};

export default EsimOrder;
