import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.scss"
import { useEffect, useState } from "react";

const themeType = {
    dark: 'dark',
    light: 'light'
};

const DarkMode = () => {
    const [mode, setMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const val = localStorage.getItem('theme');
            return val ? JSON.parse(val) : themeType.light;
        }
        return themeType.light?
        document.querySelector("body").setAttribute("data-theme","light"):
        document.querySelector("body").setAttribute("data-theme","dark");
        
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', JSON.stringify(mode));
        }
    }, [mode]);

        const setDarkMode =()=> {
            document.querySelector("body").setAttribute("data-theme","dark")
            setMode("dark")
        };
        const setLghtMode =()=> {
            document.querySelector("body").setAttribute("data-theme","light")
            setMode("light")
        };

    const ToggleTheme = () => {
        if( mode === themeType.light) setDarkMode()  ;
        else setLghtMode()
    };
    return (
        <div className="dark_mode"
            onClick={ToggleTheme}>
            {mode === themeType.dark ? <Sun className="sun" />  :  <Moon className="moon" /> }

        </div>
    );
}

export default DarkMode;
