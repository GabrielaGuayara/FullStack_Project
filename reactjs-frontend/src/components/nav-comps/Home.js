import React,{useContext} from 'react'
import { Body } from '../pages-comps/Body'
import { Footer } from '../pages-comps/Footer'
import { Header } from '../pages-comps/Header'
import ThemesContext from '../pages-comps/ThemesContext'

//import { ChangeTheme } from '../productslist/ChangeTheme'

import { Navbar } from './Navbar'

// import { Navbar } from './components/nav-comps/Navbar'

export  const Home = () => {

    const themes = useContext(ThemesContext)

    return (
        <>
            {/* style={themes} */}
           
            <Navbar/>
            <Header/>
            <Body/>
            <Footer/>

            
        </>
    )
}
