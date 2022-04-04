import * as React from "react";
import Typography from "../Typography";
import style from "./Banner.module.scss";

export interface IBannerProps {
  action?: boolean;
  actionText?: string;
  state?: "success" | "info" | "warning" | "error";
  message?: string;
  onClose?: () => void;
  onAction?: () => void;
}

export default function Banner({
  action = false,
  actionText = "",
  state = "success",
  message = "",
  onClose,
  onAction,
}: IBannerProps) {
  return (
    <div className={`${style["banner"]} ${style[`banner-state-${state}`]}`}>
      <Typography text={message} variant="body-small" weight="medium" />
      <div className={`${style["action"]}`}>
        {action && (
          <div onClick={onAction} className={`${style["action-close"]}`}>
            <Typography text={actionText} textTransform="uppercase" />
          </div>
        )}
        <div onClick={onClose}>
          <Typography text="x" />
        </div>
      </div>
    </div>
  );
}
