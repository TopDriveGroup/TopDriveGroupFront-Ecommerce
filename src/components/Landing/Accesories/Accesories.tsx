/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
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
    const isLastSetOfSlides = currentSlide + slidesToShow >= slideCount;
    if (isLastSetOfSlides) return null;

    return (
        <div className={`${styles.container__Button_Next} d-flex align-items-center justify-content-center position-absolute`}>
            <div className={className} onClick={onClick}>
                <IoIosArrowForward className={`${styles.button__Next} position-absolute`} />
            </div>
        </div>
    );
}

function Accesories() {
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
                <h4 className={`${styles.main__Title} mt-4 mx-4`}>Accesorios</h4>
                </div>
                <Link to='/todas-las-ofertas' className={`${styles.link__Offers} mt-4 mx-4 text-decoration-none`}>Todos los accesorios</Link>
            </div>

            <Slider {...settings} className="d-flex gap-4">
                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720467630/products/sbbow5ttanord241agrc.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720467637/products/allyk0supwsmqxrye6vc.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720467643/products/ipoy9dwmvygd15s6oeog.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                        </div>
                    </div>
                </Link>
                
                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720467650/products/q2pf198banrqmoio05g1.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720467815/products/j1sof9lu6ptjk1iktofm.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720467821/products/hjr50lzjxcupq7nvpanp.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720467829/products/vbxuctfyvyg7zfsgk5vf.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720467963/products/eq0iiy2rttncccfsmsvm.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720467971/products/xwgjxrhcqbkwmojpvj4o.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720467979/products/q7qopfq0cylmctu3d9ry.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720467987/products/vdmdsukqpa4n0442hdot.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720468260/products/nrd8z4352wq7w1dukqaj.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                            <div className={`${styles.percentage__Discount} p-1 position-absolute`}>20% OFF</div>
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                        </div>
                    </div>
                </Link>
            </Slider>
        </div>
    );
}

export default Accesories;