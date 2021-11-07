import React from "react";
import { useState} from "react";
import styles from '../Table/Table.module.scss';
import TableContent from '../TableContent/TableContent';
import TableHeader from "../TableHeader/TableHeader";
import TableFilter from "../TableFilter/TableFilter";

const Table = ({data}) => {
    const [matureTableActive, setMatureTableActive] = useState(false);
    const [betaTableActive, setBetaTableActive] = useState(true);
    const [filteredData, setFilteredData] = useState(data);
 

    const changeType = (type) => {
    const filterData = data.filter(row => row.type === type);
    setFilteredData(filterData)
    }

    const hideTable = (table) => {
        if (table === 'mature') {
           setMatureTableActive(!matureTableActive)
        } else if (table === 'beta') {
            setBetaTableActive(!betaTableActive) 
        }
   }

    return (
    <>
    <div className={styles.wrapper}>
        <TableFilter changeType={changeType}/>
        <TableHeader tableActive={matureTableActive} hideContent={() => hideTable('mature')}>Mature Applications</TableHeader>
        {matureTableActive ? null : <TableContent data={filteredData}/>}
        {/* <TableHeader tableActive={betaTableActive} hideContent={() => hideTable('beta')}>Beta Applications</TableHeader>
        {betaTableActive ? null : <TableContent data={filteredData}/>} */}
    </div>      
    </>
    );
}

export default Table;