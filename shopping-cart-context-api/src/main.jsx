import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CardProvider } from "./context/CartContext";


//Global State Oluşturmanın Yöntemleri
//1- Context API   // Orta ve küçük ölçekli uygulamalarda kullanılıyor.
//2- Redux
//3- Mobx
//4- Recoli


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> 
    <CardProvider>   
       <App />  
    </CardProvider>
  </React.StrictMode>
);
