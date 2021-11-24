import styles from '../Table/Table.module.scss';
import PropTypes from 'prop-types';
import TableContent from '../TableContent/TableContent';
import TableHeader from '../TableHeader/TableHeader';

const Table = ({
    handleTableHide,
    tableActive,
    filteredData,
    setFilterDataType
}) => (
    <div className={styles.wrapper}>
            <TableHeader
                handleTableHide={() => handleTableHide(true)}
                tableActive={tableActive.matureTable}>
                    Mature applications
            </TableHeader>
            {tableActive.matureTable ?
                <TableContent
                    filteredData={filteredData.matureApplications}
                    isTableLoaded={filteredData.dataLoaded}
                    setFilterDataType={setFilterDataType("IT").matureApplications}
                /> : null
            }
            <TableHeader
                handleTableHide={() => handleTableHide(false)}
                tableActive={tableActive.betaTable}>
                    Beta applications
            </TableHeader>
            {tableActive.betaTable ?
                <TableContent
                    filteredData={filteredData.betaApplications}
                    isTableLoaded={filteredData.dataLoaded}
                    setFilterDataType={setFilterDataType("IT").betaApplications}
                /> : null
            }
    </div>
)

export default Table;

Table.propTypes = {
    handleTableHide: PropTypes.func.isRequired,
    tableActive: PropTypes.object.isRequired,
    filteredData: PropTypes.object.isRequired,
    activeButtons: PropTypes.object
}