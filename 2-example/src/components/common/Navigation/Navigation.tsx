import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './styles.module.css'

interface IProps {
    setIsLogin: (value: boolean) => void;
}
export default function Navigation(props: IProps) {
    const {setIsLogin} = props;

    return (
        <>
            <ul className={styles.navigation}>
                <li className={styles.link}>
                    <Link to='/list'>List </Link>
                </li>
                <li className={styles.link}>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li className={styles.link}>
                    <Link to='/settings'>Settings</Link>
                </li>

                {/* <li className={styles.link}>
                    <Link to='/search?name=Tony&age=27'>Search</Link>
                </li> */}
                <li className={styles.link}>
                    <Link to='/base-layout'>Home Page</Link>
                </li>
                <li className={styles.link}>
                    <button onClick={() => setIsLogin(false)}>Log Out</button>
                </li>
            </ul>
        </>
    )
}
