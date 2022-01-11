
import styles from '../AccordionHeader/AccordionHeader.module.scss';
import PropTypes from 'prop-types';


const AccordionHeader = ({
    children,
    isOpen,
    setOpen,
}) => (
    <div className={styles.wrapper}>
        <h2 className={styles.warapper__title}>
            {children}
        </h2>
        <button
            onClick={(e) => setOpen(!isOpen)}
            className={styles.wrapper__btn}
            type='button'>
            {isOpen ? '+' : '-'}
        </button>
    </div>
)

export default AccordionHeader;

AccordionHeader.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.string,
    setOpen: PropTypes.func
}

AccordionHeader.defaultProps = {
    isOpen: true,
    children: 'Applications',
}