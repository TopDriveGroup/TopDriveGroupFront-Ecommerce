/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopDriveRojo from '../../../assets/TopDriveGroup/TopDriveRojo.svg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './styles.module.css';

function PreviousBtn({ onClick }: { onClick: () => void }) {
    return (
        <div className={`${styles.button__Next} d-flex align-items-center justify-content-center position-absolute`} onClick={onClick}>
            <IoIosArrowBack className={`${styles.icon__Arrow}`} />
        </div>
    );
}

function NextBtn({ onClick }: { onClick: () => void }) {
    return (
        <div className={`${styles.button__Prev} d-flex align-items-center justify-content-center position-absolute`} onClick={onClick}>
            <IoIosArrowForward className={`${styles.icon__Arrow}`} />
        </div>
    );
}

function Banner() {
    const sliderRef = useRef<Slider | null>(null);

    const handlePrevious = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const [showButtons, setShowButtons] = useState(false);

    return (
        <div
            className={`${styles.container} position-relative overflow-hidden`}
            onMouseEnter={() => setShowButtons(true)}
            onMouseLeave={() => setShowButtons(false)}
        >
            {showButtons && (
                <div>
                    <PreviousBtn onClick={handlePrevious} />
                    <NextBtn onClick={handleNext} />
                </div>
            )}
            <div className='position-relative overflow-hidden'>
                <Slider
                    ref={sliderRef}
                    autoplay
                    autoplaySpeed={5000}
                    initialSlide={2}
                    infinite
                    prevArrow={<></>}
                    nextArrow={<></>}
                    customPaging={(_i) => {
                        return <div></div>
                    }}
                    dotsClass='slick-dots custom-indicator'
                >
                    <Link to='/ecommerce/first'>
                        <div className={styles.container__First_Component}>
                            <img src={TopDriveRojo} alt="TopDriveRojo" className={styles.logo} loading="lazy" />
                        </div>
                    </Link>
                    <Link to='/ecommerce/second'>
                        <div className={styles.container__Second_Component}>
                            <img src={TopDriveRojo} alt="TopDriveRojo" className={styles.logo} loading="lazy" />
                        </div>
                    </Link>
                    <Link to='/ecommerce/third'>
                        <div className={styles.container__Third_Component}>
                            <img src={TopDriveRojo} alt="TopDriveRojo" className={styles.logo} loading="lazy" />
                        </div>
                    </Link>
                    <Link to='/ecommerce/fourth'>
                        <div className={styles.container__Fourth_Component}>
                            <img src={TopDriveRojo} alt="TopDriveRojo" className={styles.logo} loading="lazy" />
                        </div>
                    </Link>
                </Slider>
            </div>
        </div>
    );
}

export default Banner;