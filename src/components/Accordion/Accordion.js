import styles from '../Accordion/Accordion.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import AccordionContent from './AccordionContent/AccordionContent';
import AccordionHeader from './AccordionHeader/AccordionHeader';

const Accordion = ({ apps, children }) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <section className={styles.wrapper}>
            <AccordionHeader isOpen={isOpen} setOpen={setOpen}>
                {children}
            </AccordionHeader>
            {
                !isOpen
                    ? <AccordionContent apps={apps} />
                    : null
            }
        </section>
    )
}
export default Accordion;

Accordion.propTypes = {
    apps: PropTypes.array.isRequired,
    children: PropTypes.string,
}

Accordion.defaultProps = {
    children: 'Applications',
}