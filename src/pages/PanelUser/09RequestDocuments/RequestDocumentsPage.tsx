/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, SetStateAction } from 'react';
import jsCookie from 'js-cookie';
import { useForm } from 'react-hook-form';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../redux/store';
import { postDocumentRequest } from '../../../redux/PanelTopDriveGroup/08DocumentRequest/actions';
import { getProfileUser } from '../../../redux/LandingEcommerce/userSlice/actions';
//ELEMENTOS DEL COMPONENTE
import { IClient } from '../../../types/client.types';
import { IDocumentRequest } from '../../../types/documentRequest.types';
import NavBarClient from '../../../components/PanelTopDriveGroup/01NavBarTopDriveGroup/NavBarTopDriveGroup';
import Footer from '../../../components/LandingEcommerce/Footer/Footer';
import SideBarPanelClient from '../../../components/PanelUser/SideBarPanelClient/SideBarPanelClient';
import Loading from '../../../components/ComponentLoading/Loading';
import styles from './styles.module.css';

function RequestDocumentsPage() {
    const token = jsCookie.get('token') || '';

    // REDUX
    const dispatch: AppDispatch = useDispatch();
    const errorDocumentRequest = useSelector((state: RootState) => state.documentRequest.errorDocumentRequest);
    const user = useSelector((state: RootState) => state.user.user) as IClient;

    useEffect(() => {
        if (token) {
            dispatch(getProfileUser(token));
        }
    }, [token, dispatch]);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IDocumentRequest>();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            reset({
                nameClient: user?.name ? `${user.name} ${user.lastName}` : user.corporateName,
                typeDocumentId: user?.typeDocumentId,
                documentId: user?.documentId,
                email: user?.email,
                phone: user?.phone,
            });
        }
    }, [user, reset]);
    

    //SETEA EL TIPO DE DOCUMENTO A SOLICITAR POR PARTE DEL CLIENTE
    const [typeDocumentRequest, setTypeDocumentRequest] = useState('NIT');
    const handleTypeDocumentRequest = (event: { target: { value: SetStateAction<string> }}) => {
        setTypeDocumentRequest(event.target.value);
    };
    
    //SETEA EL AÑO FISCAL DEL DOCUMENTO
    const [DocumentFiscalYear, setDocumentFiscalYear] = useState('NIT');
    const handleDocumentFiscalYear = (event: { target: { value: SetStateAction<string> }}) => {
        setDocumentFiscalYear(event.target.value);
    };

    const onSubmit = async (values: IDocumentRequest) => {
        setLoading(true);
        const dateNow = new Date().toISOString();
        try {
            const formData = {
                ...values,
                dateRequest: dateNow,
                documentRequest: typeDocumentRequest,
                documentFiscalYear: DocumentFiscalYear,
            } as IDocumentRequest;
            await dispatch(postDocumentRequest(formData));
            setFormSubmitted(true);
            reset();
            setTimeout(() => {
                setFormSubmitted(false);
            }, 2000);
        } catch (error) {
            throw new Error('Error en el envío del formulario');
        }finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <NavBarClient />
            <div className={`${styles.container} d-flex align-items-start justify-content-center`}>
                <SideBarPanelClient />
                <div className={`${styles.container__Component} p-4`}>
                    <h2 className={`${styles.main__Title} mb-3`}>Solicitud de documentos</h2>
                    <div className={`${styles.container__Form} m-auto d-flex align-items-start justify-content-center gap-5`}>
                        <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} px-1 position-relative`} >
                            <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                                <h6 className={styles.label}><span className={`${styles.required}`}>*</span> Tipo de documento</h6>
                                <select
                                    {...register('documentRequest', { required: true })}
                                    className={`${styles.input} mb-4 p-2 border rounded`}
                                    onChange={handleTypeDocumentRequest}
                                >
                                    <option value='Primero'>Primero</option>
                                    <option value='Segundo'>Segundo</option>
                                </select>
                                {errors.documentRequest && (
                                    <p className={`${styles.text__Danger} text-danger position-absolute`}>El tipo de documento del usuario es requerido</p>
                                )}
                            </div>

                            <div className={`${styles.container__Inputs} mb-5 d-flex flex-column align-items-start justify-content-start position-relative`}>
                                <h6 className={styles.label}><span className={`${styles.required}`}>*</span> Año fiscal del documento</h6>
                                <select
                                    {...register('documentFiscalYear', { required: true })}
                                    className={`${styles.input} p-2 border rounded`}
                                    onChange={handleDocumentFiscalYear}
                                >
                                    <option value='2022'>2022</option>
                                    <option value='2023'>2023</option>
                                    <option value='2024'>2024</option>
                                </select>
                                {errors.documentFiscalYear && (
                                    <p className={`${styles.text__Danger} text-danger position-absolute`}>El tipo de documento del usuario es requerido</p>
                                )}
                            </div>

                            {formSubmitted && (
                                <div className={`${styles.alert__Success} text-center position-absolute alert-success`}>Formulario enviado con éxito</div>
                            )}
                            {Array.isArray(errorDocumentRequest) && errorDocumentRequest.map((error, i) => (
                                <div key={i} className={`${styles.alert__Danger} text-center position-absolute alert-danger`}>{error}</div>
                            ))}

                            <div className="d-flex">
                                {loading ? 
                                    <div className={`${styles.container__Loading} `}>
                                        <Loading />
                                    </div> 
                                :
                                    <button type="submit" className={`${styles.button__Submit} m-auto border-0 rounded text-decoration-none`}  disabled={loading}>Enviar</button>
                                }
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RequestDocumentsPage;