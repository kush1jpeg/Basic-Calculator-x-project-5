document.addEventListener("DOMContentLoaded", function() {
    display=document.getElementById("display")

appendtodisplay =(e)=>{
display.value += e
}
cleardisplay = () =>{ display.value = ''}  
});
calculate=()=>{
    display.value = eval(display.value)
}
percent = () =>{ display.value = display.value/100}  