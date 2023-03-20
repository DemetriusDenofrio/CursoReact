import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

import { FaSpinner } from 'react-icons/fa';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    loading?: boolean, // ? = significa opcional
    children: ReactNode, // children é a informação que está escrita dentro do Button da pagina principal
}

export function Button({ loading, children, ...rest }: ButtonProps){
    return(
        <button
        className={styles.button}
        disabled={loading}
        {...rest}
        >
            { loading ? ( // Quando estiver TRUE
                <FaSpinner color="#FFF" size={16} />
            ) : ( // Quando estiver FALSE ou NOT TRUE
                <a className={styles.buttonText}>
                    {children}
                </a>
            )}
        </button>
    )
}