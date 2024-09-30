import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
//ELEMENTOS DEL COMPONENTE
import TDWire from '../../../assets/Landing/06Allies/TDWire.png';
import Southwire from '../../../assets/Landing/06Allies/Southwire.png';
import Prysmian from '../../../assets/Landing/06Allies/Prysmian.png';
import Teldor from '../../../assets/Landing/06Allies/Teldor.png';
import Aristoncavi from '../../../assets/Landing/06Allies/Aristoncavi.png';
import Emcocables from '../../../assets/Landing/06Allies/Empocables.png';
import ZTT from '../../../assets/Landing/06Allies/ZTT.png';
import Hengtong from '../../../assets/Landing/06Allies/Hengtong.png';
import FutureFibresTechnologies from '../../../assets/Landing/06Allies/FutureFibresTechnologies.png';
import Mecano from '../../../assets/Landing/06Allies/Mecano.png';
import Tenaris from '../../../assets/Landing/06Allies/Tenaris.png';
import Tecna from '../../../assets/Landing/06Allies/Tecna.png';
import Roxtec from '../../../assets/Landing/06Allies/Roxtec.png';
import MCS from '../../../assets/Landing/06Allies/MCS.png';
import TEConnectivity from '../../../assets/Landing/06Allies/TEConnectivity.png';
import BornasTerminales from '../../../assets/Landing/06Allies/BornasTerminales.png';
import SoldexEl from '../../../assets/Landing/06Allies/SoldexEl.png';
import Dialight from '../../../assets/Landing/06Allies/Dialight.png';
import Sylvania from '../../../assets/Landing/06Allies/Sylvania.png';
import AEL from '../../../assets/Landing/06Allies/AEL.png';
import Lithonia from '../../../assets/Landing/06Allies/Lithonia.png';
import Rockwell from '../../../assets/Landing/06Allies/Rockwell.png';
import Siemens from '../../../assets/Landing/06Allies/Siemens.png';
import ABB from '../../../assets/Landing/06Allies/ABB.png';
import Weidmuller from '../../../assets/Landing/06Allies/Weidmuller.png';
import AcuityControls from '../../../assets/Landing/06Allies/AcuityControls.png';
import Omnio from '../../../assets/Landing/06Allies/Omnio.png';
import Rittal from '../../../assets/Landing/06Allies/Rittal.png';
import Dyminel from '../../../assets/Landing/06Allies/Dyminel.jpg';
import ColdJet from '../../../assets/Landing/06Allies/ColdJet.png';
import TresM from '../../../assets/Landing/06Allies/3M.png';
import Adler from '../../../assets/Landing/06Allies/Adler.png';
import styles from './styles.module.css';

function Allies() {
    const { t } = useTranslation('allies');

    return (
        <div className={`${styles.container} `}>
            <div>
                <h3 className={`${styles.main__Title} m-0 text-center`}>{t('allies.main__Title')}</h3>
                <p className='m-0 text-center'>{t('allies.number__Associated_Brands')}</p>
            </div>
            
            {/* TENER PRESENTE QUE LAS IMAGENES SE DEBEN DE DUBLICAR, SON 33 IMAGENES, ENTONCES LUEGO DE CREAR LOS 33 DIVS, DEBO COPIAR LOS 33 Y PEGARLOS, PARA QUE DENTRO DEL DIV "slideTrack" QUEDEN 66 */}
            <div className={`${styles.slider} mt-3 m-auto overflow-hidden`}>
                <div className={`${styles.slide__Track} d-flex`}>
                    <Link to='https://tdwire.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={TDWire} alt="TDWire" loading="lazy" />
                    </Link>
                    <Link to='https://www.southwire.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Southwire} alt="Southwire" loading="lazy" />
                    </Link>
                    <Link to='https://www.prysmian.com/en/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Prysmian} alt="Prysmian" loading="lazy" />
                    </Link>
                    <Link to='https://www.teldor.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Teldor} alt="Teldor" loading="lazy" />
                    </Link>
                    <Link to='https://www.aristoncavi.com/es/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Aristoncavi} alt="Aristoncavi" loading="lazy" />
                    </Link>
                    <Link to='https://emcocables.co/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Emcocables} alt="Emcocables" loading="lazy" />
                    </Link>
                    <Link to='https://www.zttcable.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={ZTT} alt="ZTT" loading="lazy" />
                    </Link>
                    <Link to='http://www.hengtonggroup.com/en/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Hengtong} alt="Hengtong" loading="lazy" />
                    </Link>
                    <Link to='https://www.fftsecurity.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={FutureFibresTechnologies} alt="FutureFibresTechnologies" loading="lazy" />
                    </Link>
                    <Link to='https://www.mecano.co/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Mecano} alt="Mecano" loading="lazy" />
                    </Link>
                    <Link to='https://www.tenaris.com/es' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Tenaris} alt="Tenaris" loading="lazy" />
                    </Link>
                    <Link to='http://www.tecnaperu.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Tecna} alt="Tecna" loading="lazy" />
                    </Link>
                    <Link to='https://www.roxtec.com/es/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Roxtec} alt="Roxtec" loading="lazy" />
                    </Link>
                    <Link to='https://www.minecableservices.ca/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={MCS} alt="MCS" loading="lazy" />
                    </Link>
                    <Link to='https://www.te.com/es/home.html/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={TEConnectivity} alt="TEConnectivity" loading="lazy" />
                    </Link>
                    <Link to='https://bornasyterminales.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={BornasTerminales} alt="BornasTerminales" loading="lazy" />
                    </Link>
                    <Link to='https://soldexel.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={SoldexEl} alt="SoldexEl" loading="lazy" />
                    </Link>
                    <Link to='https://www.dialight.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Dialight} alt="Dialight" loading="lazy" />
                    </Link>
                    <Link to='https://sylvania-colombia.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Sylvania} alt="Sylvania" loading="lazy" />
                    </Link>
                    <Link to='https://www.grupo-ael.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={AEL} alt="AEL" loading="lazy" />
                    </Link>
                    <Link to='https://lithonia.acuitybrands.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Lithonia} alt="Lithonia" loading="lazy" />
                    </Link>
                    <Link to='https://www.rockwellautomation.com/es-co.html/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Rockwell} alt="Rockwell" loading="lazy" />
                    </Link>
                    <Link to='https://www.siemens.com/co/es.html/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Siemens} alt="Siemens" loading="lazy" />
                    </Link>
                    <Link to='https://new.abb.com/south-america/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={ABB} alt="ABB" loading="lazy" />
                    </Link>
                    <Link to='https://www.weidmuller.es/es/index.jsp/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Weidmuller} alt="Weidmuller" loading="lazy" />
                    </Link>
                    <Link to='https://www.acuitybrands.com/products/controls/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={AcuityControls} alt="AcuityControls" loading="lazy" />
                    </Link>
                    <Link to='https://www.omnionpower.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Omnio} alt="Omnio" loading="lazy" />
                    </Link>
                    <Link to='https://www.rittal.com/es-es/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Rittal} alt="Rittal" loading="lazy" />
                    </Link>
                    <Link to='https://dyminel.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Dyminel} alt="Dyminel" loading="lazy" />
                    </Link>
                    <Link to='https://www.coldjet.com/es/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={ColdJet} alt="ColdJet" loading="lazy" />
                    </Link>
                    <Link to='https://www.3m.com.co/3M/es_CO/inicio/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={TresM} alt="3M" loading="lazy" />
                    </Link>
                    <Link to='https://adlertec.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Adler} alt="Adler" loading="lazy" />
                    </Link>

                    <Link to='https://tdwire.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={TDWire} alt="TDWire" loading="lazy" />
                    </Link>
                    <Link to='https://www.southwire.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Southwire} alt="Southwire" loading="lazy" />
                    </Link>
                    <Link to='https://www.prysmian.com/en' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Prysmian} alt="Prysmian" loading="lazy" />
                    </Link>
                    <Link to='https://www.teldor.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Teldor} alt="Teldor" loading="lazy" />
                    </Link>
                    <Link to='https://www.aristoncavi.com/es/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Aristoncavi} alt="Aristoncavi" loading="lazy" />
                    </Link>
                    <Link to='https://emcocables.co/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Emcocables} alt="Emcocables" loading="lazy" />
                    </Link>
                    <Link to='https://www.zttcable.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={ZTT} alt="ZTT" loading="lazy" />
                    </Link>
                    <Link to='http://www.hengtonggroup.com/en/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Hengtong} alt="Hengtong" loading="lazy" />
                    </Link>
                    <Link to='https://www.fftsecurity.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={FutureFibresTechnologies} alt="FutureFibresTechnologies" loading="lazy" />
                    </Link>
                    <Link to='https://www.mecano.co/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Mecano} alt="Mecano" loading="lazy" />
                    </Link>
                    <Link to='https://www.tenaris.com/es' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Tenaris} alt="Tenaris" loading="lazy" />
                    </Link>
                    <Link to='http://www.tecnaperu.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Tecna} alt="Tecna" loading="lazy" />
                    </Link>
                    <Link to='https://www.roxtec.com/es/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Roxtec} alt="Roxtec" loading="lazy" />
                    </Link>
                    <Link to='https://www.minecableservices.ca/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={MCS} alt="MCS" loading="lazy" />
                    </Link>
                    <Link to='https://www.te.com/es/home.html/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={TEConnectivity} alt="TEConnectivity" loading="lazy" />
                    </Link>
                    <Link to='https://bornasyterminales.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={BornasTerminales} alt="BornasTerminales" loading="lazy" />
                    </Link>
                    <Link to='https://soldexel.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={SoldexEl} alt="SoldexEl" loading="lazy" />
                    </Link>
                    <Link to='https://www.dialight.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Dialight} alt="Dialight" loading="lazy" />
                    </Link>
                    <Link to='https://sylvania-colombia.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Sylvania} alt="Sylvania" loading="lazy" />
                    </Link>
                    <Link to='https://www.grupo-ael.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={AEL} alt="AEL" loading="lazy" />
                    </Link>
                    <Link to='https://lithonia.acuitybrands.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Lithonia} alt="Lithonia" loading="lazy" />
                    </Link>
                    <Link to='https://www.rockwellautomation.com/es-co.html/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Rockwell} alt="Rockwell" loading="lazy" />
                    </Link>
                    <Link to='https://www.siemens.com/co/es.html/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Siemens} alt="Siemens" loading="lazy" />
                    </Link>
                    <Link to='https://new.abb.com/south-america/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={ABB} alt="ABB" loading="lazy" />
                    </Link>
                    <Link to='https://www.weidmuller.es/es/index.jsp/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Weidmuller} alt="Weidmuller" loading="lazy" />
                    </Link>
                    <Link to='https://www.acuitybrands.com/products/controls/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={AcuityControls} alt="AcuityControls" loading="lazy" />
                    </Link>
                    <Link to='https://www.omnionpower.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Omnio} alt="Omnio" loading="lazy" />
                    </Link>
                    <Link to='https://www.rittal.com/es-es/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Rittal} alt="Rittal" loading="lazy" />
                    </Link>
                    <Link to='https://dyminel.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Dyminel} alt="Dyminel" loading="lazy" />
                    </Link>
                    <Link to='https://www.coldjet.com/es/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={ColdJet} alt="ColdJet" loading="lazy" />
                    </Link>
                    <Link to='https://www.3m.com.co/3M/es_CO/inicio/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={TresM} alt="3M" loading="lazy" />
                    </Link>
                    <Link to='https://adlertec.com/' target="blank" rel="noopener noreferrer" className={`${styles.slide} p-2 d-flex align-items-center justify-content-center`}>
                        <img className={`${styles.image} `} src={Adler} alt="Adler" loading="lazy" />
                    </Link>
                </div>
            </div>

            <div>
                <p className='m-0 text-center'>{t('allies.paragraph__Component')}</p>
            </div>
        </div>
    );
}

export default Allies;