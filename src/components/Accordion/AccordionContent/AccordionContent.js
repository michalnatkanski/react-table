import React from 'react';
import styles from '../AccordionContent/AccordionContent.module.scss';
import PropTypes from 'prop-types';
import { setUrlSlug } from '../../../helpers/Helpers';

const AccordionContent = React.memo(({
    apps
}) => (
        <table className={styles.wrapper}>
            <thead>
                <tr>
                    <th>applications name</th>
                    <th>author</th>
                    <th>version</th>
                </tr>
            </thead>
            <tbody >
                {apps.map(row => (
                    <tr onClick={() => setUrlSlug(row.app)} key={row.id}>
                        <td>{row.app}</td>
                        <td>{row.author.name}</td>
                        <td>{row.version}</td>
                    </tr>
                ))}
            </tbody>
        </table>
))

export default AccordionContent;

AccordionContent.propTypes = {
    apps: PropTypes.array.isRequired
}