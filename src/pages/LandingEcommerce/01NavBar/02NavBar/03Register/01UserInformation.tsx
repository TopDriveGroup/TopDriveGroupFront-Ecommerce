import { useState, useEffect } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
//ELEMENTOS DE COMPONENTE
import { IClient } from "../../../../../types/client.types";
import styles from './styles.module.css';

interface UserInfoSectionProps {
    register: UseFormRegister<IClient>;
    errors: FieldErrors<IClient>;
}

function UserInformation({ register, errors }: UserInfoSectionProps) {
    const { t } = useTranslation('register');

    // Verifica si hay un valor en localStorage y úsalo, o predetermina a 'NIT'
    const [typeDocument, setTypeDocument] = useState(() => {
        return localStorage.getItem('typeDocument') || 'NIT';
    });

    // Actualiza el localStorage cada vez que el usuario cambie el tipo de documento
    const handleTypeDocument = (event: { target: { value: string }}) => {
        const selectedType = event.target.value;
        setTypeDocument(selectedType);
        localStorage.setItem('typeDocument', selectedType); // Guardar en localStorage
    };

    const handleKeyDownCorporateName = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.key;
        if (!/[a-zA-Z0-9\s]/.test(key) && key !== 'Backspace' && key !== 'Tab' && key !== 'Enter') {
            event.preventDefault();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.key;
        if (!/[a-zA-Z\s]/.test(key) && key !== 'Backspace' && key !== 'Tab' && key !== 'Enter') {
            event.preventDefault();
        }
    };

    useEffect(() => {
        const savedType = localStorage.getItem('typeDocument');
        if (savedType) {
            setTypeDocument(savedType);
        }
    }, []);

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h4 className={`${styles.tertiary__Title} m-0 text-center`}>{t('register.title__Personal_Information')}</h4>

            <div className={`${styles.container__Inputs} mb-4 d-flex flex-column align-items-start justify-content-start position-relative`}>
                <h6 className={styles.label}><span className={`${styles.required}`}>*</span> {t('register.identification__Type')}</h6>
                <select
                    {...register('typeDocumentId', { required: true })}
                    className={`${styles.input} p-2 border`}
                    onChange={handleTypeDocument}
                    value={typeDocument}
                >
                    <option value='NIT' translate='no'>NIT</option>
                    <option value='Cedula de Ciudadania'>{t('register.identification__Type_CC')}</option>
                    <option value='Cedula de Extranjeria'>{t('register.identification__Type_EC')}</option>
                    <option value='Pasaporte'>{t('register.identification__Type_PP')}</option>
                </select>
                {errors.typeDocumentId && (
                    <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('register.identification__Type_Error')}</p>
                )}
            </div>

            <div className={`${styles.container__Inputs} mb-4 d-flex align-items-center justify-content-center gap-3`}>
                <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                    <h6 className={styles.label}><span className={`${styles.required}`}>*</span> {t('register.identification__Number')}</h6>
                    <input
                        type="text" // Cambiar a text para manejar la validación personalizada
                        {...register('documentId', {
                            required: `${t('register.identification__Number')}`,
                            validate: value => {
                                if (!value) return `${t('register.identification__Number')}`;
                                const numValue = value.trim();
                                const pattern = /^\d{1,10}$/;
                                if (!pattern.test(numValue)) return `${t('register.identification__Number_Alert')}`;
                                return true;
                            }
                        })}
                        className={`${styles.input} p-2 border rounded`}
                        placeholder={`${t('register.identification__Number_Placeholder')}`}
                        maxLength={10} // Limitar la longitud del campo
                        onKeyDown={(e) => {
                            if (e.key === '-' || e.key === 'e' || e.key === '+' || e.key === '.') {
                                e.preventDefault();
                            }
                        }}
                    />
                    {errors.documentId && (
                        <p className={`${styles.text__Danger} text-danger position-absolute`}>{errors.documentId.message}</p>
                    )}
                </div>

                <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                    <h6 className={styles.label}>{t('register.digit__Verification')}</h6>
                    <input
                        type="number"
                        {...register('verificationDigit', {
                            pattern: /^\d{1}$/ // Expresión regular para 1 dígito exacto
                        })}
                        className={`${styles.input} p-2 border rounded`}
                        placeholder={`${t('register.digit__Verification_Placeholder')}`}
                        min={0}
                        onKeyDown={(e) => {
                            if (e.key === '-' || e.key === 'e' || e.key === '+' || e.key === '.') {
                                e.preventDefault();
                            }
                        }}
                    />
                </div>
            </div>

            {/* Mostrar campos dependiendo del tipo de documento */}
            {typeDocument === 'NIT' && (
                <div className={`${styles.container__Inputs} mb-4 d-flex align-items-center justify-content-center gap-3`}>
                    <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                        <h6 className={styles.label}><span className={`${styles.required}`}>*</span> {t('register.corporate__Name')}</h6>
                        <input
                            type="text"
                            {...register('corporateName', {
                                required: true,
                                validate: (value: string | undefined) => {
                                    if (!value || value.trim() === "") return `${t('register.corporate__Name_Error')}`;
                                    const hasNumbers = /\d/.test(value);
                                    if (hasNumbers && !/[a-zA-Z]/.test(value)) return "La Razón Social debe contener letras si tiene números";
                                    return true;
                                }
                            })}
                            className={`${styles.input} p-2 border rounded`}
                            placeholder={`${t('register.corporate__Name_Placeholder')}`}
                            onKeyDown={handleKeyDownCorporateName}
                        />
                        {errors.corporateName && (
                            <p className={`${styles.text__Danger} text-danger position-absolute`}>
                                {errors.corporateName.message}
                            </p>
                        )}
                    </div>
                </div>
            )}

            {(typeDocument === 'Cedula de Ciudadania' || typeDocument === 'Cedula de Extranjeria' || typeDocument === 'Pasaporte')  && (
                <div className={`${styles.container__Inputs} mb-4 d-flex align-items-center justify-content-center gap-3`}>
                    <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                        <h6 className={styles.label}><span className={`${styles.required}`}>*</span> {t('register.name')}</h6>
                        <input
                            type="text"
                            {...register('name', { required: true, pattern: /^[a-zA-Z\s]+$/ })}
                            className={`${styles.input} p-2 border rounded`}
                            placeholder={`${t('register.name__Placeholder')}`}
                            onKeyDown={handleKeyDown}
                        />
                        {errors.name && (
                            <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('register.name__Error')}</p>
                        )}
                    </div>
                    <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                        <h6 className={styles.label}><span className={`${styles.required}`}>*</span> {t('register.lastName')}</h6>
                        <input
                            type="text"
                            {...register('lastName', { required: true, pattern: /^[a-zA-Z\s]+$/ })}
                            className={`${styles.input} p-2 border rounded`}
                            placeholder={`${t('register.lastName__Placeholder')}`}
                            onKeyDown={handleKeyDown}
                        />
                        {errors.lastName && (
                            <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('register.lastName__Error')}</p>
                        )}
                    </div>
                </div>
            )}

            <div className={`${styles.container__Inputs} mb-4 d-flex flex-column align-items-start justify-content-start position-relative`}>
                <h6 className={styles.label}><span className={`${styles.required}`}>*</span> {t('register.phone')}</h6>
                <input
                    type="tel"
                    {...register('phone', { required: true })}
                    className={`${styles.input} p-2 border rounded`}
                    placeholder={`${t('register.phone__Placeholder')}`}
                    min={0}
                />
                {errors.phone && (
                    <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('register.phone__Error')}</p>
                )}
            </div>
        </div>
    );
}

export default UserInformation;