import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
//ELEMENTOS DE COMPONENTE
import { IClient } from "../../../../../types/client.types";
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import styles from './styles.module.css';

interface InfoCredentialsSectionProps {
    register: UseFormRegister<IClient>;
    errors: FieldErrors<IClient>;
}

function UserCredentials({ register, errors }: InfoCredentialsSectionProps) {
    const { t } = useTranslation('register');
    const [acceptedPolicy, setAcceptedPolicy] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h4 className={`${styles.tertiary__Title } m-0 text-center`}>{t('register.access__Credentials')}</h4>

            <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                <h6 className={styles.label}><span className={`${styles.required}`}>*</span> Email</h6>
                <input
                    type="email"
                    {...register('email', {
                        required: `${t('register.access__Credentials_Alert')}`,
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: `${t('register.access__Credentials_Pattern_Message')}`
                        }
                    })}
                    className={`${styles.input} p-2 mb-4 border rounded`}
                    placeholder={`${t('register.access__Credentials_Placeholder')}`}
                />
                {errors.email && (
                    <p className={`${styles.text__Danger} text-danger position-absolute`}>
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                <h6 className={styles.label}><span className={`${styles.required} `}>*</span> {t('register.password')}</h6>
                <input
                    type={showPassword ? "text" : "password"}
                    {...register('password', { required: true })}
                    className={`${styles.input} p-2 mb-4 border rounded`}
                    placeholder={`${t('register.password__Placeholder')}`}
                />
                {showPassword ? (
                    <RiEyeOffFill className={`${styles.icon} position-absolute`} onClick={toggleShowPassword} />
                ) : (
                    <RiEyeFill className={`${styles.icon} position-absolute`} onClick={toggleShowPassword} />
                )}
                {errors.password && (
                    <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('register.password__Error')}</p>
                )}
            </div>

            <div className={`${styles.container__Accepted_Policy} d-flex align-items-center justify-content-center position-relative`}>
                <p className={`${styles.text__Accepted_Policy} text-center m-0`}>{t('register.text__Acepted_Contitions')} <Link to="https://drive.google.com/file/d/1XufHAZKxBe_8KuNUO_M2OT0rK1_osD3Y/view" target="blank" rel="noopener noreferrer" className={`${styles.link} text-decoration-none text-sky-500`}>{t('register.text__Terms_Conditions')}</Link> y junto con la <Link to="https://drive.google.com/file/d/1WeMBgLj1SIb21gcVqOT2Ft3gOKLCK_R3/view" target="blank" rel="noopener noreferrer" className={`${styles.link} text-decoration-none text-sky-500`}>{t('register.text__Privacy_Policy')}</Link></p>
                <input
                    type="checkbox"
                    {...register('isAcceptedConditions', { required: true })}
                    checked={acceptedPolicy}
                    onChange={() => setAcceptedPolicy(!acceptedPolicy)}
                    className={`${styles.checkbox} `}
                />
                {errors.isAcceptedConditions && (
                    <p className={`${styles.text__Danger_AcceptedPolicy} text-danger position-absolute`}>{t('register.text__Acepted_Contitions_Alert')}</p>
                )}
            </div>
        </div>
    );
}

export default UserCredentials;