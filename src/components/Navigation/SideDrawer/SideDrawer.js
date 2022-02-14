import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import styles from './SideDrawer.module.css';

const SideDrawer = (props) => {
    return (
        <header className={styles.SideDrawer}>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
};

export default SideDrawer;