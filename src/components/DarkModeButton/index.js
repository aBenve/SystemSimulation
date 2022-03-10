import React, {useEffect} from "react";
import { Switch } from "@mui/material";
import {ThemeContext, themes}  from "../../context/ThemeContext/ThemeContext";

export default function DarkModeButton(){

    return(
        <ThemeContext.Consumer>
            {({theme, changeTheme}) => (
                <Switch
                    onChange={
                        () => {
                            changeTheme(theme !== themes.light ? themes.light : themes.dark)
                        }
                    }
                    />
            )}
        </ThemeContext.Consumer>
    )

}