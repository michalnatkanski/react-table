import React from "react";
import styles from '../TableContent/TableContent.module.scss';

const TableContent = ({data, betaVersion}) => (
        <table className={styles.wrapper}>
            <thead className={styles.wrapper__column}>
                    <tr>
                        <th>applications name</th>
                        <th>author</th>
                        <th>version</th>
                    </tr>
            </thead>
                {betaVersion ? (
                <tbody  className={styles.wrapper__column}>
                    {data.filter(row => parseInt(row.version) > 1).map((row,i) => (  
                        <tr key={i}>
                            <td>{row.app}</td>
                            <td>{row.author !== null ? (row.author.name !== null ? row.author.name : 'no data') : 'no data'}</td>
                            <td>{row.version}</td>
                        </tr>
                    ))}
                </tbody>
                ) : (
                <tbody>
                    {data.filter(row => parseInt(row.version) < 1).map((row,i) => (
                        <tr key={i}>
                            <td>{row.app}</td>
                            <td>{row.author !== null ? (row.author.name !== null ? row.author.name : 'no data') : 'no data'}</td>
                            <td>{row.version}</td>
                        </tr>
                ))}
                </tbody>
                )}  
            </table>
    )

export default TableContent;