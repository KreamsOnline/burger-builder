import React from 'react';
import styles from './Layout.module.css';

import Aux from '../../hoc/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = ( props ) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <div>SideDrawer, Backdrop</div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;