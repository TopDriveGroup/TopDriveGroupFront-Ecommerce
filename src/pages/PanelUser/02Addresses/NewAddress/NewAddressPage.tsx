import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jsCookie from 'js-cookie';
import { useForm } from 'react-hook-form';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { postAddressClient } from '../../../../redux/LandingEcommerce/addressSlice/actions';
import type { RootState, AppDispatch } from '../../../../redux/store';
// ELEMENTOS DEL COMPONENTE
import { IAddress } from '../../../../types/address.types';
import NavBarClient from '../../../../components/PanelTopDriveGroup/01NavBarTopDriveGroup/NavBarTopDriveGroup';
import Footer from '../../../../components/LandingEcommerce/Footer/Footer';
import SideBarPanelClient from '../../../../components/PanelUser/SideBarPanelClient/SideBarPanelClient';
import Countries from '../../../../helpers/Countries/Countries';
import DepartmentAndCity from '../../../../helpers/DepartmentAndCity/DepartmentAndCity';
import { IoChevronBack } from "react-icons/io5";
import styles from './styles.module.css';

function NewAddressPage() {
    const token = jsCookie.get('token') || '';
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    // Utiliza useSelector para obtener la información del usuario del estado de Redux
    const error = useSelector((state: RootState) => state.address.error);

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<IAddress>();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [shouldNavigate, setShouldNavigate] = useState(false);

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

    // SELECCION DEL DEPARTAMENTO Y CIUDAD
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCodeDane, setSelectedCodeDane] = useState('');
    const [selectedSubregionCode, setSelectedSubregionCode] = useState('');
    const [resetDepartmenAndCity, setResetDepartmenAndCity] = useState(false);

    // Función para manejar los datos seleccionados del departamento y la ciudad
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
            await dispatch(postAddressClient(formData, token));
            setFormSubmitted(true);
            reset();
            setTimeout(() => {
                setFormSubmitted(false);
                setShouldNavigate(true);
                setResetCountry(true);
                setResetDepartmenAndCity(true);
                setTimeout(() => {
                    setResetCountry(false);
                    setResetDepartmenAndCity(false);
                }, 10); 
            }, 1500);
        } catch (error) {
            throw new Error('Error en el envío del formulario');
        }
    };

    useEffect(() => {
        if (shouldNavigate) {
            navigate('/panel-user/addresses/consult');
        }
    }, [shouldNavigate, navigate]);

    return (
        <div>
            <NavBarClient />
            <div className={`${styles.container} d-flex align-items-start justify-content-center`}>
                <SideBarPanelClient />
                <div className={`${styles.container__Component} p-4`}>
                    <h2 className={`${styles.main__Title} mb-3`}>Nueva dirección</h2>

                    <Link to='/panel-user/addresses/consult' className={`${styles.button__Back} text-decoration-none`}><IoChevronBack className={`${styles.icon__Back} `}/> Atrás</Link>

                    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} m-auto position-relative`}>
                        {formSubmitted && (
                            <div className={`${styles.alert__Success} text-center position-absolute alert-success`}>El formulario se ha enviado con éxito</div>
                        )}
                        {Array.isArray(error) && error.map((error, i) => (
                            <div key={i} className={`${styles.alert__Danger} text-center position-absolute alert-danger`}>{error}</div>
                        ))}

                        <Countries
                            onSelect={handleSelectCountry}
                            reset={resetCountry}
                            initialCountry={selectedCountry} // Pasar el valor inicial si es necesario
                        />

                        <DepartmentAndCity
                            onSelect={handleSelectDepartmentCity}
                            reset={resetDepartmenAndCity}
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
                                    <p className={`${styles.textDanger} text-danger position-absolute`}>La dirección es requerida</p>
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
                                    <p className={`${styles.textDanger} text-danger position-absolute`}>El código postal es requerido</p>
                                )}
                            </div>
                        </div>
                            
                        <div className={`${styles.container__Info} d-flex align-items-center justify-content-center gap-3 w-100`}>
                            <div className={`${styles.container__Inputs} mb-4 d-flex flex-column align-items-start justify-content-start position-relative`}>
                                <h6 className={styles.label}>Indicativo</h6>
                                <input
                                    type="text"
                                    {...register('callsign', { required: true })}
                                    className={`${styles.input} p-2 border rounded`}
                                    value={selectedCallSign} // Usar el estado para mostrar el indicativo seleccionado
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
                                    <p className={`${styles.textDanger} text-danger position-absolute`}>El número de teléfono es requerido</p>
                                )}
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-center">
                            <button type='submit' className={`${styles.button__Submit} border-0 rounded text-decoration-none`} >Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NewAddressPage;
