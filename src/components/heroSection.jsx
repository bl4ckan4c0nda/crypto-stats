import React, { useState, useEffect } from "react";
import rocket from "../assets/images/section/rocket.png";

const HeroSection = () => {
  return (
    <>
      <div className="page-wrapper pb-16">
        <div className="container-xl">
          <div className="py-16 text-center lh-base">
            <div className="font-10 fw-light">لیست کامل قیمت لحظه ای</div>
            <br />
            <span className="text-primary font-20 fw-bold">
              ارز های دیجیتال
            </span>
          </div>
          <div className="text-center">
            <img src={rocket} width="230" alt="rocket" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
