import React from "react";
import styles from '../TableFilter/TableFilter.module.scss';
import Button from "../Button/Button";

const TableFilter = ({changeType}) => (
        <div className={styles.wrapper}>
            <Button changeType={changeType} type='IT'>IT</Button>
            <Button changeType={changeType} type='Entertainment'>Entertainment</Button>
            <Button changeType={changeType} type='Financial'>Financial</Button>
            <Button changeType={changeType} type='Productivity'>Productivity</Button>
        </div>
    )

export default TableFilter;