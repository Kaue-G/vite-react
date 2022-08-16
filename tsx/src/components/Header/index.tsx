import styles from './index.module.css';
import joystickLogo from '../../assets/joystick-logo.svg';
import { GameController } from 'phosphor-react';

export function Header() {
    return (
        <header className={styles.header}>
            <GameController size={50} />
        </header>
    );
};