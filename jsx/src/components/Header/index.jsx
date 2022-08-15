import styles from './index.module.css';
import joystickLogo from '../../assets/joystick-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={joystickLogo} alt="Logotipo de joystick" />
        </header>
    );
};