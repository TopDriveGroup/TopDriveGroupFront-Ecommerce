import { useEffect, useState, SetStateAction } from "react";
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../../redux/store';
import { getSearchProducts } from '../../../../redux/LandingEcommerce/productSlice/actions';
import { resetSearchCompleted } from '../../../../redux/LandingEcommerce/productSlice/productSlice';
// ELEMENTOS DEL COMPONENTE
import { IoIosSearch } from "react-icons/io";
import styles from './styles.module.css';

function SearchBar() {
    const dispatch: AppDispatch = useDispatch();
    const { t } = useTranslation('navBarEcommerce');

    const [description, setDescription] = useState('');
    const { searchCompleted } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        if (searchCompleted) {
            clearSearch();
            dispatch(resetSearchCompleted());
        }
    }, [searchCompleted, dispatch]);

    function handleInputChange(e: { target: { value: SetStateAction<string>; }; }) {
        setDescription(e.target.value);
    }
  
    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        localStorage.setItem('searchDescription', description);         // Guardar la descripción en localStorage
        dispatch(getSearchProducts(description));
    }
  
    function clearSearch() {
        setDescription('');
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={`${styles.container__SearchBar} d-flex position-relative`}>
                <input
                    type="text"
                    className={`${styles.input__Search} pt-1 pb-1 px-2 border-0`}
                    placeholder={`${t('navBarEcommerce.placeholder')}`}
                    onChange={handleInputChange}
                    value={description}
                />
                <button type="submit" className="border-0">
                    <IoIosSearch className={`${styles.icon__Search} position-absolute`} />
                </button>
                {searchCompleted && <Navigate to={`/search-result?term=${description}`} />}
            </form>
        </div>
    );
}

export default SearchBar;