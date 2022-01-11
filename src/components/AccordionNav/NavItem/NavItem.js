import styles from '../NavItem/NavItem.module.scss';
import { useAppContext } from '../../../AppContext';
import PropTypes from 'prop-types';

const NavItem = ({ type }) => {

    const { appState, setActiveType } = useAppContext();
    
    return (
        <li
            className={
                appState.activeType === type 
                ? styles.item 
                : styles.item__active
            }
            onClick={() => setActiveType(type)}>
            {type}
        </li>
    )
}

export default NavItem;

NavItem.propTypes = {
    type: PropTypes.string,
}

NavItem.defaultProps = {
    type: ''
}