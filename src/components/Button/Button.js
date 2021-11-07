import React from "react";
import styles from '../Button/Button.module.scss';

const Button = ({changeType, type, hideContent, children}) => (
           <button className={type ? styles.filterBtn : styles.tableBtn}  type="button" onClick={type ? () => changeType(type) : hideContent}>{children}</button>  
    )

export default Button;