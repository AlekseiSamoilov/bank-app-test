import React from 'react'
import styles from './modal.module.scss'
import ModalInput from '../modal-input/ModalInput';

interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<IModalProps> = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.target === e.currentTarget) {
            onClose();
        };
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    const handleCancel = (e: React.MouseEvent) => {
        e.preventDefault();
        onClose();
    }

    return (
        <div className={styles.overlay} onClick={handleCloseClick}>
            <form className={styles.modal}
                onSubmit={handleSubmit}
            >
                <button className={styles.close_btn}
                    type="button"
                    onClick={handleCancel}
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.28261 7.0001L13.7339 1.54851C14.0887 1.1939 14.0887 0.620557 13.7339 0.265953C13.3793 -0.088651 12.806 -0.088651 12.4514 0.265953L6.99992 5.71755L1.5486 0.265953C1.19384 -0.088651 0.620668 -0.088651 0.266072 0.265953C-0.0886906 0.620557 -0.0886906 1.1939 0.266072 1.54851L5.71739 7.0001L0.266072 12.4517C-0.0886906 12.8063 -0.0886906 13.3797 0.266072 13.7343C0.442789 13.9111 0.675145 14 0.907335 14C1.13953 14 1.37172 13.9111 1.5486 13.7343L6.99992 8.28266L12.4514 13.7343C12.6283 13.9111 12.8605 14 13.0927 14C13.3249 14 13.557 13.9111 13.7339 13.7343C14.0887 13.3797 14.0887 12.8063 13.7339 12.4517L8.28261 7.0001Z" fill="#35373A" />
                    </svg>
                </button>
                <h2 className={styles.title}>Детализация платежа</h2>
                <div className={styles.sum_container}>
                    <div className={styles.input_container}>
                        <label className={styles.label_text}>
                            Общая сумма платежа
                        </label>
                        <input
                            className={styles.input}
                            value={'1 999 999,00'}
                            disabled={true}
                        />
                    </div>
                    <div className={styles.input_container}>
                        <label className={styles.label_text_s}>
                            Осталось разнести
                        </label>
                        <input className={styles.input_red} />
                    </div>
                </div>
                <div className={styles.sum_container}>
                    <ModalInput
                        label='Сумма'
                        placeholder='Введите сумму оплаты'
                    />
                    <ModalInput
                        label='Тип операции'
                        placeholder='Вывод чистой прибыли'
                    />
                </div>
                <div className={styles.sum_container}>
                    <ModalInput
                        label='Тип операции'
                        placeholder='Вывод чистой прибыли'
                    />
                    <ModalInput
                        label='Тип операции'
                        placeholder='Вывод чистой прибыли'
                    />
                    <ModalInput
                        label='Тип операции'
                        placeholder='Вывод чистой прибыли'
                    />

                </div>
                <div className={styles.buttons}>
                    <button
                        className={styles.save_btn}
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Сохранить
                    </button>
                    <button
                        className={styles.cancel_btn}
                        type="button"
                        onClick={handleCancel}
                    >
                        Отменить
                    </button>
                </div>
            </form >
        </div >
    )
}

export default Modal
