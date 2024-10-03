import { useTranslation } from 'react-i18next';
//ELEMENTOS DEL COMPONENTE
import AlianzaFiduciaria from '../../../../../assets/Landing/MediosPago/Bancos/AlianzaFiduciaria.png';
import AVVillas from '../../../../../assets/Landing/MediosPago/Bancos/AVVillas.png';
import Ban100 from '../../../../../assets/Landing/MediosPago/Bancos/Ban100.png';
import Bancamia from '../../../../../assets/Landing/MediosPago/Bancos/Bancamia.png';
import BancoAgrario from '../../../../../assets/Landing/MediosPago/Bancos/BancoAgrario.png';
import BancoBogota from '../../../../../assets/Landing/MediosPago/Bancos/BancoBogota.png';
import BancoCajaSocial from '../../../../../assets/Landing/MediosPago/Bancos/BancoCajaSocial.png';
import BancoCooperativoCoopcentral from '../../../../../assets/Landing/MediosPago/Bancos/BancoCooperativoCoopcentral.png';
import BancoFalabella from '../../../../../assets/Landing/MediosPago/Bancos/BancoFalabella.png';
import BancoFinandina from '../../../../../assets/Landing/MediosPago/Bancos/BancoFinandina.png';
import BancoItau from '../../../../../assets/Landing/MediosPago/Bancos/BancoItau.png';
import Bancolombia from '../../../../../assets/Landing/MediosPago/Bancos/Bancolombia.png';
import BancoMundoMujer from '../../../../../assets/Landing/MediosPago/Bancos/BancoMundoMujer.png';
import BancoOccidente from '../../../../../assets/Landing/MediosPago/Bancos/BancoOccidente.png';
import Bancoomeva from '../../../../../assets/Landing/MediosPago/Bancos/Bancoomeva.png';
import BancoPichincha from '../../../../../assets/Landing/MediosPago/Bancos/BancoPichincha.png';
import BancoPopular from '../../../../../assets/Landing/MediosPago/Bancos/BancoPopular.png';
import BancoSantander from '../../../../../assets/Landing/MediosPago/Bancos/BancoSantander.png';
import BancoSerfinanza from '../../../../../assets/Landing/MediosPago/Bancos/BancoSerfinanza.png';
import BancoUnion from '../../../../../assets/Landing/MediosPago/Bancos/BancoUnion.png';
import BBVA from '../../../../../assets/Landing/MediosPago/Bancos/BancoSantander.png';
import CFA from '../../../../../assets/Landing/MediosPago/Bancos/CFA.png';
import City from '../../../../../assets/Landing/MediosPago/Bancos/City.png';
import Coltefinanciera from '../../../../../assets/Landing/MediosPago/Bancos/Coltefinanciera.png';
import ConfiarCooperativaFinanciera from '../../../../../assets/Landing/MediosPago/Bancos/ConfiarCooperativaFinanciera.png';
import Coofinep from '../../../../../assets/Landing/MediosPago/Bancos/Coofinep.png';
import Cotrafa from '../../../../../assets/Landing/MediosPago/Bancos/Cotrafa.png';
import CrezcamosSA from '../../../../../assets/Landing/MediosPago/Bancos/CrezcamosSA.png';
import Dale from '../../../../../assets/Landing/MediosPago/Bancos/Dale.png';
import Daviplata from '../../../../../assets/Landing/MediosPago/Bancos/Daviplata.png';
import Davivienda from '../../../../../assets/Landing/MediosPago/Bancos/Davivienda.png';
import GNBSudameris from '../../../../../assets/Landing/MediosPago/Bancos/GNBSudameris.png';
import IrisNeofinanciera from '../../../../../assets/Landing/MediosPago/Bancos/IrisNeofinanciera.png';
import JPMorganColombia from '../../../../../assets/Landing/MediosPago/Bancos/JPMorganColombia.png';
import LuloBank from '../../../../../assets/Landing/MediosPago/Bancos/LuloBank.png';
import Movii from '../../../../../assets/Landing/MediosPago/Bancos/Movii.png';
import Nequi from '../../../../../assets/Landing/MediosPago/Bancos/Nequi.png';
import Rappipay from '../../../../../assets/Landing/MediosPago/Bancos/Rappipay.png';
import ScotiabankColpatria from '../../../../../assets/Landing/MediosPago/Bancos/ScotiabankColpatria.png';
import Uala from '../../../../../assets/Landing/MediosPago/Bancos/Uala.png';
import styles from './styles.module.css';

function PSEBanks() {
    const { t } = useTranslation('meansPayment');

    return (
        <div className={`${styles.container} mb-2 mt-2`}>
            <div className={`${styles.slider} m-auto overflow-hidden`}>
                <div className={`${styles.slideTrack} d-flex`}>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={AlianzaFiduciaria} alt="Alianza Fiduciaria" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={AVVillas} alt="Banco AV Villas" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Ban100} alt="Ban100" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Bancamia} alt="Bancamia" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoAgrario} alt="Banco Agrario de Colombia" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoBogota} alt="Banco de Bogotá" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoCajaSocial} alt="Banco Caja Social" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoCooperativoCoopcentral} alt="Banco Cooperativo Coopcentral" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoFalabella} alt="Banco Falabella" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoFinandina} alt="Banco Finandina" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoItau} alt="Banco Itau" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Bancolombia} alt="Bancolombia" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoMundoMujer} alt="BancoMundoMujer" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoOccidente} alt="Banco de Occidente" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Bancoomeva} alt="Bancoomeva" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoPichincha} alt="Banco Pichincha" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoPopular} alt="Banco Popular" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoSantander} alt="Banco Santander" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoSerfinanza} alt="Banco Serfinanza" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoUnion} alt="Banco Union" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BBVA} alt="Banco BBVA" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={CFA} alt="CFA Cooperativa Financiera" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={City} alt="City Bank" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Coltefinanciera} alt="Coltefinanciera" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={ConfiarCooperativaFinanciera} alt="Confiar Cooperativa Financiera" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Coofinep} alt="Coofinep Cooperativa Financiera" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Cotrafa} alt="Cotrafa" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={CrezcamosSA} alt="Crezcamos SA" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Dale} alt="Dale" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Daviplata} alt="Daviplata" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Davivienda} alt="Banco Davivienda" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={GNBSudameris} alt="Banco GNB Sudameris" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={IrisNeofinanciera} alt="Iris Neofinanciera" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={JPMorganColombia} alt="Banco JP Morgan Colombia" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={LuloBank} alt="Lulo Bank" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Movii} alt="Movii" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Nequi} alt="Nequi" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Rappipay} alt="Rappipay" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={ScotiabankColpatria} alt="Scotiabank Colpatria" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Uala} alt="Uala" loading="lazy" />
                    </div>


                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={AlianzaFiduciaria} alt="Alianza Fiduciaria" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={AVVillas} alt="Banco AV Villas" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Ban100} alt="Ban100" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Bancamia} alt="Bancamia" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoAgrario} alt="Banco Agrario de Colombia" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoBogota} alt="Banco de Bogotá" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoCajaSocial} alt="Banco Caja Social" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoCooperativoCoopcentral} alt="Banco Cooperativo Coopcentral" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoFalabella} alt="Banco Falabella" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoFinandina} alt="Banco Finandina" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoItau} alt="Banco Itau" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Bancolombia} alt="Bancolombia" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoMundoMujer} alt="BancoMundoMujer" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoOccidente} alt="Banco de Occidente" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Bancoomeva} alt="Bancoomeva" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoPichincha} alt="Banco Pichincha" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoPopular} alt="Banco Popular" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoSantander} alt="Banco Santander" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoSerfinanza} alt="Banco Serfinanza" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BancoUnion} alt="Banco Union" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={BBVA} alt="Banco BBVA" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={CFA} alt="CFA Cooperativa Financiera" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={City} alt="City Bank" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Coltefinanciera} alt="Coltefinanciera" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={ConfiarCooperativaFinanciera} alt="Confiar Cooperativa Financiera" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Coofinep} alt="Coofinep Cooperativa Financiera" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Cotrafa} alt="Cotrafa" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={CrezcamosSA} alt="Crezcamos SA" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Dale} alt="Dale" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Daviplata} alt="Daviplata" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Davivienda} alt="Banco Davivienda" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={GNBSudameris} alt="Banco GNB Sudameris" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={IrisNeofinanciera} alt="Iris Neofinanciera" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={JPMorganColombia} alt="Banco JP Morgan Colombia" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={LuloBank} alt="Lulo Bank" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Movii} alt="Movii" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Nequi} alt="Nequi" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Rappipay} alt="Rappipay" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={ScotiabankColpatria} alt="Scotiabank Colpatria" loading="lazy" />
                    </div>
                    <div className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.img} `} src={Uala} alt="Uala" loading="lazy" />
                    </div>                    
                </div>
            </div>

            <div>
                <p className='text-center'>{t('meansPayment.text__Payments')}</p>
            </div>
        </div>
    );
}

export default PSEBanks;