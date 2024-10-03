import { useEffect, useState, SetStateAction } from "react";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../../redux/store';
import { getSearchProducts } from '../../../../redux/Landing/productSlice/actions';
import { resetSearchCompleted } from '../../../../redux/Landing/productSlice/productSlice';
// ELEMENTOS DEL COMPONENTE
import { IoIosSearch } from "react-icons/io";
import styles from './styles.module.css';

function SearchBar() {
    const navigate = useNavigate();
    const { t } = useTranslation('navBar');

    // REDUX
    const dispatch: AppDispatch = useDispatch();
    const { searchCompleted } = useSelector((state: RootState) => state.products);

    const [description, setDescription] = useState('');

    // Redirección si la búsqueda se completa
    useEffect(() => {
        if (searchCompleted) {
            clearSearch();
            dispatch(resetSearchCompleted());
            navigate(`/search-result?term=${description}`);
        }
    }, [searchCompleted, description, dispatch, navigate]);

    function handleInputChange(e: { target: { value: SetStateAction<string>; }; }) {
        setDescription(e.target.value);
    }

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        localStorage.setItem('searchDescription', description);
        dispatch(getSearchProducts(description));
    }

    function clearSearch() {
        setDescription('');
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={`${styles.container__SearchBar} d-flex position-relative`} role="search">
                <input
                    type="text"
                    id="search-input"
                    className={`${styles.input__Search} pt-1 pb-1 px-2 border-0`}
                    placeholder={t('navBar.placeholder')}
                    onChange={handleInputChange}
                    value={description}
                    aria-label={t('navBar.placeholder')}
                />
                <button type="submit" className="border-0" aria-label={t('navBar.search')}>
                    <IoIosSearch className={`${styles.icon__Search} position-absolute`} />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;