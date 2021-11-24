import styles from '../TableFilter/TableFilter.module.scss';
import PropTypes from 'prop-types';
import Button from "../Button/Button";

const TableFilter = ({
    types,
    activeButton,
    handleChangeDataType,
}) => (
    <div className={styles.wrapper}>
        {types.map((type) =>
            <Button
                key={type}
                type={type}
                activeButton={activeButton}
                handleChangeDataType={() => handleChangeDataType(type)}>
                {type}
            </Button>
        )}
    </div>
)

export default TableFilter;

TableFilter.propTypes = {
    handleChangeDataType: PropTypes.func.isRequired,
    activeButtons: PropTypes.object
}