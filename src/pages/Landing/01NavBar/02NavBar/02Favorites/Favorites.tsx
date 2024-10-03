/* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
// REDUX
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../../redux/store';
// ELEMENTOS DEL COMPONENTE
import NavBar from '../../../../../components/Landing/01NavBar/NavBar';
import Footer from '../../../../../components/Landing/Footer/Footer';
import DownloadDataSheet from '../../../../../components/Landing/DetailProduct/DownloadDataSheet';
import { IProduct } from '../../../../../types/product.types';
import { IFavorites } from '../../../../../types/favorites.types';
import { formatNumber } from '../../../../../helpers/FormatNumber/FormatNumber';
import { HiMiniPlus, HiMiniMinus } from "react-icons/hi2";
import { AiFillFilePdf } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";
import styles from './styles.module.css';

function Favorites() {
    const [favoriteProducts, setFavoriteProducts] = useState<IFavorites[]>([]);
    const [count, setCount] = useState<{ [productId: string]: number }>({});
    const [downloadPdf, setDownloadPdf] = React.useState(false);
    const [showTooltip, setShowTooltip] = useState<{ [productId: string]: boolean }>({});

    // ESTADO DE REDUX
    const productsState = useSelector((state: RootState) => state.products.products);

    useEffect(() => {
        const favoriteProductsString = localStorage.getItem('favoriteProducts');
        if (favoriteProductsString) {
            setFavoriteProducts(JSON.parse(favoriteProductsString));
        }
    }, []);

    const handleIncrement = (productId: string) => {
        setCount(prevCount => ({
            ...prevCount,
            [productId]: (prevCount[productId] || 1) + 1,
        }));
    };

    const handleDecrement = (productId: string) => {
        setCount(prevCount => ({
            ...prevCount,
            [productId]: Math.max((prevCount[productId] || 1) - 1, 1),
        }));
    };

    const handleDownload = () => {
        setDownloadPdf(true);
    };

    useEffect(() => {
        if (downloadPdf) {
            const generatePdfDocument = async () => {
                const MyDocument = () => (
                    <DownloadDataSheet product={productsState as IProduct} />
                );
                const blob = await pdf(<MyDocument />).toBlob();
                saveAs(blob, 'ficha_tecnica.pdf');
                setDownloadPdf(false); // Resetear el estado después de la descarga
            };
            generatePdfDocument();
        }
    }, [downloadPdf]);

    const handleDeleteFavorite = (productId: string) => {
        const updatedFavorites = favoriteProducts.filter(product => product.productId !== productId);
        setFavoriteProducts(updatedFavorites);
        localStorage.setItem('favoriteProducts', JSON.stringify(updatedFavorites));
        setShowTooltip(prev => ({ ...prev, [productId]: true }));
        setTimeout(() => {
            setShowTooltip(prev => ({ ...prev, [productId]: false }));
        }, 2000); // El tooltip se ocultará después de 2 segundos
    };

    const handleMouseEnter = (productId: string) => {
        setShowTooltip(prev => ({ ...prev, [productId]: true }));
    };

    const handleMouseLeave = (productId: string) => {
        setShowTooltip(prev => ({ ...prev, [productId]: false }));
    };

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} `}>
                <h3>Favoritos</h3>
                {favoriteProducts.length > 0 ? (
                    favoriteProducts.map((product) => (
                        <div key={product.productId} className={`${styles.favorite__Product} mb-5 mx-auto d-flex align-items-center justify-content-center`}>
                            <div className={`${styles.container__Favorite__Info} d-flex gap-4`}>
                                <div className={`${styles.container__Image} d-flex align-items-center justify-content-center overflow-hidden`}>
                                    <img src={product.mainImage} alt={`${product.description}`} className={`${styles.image} `} />
                                </div>
                                <div className={styles.info_Data}>
                                    <h6 className={`${styles.brand__Product} m-0`}>{product.class} | {product.category} | {product.type}</h6>
                                    <h3 className={`${styles.title__Product} m-0 overflow-hidden`}>{product.description}</h3>
                                    <p className={`${styles.price__Product} m-0`}>$ {formatNumber(product.sellingPrice)} und</p>
                                    <p className={`${styles.stock__Product} m-0`}>{product.inventory} unidades en stock</p>

                                    <div className={`${styles.container__Updated_Cart} d-flex align-items-center justify-content-between`}>
                                        <div className={`${styles.container__Count_Favorites} d-flex align-items-center justify-content-between`}>
                                            <div className={`${styles.container__Count} d-flex`}>
                                                {product.productId && (
                                                    <>
                                                        <div className={`${styles.container__Icon_Minus_Plus} d-flex align-items-center justify-content-center`} onClick={() => handleDecrement(product.productId!)}>
                                                            <HiMiniMinus className={styles.icon} />
                                                        </div>
                                                        <div className={`${styles.count} d-flex align-items-center justify-content-center`}>{count[product.productId] || 1}</div>
                                                        <div className={`${styles.container__Icon_Minus_Plus} d-flex align-items-center justify-content-center`} onClick={() => handleIncrement(product.productId!)}>
                                                            <HiMiniPlus className={styles.icon} />
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                            <div
                                                className={`${styles.container__Favorite} d-flex align-items-center justify-content-center position-relative`}
                                                onMouseEnter={() => handleMouseEnter(product.productId!)}
                                                onMouseLeave={() => handleMouseLeave(product.productId!)}
                                                onClick={() => handleDeleteFavorite(product.productId!)}
                                            >
                                                <IoMdHeart className={styles.icon__Favorite} />
                                                {showTooltip[product.productId!] && (
                                                    <div className={`${styles.modal__Delete_Favorites} d-flex align-items-center justify-content-center position-absolute`}>
                                                        Eliminar de favoritos
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <button className={`${styles.button__Cart} d-flex align-items-center justify-content-center text-decoration-none border-0`} >
                                            Agregar al carrito
                                        </button>
                                    </div>

                                    <div className={`${styles.container__Meta_Data} pt-2 pb-2 px-0`}>
                                        <div className={`${styles.meta__Data} pt-1 pb-2 px-0 d-flex`}>
                                            <div className={styles.title__Meta__Data}>Codigo SAP</div>
                                            <div className={styles.code__Meta_Data}>{product.sap}</div>
                                        </div>

                                        <div className={`${styles.meta__Data} pt-1 pb-2 px-0 d-flex`}>
                                            <div className={styles.title__Meta__Data}>Fabricante</div>
                                            <div className={styles.code__Meta_Data}>{product.manufacturer}</div>
                                        </div>

                                        <div className={`${styles.container__Download_Technical_Data} pt-1 pb-1`} onClick={handleDownload} >
                                            <div className={`${styles.title__Meta__Data} mb-3`}>Documentos de la ficha técnica</div>
                                            <div className={`${styles.download_Technical_Data} p-1 d-flex align-items-center justify-content-between`}>
                                                <div className='d-flex'>
                                                    <AiFillFilePdf className={`${styles.pdf} mt-1`} />
                                                    <p className='m-0'>Ficha técnica del producto</p>
                                                </div>
                                                <BsDownload className={styles.icon__Download} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>De momento no tienes productos marcados como favoritos</p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Favorites;