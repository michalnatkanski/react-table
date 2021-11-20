import styles from '../Table/Table.module.scss';
import TableContent from '../TableContent/TableContent';
import TableHeader from "../TableHeader/TableHeader";
import TableFilter from "../TableFilter/TableFilter";

const Table = ({
    typesFilter, 
    setUrlSlug, 
    hideTable, 
    tableActive, 
    handleChangeType, 
    filteredData, 
    activeButtons
    }) => (
    <>
    <div className={styles.wrapper}>
        <TableFilter 
            typesFilter={typesFilter} 
            handleChangeType={handleChangeType} 
            activeButtons={activeButtons}/>
       <TableHeader 
            tableActive={tableActive.matureTable} 
            hideContent={() => hideTable(true)}>mature</TableHeader>
        {tableActive.matureTable ? null : 
        <TableContent 
            setUrlSlug={setUrlSlug} 
            data={filteredData.matureApplications}/>}
            <TableHeader 
            tableActive={tableActive.betaTable} 
            hideContent={() => hideTable(false)}>beta</TableHeader>
        {tableActive.betaTable ? null : 
        <TableContent 
            setUrlSlug={setUrlSlug} 
            data={filteredData.betaApplications}/>}
    </div>      
    </>
    );


export default Table;