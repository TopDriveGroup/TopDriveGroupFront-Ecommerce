/* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../redux/store';
import { getBestSellingProductsClient } from '../../../redux/LandingEcommerce/productSlice/actions';
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

function BestSellingProducts() {
    const dispatch: AppDispatch = useDispatch();

    // ESTADO DE REDUX
    const { bestSellingProducts, loading, errorProduct } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(getBestSellingProductsClient());
    }, [dispatch]);

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

    if (loading) return <div className={`${styles.container} mt-5 mb-5`}></div>;
    if (errorProduct) return <div className={`${styles.container} mt-5 mb-5`}>Error: {errorProduct}</div>;
    if (!bestSellingProducts || (Array.isArray(bestSellingProducts) && bestSellingProducts.length === 0)) return <div className={`${styles.container} mt-5 mb-5`}></div>;

    return (
        <div className={`${styles.container} mt-5 mb-5`}>
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <h4 className={`${styles.main__Title} mt-4 mx-4`}>Los más vendidos de la semana</h4>
                </div>
                <Link to='/ecommerce/all-top-sellers' className={`${styles.link__Offers} mt-4 mx-4 text-decoration-none`}>Ver todo</Link>
            </div>

            <Slider {...settings} className="d-flex gap-4">
                {Array.isArray(bestSellingProducts) && bestSellingProducts.map((product, index) => (
                    <div key={index}>
                        <Link to={`/details/${product._id}`} className='text-decoration-none'>
                            <ProductCard product={product} />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

const ProductCard = ({ product }: { product: any }) => {
    const [imageIndex, setImageIndex] = useState(0);

    const handleMouseEnter = () => {
        setImageIndex(1);
    };

    const handleMouseLeave = () => {
        setImageIndex(0);
    };

    return (
        <div className={`${styles.card__Slider} overflow-hidden`}>
            <div
                className={`${styles.container__Image} position-relative overflow-hidden d-flex align-items-center justify-content-center`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img src={imageIndex === 0 ? product.mainImage : product.secondaryImage} alt="Item" className={styles.image__Product} loading="lazy" />
            </div>
            <div className={`${styles.container__Info} `}>
                <p className={`${styles.brand__Product} m-0`}>{product.manufacturer}</p>
                <p className={`${styles.title__Product} m-0 overflow-hidden`}>{product.description}</p>
                <p className={`${styles.price__Product} m-0`}><span className={`${styles.currency__Sign}`}>$</span>{formatNumber(product.sellingPriceFinalUser)}</p>
                <p className={`${styles.stock__Product} m-0`}>{product.inventory} unidades en stock</p>
            </div>
        </div>
    );
}

export default BestSellingProducts;