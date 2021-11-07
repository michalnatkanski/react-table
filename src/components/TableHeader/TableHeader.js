import React from "react";
import styles from '../TableHeader/TableHeader.module.scss';
import Button from "../Button/Button";

const TableHeader = ({hideContent, tableActive, children}) => (
        <div className={styles.wrapper}>
            <h2 className={styles.wrapper__title}>{children}</h2>
            <Button hideContent={hideContent}>{tableActive ? '+' : '-'}</Button>
        </div> 
    )

export default TableHeader;