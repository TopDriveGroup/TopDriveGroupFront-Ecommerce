import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import jsCookie from 'js-cookie';
import { useForm } from 'react-hook-form';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../../redux/store';
import { putAddressClient } from '../../../../redux/LandingEcommerce/addressSlice/actions';
//ELEMENTOS DEL COMPONENTE
import { IAddress } from '../../../../types/address.types';
import NavBarClient from '../../../../components/PanelTopDriveGroup/01NavBarTopDriveGroup/NavBarTopDriveGroup';
import Footer from '../../../../components/LandingEcommerce/Footer/Footer';
import SideBarPanelClient from '../../../../components/PanelUser/SideBarPanelClient/SideBarPanelClient';
import Countries from '../../../../helpers/Countries/Countries';
import DepartmentAndCity from '../../../../helpers/DepartmentAndCity/DepartmentAndCity';
import { IoChevronBack } from "react-icons/io5";
import styles from './styles.module.css';

function EditAddressPage() {
    const token = jsCookie.get('token') || '';
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const error = useSelector((state: RootState) => state.address.error);
    
    const location = useLocation();
    const addressToUpdate = location.state?.addressToUpdate;

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
        setSelectedCallSign(callSign);      // Establecer el indicativo
        setValue('callsign', callSign);     // Actualizar el valor del input de indicativo
    };

    // SELECCION DEL DEPARTAMENTO Y CIUDAD
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
                country: selectedCountry || addressToUpdate.country,
                department: selectedDepartment || addressToUpdate.department,
                city: selectedCity || addressToUpdate.city,
                codeDane: selectedCodeDane,
                subregionCodeDane: selectedSubregionCode,
            } as IAddress;
            await dispatch(putAddressClient(addressToUpdate._id, formData, token));
            setFormSubmitted(true);  
            reset();
            setTimeout(() => {
                setFormSubmitted(false);
                setShouldNavigate(true);
                setResetCountry(true);
                setResetDepartmenAndCity(true);
                setTimeout(() => {
                    setResetCountry(true);
                    setResetDepartmenAndCity(false);
                }, 10);
            }, 1500);
        } catch (error) {
            throw new Error('Error al guardar cambios');
        }
    };

    useEffect(() => {
        if (shouldNavigate) {
            navigate('/panel-user/addresses/consult');
        }
    }, [ shouldNavigate, navigate ]);

    return (
        <div>
            <NavBarClient />
            <div className={`${styles.container} d-flex align-items-start justify-content-center`}>
                <SideBarPanelClient />
                <div className={`${styles.container__Component} p-4`}>
                    <h2 className={`${styles.main__Title} mb-3`}>Editar dirección</h2>

                    <Link to='/panel-user/addresses/consult' className={`${styles.button__Back} text-decoration-none`}><IoChevronBack className={`${styles.icon__Back} `}/> Atrás</Link>

                    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} m-auto position-relative`}>
                        {formSubmitted && (
                            <div className={`${styles.alertSuccess} text-center position-absolute alert-success`}>El formulario se ha enviado con éxito</div>
                        )}
                        {Array.isArray(error) && error.map((error, i) => (
                            <div key={i} className={`${styles.alertDanger} text-center position-absolute alert-danger`}>{error}</div>
                        ))}

                        <Countries
                            onSelect={handleSelectCountry}
                            reset={resetCountry}
                            initialCountry={addressToUpdate.country}
                        />

                        <DepartmentAndCity
                            onSelect={handleSelectDepartmentCity}
                            reset={resetDepartmenAndCity}
                            initialDepartment={addressToUpdate.department}
                            initialCity={addressToUpdate.city}
                        />

                        <div className={`${styles.container__Info} d-flex align-items-center justify-content-center gap-3`}>
                            <div className={`${styles.container__Inputs} mb-4 d-flex flex-column align-items-start justify-content-start position-relative`}>
                                <h6 className={styles.label}>Dirección</h6>
                                <input
                                    type="text"
                                    {...register('street', { required: true })}
                                    defaultValue={addressToUpdate?.street}
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
                                    defaultValue={addressToUpdate?.postalCode}
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
                                    {...register('callsign')}
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
                                    value={addressToUpdate?.phone}
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

export default EditAddressPage;