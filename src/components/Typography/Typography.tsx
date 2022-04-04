import React from "react";
import classes from "./Typography.module.scss";
import { Color } from "../../type/styles/color";
export interface TypographyProps {
  text?: string;
  variant?:
    | "heading-1"
    | "heading-2"
    | "subtitle-1"
    | "subtitle-2"
    | "body-1"
    | "body-2"
    | "caption";
  weight?: "regular" | "medium" | "semibold" | "bold";
  textTransform?: "lowercase" | "uppercase" | "camelcase";
  color?: Color;
}

const Typography = ({
  text = "",
  variant = "heading-1",
  weight = "regular",
  textTransform = "lowercase",
  color = "white",
}: TypographyProps) => {
  const finalText =
    textTransform === "lowercase"
      ? text.toLowerCase()
      : textTransform === "uppercase"
      ? text.toUpperCase()
      : text.charAt(0).toUpperCase();

  return (
    <p
      className={`${classes[`typography`]} ${
        classes[`typography-variant-${variant}`]
      } ${classes[`typography-weight-${weight}`]} ${
        classes[`typography-color-${color}`]
      }`}
    >
      {finalText}
    </p>
  );
};

export default Typography;
