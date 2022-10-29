import Link from 'next/link'
import React from 'react'

import Home from 'components/Icons/Home'
import Create from 'components/Icons/Create'
import Search from 'components/Icons/Search'

import styles from './styles.module.css'

const NavBar = () => {
    return <>
        <nav className={styles.navbar}>
            <Link href='/home'>
                <a>
                    <Home width={32} height={32} stroke='#000000' />
                </a>
            </Link>
            <Link href='/compose/twet'>
                <a>
                    <Create width={32} height={32} stroke='#000000' />
                </a>
            </Link>
            <Link href='/account'>
                <a>
                    <Search width={32} height={32} stroke='#000000' />
                </a>
            </Link>
        </nav>
    </>
}

export default NavBar