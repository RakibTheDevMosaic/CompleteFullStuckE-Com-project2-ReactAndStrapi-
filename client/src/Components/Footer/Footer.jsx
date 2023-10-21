import React from "react";
import pic from "../../img/payments.png";
import "./Footer.scss";


const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos reiciendis odio beatae minus porro harum error hic,
            quisquam iure enim maxime et sit quidem doloribus voluptas nulla
            unde accusamus? Dicta, animi. Fugiat, corrupti?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            officia aut a nostrum? Nemo, quae. Quasi deserunt, tempore voluptate
            veniam provident excepturi iure! Explicabo illo, laborum placeat
            dolorum architecto enim consectetur natus earum.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">LUXURYSTORE</span>
          <span className="copyright">© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src={pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
