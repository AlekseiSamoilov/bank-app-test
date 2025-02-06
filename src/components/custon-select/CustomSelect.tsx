import { useEffect, useReducer, useRef, useState } from 'react'
import styles from './custom-select.module.scss'

const options = [2025, 2024, 2023]

const CustomSelect = () => {
    const [selected, setSelected] = useState(options[0]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const selectRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isOpen) selectRef.current?.focus();
    }, [isOpen]);

    return (
        <div className={styles.container}
            role='combobox'
            aria-haspopup='listbox'
            aria-expanded={isOpen}
            tabIndex={0}
            ref={selectRef}
        >
            <div className={styles.selected}>{selected}</div>
            {isOpen && (
                <ul className={styles.options} role='listbox'>
                    {options.map((options, index) => (
                        <li
                            key={index}
                            role='option'
                            tabIndex={0}
                            onClick={() => {
                                setSelected(options);
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
                    <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div >
    );
};

export default CustomSelect;
