import React from 'react'
import styles from './modal-input.module.scss'

interface IModalInputProps {
    label: string;
    placeholder?: string;
}

const ModalInput: React.FC<IModalInputProps> = ({ label, placeholder }) => {


    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <input
                className={styles.input}
                placeholder={placeholder}
            />
        </div>
    )
}

export default ModalInput
