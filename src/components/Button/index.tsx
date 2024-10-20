import React from "react";
import style from "./Button.module.scss";

// Tipo das props para incluir 'children' e 'type'
class Button extends React.Component<
  React.PropsWithChildren<{
    type?: "button" | "submit" | "reset" | undefined;
  }>
> {
  render() {
    const { type = "button", children } = this.props;
    return (
      <button type={type} className={style.button}>
        {children}
      </button>
    );
  }
}

export default Button;