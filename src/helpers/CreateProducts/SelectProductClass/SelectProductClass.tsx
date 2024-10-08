/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import Select from 'react-select';
import productClass from './ProductClass';
import styles from './styles.module.css';

interface SelectProductClassProps {
    onSelect: (classProps: string) => void;
    reset: boolean;
    initialClass?: string;
}

const customStyles = {
    control: (provided: any, state: any) => ({
        ...provided,
        margin: '0 0 30px 0',
        borderRadius: '3px',
        width: '100%',
        outline: state.isFocused ? '1px solid #e4002b' : 'none',
        boxShadow: state.isFocused ? '0 0 0 1px #e4002b' : 'none',
        borderColor: state.isFocused ? '#e4002b' : provided.borderColor,
        '&:hover': {
            borderColor: state.isFocused ? '#e4002b' : provided.borderColor,
        },
    }),
};

function SelectProductClass({ onSelect, reset, initialClass }: SelectProductClassProps) {
    const [classT, setClassT] = useState<{ value: string; label: string } | null>(null);
    const [selectedClass, setSelectedClass] = useState<{ value: string; label: string } | null>(initialClass ? { value: initialClass, label: initialClass } : null);

    const handlePropChange = (selectedOption: any) => {
        setClassT(selectedOption);
        setSelectedClass(selectedOption);
        const selectedValue = selectedOption.value;
        onSelect(selectedValue);
    };

    useEffect(() => {
        if (reset) {
            setSelectedClass(null);
        }
    }, [reset]);

    return (
        <div className={`${styles.container__Info} d-flex flex-column align-items-start justify-content-start position-relative`}>
            <h6 className={styles.label}>Clase</h6>
            <div className={styles.container__Input}>
                <Select
                    styles={customStyles}
                    className={`${styles.input} border-0`}
                    options={productClass}
                    value={selectedClass || classT}
                    onChange={handlePropChange}
                    isSearchable={true}
                    placeholder='Clase del producto'
                />
            </div>
        </div>
    );
}

export default SelectProductClass;