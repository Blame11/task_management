"use client";
import { useGlobalState } from "@/app/context/globalProvider";

import React from "react";
import styled from "styled-components";

/**
 * The button component.
 *
 * @interface Props The component props.
 */
interface Props {
  /** The icon to display in the button. */
  icon?: React.ReactNode;
  /** The name of the button. */
  name?: string;
  /** The background-color of the button. */
  background?: string;
  /** The padding of the button. */
  padding?: string;
  /** The border-radius of the button. */
  borderRad?: string;
  /** The font-weight of the button. */
  fw?: string;
  /** The font-size of the button. */
  fs?: string;
  /** The click handler of the button. */
  click?: () => void;
  /** The type of the button, can be submit, button or reset. */
  type?: "submit" | "button" | "reset" | undefined;
  /** The border of the button. */
  border?: string;
  /** The color of the button text. */
  color?: string;
}

/**
 * The button component.
 *
 * @param {Props} props The component props.
 * @returns {JSX.Element} The button component.
 */
function Button({
  icon,
  name,
  background,
  padding,
  borderRad,
  fw,
  fs,
  click,
  type,
  border,
  color,
}: Props) {
  const { theme } = useGlobalState();

  return (
    <ButtonStyled
      type={type}
      style={{
        background: background,
        padding: padding || "0.5rem 1rem",
        borderRadius: borderRad || "0.5rem",
        fontWeight: fw || "500",
        fontSize: fs,
        border: border || "none",
        color: color || theme.colorGrey0,
      }}
      theme={theme}
      onClick={click}
    >
      {icon && icon}
      {name}
    </ButtonStyled>
  );
}


const ButtonStyled = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colorGrey2};
  z-index: 5;
  cursor: pointer;

  transition: all 0.55s ease-in-out;

  i {
    margin-right: 1rem;
    color: ${(props) => props.theme.colorGrey2};
    font-size: 1.5rem;
    transition: all 0.55s ease-in-out;
  }

  &:hover {
    color: ${(props) => props.theme.colorGrey0};
    i {
      color: ${(props) => props.theme.colorGrey0};
    }
  }
`;

export default Button;
