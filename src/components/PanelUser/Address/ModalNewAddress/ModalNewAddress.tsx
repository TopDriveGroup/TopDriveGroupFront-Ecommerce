import { useState } from 'react';
import { useForm } from 'react-hook-form';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { postAddressClient, getAddressClient } from '../../../../redux/Landing/addressSlice/actions';
import type { RootState, AppDispatch } from '../../../../redux/store';
//ELEMENTOS DEL COMPONENTE
import { IAddress } from '../../../../types/address.types';
import Countries from '../../../../helpers/Countries/Countries';
import DepartmentAndCity from '../../../../helpers/DepartmentAndCity/DepartmentAndCity';
import styles from './styles.module.css';

interface ModalNewAddressProps {
    token: string;
    onCreateComplete: () => void;
}

function ModalNewAddress({token, onCreateComplete}: ModalNewAddressProps) {
    const dispatch: AppDispatch = useDispatch();

    // Utiliza useSelector para obtener la información del usuario del estado de Redux
    const error = useSelector((state: RootState) => state.address.error);

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<IAddress>();
    const [formSubmitted, setFormSubmitted] = useState(false);

    // SELECCION DEL PAIS
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const [selectedCallSign, setSelectedCallSign] = useState<string>(''); // Añadir estado para el indicativo
    const [resetCountry, setResetCountry] = useState(false);

    // FUNCION PARA MANEJAR LOS DATOS SELECCIONADOS DEL PAIS
    const handleSelectCountry = (country: string, callSign: string) => { // Añadir callSign a los parámetros
        setSelectedCountry(country);
        setSelectedCallSign(callSign); // Establecer el indicativo
        setValue('callsign', callSign); // Actualizar el valor del input de indicativo
    };

    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCodeDane, setSelectedCodeDane] = useState('');
    const [selectedSubregionCode, setSelectedSubregionCode] = useState('');
    const [resetDepartmenAndCity, setResetDepartmenAndCity] = useState(false);    //Estado para resetear el componente "DepartmentAndCity" luego de crear el registro
    // Función para manejar los datos seleccionados del departamento y los municipios
    const handleSelectDepartmentCity = (department: string, city: string, codeDane: string, subregionCodeDane: string) => {
        setSelectedDepartment(department);
        setSelectedCity(city);
        setSelectedCodeDane(codeDane);
        setSelectedSubregionCode(subregionCodeDane);
    };

    const onSubmit = async (values: IAddress) => {
        try {
            const formData = {
                ...values,
                country: selectedCountry,
                department: selectedDepartment,
                city: selectedCity,
                codeDane: selectedCodeDane,
                subregionCodeDane: selectedSubregionCode,
                callsign: selectedCallSign,
            } as IAddress;
            // Simulamos un delay de la API
            await new Promise(resolve => setTimeout(resolve, 500));
            dispatch(postAddressClient(formData, token));
            setFormSubmitted(true);    
            reset();
            setTimeout(() => {
                dispatch(getAddressClient(token));
                setFormSubmitted(false);
                setResetCountry(true);
                setResetDepartmenAndCity(true);
                setTimeout(() => {
                    setResetCountry(false);
                    setResetDepartmenAndCity(false);
                    onCreateComplete();
                }, 10); // Se reinicia después de un corto período para asegurarse de que el reset haya tenido efecto
            }, 1500);
        } catch (error) {
            throw new Error('Error en el envío del formulario');
        }
    };

    return (
        <div className="p-2 position-relative">
            <h3 className={`${styles.title__Modal} mb-4 text-start`}>Nueva Dirección</h3>
            <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} position-relative`} >
                <Countries
                    onSelect={handleSelectCountry}
                    reset={resetCountry}
                    initialCountry={selectedCountry} // Pasar el valor inicial si es necesario
                    />

                <DepartmentAndCity
                    onSelect={handleSelectDepartmentCity}
                    reset={resetDepartmenAndCity} // Pasar el estado de reset al componente DepartmentAndCity
                />

                <div className={`${styles.container__Info} d-flex align-items-center justify-content-center gap-3`}>
                    <div className={`${styles.container__Inputs} mb-4 d-flex flex-column align-items-start justify-content-start position-relative`}>
                        <h6 className={styles.label}>Dirección</h6>
                        <input
                            type="text"
                            {...register('street', { required: true })}
                            className={`${styles.input} p-2 border rounded`}
                            placeholder='Tu dirección'
                            />
                        {errors.street && (
                            <p className={`${styles.text__Danger} text-danger position-absolute`}>La dirección es requerida</p>
                        )}
                    </div>

                    <div className={`${styles.container__Inputs} mb-4 d-flex flex-column align-items-start justify-content-start position-relative`}>
                        <h6 className={styles.label}>Código postal</h6>
                        <input
                            type="text"
                            {...register('postalCode', { required: true })}
                            className={`${styles.input} p-2 border rounded`}
                            placeholder='Tu código postal'
                            />
                        {errors.postalCode && (
                            <p className={`${styles.text__Danger} text-danger position-absolute`}>El código postal es requerido</p>
                        )}
                    </div>
                </div>

                <div className={`${styles.container__Info} mb-4 d-flex align-items-center justify-content-center gap-3 w-100`}>
                    <div className={`${styles.container__Inputs} mb-4 d-flex flex-column align-items-start justify-content-start position-relative`}>
                        <h6 className={styles.label}>Indicativo</h6>
                        <input
                            type="text"
                            {...register('callsign', { required: true })}
                            className={`${styles.input} p-2 border rounded`}
                            value={selectedCallSign}
                            readOnly={true}
                        />
                    </div>
                    <div className={`${styles.container__Inputs} mb-4 d-flex flex-column align-items-start justify-content-start position-relative`}>
                        <h6 className={styles.label}>Teléfono</h6>
                        <input
                            type="text"
                            {...register('phone', { required: true })}
                            className={`${styles.input} p-2 border rounded`}
                            placeholder='Tu número de teléfono'
                        />
                        {errors.phone && (
                            <p className={`${styles.text__Danger} text-danger position-absolute`}>El número de teléfono es requerido</p>
                        )}
                    </div>
                </div>

                {Array.isArray(error) && error.map((error, i) => (
                    <div key={i} className={`${styles.alert__Danger} text-center position-absolute alert-danger`}>{error}</div>
                ))}

                {formSubmitted && (
                    <div className={`${styles.alert__Success} text-center position-absolute alert-success`}>El formulario se ha enviado con éxito</div>
                )}

                <div className="d-flex">
                    <button className={`${styles.button__Submit} m-auto border-0 text-decoration-none`} type='submit' >Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default ModalNewAddress;