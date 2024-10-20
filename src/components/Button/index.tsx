import React from "react";
import style from "./Button.module.scss";

// Tipo das props para incluir 'children', 'type' e uma função opcional 'onClick'
class Button extends React.Component<
  React.PropsWithChildren<{
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void; // onClick agora é opcional
  }>
> {
  render() {
    const { type = "button", onClick, children } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.button}>
        {children}
      </button>
    );
  }
}

export default Button;
