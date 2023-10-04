//import './App.css';
import style from "@emotion/styled";
import Component from "./component";
import "@fontsource/inter";
import "@fontsource/work-sans";
import { Header } from "./header-component";
import Component_prueba from "./component prueba";

function App() {

  return (
   <div style={{background: "#161A1D", width: 1440, height: 1024, display: "flex", justifyContent: "center",
   alignItems: "center" }}>
     <Header/>
     
     <div style={{width: 960,
                  display: "flex",
                  flexWrap: "wrap",
                  columnGap: 90,
                  rowGap: 60, 
                  paddingTop: 150,
                  justifyContent: "center",
                  }}>

       <Component backgroundImage= "url(/Images/diseño.jpg)" text="Diseño"/> 
       <Component backgroundImage= "url(/Images/comparativo.jpg)" text="Comparativo"/>
       <Component backgroundImage= "url(/Images/consultar stock.jpg)" text="Consultar stock"/>
       <Component backgroundImage= "url(/Images/cotizacion.jpg)" text="Cotizacion"/>
       <Component backgroundImage= "url(/Images/diseño rapido.jpg)" text="Diseño rapido"/>
     </div>
     <Component_prueba backgroundImage= "url(/Images/diseño.jpg)" text="Prueba"/>
   </div>
  );
} 


export default App;