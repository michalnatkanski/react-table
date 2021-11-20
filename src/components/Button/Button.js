import styles from '../Button/Button.module.scss';

const Button = ({ 
    hideContent, 
    children, 
    type, 
    handleChangeType, 
    activeButtons, 
    indexButton 
    }) => (<button 
            type="button"
            className={type ? (activeButtons.activeBtn === type ? 
            styles.filterBtnActive : styles.filterBtn) : (styles.tableBtn)}  
            onClick={type ? () => handleChangeType(indexButton, type) :  hideContent}>
            {children}
        </button>  
    )

export default Button;