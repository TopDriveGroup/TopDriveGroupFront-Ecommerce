import { useState, SetStateAction } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IClient } from "../../../../../types/client.types";
import styles from './styles.module.css';

interface UserInfoSectionProps {
    register: UseFormRegister<IClient>;
    errors: FieldErrors<IClient>;
}

function UserInformation({ register, errors }: UserInfoSectionProps) {
    const [typeDocument, setTypeDocument] = useState('NIT');
    const handleTypeDocument = (event: { target: { value: SetStateAction<string> }}) => {
        setTypeDocument(event.target.value);
    };

    const handleKeyDownCorporateName = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.key;
        // Permitir teclas de control, letras, números y espacio
        if (!/[a-zA-Z0-9\s]/.test(key) && key !== 'Backspace' && key !== 'Tab' && key !== 'Enter') {
            event.preventDefault();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.key;
        // Permitir teclas de control, letras y espacio
        if (!/[a-zA-Z\s]/.test(key) && key !== 'Backspace' && key !== 'Tab' && key !== 'Enter') {
            event.preventDefault();
        }
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h4 className={`${styles.tertiary__Title} m-0 text-center`}>Información personal</h4>

            <div className={`${styles.container__Inputs} mb-4 d-flex flex-column align-items-start justify-content-start position-relative`}>
                <h6 className={styles.label}><span className={`${styles.required}`}>*</span> Tipo de identificación</h6>
                <select
                    {...register('typeDocumentId', { required: true })}
                    className={`${styles.input} p-2 border`}
                    onChange={handleTypeDocument}
                >
                    <option value='NIT'>NIT</option>
                    <option value='Cedula de Ciudadania'>Cédula de Ciudadanía</option>
                    <option value='Cedula de Extranjeria'>Cédula de Extranjería</option>
                    <option value='Pasaporte'>Pasaporte</option>
                </select>
                {errors.typeDocumentId && (
                    <p className={`${styles.text__Danger} text-danger position-absolute`}>El tipo de documento del usuario es requerido</p>
                )}
            </div>

            <div className={`${styles.container__Inputs} mb-4 d-flex align-items-center justify-content-center gap-3`}>
                <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                    <h6 className={styles.label}><span className={`${styles.required}`}>*</span> Número de identificación</h6>
                    <input
                        type="text" // Cambiar a text para manejar la validación personalizada
                        {...register('documentId', {
                            required: "El número de identidad es requerido",
                            validate: value => {
                                if (!value) return "El número de identidad es requerido";
                                const numValue = value.trim();
                                const pattern = /^\d{1,9}$/;
                                if (!pattern.test(numValue)) return "El número de identidad debe contener entre 1 y 10 dígitos";
                                return true;
                            }
                        })}
                        className={`${styles.input} p-2 border rounded`}
                        placeholder='¿Cuál es tu número de identificación?'
                        maxLength={9} // Limitar la longitud del campo
                        onKeyDown={(e) => {
                            if (e.key === '-' || e.key === 'e' || e.key === '+' || e.key === '.') {
                                e.preventDefault();
                            }
                        }}
                    />
                    {errors.documentId && (
                        <p className={`${styles.text__Danger} text-danger position-absolute`}>
                            {errors.documentId.message}
                        </p>
                    )}
                </div>

                <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                    <h6 className={styles.label}>Dígito de verificación</h6>
                    <input
                        type="number"
                        {...register('verificationDigit', {
                            pattern: /^\d{1}$/ // Expresión regular para 1 dígito exacto
                        })}
                        className={`${styles.input} p-2 border rounded`}
                        placeholder='Dígito de verificación si lo tiene'
                        min={0}
                        onKeyDown={(e) => {
                            if (e.key === '-' || e.key === 'e' || e.key === '+' || e.key === '.') {
                                e.preventDefault();
                            }
                        }}
                    />
                </div>
            </div>

            {typeDocument === 'NIT' && (
                <div className={`${styles.container__Inputs} mb-4 d-flex align-items-center justify-content-center gap-3`}>
                    <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                        <h6 className={styles.label}><span className={`${styles.required}`}>*</span> Razón Social</h6>
                        <input
                            type="text"
                            {...register('corporateName', {
                                required: true,
                                validate: (value: string | undefined) => {
                                    if (!value || value.trim() === "") return "La Razón Social es requerida";
                                    const hasNumbers = /\d/.test(value);
                                    if (hasNumbers && !/[a-zA-Z]/.test(value)) return "La Razón Social debe contener letras si tiene números";
                                    return true;
                                }
                            })}
                            className={`${styles.input} p-2 border rounded`}
                            placeholder='Razón Social de tu empresa'
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
                        <h6 className={styles.label}><span className={`${styles.required}`}>*</span> Nombres</h6>
                        <input
                            type="text"
                            {...register('name', { required: true, pattern: /^[a-zA-Z\s]+$/ })}
                            className={`${styles.input} p-2 border rounded`}
                            placeholder='¿Cuáles son tus nombres?'
                            onKeyDown={handleKeyDown}
                        />
                        {errors.name && (
                            <p className={`${styles.text__Danger} text-danger position-absolute`}>Tus nombres son requeridos</p>
                        )}
                    </div>
                    <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                        <h6 className={styles.label}><span className={`${styles.required}`}>*</span> Apellidos</h6>
                        <input
                            type="text"
                            {...register('lastName', { required: true, pattern: /^[a-zA-Z\s]+$/ })}
                            className={`${styles.input} p-2 border rounded`}
                            placeholder='¿Cuáles son tu apellidos?'
                            onKeyDown={handleKeyDown}
                        />
                        {errors.lastName && (
                            <p className={`${styles.text__Danger} text-danger position-absolute`}>Tus apellidos son requeridos</p>
                        )}
                    </div>
                </div>
            )}

            <div className={`${styles.container__Inputs} mb-4 d-flex flex-column align-items-start justify-content-start position-relative`}>
                <h6 className={styles.label}><span className={`${styles.required}`}>*</span> Celular o teléfono fijo</h6>
                <input
                    type="tel"
                    {...register('phone', { required: true })}
                    className={`${styles.input} p-2 border rounded`}
                    placeholder='¿Cuál es el celular o teléfono fijo de tu oficina principal?'
                    min={0}
                />
                {errors.phone && (
                    <p className={`${styles.text__Danger} text-danger position-absolute`}>El celular del usuario es requerido</p>
                )}
            </div>
        </div>
    );
}

export default UserInformation;
