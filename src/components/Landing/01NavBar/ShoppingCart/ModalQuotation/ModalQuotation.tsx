import { useEffect, useState, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../../../redux/store';
import { postQuote } from '../../../../../redux/Landing/quotesSlice/actions';
//ELEMENTOS DEL COMPONENTE
import { IQuote } from '../../../../../types/quote.types';
import { IClient } from '../../../../../types/client.types';
import { IProductsOrder } from '../../../../../types/cartProduct';
import { IAddress } from '../../../../../types/address.types';
import TermsAndConditions from '../../../../../../public/TERMINOS_Y_CONDICIONES_GENERALES_DE_VENTA_TOP_DRIVE_GROUP_JUL_2024.pdf';
import PrivacyPolicy from '../../../../../../public/GGE-PO-006-V4_POLITICA _PRIVACIDAD_Y_TRATAMIENTO_DE_DATOS_PERSONALES.pdf';
import DepartmentAndCity from '../../../../../helpers/DepartmentAndCity/DepartmentAndCity';
import { formatNumber } from '../../../../../helpers/FormatNumber/FormatNumber';
import Loading from '../../../../GeneralComponents/ComponentLoading/Loading';
import styles from './styles.module.css';

interface ModalQuotationProps {
    user: IClient | null;
    productsOrder: IProductsOrder;
    showAddress: IAddress | null;
    onQuotationComplete: () => void;
}

function ModalQuotation({user, productsOrder, showAddress, onQuotationComplete}: ModalQuotationProps) {
    // REDUX
    const dispatch: AppDispatch = useDispatch();
    const error = useSelector((state: RootState) => state.quotes.errorQuotes);

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<IQuote>();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [acceptedPolicy, setAcceptedPolicy] = useState(false);
    const [message, setMessage] = useState('');
    const [charsRemaining, setCharsRemaining] = useState(1000);

    const [typeDocument, setTypeDocument] = useState('NIT');
    const handleTypeDocument = (event: { target: { value: SetStateAction<string> }}) => {
        setTypeDocument(event.target.value);
    };

    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [resetDepartmenAndCity, setResetDepartmenAndCity] = useState(false);
    
    // SETEA EL DEPARTAMENTO Y LA CIUDAD EN CASO DE QUE EXISTA
    useEffect(() => {
        if (showAddress) {
            setSelectedDepartment(showAddress.department || '');
            setSelectedCity(showAddress.city || '');
        }
    }, [showAddress]);
    
    const handleSelectDepartmentCity = (department: string, city: string) => {
        setSelectedDepartment(department);
        setSelectedCity(city);
    };
    
    // OBSERVA EL VALOR DE "address" PARA SETARLA CUANDO NO SE RECIBE POR PROPS
    const addressValue = watch('address');
    
    // DEFINE LA CANIDAD MAXIMA DE CARACTERES DE LOS COMENTARIOS
    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;
        if (newValue.length <= 1000) {
            setMessage(newValue);
            setCharsRemaining(1000 - newValue.length);
        }
    };
    
    const onSubmit = async (values: IQuote) => {
        setLoading(true);
        try {
            if (!acceptedPolicy) return;
            const formData = {
                ...values,
                department: selectedDepartment,
                city: selectedCity,
                typeQuote: 'Product',
                email: user?.email,
                phone: user?.phone,
                address: showAddress?.street || addressValue,
                products: productsOrder.products.map(product => ({
                    productId: product.productId,
                    description: product.description,
                    brand: product.manufacturer,
                    quantity: product.quantity,
                    sellingPriceDistributorFinalUser: product.sellingPrice,
                }))
            } as IQuote;
            if (user?.name && user?.lastName) {
                formData.typeDocumentId = user?.typeDocumentId;
                formData.documentId = user?.documentId;
                formData.userName = user?.name;
                formData.lastName = user?.lastName;
            }
            if(user?.corporateName) formData.corporateName = user?.corporateName;
            await new Promise(resolve => setTimeout(resolve, 500));
            dispatch(postQuote(formData));
            setFormSubmitted(true);    
            reset();
            setTimeout(() => {
                setFormSubmitted(false);
                setResetDepartmenAndCity(true);
                setTimeout(() => {
                    setResetDepartmenAndCity(false);
                    onQuotationComplete();
                }, 10);
            }, 1500);
        } catch (error) {
            throw new Error('Error en el envío del formulario');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="position-relative">
            <div className={`${styles.container} p-4 d-flex align-items-center justify-content-center`}>
                <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} position-relative`} >
                    {!user && (
                        <div>
                            <div className={`${styles.container__Inputs} mb-3 d-flex flex-column align-items-start justify-content-start position-relative`}>
                                <h6 className={styles.label}><span className={`${styles.required__Information} `}>*</span> Tipo de documento de identidad</h6>
                                <select
                                    {...register('typeDocumentId', { required: true })}
                                    className={`${styles.input} p-2 border`}
                                    onChange={handleTypeDocument}
                                >
                                    <option value='NIT' translate='no'>NIT</option>
                                    <option value='Cedula de Ciudadania'>Cédula de Ciudadanía</option>
                                    <option value='Cedula de Extranjeria'>Cédula de Extranjería</option>
                                    <option value='Pasaporte'>Pasaporte</option>
                                </select>
                                {errors.typeDocumentId && (
                                    <p className={`${styles.text__Danger} text-danger position-absolute`}>El tipo de documento es requerido</p>
                                )}
                            </div>

                            {typeDocument === 'NIT' && (
                                <div className="mb-3 d-flex flex-column align-items-start justify-content-start position-relative">
                                    <h6 className={styles.label}><span className={`${styles.required__Information}`}>*</span> Razón social                                    </h6>
                                    <input
                                        type="text"
                                        {...register('corporateName', { required: true })}
                                        className={`${styles.input} p-2 border rounded`}
                                        placeholder={`Razón social`}
                                    />
                                    {errors.corporateName && (
                                        <p className={`${styles.text__Danger} text-danger position-absolute`}>La razón social es requerida</p>
                                    )}
                                </div>
                            )}

                            {(typeDocument === 'Cedula de Ciudadania' || typeDocument === 'Cedula de Extranjeria' || typeDocument === 'Pasaporte')  && (
                                <div className={`${styles.container__Inputs} mb-3 d-flex align-items-center justify-content-center gap-3`}>
                                    <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                                        <h6 className={styles.label}><span className={`${styles.required}`}>*</span> Nombres</h6>
                                        <input
                                            type="text"
                                            {...register('userName', { required: true, pattern: /^[a-zA-Z\s]+$/ })}
                                            className={`${styles.input} p-2 border rounded`}
                                            placeholder={`Nombres`}
                                        />
                                        {errors.userName && (
                                            <p className={`${styles.text__Danger} text-danger position-absolute`}>Los nombres son requeridos</p>
                                        )}
                                    </div>
                                    <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                                        <h6 className={styles.label}><span className={`${styles.required}`}>*</span> Apellidos</h6>
                                        <input
                                            type="text"
                                            {...register('lastName', { required: true, pattern: /^[a-zA-Z\s]+$/ })}
                                            className={`${styles.input} p-2 border rounded`}
                                            placeholder={`Apellidos`}
                                        />
                                        {errors.lastName && (
                                            <p className={`${styles.text__Danger} text-danger position-absolute`}>Los apellidos son requeridos</p>
                                        )}
                                    </div>
                                </div>
                            )}

                            <div className={`${styles.container__Inputs} mb-3 d-flex flex-column align-items-start justify-content-start position-relative`}>
                                <h6 className={styles.label}><span className={`${styles.required}`}>*</span> Número de identificación</h6>
                                <input
                                    type="text"
                                    {...register('documentId', {
                                        required: `Número de identificación`,
                                        validate: value => {
                                            if (!value) return `Número de identificación`;
                                            const numValue = value.trim();
                                            const pattern = /^\d{1,10}$/;
                                            if (!pattern.test(numValue)) return `El número de identidad debe contener entre 1 y 10 dígitos`;
                                            return true;
                                        }
                                    })}
                                    className={`${styles.input} p-2 border rounded`}
                                    placeholder={`¿Cuál es tu número de identificación?`}
                                    maxLength={10}
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
                        </div>
                    )}

                    {!showAddress && (
                        <div>
                            <DepartmentAndCity
                                onSelect={handleSelectDepartmentCity}
                                reset={resetDepartmenAndCity}
                            />

                            <div className='mb-3 d-flex  flex-column align-items-start justify-content-center position-relative'>
                                <h6 className={styles.label}><span className={`${styles.required__Information} `}>*</span> Dirección</h6>
                                <input
                                    type="text"
                                    {...register('address', { required: true })}
                                    className={`${styles.input} p-2 border rounded`}
                                    placeholder='Dirección del usuario'
                                />
                                {errors.address && (
                                    <p className={`${styles.text__Danger} text-danger position-absolute`}>La dirección del usuario es requerida</p>
                                )}
                            </div>

                            <section className="d-flex gap-3 w-100">
                                <div className={`${styles.container__Inputs} mb-3 d-flex flex-column align-items-start justify-content-start position-relative`}>
                                    <h6 className={styles.label}><span className={`${styles.required__Information} `}>*</span> Email</h6>
                                    <input
                                        type="email"
                                        {...register('email', {
                                            required: `El email del usuario es requerido`,
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: `El formato del email no es válido`
                                            }
                                        })}
                                        className={`${styles.input} p-2 border rounded`}
                                        placeholder='Email del usuario'
                                    />
                                    {errors.email && (
                                        <p className={`${styles.text__Danger} text-danger position-absolute`}>{errors.email.message}</p>
                                    )}
                                </div>
                                <div className={`${styles.container__Inputs} mb-3 d-flex flex-column align-items-start justify-content-start position-relative`}>
                                    <h6 className={styles.label}><span className={`${styles.required__Information} `}>*</span> Número de celular o teléfono</h6>
                                    <input
                                        type="tel"
                                        {...register('phone', {
                                            required: true,
                                            pattern: /^\d{1,10}$/,
                                            setValueAs: (value) => value.substring(0, 10)
                                        })}
                                        className={`${styles.input} p-2 border rounded`}
                                        placeholder={`¿Cuál es tu número de celular o teléfono?`}
                                        maxLength={10}
                                        onInput={(e) => {
                                            const target = e.target as HTMLInputElement;
                                            target.value = target.value.replace(/\D/g, '').substring(0, 10);
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === '-' || e.key === 'e' || e.key === '+' || e.key === '.') {
                                                e.preventDefault();
                                            }
                                        }}
                                    />
                                    {errors.phone && (
                                        <p className={`${styles.text__Danger} text-danger position-absolute`}>El teléfono es requerido</p>
                                    )}
                                </div>
                            </section>
                        </div>
                    )}

                    <div className={`${styles.container__Table} mb-3 mx-auto`}>
                        <table className="table">
                            <thead className={`${styles.container__Head} `}>
                                <tr className={`${styles.container__Tr} d-flex align-items-center justify-content-between`}>
                                    <th className={`${styles.description} d-flex align-items-center justify-content-center text-center`}>Descripción</th>
                                    <th className={`${styles.manufacturer} d-flex align-items-center justify-content-center text-center`}>Fabricante</th>
                                    <th className={`${styles.quantity} d-flex align-items-center justify-content-center text-center`}>Cantidad</th>
                                    <th className={`${styles.total__Price} d-flex align-items-center justify-content-center text-center`}>Precio total</th>
                                </tr>
                            </thead>
                            <tbody className={`${styles.container__Body} `}>
                                {Array.isArray(productsOrder.products) && productsOrder.products.length > 0 && (
                                    productsOrder.products.map((product) => (
                                        <tr key={product.productId} className={`${styles.container__Info} d-flex align-items-center justify-content-between`}>
                                            <td className={`${styles.description} pt-0 pb-0 px-2 d-flex align-items-center justify-content-center overflow-hidden`}>
                                                <span className={`${styles.text__Ellipsis} overflow-hidden`}>{product.description}</span>
                                            </td>
                                            <td className={`${styles.manufacturer} pt-0 pb-0 px-2 d-flex align-items-center justify-content-center overflow-hidden`}>
                                                <span className={`${styles.text__Ellipsis} overflow-hidden`}>{product.manufacturer}</span>
                                            </td>
                                            <td className={`${styles.quantity} pt-0 pb-0 px-2 d-flex align-items-center justify-content-center overflow-hidden`}>
                                                <span className={`${styles.text__Ellipsis} overflow-hidden`}>{product.quantity} und</span>
                                            </td>
                                            <td className={`${styles.total__Price} pt-0 pb-0 px-2 d-flex align-items-center justify-content-center overflow-hidden`}>
                                                <span className={`${styles.text__Ellipsis} overflow-hidden`}>$ {formatNumber(product.sellingPrice)}</span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className={`${styles.continer__Comments} d-flex flex-column align-items-start justify-content-start position-relative`}>
                        <h6 className={styles.label}>Comantarios para la cotización</h6>
                        <textarea
                            {...register('comments', { required: true })}
                            className={`${styles.textarea} p-2 border rounded`}
                            placeholder={`Deja acá tus comentarios`}
                            cols={10}
                            rows={5}
                            value={message}
                            onChange={handleTextareaChange}
                        ></textarea>
                        <p className={`${styles.chars__Remaining} mt-3 text-muted`}>{charsRemaining} caracteres restantes</p>
                        {errors.comments && (
                            <p className={`${styles.text__Danger_Textarea} text-danger position-absolute`}>Los comentarios son requeridos</p>
                        )}
                    </div>

                    <div className={`${styles.container__Accepted_Policy} mb-5 d-flex align-items-center justify-content-center position-relative`}>
                        <p className={`${styles.text__Accepted_Policy} text-center m-0`}>He leído y acepto los <a href={TermsAndConditions} target="blank" rel="noopener noreferrer" className={`${styles.link} text-decoration-none`}>Términos y Condiciones</a> y <a href={PrivacyPolicy} target="blank" rel="noopener noreferrer" className={`${styles.link} text-decoration-none`}>Políticas de privacidad</a></p>
                        <input
                            type="checkbox"
                            {...register('isAcceptedConditions', { required: true })}
                            checked={acceptedPolicy}
                            className={`${styles.checkbox} `}
                            onChange={() => setAcceptedPolicy(!acceptedPolicy)}
                        />
                        {errors.isAcceptedConditions && (
                            <p className={`${styles.text__Danger_Accepted_Policy} text-danger position-absolute`}>Debes de aceptar términos y condiciones</p>
                        )}
                    </div>

                    {Array.isArray(error) && error.map((error, i) => (
                        <div key={i} className={`${styles.alert__Danger} text-center position-absolute alert-danger`}>{error}</div>
                    ))}
                    {formSubmitted && (
                        <div className={`${styles.alert__Success} text-center position-absolute alert-success`}>El formulario se ha enviado con éxito</div>
                    )}

                    <div className="d-flex">
                        {loading ? 
                            <div className={`${styles.container__Loading} `}><Loading /></div>
                        :
                            <button type="submit" className={`${styles.button__Submit} m-auto border-0 rounded text-decoration-none`}  disabled={loading}>Enviar</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalQuotation;