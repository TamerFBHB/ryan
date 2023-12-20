import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.scss"
import { useState } from "react";

const DarkMode = () => {
    const [Mode,setMode] = useState("light")

    const setDarkMode =()=> {
        document.querySelector("body").setAttribute("data-theme","dark")
        setMode("light")
    };
    const setLghtMode =()=> {
        document.querySelector("body").setAttribute("data-theme","light")
        setMode("Dark")
    };
    const ToggleTheme =(e) =>{
        if(Mode === "Dark") setDarkMode();
        else setLghtMode()
    }
    return (
        <div className= {`dark_mode ${ Mode === "Dark"? "day" :  "night" }`} 
        onClick={ToggleTheme}>
{Mode === "Dark"? <Sun  className="sun"/> :  <Moon className="moon"/>}

    </div>
    );
}

export default DarkMode;
