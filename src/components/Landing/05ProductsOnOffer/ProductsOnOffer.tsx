/* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../redux/store';
import { getProductsOnOffer } from '../../../redux/Landing/productSlice/actions';
//ELEMENTOS DEL COMPONENTE
import { formatNumber } from '../../../helpers/FormatNumber/FormatNumber';
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

function ProductsOnOffer() {
    const { t } = useTranslation('productsOnOffer');
    
    // REDUX
    const dispatch: AppDispatch = useDispatch();
    const productsOnOffer = useSelector((state: RootState) => state.products.productsOnOffer);

    useEffect(() => {
        dispatch(getProductsOnOffer());
    }, [dispatch]);

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn slidesToShow={3} />,
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

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className={`${styles.container} mb-5 mt-5 m-auto d-flex gap-4`}>
            <div className={styles.container__Offers}>
                {Array.isArray(productsOnOffer) && productsOnOffer.length > 0 && (
                    <Link to={`/details/${productsOnOffer[0]?._id}`} className='text-decoration-none'>
                        <div className={`${styles.card} p-4 overflow-hidden`}>
                            <div>
                                <h4 className={`${styles.main__Title} m-0`}>{t('productsOnOffer.offer__Day')}</h4>
                            </div>
                            <div className={`${styles.card__Offer} overflow-hidden`}
                                onMouseEnter={() => handleMouseEnter(0)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                                    <img src={hoveredIndex === 0 ? productsOnOffer[0]?.secondaryImage : productsOnOffer[0]?.mainImage} alt="Item" className={styles.image__Product} loading="lazy" />
                                    <div className={`${styles.percentage__Discount} pt-1 pb-1 px-2 position-absolute`}>{productsOnOffer[0]?.discountPercentage}% OFF</div>
                                </div>
                                <div className={`${styles.container__Info} `}>
                                    <p className={`${styles.brand__Product} m-0`}>{productsOnOffer[0]?.manufacturer}</p>
                                    <p className={`${styles.title__Product} m-0 overflow-hidden`}>{productsOnOffer[0]?.description}</p>
                                    <p className={`${styles.price__Product} m-0`}><span className={`${styles.price__Discount}`}>$ {formatNumber(productsOnOffer[0]?.sellingPriceFinalUser)}</span> <span className={`${styles.currency__Sign}`}>$</span>{formatNumber(productsOnOffer[0]?.promotionalPrice)}</p>
                                    <p className={`${styles.stock__Product} m-0`}>{productsOnOffer[0]?.inventory} {t('productsOnOffer.inventory')}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>

            <div className={`${styles.container__Slider} pt-4 pb-4 px-4`}>
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h4 className={`${styles.main__Title} m-0`}>{t('productsOnOffer.offer__Day')}</h4>
                    </div>
                    <Link to='/ecommerce/offers' className={`${styles.link__Offers} text-decoration-none`}>{t('productsOnOffer.all__Offers')}</Link>
                </div>

                <Slider {...settings} className={`${styles.slider} m-auto`}>
                    {Array.isArray(productsOnOffer) && productsOnOffer.length > 1 ? (
                        productsOnOffer.slice(1).map((product, index) => (
                            <div key={index} 
                                onMouseEnter={() => handleMouseEnter(index + 1)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link to={`/details/${product._id}`} className='text-decoration-none'>
                                    <div className={`${styles.card__Slider} overflow-hidden`}>
                                        <div className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}>
                                            <img src={hoveredIndex === index + 1 ? product.secondaryImage : product.mainImage} alt="Item" className={styles.image__Product} loading="lazy" />
                                            <div className={`${styles.percentage__Discount} pt-1 pb-1 px-2 position-absolute`}>{product.discountPercentage}% OFF</div>
                                        </div>
                                        <div className={`${styles.container__Info} `}>
                                            <p className={`${styles.brand__Product} m-0`}>{product.manufacturer}</p>
                                            <p className={`${styles.title__Product} m-0 overflow-hidden`}>{product.description}</p>
                                            <p className={`${styles.price__Product} m-0`}><span className={`${styles.price__Discount}`}>$ {formatNumber(productsOnOffer[0]?.sellingPriceFinalUser)}</span> <span className={`${styles.currency__Sign}`}>$</span>{formatNumber(product.promotionalPrice)}</p>
                                            <p className={`${styles.stock__Product} m-0`}>{product.inventory} unidades en stock</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <div className={`${styles.container__Loading} `}>
                        
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    );
}

export default ProductsOnOffer;