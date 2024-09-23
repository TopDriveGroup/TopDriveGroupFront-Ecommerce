import { Link } from "react-router-dom";
import Pago from '../../assets/Pago.png'
import styles from "./styles.module.css";

export default function PaymentButton() {

    return (
        <Link to='https://micrositios.goupagos.com.co/top-drive-ma' target="blank" rel="noopener noreferrer" className={`${styles.container} d-flex align-items-center justify-content-center text-decoration-none position-fixed`}>
            <div className={`${styles.container__Pay} d-flex align-items-center justify-content-center`}>
                <img src={Pago} alt="Pago" className={`${styles.pay} `}/>
            </div>
        </Link>
    );
}