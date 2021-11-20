import React from 'react';
import styles from '../TableContent/TableContent.module.scss';

const TableContent = React.memo(({data, setUrlSlug}) => {
    console.log('content')
    return(
        <table className={styles.wrapper}>
            <thead className={styles.wrapper__column}>
                    <tr>
                        <th>applications name</th>
                        <th>author</th>
                        <th>version</th>
                    </tr>
            </thead>
            <tbody  className={styles.wrapper__column}>
                {data.map(row => (  
                    <tr onClick={() => setUrlSlug(row.app)} key={row.id}>
                        <td>{row.app}</td>
                        <td>{row.author.name}</td>
                        <td>{row.version}</td>
                    </tr>
                ))}
            </tbody>
            </table>
    )})

export default TableContent;