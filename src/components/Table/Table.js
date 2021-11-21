import styles from '../Table/Table.module.scss';
import TableContent from '../TableContent/TableContent';
import TableHeader from "../TableHeader/TableHeader";
import TableFilter from "../TableFilter/TableFilter";

const Table = ({ 
    handleTableHide, 
    tableActive, 
    handleChangeType, 
    filteredData, 
    activeButtons
    }) => (
    <>
    <div className={styles.wrapper}>
        <TableFilter 
            handleChangeType={handleChangeType} 
            activeButtons={activeButtons}/>
       <TableHeader 
            tableActive={tableActive.matureTable} 
            hideContent={() => handleTableHide(true)}>mature</TableHeader>
            {tableActive.matureTable ? null : 
        <TableContent data={filteredData.matureApplications}/>}
            <TableHeader 
            tableActive={tableActive.betaTable} 
            hideContent={() => handleTableHide(false)}>beta</TableHeader>
            {tableActive.betaTable ? null : 
        <TableContent data={filteredData.betaApplications}/>}
    </div>      
    </>
    );


export default Table;