import * as React from "react";
import classes from "Ribbon.module.scss";
import Typography from "../Typography";

export interface IRibbonProps {
  text?: string;
}
export default function Ribbon({ text = "" }: IRibbonProps) {
  return (
    <div className={`${classes["ribbon"]}`}>
      <Typography text={text} color={"grey-100"} />
    </div>
  );
}
