/* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import jsCookie from 'js-cookie';
import Slider from "react-slick";
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../redux/store';
import { getInspiredByLastSaw } from '../../../redux/LandingEcommerce/productSlice/actions';
// ELEMENTOS DEL COMPONENTE
import { IProduct } from '../../../types/product.types';
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

function InspiredByLastSaw() {
    const token = jsCookie.get("token") || '';

    // REDUX
    const dispatch: AppDispatch = useDispatch();
    const { inspiredByLastSawProducts, loading } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        const sessionId = sessionStorage.getItem('sessionId');
        if (sessionId) dispatch(getInspiredByLastSaw(token, sessionId));
    }, [token]);

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

            <div>
                {loading ? (
                    <p>Cargando productos relacionados...</p>
                ) : inspiredByLastSawProducts && inspiredByLastSawProducts.length > 0 ? (
                    <Slider {...settings} className="d-flex gap-4">
                        {inspiredByLastSawProducts.map((product: IProduct, index) => (
                            <Link to='/details' className='text-decoration-none' key={index}>
                                <div className={`${styles.card__Slider} overflow-hidden`}>
                                    <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                                        <img src={product.mainImage} alt="Item" className={styles.image__Product} loading="lazy" />
                                    </div>
                                    <div className={`${styles.container__Info} d-flex flex-column align-items-start justify-content-between`}>
                                        <div>
                                            <p className={`${styles.brand__Product} m-0`}>{product.manufacturer} | {product.class}</p>
                                            <p className={`${styles.title__Description} m-0 overflow-hidden`} >{product.description}</p>
                                        </div>
                                        <div>
                                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>{product.sellingPriceDistributor}</p>
                                            <p className={`${styles.stock__Product} m-0`}>{product.inventory} unidades en stock</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                ) : (
                    <p>No se encontraron productos relacionados.</p>
                )}
            </div>
        </div>
    );
}

export default InspiredByLastSaw;
