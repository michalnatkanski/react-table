import React from 'react';
import styles from '../TableContent/TableContent.module.scss';
import propTypes from 'prop-types';
import { setUrlSlug } from '../../helpers/Helpers';

const TableContent = React.memo(({
    filteredData,
    setFilterDataType,
    isTableLoaded
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
                {(isTableLoaded ? filteredData : setFilterDataType).map(row => (
                    <tr onClick={() => setUrlSlug(row.app)} key={row.id}>
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
    filteredData: propTypes.array.isRequired,
    setFilterDataType: propTypes.array.isRequired
}