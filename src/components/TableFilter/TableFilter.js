import styles from '../TableFilter/TableFilter.module.scss';
import PropTypes from 'prop-types';
import Button from "../Button/Button";
import { typesFilter } from '../../helpers/Helpers';

const TableFilter = ({
    handleChangeType,
    activeButtons
}) => (
    <div className={styles.wrapper}>
        {typesFilter.map((type, i) =>
            <Button
                activeButtons={activeButtons}
                indexButton={i}
                handleChangeType={handleChangeType}
                key={type}
                type={type}>{type}
            </Button>
        )}
    </div>
)

export default TableFilter;

TableFilter.propTypes = {
    handleChangeType: PropTypes.func.isRequired,
    activeButtons: PropTypes.object.isRequired
}