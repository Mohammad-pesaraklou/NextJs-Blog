import Link from 'next/link'


import { Typography } from '@mui/material';
// styles
import styles from '../Styles/Navbar.module.css';


const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/">
                <Typography className={styles.logo} color={'#f59115'} fontWeight="500" fontFamily={'Josefin Sans'}

                >
                    Bloggy
                </Typography>
            </Link>
            <div className={styles.list}>
                <Link href="/">
                    <p className={styles.navList}>
                        Home
                    </p>
                </Link>
                <Link href={'/about'}>
                    <p className={styles.navList}>
                        About Us
                    </p>
                </Link>
                <Link href={'/profile'}>
                    <p className={styles.navList}>
                        Profile
                    </p>
                </Link>

            </div>
        </div>
    );
};

export default Navbar;