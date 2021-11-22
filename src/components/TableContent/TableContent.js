import React from 'react';
import styles from '../TableContent/TableContent.module.scss';
import propTypes from 'prop-types';
import { genericData } from '../../helpers/Helpers';

const TableContent = React.memo(({ data }) => (
    <table className={styles.wrapper}>
        <thead className={styles.wrapper__column}>
            <tr>
                <th>applications name</th>
                <th>author</th>
                <th>version</th>
            </tr>
        </thead>
        <tbody className={styles.wrapper__column}>
            {data.map(row => (
                <tr onClick={() => genericData.setUrlSlug(row.app)} key={row.id}>
                    <td>{row.app}</td>
                    <td>{row.author.name}</td>
                    <td>{row.version}</td>
                </tr>
            ))}
        </tbody>
    </table>
))

export default TableContent;

TableContent.propTypes = {
    data: propTypes.array.isRequired
}