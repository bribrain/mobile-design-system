import * as React from "react";

export interface IAlertProps {
  type?: "withoutAction" | "withAction";
  style?: "message-only" | "title-with-message" | "icon-title-with-message";
  variants?: "default" | "close icon" | "action button" | "two action button";
  state?: "success" | "info" | "warning" | "error";
}

export default function Alert({ type, variants }: IAlertProps) {
  return (
    <div className={"alert"}>
      <p>alert</p>
    </div>
  );
}
