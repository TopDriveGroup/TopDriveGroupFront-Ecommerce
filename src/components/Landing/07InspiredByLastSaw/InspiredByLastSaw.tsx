/* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import jsCookie from 'js-cookie';
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../redux/store';
import { getInspiredByLastSaw } from '../../../redux/Landing/productSlice/actions';
// ELEMENTOS DEL COMPONENTE
import { SliderProductCard } from '../SliderProductCard/SliderProductCard';
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
    const { t } = useTranslation('inspiredByLastSaw');
    const token = jsCookie.get("token") || '';

    // REDUX
    const dispatch: AppDispatch = useDispatch();
    const { inspiredByLastSawProducts, loading, errorProduct } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        const sessionId = sessionStorage.getItem('sessionId');
        if (sessionId) dispatch(getInspiredByLastSaw(token, sessionId));
    }, [token]);

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
    if (!inspiredByLastSawProducts || (Array.isArray(inspiredByLastSawProducts) && inspiredByLastSawProducts.length === 0)) return <div className={`${styles.container} mt-5 mb-5`}></div>;

    return (
        <div className={`${styles.container} mb-5 mt-5`}>
            <div>
                <h4 className={`${styles.main__Title} mt-4 mx-4`}>{t('bestSellingProducts.inspiredByLastSaw')}</h4>
            </div>
            
            <Slider {...settings} className="d-flex gap-4">
                {Array.isArray(inspiredByLastSawProducts) && inspiredByLastSawProducts.map((product, index) => (
                    <div key={index}>
                        <Link to={`/details/${product._id}`} className='text-decoration-none'>
                            <SliderProductCard product={product} />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default InspiredByLastSaw;