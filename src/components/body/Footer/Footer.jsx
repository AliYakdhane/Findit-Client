import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer style={{backgroundColor:'#E8F1F2'}} className="bg-gray-900 text-white">
     
      <div
      style={{backgroundColor:'#E8F5F2'}} 
        className="  lg:grid-cols-1 gap-8
      text-center  text-gray-400 text-sm pb-0"
      >
      
        <SocialIcons Icons={Icons} />
        <br/>
          <span style={{color:'#344767',fontFamily:'Roboto',fontWeight:'600',lineHeight:'20px'}}>© 2022 Booster Bc. All rights reserved.</span>
        <span style={{color:'#344767',fontFamily:'Roboto',fontWeight:'600',lineHeight:'20px'}}>Terms · Privacy Policy</span>
     
        </div><br/>
    </footer>
  );
};

export default Footer;
