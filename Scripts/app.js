//to resrict double declaration of variables
"use strict";



//Self-Executing Anonymous Function
//IIFE
let myGlobalVariable=0;
(function(){

    let myFunctionvariable = 0;

    //function Start()
    let Start = function(){
        let startVariable = 0;
        console.log("App Started...");
        console.warn("App Started...");
        //to add csss

        console.log("%c App",'font-size: 20px')
       // console.log('%c App  ....${startVariable},'font-size: 20px')
    }
window.addEventListener("load",Start);
})();