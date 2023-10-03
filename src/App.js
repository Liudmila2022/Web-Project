//import './App.css';
import style from "@emotion/styled";
import Component from "./componente";

function App() {

  return (
   <div style={{background: "#161A1D", width: 1440, height: 1024 }}>
     <div style={{width: 1000, display: "flex", flexWrap: "wrap", columnGap: 100, rowGap: 50, justifyContent: "center", paddingTop: 100,  }}>
       <Component backgroundImage= "url(/Images/diseño.jpg) top center" text="Diseño"/> 
       <Component backgroundImage= "url(/Images/comparativo.jpg) top center" text="Comparativo"/>
       <Component backgroundImage= "url(/Images/consultar stock.jpg) top center" text="Consultar stock"/>
       <Component backgroundImage= "url(/Images/cotizacion.jpg) top center" text="Cotizacion"/>
       <Component backgroundImage= "url(/Images/diseño rapido.jpg) top center" text="Diseño rapido"/>
     </div>
   </div>
  );
} 


export default App;
jjj