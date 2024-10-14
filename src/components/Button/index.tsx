import React from "react";
import style from "./Button.module.scss";


type ButtonProps = React.PropsWithChildren<{}>;

class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button className={style.button}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
