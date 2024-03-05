import React, { ReactNode } from "react";

type PropType = {
  children: ReactNode;
};

const Button = ({ children }: PropType) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "1.2em",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "blue",
        color: "white",
        border: "none",
      }}
    >
      {children}
    </button>
  );
};

export { Button };
