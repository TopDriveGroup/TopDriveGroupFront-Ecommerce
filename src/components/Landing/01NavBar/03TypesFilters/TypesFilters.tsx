/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineNavigateNext } from "react-icons/md";
import styles from './styles.module.css';

interface TypesFiltersProps {
    closeModal: () => void;
}

function TypesFilters({ closeModal }: TypesFiltersProps) {
    const [subMenusVisible, setSubMenusVisible] = useState({
        accessories: false,
        switchgearConnection: false,
        switchgearEnergy: false,
        switchgearManeuver: false,
        switchgearProtection: false,
        wiring: false,
        consumables: false,
        controlMotor: false,
        automationEquipment: false,
        communicationEquipment: false,
        energyEquipment: false,
        tools: false,
        lighting: false,
        machines: false,
        boards: false,
        // Agrega más submenús aquí si es necesario
    });

    const modalRef = useRef<HTMLDivElement>(null);

    const handleSubMenuVisibleMouseEnter = (subMenu: string) => {
        setSubMenusVisible(prevState => ({
            ...prevState,
            [subMenu]: true
        }));
    };

    const handleSubMenuVisibleMouseLeave = (subMenu: string) => {
        setSubMenusVisible(prevState => ({
            ...prevState,
            [subMenu]: false
        }));
    };

    // Manejar clics fuera del modal para cerrarlo
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current instanceof HTMLElement && !modalRef.current.contains(event.target as Node)) {
                closeModal();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalRef]);

    return (
        <div className={`${styles.container} d-flex flex-column align-items-start justify-content-start`} ref={modalRef}>
            <div className={`${styles.submenu__Option} `} ref={modalRef}>
                <div
                    onMouseEnter={() => handleSubMenuVisibleMouseEnter('switchgearConnection')}
                    onMouseLeave={() => handleSubMenuVisibleMouseLeave('switchgearConnection')}
                    className={`${styles.title__Class} d-flex align-items-center justify-content-between`}
                >
                    Aparamenta de conexión <MdOutlineNavigateNext />
                </div>
                {subMenusVisible.switchgearConnection && (
                    <div
                        className={`${styles.submenu__Switchgear_Connection} position-absolute`}
                        onMouseEnter={() => handleSubMenuVisibleMouseEnter('switchgearConnection')}
                        onMouseLeave={() => handleSubMenuVisibleMouseLeave('switchgearConnection')}
                    >
                        <div className={styles.container__Title_Submenu}>
                            <p className={`${styles.title__Class_Expanded} `}>Aparamenta de conexión</p>
                            <Link to='/categoria/aparamenta-de-conexion' className={styles.see_All_Classes}>Ver todo</Link>
                        </div>
                        <div className='pt-3 d-flex flex-column gap-4'>
                            <div className='d-flex border rounded'>
                                <div>
                                    <Link to='/categoria/aparamenta-de-conexion/título-categoría-1' className={styles.title__Category}>(TUBERÍA) Título Categoría 1</Link>
                                    <div className={styles.container__Types}>
                                        <Link to='/categoria/aparamenta-de-conexion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                        <Link to='/categoria/aparamenta-de-conexion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                        <Link to='/categoria/aparamenta-de-conexion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                        <Link to='/categoria/aparamenta-de-conexion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    </div>
                                </div>
                                <div>
                                    <Link to='/categoria/aparamenta-de-conexion/título-categoría-1' className={styles.title__Category}>Accesorio de esa categoría</Link>
                                    <div className={styles.container__Types}>
                                        <Link to='/categoria/aparamenta-de-conexion/título-categoría-1/tipo' className={styles.title__Type}>Accesorio</Link>
                                        <Link to='/categoria/aparamenta-de-conexion/título-categoría-1/tipo' className={styles.title__Type}>Accesorio</Link>
                                        <Link to='/categoria/aparamenta-de-conexion/título-categoría-1/tipo' className={styles.title__Type}>Accesorio</Link>
                                        <Link to='/categoria/aparamenta-de-conexion/título-categoría-1/tipo' className={styles.title__Type}>Accesorio</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div>
                                    <Link to='/categoria/aparamenta-de-conexion/título-categoría-1' className={styles.title__Category}>(BANDEJAS) Título Categoría 1</Link>
                                    <div className={styles.container__Types}>
                                        <Link to='/categoria/aparamenta-de-conexion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                        <Link to='/categoria/aparamenta-de-conexion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                        <Link to='/categoria/aparamenta-de-conexion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                        <Link to='/categoria/aparamenta-de-conexion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    </div>
                                </div>
                                <div>
                                    <Link to='/categoria/aparamenta-de-conexion/título-categoría-1' className={styles.title__Category}>Accesorio de esa categoría</Link>
                                    <div className={styles.container__Types}>
                                        <Link to='/categoria/aparamenta-de-conexion/título-categoría-1/tipo' className={styles.title__Type}>Accesorio</Link>
                                        <Link to='/categoria/aparamenta-de-conexion/título-categoría-1/tipo' className={styles.title__Type}>Accesorio</Link>
                                        <Link to='/categoria/aparamenta-de-conexion/título-categoría-1/tipo' className={styles.title__Type}>Accesorio</Link>
                                        <Link to='/categoria/aparamenta-de-conexion/título-categoría-1/tipo' className={styles.title__Type}>Accesorio</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={`${styles.submenu__Option} `}>
                <div
                    onMouseEnter={() => handleSubMenuVisibleMouseEnter('switchgearEnergy')}
                    onMouseLeave={() => handleSubMenuVisibleMouseLeave('switchgearEnergy')}
                    className={`${styles.title__Class} d-flex align-items-center justify-content-between`}
                >
                    Aparamenta de energía <MdOutlineNavigateNext />
                </div>
                {subMenusVisible.switchgearEnergy && (
                    <div 
                        className={`${styles.submenu__Switchgear_Energy} position-absolute`}
                        onMouseEnter={() => handleSubMenuVisibleMouseEnter('switchgearEnergy')}
                        onMouseLeave={() => handleSubMenuVisibleMouseLeave('switchgearEnergy')}
                    >
                        <div className={styles.container__Title_Submenu}>
                            <p className={`${styles.title__Class_Expanded} `}>Aparamenta de energía</p>
                            <Link to='/categoria/aparamenta-de-energia' className={styles.see_All_Classes}>Ver todo</Link>
                        </div>
                        <div className='pt-3 d-flex gap-4'>
                            <div>
                                <Link to='/categoria/aparamenta-de-energia/título-categoría-1' className={styles.title__Category}>Título Categoría 1</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/aparamenta-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/aparamenta-de-energia/título-categoría-1' className={styles.title__Category}>Categoría 2</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/aparamenta-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/aparamenta-de-energia/título-categoría-1' className={styles.title__Category}>Categoría 3</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/aparamenta-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={`${styles.submenu__Option} `}>
                <div
                    onMouseEnter={() => handleSubMenuVisibleMouseEnter('switchgearManeuver')}
                    onMouseLeave={() => handleSubMenuVisibleMouseLeave('switchgearManeuver')}
                    className={`${styles.title__Class} d-flex align-items-center justify-content-between`}
                >
                    Aparamenta de maniobra <MdOutlineNavigateNext />
                </div>
                {subMenusVisible.switchgearManeuver && (
                    <div 
                        className={`${styles.submenu__Switchgear_Maneuver} position-absolute`}
                        onMouseEnter={() => handleSubMenuVisibleMouseEnter('switchgearManeuver')}
                        onMouseLeave={() => handleSubMenuVisibleMouseLeave('switchgearManeuver')}
                    >
                        <div className={styles.container__Title_Submenu}>
                            <p className={`${styles.title__Class_Expanded} `}>Aparamenta de maniobra</p>
                            <Link to='/categoria/aparamenta-de-maniobra' className={styles.see_All_Classes}>Ver todo</Link>
                        </div>
                        <div className='pt-3 d-flex gap-4'>
                            <div>
                                <Link to='/categoria/aparamenta-de-maniobra/título-categoría-1' className={styles.title__Category}>Título Categoría 1</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/aparamenta-de-maniobra/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-maniobra/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-maniobra/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-maniobra/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/aparamenta-de-maniobra/título-categoría-1' className={styles.title__Category}>Categoría 2</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/aparamenta-de-maniobra/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-maniobra/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-maniobra/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-maniobra/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/aparamenta-de-maniobra/título-categoría-1' className={styles.title__Category}>Categoría 3</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/aparamenta-de-maniobra/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-maniobra/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-maniobra/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-maniobra/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={`${styles.submenu__Option} `}>
                <div
                    onMouseEnter={() => handleSubMenuVisibleMouseEnter('switchgearProtection')}
                    onMouseLeave={() => handleSubMenuVisibleMouseLeave('switchgearProtection')}
                    className={`${styles.title__Class} d-flex align-items-center justify-content-between`}
                >
                    Aparamenta de protección <MdOutlineNavigateNext />
                </div>
                {subMenusVisible.switchgearProtection && (
                    <div 
                        className={`${styles.submenu__Switchgear_Protection} position-absolute`}
                        onMouseEnter={() => handleSubMenuVisibleMouseEnter('switchgearProtection')}
                        onMouseLeave={() => handleSubMenuVisibleMouseLeave('switchgearProtection')}
                    >
                        <div className={styles.container__Title_Submenu}>
                            <p className={`${styles.title__Class_Expanded} `}>Aparamenta de protección</p>
                            <Link to='/categoria/aparamenta-de-proteccion' className={styles.see_All_Classes}>Ver todo</Link>
                        </div>
                        <div className='pt-3 d-flex gap-4'>
                            <div>
                                <Link to='/categoria/aparamenta-de-proteccion/título-categoría-1' className={styles.title__Category}>Título Categoría 1</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/aparamenta-de-proteccion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-proteccion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-proteccion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-proteccion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/aparamenta-de-proteccion/título-categoría-1' className={styles.title__Category}>Categoría 2</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/aparamenta-de-proteccion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-proteccion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-proteccion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-proteccion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/aparamenta-de-proteccion/título-categoría-1' className={styles.title__Category}>Categoría 3</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/aparamenta-de-proteccion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-proteccion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-proteccion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/aparamenta-de-proteccion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={`${styles.submenu__Option} `}>
                <div
                    onMouseEnter={() => handleSubMenuVisibleMouseEnter('wiring')}
                    onMouseLeave={() => handleSubMenuVisibleMouseLeave('wiring')}
                    className={`${styles.title__Class} d-flex align-items-center justify-content-between`}
                >
                    Cableado <MdOutlineNavigateNext />
                </div>
                {subMenusVisible.wiring && (
                    <div 
                        className={`${styles.submenu__Wiring} position-absolute`}
                        onMouseEnter={() => handleSubMenuVisibleMouseEnter('wiring')}
                        onMouseLeave={() => handleSubMenuVisibleMouseLeave('wiring')}
                    >
                        <div className={styles.container__Title_Submenu}>
                            <p className={`${styles.title__Class_Expanded} `}>Cableado</p>
                            <Link to='/categoria/cableado' className={styles.see_All_Classes}>Ver todo</Link>
                        </div>
                        <div className='pt-3 d-flex gap-4'>
                            <div>
                                <Link to='/categoria/cableado/título-categoría-1' className={styles.title__Category}>Título Categoría 1</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/cableado/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/cableado/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/cableado/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/cableado/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/cableado/título-categoría-1' className={styles.title__Category}>Categoría 2</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/cableado/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/cableado/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/cableado/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/cableado/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/cableado/título-categoría-1' className={styles.title__Category}>Categoría 3</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/cableado/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/cableado/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/cableado/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/cableado/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={`${styles.submenu__Option} `}>
                <div
                    onMouseEnter={() => handleSubMenuVisibleMouseEnter('consumables')}
                    onMouseLeave={() => handleSubMenuVisibleMouseLeave('consumables')}
                    className={`${styles.title__Class} d-flex align-items-center justify-content-between`}
                >
                    Consumibles <MdOutlineNavigateNext />
                </div>
                {subMenusVisible.consumables && (
                    <div 
                        className={`${styles.submenu__Consumables} position-absolute`}
                        onMouseEnter={() => handleSubMenuVisibleMouseEnter('consumables')}
                        onMouseLeave={() => handleSubMenuVisibleMouseLeave('consumables')}
                    >
                        <div className={styles.container__Title_Submenu}>
                            <p className={`${styles.title__Class_Expanded} `}>Consumibles</p>
                            <Link to='/categoria/consumibles' className={styles.see_All_Classes}>Ver todo</Link>
                        </div>
                        <div className='pt-3 d-flex gap-4'>
                            <div>
                                <Link to='/categoria/consumibles/título-categoría-1' className={styles.title__Category}>Título Categoría 1</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/consumibles/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/consumibles/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/consumibles/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/consumibles/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/consumibles/título-categoría-1' className={styles.title__Category}>Categoría 2</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/consumibles/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/consumibles/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/consumibles/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/consumibles/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/consumibles/título-categoría-1' className={styles.title__Category}>Categoría 3</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/consumibles/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/consumibles/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/consumibles/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/consumibles/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={`${styles.submenu__Option} `}>
                <div
                    onMouseEnter={() => handleSubMenuVisibleMouseEnter('controlMotor')}
                    onMouseLeave={() => handleSubMenuVisibleMouseLeave('controlMotor')}
                    className={`${styles.title__Class} d-flex align-items-center justify-content-between`}
                >
                    Control motor <MdOutlineNavigateNext />
                </div>
                {subMenusVisible.controlMotor && (
                    <div 
                        className={`${styles.submenu__Control_Motor} position-absolute`}
                        onMouseEnter={() => handleSubMenuVisibleMouseEnter('controlMotor')}
                        onMouseLeave={() => handleSubMenuVisibleMouseLeave('controlMotor')}
                    >
                        <div className={styles.container__Title_Submenu}>
                            <p className={`${styles.title__Class_Expanded} `}>Control motor</p>
                            <Link to='/categoria/control-motor' className={styles.see_All_Classes}>Ver todo</Link>
                        </div>
                        <div className='pt-3 d-flex gap-4'>
                            <div>
                                <Link to='/categoria/control-motor/título-categoría-1' className={styles.title__Category}>Título Categoría 1</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/control-motor/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/control-motor/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/control-motor/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/control-motor/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/control-motor/título-categoría-1' className={styles.title__Category}>Categoría 2</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/control-motor/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/control-motor/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/control-motor/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/control-motor/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/control-motor/título-categoría-1' className={styles.title__Category}>Categoría 3</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/control-motor/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/control-motor/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/control-motor/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/control-motor/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={`${styles.submenu__Option} `}>
                <div
                    onMouseEnter={() => handleSubMenuVisibleMouseEnter('automationEquipment')}
                    onMouseLeave={() => handleSubMenuVisibleMouseLeave('automationEquipment')}
                    className={`${styles.title__Class} d-flex align-items-center justify-content-between`}
                >
                    Equipos de automatización <MdOutlineNavigateNext />
                </div>
                {subMenusVisible.automationEquipment && (
                    <div
                        className={`${styles.submenu__Automation_Equipment} position-absolute`}
                        onMouseEnter={() => handleSubMenuVisibleMouseEnter('automationEquipment')}
                        onMouseLeave={() => handleSubMenuVisibleMouseLeave('automationEquipment')}
                    >
                        <div className={styles.container__Title_Submenu}>
                            <p className={`${styles.title__Class_Expanded} `}>Equipos de automatización</p>
                            <Link to='/categoria/equipos-de-automatizacion' className={styles.see_All_Classes}>Ver todo</Link>
                        </div>
                        <div className='pt-3 d-flex gap-4'>
                            <div>
                                <Link to='/categoria/equipos-de-automatizacion/título-categoría-1' className={styles.title__Category}>Título Categoría 1</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/equipos-de-automatizacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-automatizacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-automatizacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-automatizacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/equipos-de-automatizacion/título-categoría-1' className={styles.title__Category}>Categoría 2</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/equipos-de-automatizacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-automatizacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-automatizacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-automatizacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/equipos-de-automatizacion/título-categoría-1' className={styles.title__Category}>Categoría 3</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/equipos-de-automatizacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-automatizacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-automatizacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-automatizacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={`${styles.submenu__Option} `}>
                <div
                    onMouseEnter={() => handleSubMenuVisibleMouseEnter('communicationEquipment')}
                    onMouseLeave={() => handleSubMenuVisibleMouseLeave('communicationEquipment')}
                    className={`${styles.title__Class} d-flex align-items-center justify-content-between`}
                >
                    Equipos de comunicación <MdOutlineNavigateNext />
                </div>
                {subMenusVisible.communicationEquipment && (
                    <div 
                        className={`${styles.submenu__Communication_Equipment} position-absolute`}
                        onMouseEnter={() => handleSubMenuVisibleMouseEnter('communicationEquipment')}
                        onMouseLeave={() => handleSubMenuVisibleMouseLeave('communicationEquipment')}
                    >
                        <div className={styles.container__Title_Submenu}>
                            <p className={`${styles.title__Class_Expanded} `}>Equipos de comunicación</p>
                            <Link to='/categoria/equipos-de-comunicacion' className={styles.see_All_Classes}>Ver todo</Link>
                        </div>
                        <div className='pt-3 d-flex gap-4'>
                            <div>
                                <Link to='/categoria/equipos-de-comunicacion/título-categoría-1' className={styles.title__Category}>Título Categoría 1</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/equipos-de-comunicacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-comunicacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-comunicacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-comunicacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/equipos-de-comunicacion/título-categoría-1' className={styles.title__Category}>Categoría 2</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/equipos-de-comunicacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-comunicacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-comunicacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-comunicacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/equipos-de-comunicacion/título-categoría-1' className={styles.title__Category}>Categoría 3</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/equipos-de-comunicacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-comunicacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-comunicacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-comunicacion/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={`${styles.submenu__Option} `}>
                <div
                    onMouseEnter={() => handleSubMenuVisibleMouseEnter('energyEquipment')}
                    onMouseLeave={() => handleSubMenuVisibleMouseLeave('energyEquipment')}
                    className={`${styles.title__Class} d-flex align-items-center justify-content-between`}
                >
                    Equipos de energía <MdOutlineNavigateNext />
                </div>
                {subMenusVisible.energyEquipment && (
                    <div 
                        className={`${styles.submenu__Energy_Equipment} position-absolute`}
                        onMouseEnter={() => handleSubMenuVisibleMouseEnter('energyEquipment')}
                        onMouseLeave={() => handleSubMenuVisibleMouseLeave('energyEquipment')}
                    >
                        <div className={styles.container__Title_Submenu}>
                            <p className={`${styles.title__Class_Expanded} `}>Equipos de energía</p>
                            <Link to='/categoria/equipos-de-energia' className={styles.see_All_Classes}>Ver todo</Link>
                        </div>
                        <div className='pt-3 d-flex gap-4'>
                            <div>
                                <Link to='/categoria/equipos-de-energia/título-categoría-1' className={styles.title__Category}>Título Categoría 1</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/equipos-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/equipos-de-energia/título-categoría-1' className={styles.title__Category}>Categoría 2</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/equipos-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/equipos-de-energia/título-categoría-1' className={styles.title__Category}>Categoría 3</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/equipos-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/equipos-de-energia/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={`${styles.submenu__Option} `}>
                <div
                    onMouseEnter={() => handleSubMenuVisibleMouseEnter('tools')}
                    onMouseLeave={() => handleSubMenuVisibleMouseLeave('tools')}
                    className={`${styles.title__Class} d-flex align-items-center justify-content-between`}
                >
                    Herramientas <MdOutlineNavigateNext />
                </div>
                {subMenusVisible.tools && (
                    <div 
                        className={`${styles.submenu__Tools} position-absolute`}
                        onMouseEnter={() => handleSubMenuVisibleMouseEnter('tools')}
                        onMouseLeave={() => handleSubMenuVisibleMouseLeave('tools')}
                    >
                        <div className={styles.container__Title_Submenu}>
                            <p className={`${styles.title__Class_Expanded} `}>Herramientas</p>
                            <Link to='/categoria/herramientas' className={styles.see_All_Classes}>Ver todo</Link>
                        </div>
                        <div className='pt-3 d-flex gap-4'>
                            <div>
                                <Link to='/categoria/herramientas/título-categoría-1' className={styles.title__Category}>Título Categoría 1</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/herramientas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/herramientas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/herramientas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/herramientas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/herramientas/título-categoría-1' className={styles.title__Category}>Categoría 2</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/herramientas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/herramientas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/herramientas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/herramientas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/herramientas/título-categoría-1' className={styles.title__Category}>Categoría 3</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/herramientas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/herramientas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/herramientas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/herramientas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={`${styles.submenu__Option} `}>
                <div
                    onMouseEnter={() => handleSubMenuVisibleMouseEnter('lighting')}
                    onMouseLeave={() => handleSubMenuVisibleMouseLeave('lighting')}
                    className={`${styles.title__Class} d-flex align-items-center justify-content-between`}
                >
                    Iluminación <MdOutlineNavigateNext />
                </div>
                {subMenusVisible.lighting && (
                    <div 
                        className={`${styles.submenu__Lighting} position-absolute`}
                        onMouseEnter={() => handleSubMenuVisibleMouseEnter('lighting')}
                        onMouseLeave={() => handleSubMenuVisibleMouseLeave('lighting')}
                    >
                        <div className={styles.container__Title_Submenu}>
                            <p className={`${styles.title__Class_Expanded} `}>Iluminación</p>
                            <Link to='/categoria/illumination' className={styles.see_All_Classes}>Ver todo</Link>
                        </div>
                        <div className='pt-3 d-flex gap-4'>
                            <div>
                                <Link to='/categoria/illumination/título-categoría-1' className={styles.title__Category}>Título Categoría 1</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/illumination/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/illumination/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/illumination/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/illumination/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/illumination/título-categoría-1' className={styles.title__Category}>Categoría 2</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/illumination/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/illumination/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/illumination/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/illumination/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/illumination/título-categoría-1' className={styles.title__Category}>Categoría 3</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/illumination/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/illumination/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/illumination/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/illumination/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={`${styles.submenu__Option} `}>
                <div
                    onMouseEnter={() => handleSubMenuVisibleMouseEnter('machines')}
                    onMouseLeave={() => handleSubMenuVisibleMouseLeave('machines')}
                    className={`${styles.title__Class} d-flex align-items-center justify-content-between`}
                >
                    Máquinas <MdOutlineNavigateNext />
                </div>
                {subMenusVisible.machines && (
                    <div 
                        className={`${styles.submenu__Machines} position-absolute`}
                        onMouseEnter={() => handleSubMenuVisibleMouseEnter('machines')}
                        onMouseLeave={() => handleSubMenuVisibleMouseLeave('machines')}
                    >
                        <div className={styles.container__Title_Submenu}>
                            <p className={`${styles.title__Class_Expanded} `}>Máquinas</p>
                            <Link to='/categoria/maquinas' className={styles.see_All_Classes}>Ver todo</Link>
                        </div>
                        <div className='pt-3 d-flex gap-4'>
                            <div>
                                <Link to='/categoria/maquinas/título-categoría-1' className={styles.title__Category}>Título Categoría 1</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/maquinas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/maquinas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/maquinas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/maquinas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/maquinas/título-categoría-1' className={styles.title__Category}>Categoría 2</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/maquinas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/maquinas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/maquinas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/maquinas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/maquinas/título-categoría-1' className={styles.title__Category}>Categoría 3</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/maquinas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/maquinas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/maquinas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/maquinas/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={`${styles.submenu__Option} `}>
                <div
                    onMouseEnter={() => handleSubMenuVisibleMouseEnter('boards')}
                    onMouseLeave={() => handleSubMenuVisibleMouseLeave('boards')}
                    className={`${styles.title__Class} d-flex align-items-center justify-content-between`}
                >
                    Tableros <MdOutlineNavigateNext />
                </div>
                {subMenusVisible.boards && (
                    <div 
                        className={`${styles.submenu__Boards} position-absolute`}
                        onMouseEnter={() => handleSubMenuVisibleMouseEnter('boards')}
                        onMouseLeave={() => handleSubMenuVisibleMouseLeave('boards')}
                    >
                        <div className={styles.container__Title_Submenu}>
                            <p className={`${styles.title__Class_Expanded} `}>Tableros</p>
                            <Link to='/categoria/tableros' className={styles.see_All_Classes}>Ver todo</Link>
                        </div>
                        <div className='pt-3 d-flex gap-4'>
                            <div>
                                <Link to='/categoria/tableros/título-categoría-1' className={styles.title__Category}>Título Categoría 1</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/tableros/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/tableros/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/tableros/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/tableros/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/tableros/título-categoría-1' className={styles.title__Category}>Categoría 2</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/tableros/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/tableros/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/tableros/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/tableros/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                            <div>
                                <Link to='/categoria/tableros/título-categoría-1' className={styles.title__Category}>Categoría 3</Link>
                                <div className={styles.container__Types}>
                                    <Link to='/categoria/tableros/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/tableros/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/tableros/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                    <Link to='/categoria/tableros/título-categoría-1/tipo' className={styles.title__Type}>Tipo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* Agrega más submenús aquí si es necesario */}                
        </div>
    );
}

export default TypesFilters;