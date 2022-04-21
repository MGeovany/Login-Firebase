import { useState, useEffect } from 'react';
import { ContainerA } from './ContainerA';
import "./style.css";


export  function Login() {
  /*
		Designed by: M Geovany
		Original image: https://dribbble.com/shots/5311359-Diprella-Login
*/

const [chn, setChn] = useState(false); 


useEffect(() => {

  let switchCtn = document.querySelector("#switch-cnt");
  let switchC1 = document.querySelector('#switch-c1');
  let switchC2 = document.querySelector("#switch-c2");

  let aContainer = document.querySelector("#a-container");
  let bContainer = document.querySelector("#b-container");


    switchCtn.classList.add("is-gx");

    setTimeout(function () {
      switchCtn.classList.remove("is-gx");
    }, 1500);
    
    switchCtn.classList.toggle("is-txr");
    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");

}, [chn]);

 
  

  return (
    
    <div className="main">
      <ContainerA setChn={setChn}/>
    </div>
  );
}
