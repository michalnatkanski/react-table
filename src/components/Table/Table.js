import styles from '../Table/Table.module.scss';
import PropTypes from 'prop-types';
import TableContent from '../TableContent/TableContent';
import TableHeader from "../TableHeader/TableHeader";
import TableFilter from "../TableFilter/TableFilter";


const Table = ({
    handleTableHide,
    tableActive,
    handleChangeType,
    filteredData,
    activeButtons,
    typesFilter
}) => (
    <>
        <div className={styles.wrapper}>
            <TableFilter
                handleChangeType={handleChangeType}
                activeButtons={activeButtons} 
                typesFilter={typesFilter}/>
            <TableHeader
                tableActive={tableActive.matureTable}
                handleTableHide={() => handleTableHide(true)}>mature</TableHeader>
            {tableActive.matureTable ? null :
                <TableContent data={filteredData.matureApplications} />}
            <TableHeader
                tableActive={tableActive.betaTable}
                handleTableHide={() => handleTableHide(false)}>beta</TableHeader>
            {tableActive.betaTable ? null :
                <TableContent data={filteredData.betaApplications} />}
        </div>
    </>
);

export default Table;

Table.propTypes = {
    handleTableHide: PropTypes.func.isRequired,
    tableActive: PropTypes.object.isRequired,
    handleChangeType: PropTypes.func.isRequired,
    filteredData: PropTypes.object.isRequired,
    activeButtons: PropTypes.object
}

