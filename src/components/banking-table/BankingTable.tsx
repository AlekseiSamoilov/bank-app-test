import React, { useState } from 'react'
import ArticleSelect from '../article-select/ArticleSelect';
import styles from './banking-table.module.scss'
import CustomSelect from '../custon-select/CustomSelect';
import Status from '../status/Status';

const generateMockData = (count: number = 10) => {
    return Array.from({ length: count }, () => ({
        date: '10.02.2025',
        income: '999 999 000,00',
        expense: '999 999 000,00',
        bank: 'Точка',
        contractor: 'Общество с ограниченно ответственностью "Интернет Решения"',
        article: null,
        description: 'Отчет за период',
        id: crypto.randomUUID(),
    }));
};

const BankingTable = () => {
    const [tableData, setTableData] = useState(() => generateMockData(15));

    const handleArticleChange = (rowId: any, articleId: any): any => {
        setTableData(prev => prev.map(row =>
            row.id === rowId ? { ...row, article: articleId } : row
        ));
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Банки</h1>
            <div className={styles.main_content}>
                <div className={styles.header}>
                    <CustomSelect />
                    <Status />
                </div>
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr className={styles.table_row}>
                            <th className={styles.table_head}>Дата</th>
                            <th className={styles.table_head}>Приход</th>
                            <th className={styles.table_head}>Расход</th>
                            <th className={styles.table_head}>Банк</th>
                            <th className={styles.table_head}>Контрагент</th>
                            <th className={styles.table_head}>Статья</th>
                            <th className={styles.table_head}>Описание</th>
                        </tr>
                    </thead>
                    <tbody className={styles.table_body}>
                        {tableData.map(row => (
                            <tr key={row.id}>
                                <td className={styles.table_data}>{row.date}</td>
                                <td className={styles.table_data}>{row.income}</td>
                                <td className={styles.table_data}>{row.expense}</td>
                                <td className={styles.table_data}>{row.bank}</td>
                                <td className={styles.table_data}>{row.contractor}</td>
                                <td className={styles.table_data}>
                                    <ArticleSelect />
                                </td>
                                <td>{row.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.sheets}>
                <div className={styles.arrow}>&lt;</div>
                <div className={styles.arrow}>&gt;</div>
            </div>
        </div>
    )
}

export default BankingTable
