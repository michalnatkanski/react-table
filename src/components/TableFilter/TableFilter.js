import styles from '../TableFilter/TableFilter.module.scss';
import Button from "../Button/Button";
import { typesFilter } from '../../utils/Helpers';

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