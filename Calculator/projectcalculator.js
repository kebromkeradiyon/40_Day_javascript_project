const display=document.getElementById("display");

function appendtodisplay(Input){
 display.value+=Input;
}

function cleardisplay(){
 display.value= "";
}

function calculate(){
try{
    display.value=eval(display.value);
}
catch(error){
display.value="Error";
}
}
