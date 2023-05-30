import lbsIcon from "../images/Let's Bookshelf-logos/lbs-transparent.png";
import lbsName from "../images/Let's Bookshelf-logos/lbs-name.png";
import React from "react";

const PageLogo = () => {
  return (
    <div className="flex flex-row h-14 relative w-64 items-center" id="logo">
      <img
        src={lbsIcon}
        className="h-16"
        alt="Let's Bookshelf logo"
      />
      <img
        src={lbsName}
        className="relative top-2 -left-16 md:-left-12"
        alt="Let's Bookshelf logo"
      />
    </div>
  );
};

export default PageLogo;
