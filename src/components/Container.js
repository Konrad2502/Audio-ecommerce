import React from "react";

function Container(props) {
  return (
    <div className="w-full max-w-[1400px] mx-auto  overflow-x-hidden">
      {props.children}
    </div>
  );
}

export default Container;
