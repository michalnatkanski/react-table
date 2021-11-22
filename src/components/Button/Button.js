import styles from '../Button/Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ 
    handleTableHide, 
    children, 
    type, 
    handleChangeType, 
    activeButtons, 
    indexButton 
    }) => (<button 
            type="button"
            className={type ? (activeButtons.activeButton === type ? 
            styles.filterBtnActive : styles.filterBtn) : (styles.tableBtn)}  
            onClick={type ? () => handleChangeType(indexButton, type) :  handleTableHide}>
            {children}
        </button>  
    )

export default Button;

Button.propTypes = {
    handleTableHide: PropTypes.func,
    activeButtons: PropTypes.object,
    children: PropTypes.string,
    type: PropTypes.string,

}

Button.defaultProps = {
    children: 'apps'
}