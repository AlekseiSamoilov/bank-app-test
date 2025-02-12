import React, { useState } from 'react'
import styles from './article-select.module.scss'
import Modal from '../modal/Modal';



interface IArticleSelectProps {
    value: string;
    onChange: (value: string) => void;
}

const ArticleSelect: React.FC<IArticleSelectProps> = ({ value, onChange }) => {
    const options = ['Закупочная стоимость', 'Вывод ЧП'];

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    return (
        <div className={value === 'Выберете статью!' ? `${styles.container}` : `${styles.blue}`}>
            <div className={styles.selected}>{value}</div>
            {value === 'Вывод ЧП' && (
                <button
                    className={styles.additional__btn_green}
                    onClick={() => setIsModalOpen(true)}
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 7.75H7M14 4H7M5.5 4H4M5.5 7.75H4M5.5 11.5H4M14 11.5H7M9 17L13 14.5H16C16.5523 14.5 17 14.0523 17 13.5V2C17 1.44772 16.5523 1 16 1H2C1.44772 1 1 1.44772 1 2V13.5C1 14.0523 1.44772 14.5 2 14.5H5.125L9 17Z" stroke="white" stroke-linejoin="round" />
                    </svg>
                </button>
            )}
            {isOpen && (
                <ul className={styles.options}>
                    {options.map((options, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                onChange(options)
                                setIsOpen(false);
                            }}
                        >
                            <span>{options}</span></li>
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

            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={handleModalClose} />
            )
            }
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

