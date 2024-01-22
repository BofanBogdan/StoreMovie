import React from "react";

import "./style.scss";

const ContentWrapper = ({ children, style }) => {
  return (
    <div className="contentWrapper" style={style}>
      {children}
    </div>
  );
};
export default ContentWrapper;
