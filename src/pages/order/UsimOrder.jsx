import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Usim from "../../components/order/Usim";

const UsimOrder = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="main">
          <Usim />
        </div>
      </div>
    </div>
  );
};

export default UsimOrder;
