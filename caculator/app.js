let input = document.querySelector('#inputbox');
let buttons = document.querySelectorAll('button');

  let string = "";
  let arr = Array.from(buttons);
  arr.forEach(button => {
    button.addEventListener('click', (e) => {
      if (e.target.innerHTML == '=') {          
        try {
          string = eval(string);
          input.value = string;
        }
        catch (err) {
          input.value = "Error";
        }

      }

      else if (e.target.innerHTML == 'C') {
        string = "";
        input.value = string;
      }
      else {
        string = string + e.target.innerHTML;
        input.value = string;
      }
    })
  })
  

  document.addEventListener("keydown",(e)=>{
    const allowed = "0123456789+-*/().";
    
    if(allowed.includes(e.key)){
        append(e.key);
    }
    
    if(e.key==="Enter"){
        function calculate(){
    try{
        input.value = eval(input.value);
    }catch{
        input.value = "Error";
    }
}    
    }
    
    if(e.key==="Backspace"){
        function deleteLast(){
    input.value = input.value.slice(0,-1);
}
    }
    
    if(e.key==="Escape"){
        function clearDisplay(){
    input.value = "";
}
    }
});