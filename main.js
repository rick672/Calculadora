
let valorUno=0;
let valorFinal=0;
var signo=1;
var operacion="";
const display=document.getElementById('display');

const boton1 = document.getElementById('uno');
boton1.addEventListener('click',function(){
    console.log("UNO");
    display.innerHTML=display.innerHTML+'1';
});
const boton2 = document.getElementById('dos');
boton2.addEventListener('click',function(){
    console.log("dos");
    display.innerHTML=display.innerHTML+'2';
});
const boton3 = document.getElementById('tres');
boton3.addEventListener('click',function(){
    console.log("tres");
    display.innerHTML=display.innerHTML+'3';
});
const boton4 = document.getElementById('cuatro');
boton4.addEventListener('click',function(){
    console.log("cuatro");
    display.innerHTML=display.innerHTML+'4';
});
const boton5 = document.getElementById('cinco');
boton5.addEventListener('click',function(){
    console.log("cinco");
    display.innerHTML=display.innerHTML+'5';
});
const boton6 = document.getElementById('seis');
boton6.addEventListener('click',function(){
    console.log("seis");
    display.innerHTML=display.innerHTML+'6';
});
const boton7 = document.getElementById('siete');
boton7.addEventListener('click',function(){
    display.innerHTML=display.innerHTML+'7';
});
const boton8 = document.getElementById('ocho');
boton8.addEventListener('click',function(){
    display.innerHTML=display.innerHTML+'8';
});
const boton9 = document.getElementById('nueve');
boton9.addEventListener('click',function(){
    display.innerHTML=display.innerHTML+'9';
});
const boton0 = document.getElementById('cero');
boton0.addEventListener('click',function(){
    display.innerHTML=display.innerHTML+'0';
});
const punto = document.getElementById('punto');
punto.addEventListener('click',function(){
    display.innerHTML=display.innerHTML+'.';
});
const porcentaje = document.getElementById('%');
porcentaje.addEventListener('click',function(){
    display.innerHTML=display.innerHTML+'%';
    valorUno=parseFloat(display.innerHTML)*signo;
    operacion='%';
    signo=1;
    console.log(operacion);
});
const botons = document.getElementById('mas');
botons.addEventListener('click',function(){
    valorUno=parseFloat(display.innerHTML)*signo;
    operacion='+';
    signo=1;
    console.log(operacion);
    display.innerHTML='';
    // display.innerHTML=display.innerHTML+'+';
});
const menos = document.getElementById('menos');
menos.addEventListener('click',function(){
    valorUno=parseFloat(display.innerHTML)*signo;
    operacion='-';
    signo=-1;
    console.log(operacion);
    display.innerHTML='';


    // display.innerHTML=display.innerHTML+'=';
});

const mul = document.getElementById('mul');
mul.addEventListener('click',function(){
    valorUno=parseFloat(display.innerHTML);
    operacion='*';
    console.log(operacion);
    display.innerHTML='';


    // display.innerHTML=display.innerHTML+'=';
});
const divi = document.getElementById('division');
divi.addEventListener('click',function(){
    valorUno=parseFloat(display.innerHTML)*signo;
    operacion='/';
    signo=1;
    console.log(operacion);
    display.innerHTML='';


    // display.innerHTML=display.innerHTML+'=';
});

const botoni = document.getElementById('igual');
botoni.addEventListener('click',function(){
    console.log(valorUno);
    if (operacion=="%") {
        console.log(valorUno);
        display.innerHTML= valorUno/(100);
        r=display;
    }
    else
    {
        valorFinal=parseFloat(display.innerHTML)*signo;
        console.log(valorFinal);
        display.innerHTML='';
        var r=0;
   
    
        if (operacion=="*") 
        {
            console.log("multiplicacion");
            display.innerHTML=valorUno*valorFinal;
            r=display;
        }
        else
        {
            if (operacion=="/") 
            {
                console.log("division");
                if(valorFinal==0)
                {
                    display.innerHTML="No existe division entre 0";
                }
                else
                {
                    console.log(valorUno);
                    console.log(valorFinal);
                    display.innerHTML=valorUno/(valorFinal);
                    r=display;
                }
            }
            else
            {
                if (valorUno==valorFinal) 
                {
                    console.log("valores iguales");
                    display.innerHTML=valorUno+valorFinal;
                    r=display;
                }
                else
                {
                    if (valorUno>=0 && valorFinal>=0) 
                    {
                        console.log("valores mayores de 0");
                        display.innerHTML=valorUno+valorFinal;
                        r=display;
                    }
                    else
                    {
                        if (valorUno<=0 && valorFinal<=0) 
                        {
                            console.log("valores menores que 0");
                            display.innerHTML=valorUno+valorFinal;
                            r=display;
                        }
                        else
                        {
                            console.log("menos");
                            display.innerHTML=valorUno-(-valorFinal);
                            r=display;
                        }
                    }
                }
            }
        }
    }
    
    signo=1;
    // var res=0;
    // switch(operacion)
    // {
    //     case "+":
    //         console.log("suma");
    //         display.innerHTML=valorUno+valorFinal;
    //         res=display;
    //         break;
    //     case "-":
    //         console.log("menos");
    //         display.innerHTML=valorUno-valorFinal;
    //         res=display;
    //         break;
    //     case "*":
    //         console.log("multiplicacion");
    //         display.innerHTML=valorUno*valorFinal;
    //         res=display;
    //         break;
    //     case "/":
    //         console.log("division");
    //         if(valorFinal<=0)
    //         {
    //             display.innerHTML="No existe division entre 0";
    //         }
    //         else
    //         {
    //             display.innerHTML=valorUno/valorFinal;
    //             res=display;
    //         }   
    //         break;
    //     default:
    // };
    // return res;

    // display.innerHTML=display.innerHTML+'=';
});

var borrar=document.getElementById('C');
borrar.addEventListener('click',function(){
    display.innerHTML='';
});



