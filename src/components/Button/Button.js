import styles from '../Button/Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({
    activeButton,
    handleChangeDataType,
    handleTableHide,
    type,
    children
}) => (
        <button 
            type="button" 
            className={type ? (activeButton.activeButton === type ? 
                styles.activeBtn : styles.btn) : (styles.tableBtn)}  
            key={type} 
            onClick={type ? () => handleChangeDataType(type) :  handleTableHide}>
            {children}
        </button>
)

export default Button;

Button.propTypes = {
    activeButton: PropTypes.object,
    children: PropTypes.string,
    type: PropTypes.string,
}

Button.defaultProps = {
    children: 'apps'
}