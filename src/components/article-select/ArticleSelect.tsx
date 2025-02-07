import React, { useState } from 'react'
import styles from './article-select.module.scss'

const options = ['Выберете статью!', 'Закупочная стоимость', 'Вывод ЧП'];

const ArticleSelect: React.FC = () => {

    const [selected, setIsSelected] = useState(options[0]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={selected === 'Выберете статью!' ? `${styles.container}` : `${styles.blue}`}>
            <div className={styles.selected}>{selected}</div>
            {isOpen && (
                <ul className={styles.options}>
                    {options.map((options, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setIsSelected(options);
                                setIsOpen(false);
                            }}
                        >{options}</li>
                    ))}
                </ul>
            )}
            <button
                className={isOpen ? `${styles.open}` : `${styles.select_btn}`}
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                    transform: isOpen ? "rotate(180deg) translateY(1px)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                }}>
                    <path d="M6 9L12 15L18 9" stroke="#429EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    )
}

export default ArticleSelect




// const ArticleSelect: React.FC<IArticleSelectProps> = ({ value, onChange, rowId }) => {
//     return (
//         <select
//             value={value || ''}
//             onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(rowId, e.target.value)}
//             className={styles.container}
//         >
//             <option value=''>Выбирите статью!</option>
//             {AVAILABLE_ARTICLES.map((article) => (
//                 <option key={article.id} value={article.id}>
//                     {article.name}
//                 </option>
//             ))}
//         </select>
//     )
// }

