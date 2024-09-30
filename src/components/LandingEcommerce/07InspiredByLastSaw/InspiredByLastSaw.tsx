/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import { GrStar } from 'react-icons/gr';
// import { VscStarHalf } from "react-icons/vsc";
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

function InspiredByLastSaw() {
    const settings = {
        dots: true,
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
            <h4 className={`${styles.main__Title} mt-4 mx-4`}>Inspirado en lo que viste</h4>
 
            <Slider {...settings} className="d-flex gap-4">
                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720467994/products/tizfumiwbytpnby9qkuf.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            {/* <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div> */}
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720468427/products/wafqfg7gl0eqozyv3a2n.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            {/* <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div> */}
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720468421/products/rctjponatg5qfshkaudj.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            {/* <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div> */}
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720468409/products/xvdqqg6v66xq7dycouu5.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            {/* <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div> */}
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720468399/products/kitsaxk3gbi2vewjuzmu.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            {/* <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div> */}
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720468391/products/m4uzjbz5ubdo4qj28n4i.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            {/* <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div> */}
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720468383/products/yue28c7rh9wu1k8eutho.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            {/* <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div> */}
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720468376/products/rujdrikzxsxoo08xx570.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            {/* <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div> */}
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720468370/products/xmeqb98mf89xecdu0xfp.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            {/* <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div> */}
                        </div>
                    </div>
                </Link>
                
                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720468363/products/t8pfgcysbwtnfts2jqn5.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            {/* <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div> */}
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720468357/products/xft38vva5pusqhpjorhy.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            {/* <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div> */}
                        </div>
                    </div>
                </Link>

                <Link to='/details' className='text-decoration-none'>
                    <div className={`${styles.card__Slider} overflow-hidden`}>
                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                            <img src={"https://res.cloudinary.com/dllm2rvow/image/upload/v1720468349/products/fckt77fzjxv5jafgrabf.png"} alt="Item" className={styles.image__Product} loading="lazy" />
                        </div>
                        <div className={`${styles.container__Info} `}>
                            <p className={`${styles.brand__Product} m-0`}>PROCABLES | Cableado</p>
                            <p className={`${styles.title__Product} m-0 overflow-hidden`} >CABLE DE POTENCIA XHHW-2 350 MCM 37S CT AL</p>
                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>200.000</p>
                            <p className={`${styles.stock__Product} m-0`}>5 unidades en stock</p>
                            {/* <div className='d-flex'><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><GrStar className={`${styles.star__Score}`}/><VscStarHalf className={`${styles.star__Score}`}/></div> */}
                        </div>
                    </div>
                </Link>
            </Slider>
        </div>
    );
}

export default InspiredByLastSaw;