import { useState } from 'react';
import { useTranslation } from 'react-i18next';
//ELEMENTOS DEL COMPONENTE
import NavBar from '../../../../components/LandingEcommerce/01NavBar/NavBar';
import Footer from '../../../../components/LandingEcommerce/Footer/Footer';
import PSEBanks from './PSEBanks/PSEBanks';
import Visa from '../../../../assets/LandingEcommerce/MediosPago/Visa.png';
import AmericanExpress from '../../../../assets/LandingEcommerce/MediosPago/AmericanExpress.png';
import DinesClub from '../../../../assets/LandingEcommerce/MediosPago/DinersClub.svg';
import MasterCard from '../../../../assets/LandingEcommerce/MediosPago/Mastercard.png';
import PSE from '../../../../assets/LandingEcommerce/MediosPago/PSE.png';
import { FiPlus, FiMinus } from "react-icons/fi";
import styles from './styles.module.css';

function MeansPaymentPage() {
    const { t } = useTranslation('meansPayment');
    const [ showBanks, setShowBanks ] = useState(false);
    const handleShowBanks = () => {
        setShowBanks(true);
    };    

    const handleHideBanks = () => {
        setShowBanks(false);
    };

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} `}>
                <div>
                    <h1 className={`${styles.main__Title} m-0 text-center`}>{t('meansPayment.main__Title')}</h1>
                    <p>www.topdrivegroup.com {t('meansPayment.introduction__Page')}.</p>
                </div>

                <div>
                    <div className="pb-2 pt-2">
                        <h4 className={`${styles.tertiary__Title} m-0`}>{t('meansPayment.title__Credit_Card')}</h4>
                        <p>{t('meansPayment.text__Credit_Card')}</p>
                        <div className="p-4 d-flex align-items-center justify-content-center gap-4">
                            <div className='d-flex flex-column align-items-center justify-content-between'>
                                <img src={Visa} alt="Visa" className={styles.creditCard} loading="lazy" />
                            </div>
                            <div className='d-flex flex-column align-items-center justify-content-between'>
                                <img src={AmericanExpress} alt="AmericanExpress" className={styles.creditCard} loading="lazy" />
                            </div>
                            <div className='d-flex flex-column align-items-center justify-content-between'>
                                <img src={DinesClub} alt="DinesClub" className={styles.creditCard} loading="lazy" />
                            </div>
                            <div className='d-flex flex-column align-items-center justify-content-between'>
                                <img src={MasterCard} alt="MasterCard" className={styles.creditCard__Mastercard} loading="lazy" />
                            </div>

                        </div>
                    </div>

                    <div className="pb-2 pt-2">
                        <h4 className={`${styles.tertiary__Title} m-0`}>{t('meansPayment.title__Accounts_Debit')}</h4>
                        <p>{t('meansPayment.text__Accounts_Debit')}</p>

                        <div className="m-auto d-flex flex-column align-items-center justify-content-between">
                            <div className="m-auto d-flex align-items-center justify-content-center">
                                <img src={PSE} alt="PSE" className={`${styles.logo__PSE} `} loading="lazy" />
                            </div>
                            
                            <PSEBanks />

                            <div className={`${styles.showBanks} m-auto`}>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h4 className={`${styles.question} m-0`}>{showBanks ? `${t('meansPayment.hide__List_Finantial_Entity')}` : `${t('meansPayment.see__List_Finantial_Entity')}`}</h4>
                                    {showBanks === false && (
                                        <FiPlus className={`${styles.icon__Show} `} onClick={handleShowBanks}/>
                                    )}
                                    {showBanks === true && (
                                        <FiMinus className={`${styles.icon__Show} `} onClick={handleHideBanks}/>
                                    )}
                                </div>

                                {showBanks && (
                                    <div className={`${styles.bank__List} d-flex align-items-center justify-content-center flex-wrap`}>
                                        <p className={styles.name__Bank}>Alianza Fiduciaria</p>
                                        <p className={styles.name__Bank}>Ban100</p>
                                        <p className={styles.name__Bank}>Bancamía</p>
                                        <p className={styles.name__Bank}>Banco Agrario de Colombia</p>
                                        <p className={styles.name__Bank}>Banco AV Villas</p>
                                        <p className={styles.name__Bank}>Banco BBVA Colombia</p>
                                        <p className={styles.name__Bank}>Banco Caja Social</p>
                                        <p className={styles.name__Bank}>Banco Cooperativo Coopcentral</p>
                                        <p className={styles.name__Bank}>Banco Davivienda</p>
                                        <p className={styles.name__Bank}>Banco de Bogotá</p>
                                        <p className={styles.name__Bank}>Banco de Occidente</p>
                                        <p className={styles.name__Bank}>Banco Falabella</p>
                                        <p className={styles.name__Bank}>Banco Finandina</p>
                                        <p className={styles.name__Bank}>Banco GNB Sudameris</p>
                                        <p className={styles.name__Bank}>Banco Itau</p>
                                        <p className={styles.name__Bank}>Banco JP Morgan Colombia</p>
                                        <p className={styles.name__Bank}>Banco Mundo Mujer</p>
                                        <p className={styles.name__Bank}>Banco Pichincha</p>
                                        <p className={styles.name__Bank}>Banco Popular</p>
                                        <p className={styles.name__Bank}>Banco Santander</p>
                                        <p className={styles.name__Bank}>Banco Serfinanza</p>
                                        <p className={styles.name__Bank}>Banco Unión</p>
                                        <p className={styles.name__Bank}>Bancolombia</p>
                                        <p className={styles.name__Bank}>Bancoomeva</p>
                                        <p className={styles.name__Bank}>CFA Cooperativa Financiera</p>
                                        <p className={styles.name__Bank}>Citibank Colombia</p>
                                        <p className={styles.name__Bank}>Coltefinanciera</p>
                                        <p className={styles.name__Bank}>Confiar Cooperativa Financiera</p>
                                        <p className={styles.name__Bank}>Coofinep Cooperativa Financiera</p>
                                        <p className={styles.name__Bank}>Cotrafa</p>
                                        <p className={styles.name__Bank}>Crezcamos SA</p>
                                        <p className={styles.name__Bank}>Dale</p>
                                        <p className={styles.name__Bank}>Iris</p>
                                        <p className={styles.name__Bank}>Lulo Bank</p>
                                        <p className={styles.name__Bank}>Movii</p>
                                        <p className={styles.name__Bank}>Scotiabank Colpatria</p>
                                        <p className={styles.name__Bank}>Ualá</p>
                                        <p className={styles.name__Bank}>Daviplata</p>
                                        <p className={styles.name__Bank}>Nequi</p>
                                        <p className={styles.name__Bank}>Rappipay</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="pb-2 pt-2">
                        <h4 className={`${styles.tertiary__Title} m-0`}>{t('meansPayment.title__Banks')}</h4>
                        <p>{t('meansPayment.text__Banks')}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MeansPaymentPage;