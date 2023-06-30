import React from "react";

export type IProps = {
  children: any;
};
export const Card: React.FC<IProps> = ({ children }) => {
  return (
    <div className=" container m-auto flex justify-items-center items-center rounded overflow-hidden shadow-lg">
      {children}
    </div>
  );
};
