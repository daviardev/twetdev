import styles, { globalStyles } from './styles'

import NavBar from 'components/NavBar'

import React from 'react'

const AppLayout = ({ children }) => {
    return <>
        <div>
            <main>
                {children}
                <NavBar />
            </main>
        </div>

        <style jsx>{styles}</style>
        <style jsx global>{globalStyles}</style>
    </>
}

export default AppLayout