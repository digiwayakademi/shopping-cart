import React, {useState} from "react";

export const MyContext = React.createContext();

export const MyProvider = ({children}) => {
    const [myState, setMyState] = useState("Atakan Genç");
  
    const value= {
      myState,
      setMyState
    }
  
     return  <MyContext.Provider value={value}> {children}</MyContext.Provider>
   }

   //React' te iyi uygulamalar oluşturmak için 5 madde

   // 1- Basit tutun: İlk başta local stateler ve React Context API kullanarak işe başlayın. Daha karmaşık 
   // ve büyük ölçekli durumlar için Redux ve Mobx gibi ek araçlara geçiş yapabilirsiniz.

   //2- Tek yönlü veri akışı: 
   // Veri akışını yönetmek için tek yönlü veri akışı sağlayın. Bu verilerin bileşenler arasında kolayca
   // takip edilebilmesine ve güncellemelerin doğru şekilde yansıtılmasına yardımcı olur.

   //3- State'i mümkün olduğunca azaltın: 
   // Uygulamaların performansını arttırmak ve karmaşıklığı azaltmak için gereksiz state kullanımından kaçının

   //4- Bileşenleri (Component) küçük tutun. 
   // Küçük ve odaklı bileşenler kullanarak state yönetimini daha kolay anlaşılır olmasını sağlayın.

   //5- Test Yazmak
   //Uygulamanızın state yönetimi güvenli bir şekilde yapabilmek için testler yazın.