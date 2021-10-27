
import React from 'react';
export const themes ={
    dark:{
        color:'blue',
        background:'yellow'
    },

    light:{
        color: 'black',
        background: 'blue'
    }
}

const ThemesContext = React.createContext(themes.dark)

export default ThemesContext;