/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { postQuote } from '../../../../../redux/Landing/quotesSlice/actions';
import type { RootState, AppDispatch } from '../../../../../redux/store';
//ELEMENTOS DEL COMPONENTE
import { IQuote } from '../../../../../types/quote.types';
import { IProduct } from '../../../../../types/product.types';
import { IService } from '../../../../../types/service.types';
import NavBar from '../../../../../components/Landing/01NavBar/NavBar';
import Footer from '../../../../../components/Landing/Footer/Footer';
import DepartmentAndCity from '../../../../../helpers/DepartmentAndCity/DepartmentAndCity';
import { FaPlus } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import styles from './styles.module.css';

function QuotationEcommercePage() {

    const { t } = useTranslation('quotation');
    const dispatch: AppDispatch = useDispatch();

    // Estado de Redux
    const errorQuotes = useSelector((state: RootState) => state.quotes.errorQuotes);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IQuote>();

    const [formSubmitted, setFormSubmitted] = useState(false); 
    const [acceptedPolicy, setAcceptedPolicy] = useState(false);
    const [message, setMessage] = useState('');
    const [charsRemaining, setCharsRemaining] = useState(1000);

    const [typeApplicant, setTypeApplicant] = useState('Legal Entity');
    const handleTypeApplicant = (event: { target: { value: SetStateAction<string> }}) => {
        setTypeApplicant(event.target.value);
    };

    // Setea el departamento y el municipio
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [resetDepartmenAndCity, setResetDepartmenAndCity] = useState(false);    //Estado para resetear el componente "DepartmentAndCity" luego de crear el registro
    const handleSelectDepartmentCity = (department: string, city: string) => {
        setSelectedDepartment(department);
        setSelectedCity(city);
    };

    // Agregar productos a la tabla
    const [rowsProducts, setRowsProducts] = useState<Array<{ id: number | null; item: IProduct | null; quantity: number | null }>>([]);
    const addRowProducts = () => {
        setRowsProducts(prevRows => [
            ...prevRows,
            { id: null, item: null, quantity: null }
        ]);
    };

    // Agregar productos a la tabla
    const [rowsServices, setRowsServices] = useState<Array<{ id: number | null; item: IService | null; quantity: number | null }>>([]);
    const addRowsServices = () => {
        setRowsServices(prevRows => [
            ...prevRows,
            { id: null, item: null, quantity: null }
        ]);
    };

    // Define la cantidad máxima de caracteres en el envío de los comentarios
    const handleTextareaChange = (event: { target: { value: any; }; }) => {
        const newValue = event.target.value;
        if (newValue.length <= 1000) {
            setMessage(newValue);
            setCharsRemaining(1000 - newValue.length);
        }
    };

    const onSubmit = async (values: IQuote) => {
        try {
            if (!acceptedPolicy) return;
            const formData = {
                ...values,
                department: selectedDepartment ? selectedDepartment : null,
                city: selectedCity ? selectedCity : null,
                dateQuoteCreation: new Date().toISOString(),
            } as IQuote;
            await dispatch(postQuote(formData));
            setFormSubmitted(true);
            setMessage('');
            reset();
            setTimeout(() => {
                setFormSubmitted(false);
                setResetDepartmenAndCity(true);
                setTimeout(() => {
                    setResetDepartmenAndCity(false);
                }, 10);
            }, 2000);
        } catch (error) {
            throw new Error('Error en el envío del formulario');
        }
    };
    
    return (
        <div>
            <NavBar />
            <div className={`${styles.container} d-flex flex-column align-items-center justify-content-center`}>
                <header>
                    <h1 className={`${styles.title} text-center`}>{t('quotation.title_Section')}</h1>
                </header>

                <div className={`${styles.container__Component} m-auto p-2 d-flex flex-column align-items-start justify-content-center gap-4`}>
                    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} position-relative`} >
                        {formSubmitted && (
                            <div className={`${styles.alert__Success} text-center position-absolute alert-success`}>{t('quotation.alert__Success')}</div>
                        )}
                        {errorQuotes && errorQuotes.map((error, i) => (
                            <div key={i} className={`${styles.alert__Danger} text-center position-absolute alert-danger`}>{error}</div>
                        ))}

                        <section className={`${styles.container__Header} d-flex gap-3`}>
                            <div className={`${styles.container__Type_Applicant} d-flex flex-column align-items-start justify-content-start position-relative`}>
                                <h6 className={styles.label}>{t('quotation.section_Type_Applicat')}</h6>
                                <div className={styles.container__Input_Type_Applicant}>
                                    <select
                                        {...register('typeApplicant', { required: true })}
                                        className={`${styles.input__Type_Applicant} p-2 mb-4 border rounded`}
                                        onChange={handleTypeApplicant}
                                    >
                                        <option value='Legal Entity'>{t('quotation.option_Select_Legal_Entity_Type_Applicat')}</option>
                                        <option value='Natural Person'>{t('quotation.option_Select_Natural_Person_Type_Applicat')}</option>
                                    </select>
                                    {errors.typeApplicant && (
                                        <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('quotation.error_Type_Applicat')}</p>
                                    )}
                                </div>
                            </div>

                            {typeApplicant === 'Legal Entity' ? (
                                <div className={`${styles.container__Corporate_Name} d-flex flex-column align-items-start justify-content-start position-relative`}>
                                    <h6 className={styles.label__Corporate_Name}>{t('quotation.section_Corporate_Name')}</h6>
                                    <div className={styles.container__Input_Corporate_Name}>
                                        <input
                                            type="text"
                                            {...register('corporateName', { required: true })}
                                            className={`${styles.input__Corporate_Name} p-2 mb-4 border rounded`}
                                            placeholder={`${t('quotation.placeholder_Corporate_Name')}`}
                                        />
                                        {errors.corporateName && (
                                            <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('quotation.error_Corporate_Name')}</p>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className={`${styles.container__User} d-flex align-items-start justify-content-start position-relative gap-3`}>
                                    <div className={`${styles.container__User_Name} d-flex flex-column align-items-start justify-content-start position-relative`}>
                                        <h6 className={styles.label}>{t('quotation.section_User_Name')}</h6>
                                        <div className={styles.container__Input_User}>
                                            <input
                                                type="text"
                                                {...register('userName', { required: true })}
                                                className={`${styles.input__User_Info} p-2 mb-4 border rounded`}
                                                placeholder={`${t('quotation.placeholder_User_Name')}`}
                                            />
                                            {errors.userName && (
                                                <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('quotation.error_User_Name')}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className={`${styles.container__Last_Name} d-flex flex-column align-items-start justify-content-start position-relative`}>
                                        <h6 className={styles.label}>{t('quotation.section_Last_Name')}</h6>
                                        <div className={styles.container__Input_User}>
                                            <input
                                                type="text"
                                                {...register('lastName', { required: true })}
                                                className={`${styles.input__User_Info} p-2 mb-4 border rounded`}
                                                placeholder={`${t('quotation.placeholder_Last_Name')}`}
                                            />
                                            {errors.lastName && (
                                                <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('quotation.error_Last_Name')}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </section>

                        <section className='d-flex align-items-start justify-content-start position-relative gap-3'>
                            <div className={`${styles.container__User_Name} d-flex flex-column align-items-start justify-content-start position-relative`}>
                                <h6 className={styles.label}>{t('quotation.section_Email')}</h6>
                                <div className={styles.container__Input_User}>
                                    <input
                                        type="text"
                                        {...register('email', { required: true })}
                                        className={`${styles.input__User_Info} p-2 mb-4 border rounded`}
                                        placeholder={`${t('quotation.placeholder_Email')}`}
                                    />
                                    {errors.email && (
                                        <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('quotation.error_Email')}</p>
                                    )}
                                </div>
                            </div>
                            <div className={`${styles.container__Last_Name} d-flex flex-column align-items-start justify-content-start position-relative`}>
                                <h6 className={styles.label}>{t('quotation.section_Phone')}</h6>
                                <div className={styles.container__Input_User}>
                                    <input
                                        type="text"
                                        {...register('phone', { required: true })}
                                        className={`${styles.input__User_Info} p-2 mb-4 border rounded`}
                                        placeholder={`${t('quotation.placeholder_Phone')}`}
                                    />
                                    {errors.phone && (
                                        <p className={`${styles.text__Danger} text-danger position-absolute`}>{t('quotation.error_Phone')}</p>
                                    )}
                                </div>
                            </div>
                        </section>

                        <DepartmentAndCity
                            onSelect={handleSelectDepartmentCity}
                            reset={resetDepartmenAndCity}
                        />

                        <div className={`${styles.container__Quote_Product} mb-4`}>
                            <h3 className={`${styles.subtitle} text-start`}>{t('quotation.subtitle_Product_Quotes')}</h3>
                            <div className={`${styles.container__Table} mt-2 mb-2 mx-auto d-flex flex-column align-items-center justify-content-start`}>
                                <div className={styles.container__Head}>
                                    <div className={`${styles.container__Tr} d-flex align-items-center justify-content-between`}>
                                        <div className={`${styles.count} d-flex align-items-center justify-content-center text-center`}>#</div>
                                        <div className={`${styles.class} d-flex align-items-center justify-content-center text-center`}>{t('quotation.column_Class')}</div>
                                        <div className={`${styles.category} d-flex align-items-center justify-content-center text-center`}>{t('quotation.column_Category')}</div>
                                        <div className={`${styles.type} d-flex align-items-center justify-content-center text-center`}>{t('quotation.column_Type')}</div>
                                        <div className={`${styles.manufacturer} d-flex align-items-center justify-content-center text-center`}>{t('quotation.column_Manufacturer')}</div>
                                        <div className={`${styles.item} d-flex align-items-center justify-content-center text-center`}>{t('quotation.column_Item')}</div>
                                        <div className={`${styles.quantity} d-flex align-items-center justify-content-center text-center`}>{t('quotation.column_Quantity')}</div>
                                        <div className={`${styles.selling__Price} d-flex align-items-center justify-content-center text-center`}>{t('quotation.column_Selling_Price')}</div>
                                        <div className={`${styles.action} d-flex align-items-center justify-content-center text-center`}>{t('quotation.column_Action')}</div>
                                    </div>
                                </div>
                                <div className={`${styles.container__Body} `}>
                                    {Array.isArray(rowsProducts) && rowsProducts.length > 0 ? (
                                        rowsProducts.map((row, index) => (
                                            <div key={index} className={`${styles.container__Info} d-flex align-items-center justify-content-between`} >
                                                <div className={`${styles.count} d-flex align-items-center justify-content-center text-center`}>{index + 1}</div>
                                                <div className={`${styles.class} d-flex align-items-center justify-content-center text-center`}>Clase</div>
                                                <div className={`${styles.category} d-flex align-items-center justify-content-center text-center`}>Categoría</div>
                                                <div className={`${styles.type} d-flex align-items-center justify-content-center text-center`}>Tipo</div>
                                                <div className={`${styles.manufacturer} d-flex align-items-center justify-content-center text-center`}>Fabricante</div>
                                                <div className={`${styles.item} d-flex align-items-center justify-content-center text-center`}>Producto</div>
                                                <div className={`${styles.quantity} d-flex align-items-center justify-content-center overflow-hidden`}>
                                                    <input
                                                        type="number"
                                                        className={`${styles.input__Quantity} p-2 border`}
                                                        placeholder='Cantidad'
                                                        min={0}
                                                        value={row.quantity || ''}
                                                        onChange={(e) => {
                                                            const value = parseFloat(e.target.value);
                                                            const updatedRows = [...rowsProducts];
                                                            updatedRows[index] = { ...updatedRows[index], quantity: value };
                                                            setRowsProducts(updatedRows);
                                                        }}
                                                        onKeyDown={(e) => {
                                                            if (e.key === '-' || e.key === 'e' || e.key === '+' || e.key === '.') {
                                                                e.preventDefault();
                                                            }
                                                        }}
                                                    />
                                                </div>
                                                <div className={`${styles.selling__Price} pt-0 pb-0 px-2 d-flex align-items-center justify-content-center overflow-hidden`}>
                                                    <input
                                                        type="number"
                                                        className={`p-2 border-0`}
                                                        min={0}
                                                    />
                                                </div>
                                                <div className={`${styles.action} pt-0 pb-0 px-2 d-flex align-items-center justify-content-center overflow-hidden`}>
                                                    <RiDeleteBin6Line
                                                        className={`${styles.button__Delete}`}
                                                        onClick={() => {
                                                            const updatedRows = rowsProducts.filter((_, i) => i !== index);
                                                            setRowsProducts(updatedRows);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className={`${styles.message__Unrelated_Items} d-flex align-items-center justify-content-center`}>
                                            {t('quotation.message_Unrelated_Items')}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div
                                className={`${styles.container__Append} mt-3 mb-3 d-flex align-items-center justify-content-between`}
                                onClick={addRowProducts}
                            >
                                <FaPlus className={`${styles.icon__Plus}`} />
                                <span>{t('quotation.add_Product')}</span>
                            </div>
                        </div>

                        <div className={`${styles.container__Quote_Product} mb-4 mt-4`}>
                            <h3 className={`${styles.subtitle} text-start`}>{t('quotation.subtitle_Services_Quotes')}</h3>
                            <div className={`${styles.container__Table} mt-2 mb-2 mx-auto d-flex flex-column align-items-center justify-content-start`}>
                                <div className={styles.container__Head}>
                                    <div className={`${styles.container__Tr} d-flex align-items-center justify-content-between`}>
                                        <div className={`${styles.count} d-flex align-items-center justify-content-center text-center`}>#</div>
                                        <div className={`${styles.class} d-flex align-items-center justify-content-center text-center`}>{t('quotation.column_Class')}</div>
                                        <div className={`${styles.category} d-flex align-items-center justify-content-center text-center`}>{t('quotation.column_Category')}</div>
                                        <div className={`${styles.type} d-flex align-items-center justify-content-center text-center`}>{t('quotation.column_Type')}</div>
                                        <div className={`${styles.manufacturer} d-flex align-items-center justify-content-center text-center`}>{t('quotation.column_Manufacturer')}</div>
                                        <div className={`${styles.item} d-flex align-items-center justify-content-center text-center`}>{t('quotation.column_Item')}</div>
                                        <div className={`${styles.quantity} d-flex align-items-center justify-content-center text-center`}>{t('quotation.column_Quantity')}</div>
                                        <div className={`${styles.selling__Price} d-flex align-items-center justify-content-center text-center`}>{t('quotation.column_Selling_Price')}</div>
                                        <div className={`${styles.action} d-flex align-items-center justify-content-center text-center`}>{t('quotation.column_Action')}</div>
                                    </div>
                                </div>
                                <div className={`${styles.container__Body}`}>
                                    {Array.isArray(rowsServices) && rowsServices.length > 0 ? (
                                        rowsServices.map((row, index) => (
                                            <div key={index} className={`${styles.container__Info} d-flex align-items-center justify-content-between`} >
                                                <div className={`${styles.count} d-flex align-items-center justify-content-center text-center`}>{index + 1}</div>
                                                <div className={`${styles.name__Item} d-flex align-items-center justify-content-center text-center`}>
                                                </div>
                                                <div className={`${styles.selling__Price} pt-0 pb-0 px-2 d-flex align-items-center justify-content-center overflow-hidden`}>
                                                    <input
                                                        type="number"
                                                        className={`${styles.input} p-2 border`}
                                                        min={0}
                                                    />
                                                </div>
                                                <div className={`${styles.discount__Percentage} pt-0 pb-0 px-2 d-flex align-items-center justify-content-center overflow-hidden`}>
                                                    <span className={`${styles.text__Ellipsis} text-align-center overflow-hidden`}>{row.item?.discountPercentage || 'N/A'}</span>
                                                </div>

                                                <div className={`${styles.quantity} pt-0 pb-0 px-2 d-flex align-items-center justify-content-center overflow-hidden`}>
                                                    <input
                                                        type="number"
                                                        className={`${styles.input} p-2 border`}
                                                        placeholder='Cantidad'
                                                        min={0}
                                                        value={row.quantity || ''}
                                                        onChange={(e) => {
                                                            const value = parseFloat(e.target.value);
                                                            const updatedRows = [...rowsServices];
                                                            updatedRows[index] = { ...updatedRows[index], quantity: value };
                                                            setRowsServices(updatedRows);
                                                        }}
                                                    />
                                                </div>
                                                <div className={`${styles.action} pt-0 pb-0 px-2 d-flex align-items-center justify-content-center overflow-hidden`}>
                                                    <RiDeleteBin6Line
                                                        className={`${styles.button__Delete}`}
                                                        onClick={() => {
                                                            const updatedRows = rowsServices.filter((_, i) => i !== index);
                                                            setRowsServices(updatedRows);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className={`${styles.message__Unrelated_Items} d-flex align-items-center justify-content-center`}>
                                            {t('quotation.message_Unrelated_Services')}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div
                                className={`${styles.container__Append} mt-3 mb-3 d-flex align-items-center justify-content-between`}
                                onClick={addRowsServices}
                            >
                                <FaPlus className={`${styles.icon__Plus}`} />
                                <span>{t('quotation.add_Service')}</span>
                            </div>
                        </div>

                        <div className={`${styles.continer__Comments} d-flex flex-column align-items-start justify-content-start position-relative`}>
                            <h6 className={styles.label}>{t('quotation.textarea')}</h6>
                            <div className={styles.container__Textarea}>
                                <textarea
                                    {...register('comments', { required: true })}
                                    className={`${styles.textarea} p-2 border rounded`}
                                    placeholder={`${t('quotation.placeholder_Textarea')}`}
                                    cols={10}
                                    rows={5}
                                    value={message}
                                    onChange={handleTextareaChange}
                                ></textarea>
                                <p className={`${styles.chars__Remaining} m-0 text-muted`}>{charsRemaining} {t('quotation.textarea_Characters_Remaining')}</p>
                                {errors.comments && (
                                    <p className={`${styles.text__Danger_Textarea} text-danger position-absolute`}>{t('quotation.error_Textarea')}</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-4 d-flex align-items-center justify-content-center position-relative">
                            <p className={`${styles.text__Accepted_Policy} text-center m-0`}>{t('quotation.section_Accepted_Policy')} <Link to="/personalDataPolicy" className={`${styles.link} text-decoration-none text-sky-500`}>{t('quotation.section_Link_Accepted_Policy')}</Link></p>
                            <input
                                type="checkbox"
                                {...register('isAcceptedConditions', { required: true })}
                                checked={acceptedPolicy}
                                className={`${styles.checkbox} `}
                                onChange={() => setAcceptedPolicy(!acceptedPolicy)}
                            />
                            {errors.isAcceptedConditions && (
                                <p className={`${styles.text__Danger_Accepted_Policy} text-danger position-absolute`}>{t('quotation.text_Danger_Accepted_Policy')}</p>
                            )}
                        </div>

                        <div className="mb-4 d-flex align-items-center justify-content-center">
                            <button type='submit' className={`${styles.button__Submit} border-0 text-decoration-none`} >{t('quotation.button_Send')}</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default QuotationEcommercePage;