/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { GrStar } from 'react-icons/gr';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { VscStarHalf } from "react-icons/vsc";
import styles from './styles.module.css';

function PreviousBtn(props: any) {
    const { className, onClick, currentSlide } = props;
    return (
        <div>
            {currentSlide !== 0 && (
                <div className={`${styles.container__Button_Prev} d-flex align-items-center justify-content-center position-absolute`}>
                    <div className={className} onClick={onClick}>
                        <IoIosArrowBack className={`${styles.button__Prev} position-absolute`} />
                    </div>
                </div>
            )}
        </div>
    );
}

function NextBtn(props: any) {
    const { className, onClick, slideCount, currentSlide, slidesToShow } = props;

    // Comprobar si estamos en el último set de slides
    const isLastSetOfSlides = currentSlide + slidesToShow >= slideCount;

    // Si estamos en el último set de slides, no mostrar el botón "Next"
    if (isLastSetOfSlides) return null;

    // Si no estamos en el último set de slides, mostrar el botón "Next"
    return (
        <div className={`${styles.container__Button_Next} d-flex align-items-center justify-content-center position-absolute`}>
            <div className={className} onClick={onClick}>
                <IoIosArrowForward className={`${styles.button__Next} position-absolute`} />
            </div>
        </div>
    );
}

function SliderOffers() {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn slidesToShow={5} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
  
    return (
        <div className={`${styles.container} mb-5 mt-5`}>
            <div className="d-flex align-items-center justify-content-between">
                <div>
                <h4 className={`${styles.main__Title} mt-4 mx-4`}>Los más vendidos de la semana</h4>
                </div>
                <Link to='/todas-las-ofertas' className={`${styles.link__Offers} mt-4 mx-4 text-decoration-none`}>Ver todo</Link>
            </div>

            <Slider {...settings} className="d-flex gap-4">
                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1713271461/Uno_yavs8v.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div>
                        </div>
                    </div>
                </Link>
                    
                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1713271469/Dos_vebhfr.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1713271479/Tres_t47yqn.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1713271485/Cuatro_vhn2yc.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1713271494/Cinco_nhjcqu.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1713271502/Seis_eui9xw.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1713271509/Siete_yaduqr.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1713270503/RELE-TERMICO-P.CONT-D09.D38-25.4A-ELECTROVERA_pgwbkq.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1713270502/D_NQ_NP_887228-MLM53465853301_012023-O_vqpajj.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1713270500/BREAKER-TOTALIZADOR-40-AMP-7.5KA-ELECTROVERA_ro6gum.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1713270499/58014209PDM001G_pb7nnp.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1713270498/7304010_jhwhqj.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div>
                        </div>
                    </div>
                </Link>
            </Slider>
        </div>
    );
}

export default SliderOffers;