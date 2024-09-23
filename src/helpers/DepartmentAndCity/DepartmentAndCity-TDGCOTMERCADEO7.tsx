/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/exhaustive-deps, @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
//ELEMENTOS DEL COMPONENTE
import departments from './Departments';
import citiesByDepartment from './Cities';
import { StylesReactSelect } from '../StylesComponents/StylesReactSelect';
import styles from './styles.module.css';

interface DepartmentAndCityProps {
    onSelect: (department: string, city: string, codeDane: string, subregionCodeDane: string) => void;
    reset: boolean;
    initialDepartment?: string;
    initialCity?: string;
}

function DepartmentAndCity({ onSelect, reset, initialDepartment, initialCity }: DepartmentAndCityProps) {
    const { t } = useTranslation('departmentAndCity');
    const [department, setDepartment] = useState<{ value: string; label: string } | null>(null);
    const [selectedDepartment, setSelectedDepartment] = useState<{ value: string; label: string } | null>(initialDepartment ? { value: initialDepartment, label: initialDepartment } : null);

    const handleDepartmentChange = (selectedOption: any) => {
        setDepartment(selectedOption);
        setSelectedDepartment(selectedOption);
        setCity(null);
        setSelectedCity(null);
        const selectedDepartmentValue = selectedOption.value;
        const selectedCityValue = '';
        const selectedCityCodeDane = '';
        const selectedCitySubregionCodeDane = '';
        onSelect(selectedDepartmentValue, selectedCityValue, selectedCityCodeDane, selectedCitySubregionCodeDane);
    };

    const [city, setCity] = useState<{ value: string; label: string } | null>(null);
    const [selectedCity, setSelectedCity] = useState<{ value: string; label: string, codeDane:string } | null>(initialCity ? { value: initialCity, label: initialCity, codeDane: '' } : null);

    const handleCityChange = (selectedOption: any) => {
        setCity(selectedOption);
        setSelectedCity(selectedOption);
        const selectedDepartmentValue = department!.value;
        const selectedCityValue = selectedOption.value;
        const selectedCityCodeDane = selectedOption.codeDane;
        const selectedCitySubregionCodeDane = selectedOption.subregionCodeDane;
        onSelect(selectedDepartmentValue, selectedCityValue, selectedCityCodeDane, selectedCitySubregionCodeDane);
    };

    const cityOptions: { value: string; label: string }[] = department ? citiesByDepartment[department.value as keyof typeof citiesByDepartment] || [] : [];

    useEffect(() => {
        if (reset) {
            setSelectedDepartment(null);
            setSelectedCity(null);
        }
    }, [reset]);

    return (
        <div className="d-flex align-items-center justify-content-center gap-3">
            <div className={`${styles.container__Info} d-flex flex-column align-items-start justify-content-start position-relative`}>
                <h6 className={styles.label}>{t('departmentAndCity.department')}</h6>
                <div className={styles.container__Input}>
                    <Select
                        className={`${styles.input} border-0`}
                        options={departments}
                        value={selectedDepartment || department}
                        onChange={handleDepartmentChange}
                        isSearchable={true}
                        styles={StylesReactSelect}
                        placeholder={`${t('departmentAndCity.placeholder_Department')}`}
                    />
                </div>
            </div>

            <div className={`${styles.container__Info} d-flex flex-column align-items-start justify-content-start position-relative`}>
                <h6 className={styles.label}>{t('departmentAndCity.city')}</h6>
                <div className={styles.container__Input}>
                    <Select
                        className={`${styles.input} border-0`}
                        options={cityOptions}
                        value={selectedCity || city}
                        onChange={handleCityChange}
                        isSearchable={true}
                        styles={StylesReactSelect}
                        placeholder={`${t('departmentAndCity.placeholder_City')}`}
                    />
                </div>
            </div>
        </div>
    );
}

export default DepartmentAndCity;