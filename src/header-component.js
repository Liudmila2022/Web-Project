import styled from "@emotion/styled";
import "@fontsource/inter";
import "@fontsource/work-sans";

export function Header(){

    const redcontainer = {
        width: 1440,
        height: 190,
        backgroundColor: "#BA181B",
        position: "absolute",
        top: 0,
    }

    const Logo = {
        color: "white",
        fontSize: 48,
        fontFamily: "inter",
        fontStyle: "normal",
        letterSpacing: 2,
        margin: 0,
    }

    const Nombre = {
        color: "white",
        fontSize: 28,
        fontFamily: "inter",
        letterSpacing: 2,
        margin: 0,
    }
    
    
    return(
        <div style={redcontainer}>
            <div style={{marginTop: 50, marginLeft:50}}>
             <h1 style={Logo}>MRC</h1>
             <h2 style={Nombre}>Mallas, resortes y cables</h2>
            </div>

        </div>
    )
}