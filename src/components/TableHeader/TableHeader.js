
import styles from '../TableHeader/TableHeader.module.scss';
import PropTypes from 'prop-types';
import Button from "../Button/Button";

const TableHeader = ({ handleTableHide, tableActive, children }) => (
    <div className={styles.wrapper}>
        <h2 className={styles.wrapper__title}>{children}</h2>
        <Button handleTableHide={handleTableHide}>{tableActive ? '+' : '-'}</Button>
    </div>
)

export default TableHeader;

TableHeader.propTypes = {
    handleTableHide: PropTypes.func.isRequired,
    tableActive: PropTypes.bool.isRequired,
    children: PropTypes.string,
}