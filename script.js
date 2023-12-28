let display_input = document.querySelector(".input");
let display_output = document.querySelector(".output");
let buttons = document.querySelectorAll(".buttons")
let input_string = "";
let symbols = ['+','-','*','/','.','=','%'];



buttons.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
       //console.log(event.target.innerHTML);
       calculation_working_for_click_event(event.target.innerHTML);
    })
})
document.addEventListener("keypress",(e)=>{
    //console.log(e);
    calculation_working_for_keypress_event(e.key);
})


function calculation_working_for_click_event(value){
    let last_input = input_string.slice(-1);
   // console.log(value);
    if(value == 'C'){
        input_string = "";
        display_input.innerHTML = "";
        display_output.innerHTML = "";
    }
    else if(value == 'D'){
        input_string = input_string.slice(0,-1);
        display_input.innerHTML = input_string;
        display_output.innerHTML = "";
    }
    else if(value == '='){
        let result = eval(input_string);
        result = result.toString();
        display_output.innerHTML = result;
        display_input.innerHTML = "";
        input_string = result;
    }

    else if(symbols.includes(value) && symbols.includes(last_input)){
        return false
    }
    else{
            input_string += value;
            display_input.innerHTML = input_string;
            display_output.innerHTML = "";
        
    }
    return 0;
}

function calculation_working_for_keypress_event(value){
    let last_input = input_string.slice(-1);
    
    //console.log(value);
    if(value == 'C' || value == 'c'){
        input_string = "";
        display_input.innerHTML = "";
        display_output.innerHTML = "";
    }
    else if(value == 'D' || value == 'd'){
        input_string = input_string.slice(0,-1);
        display_input.innerHTML = input_string;
        display_output.innerHTML = "";
    }
    else if(value == 'Enter' || value == 'enter' || value == '='){
        let result = eval(input_string);
        result = result.toString();
        display_output.innerHTML = result;
        display_input.innerHTML = "";
        input_string = result;
    }
    else if(symbols.includes(value) && symbols.includes(last_input)){
        return false
    }
    else{
            input_string += value;
            display_input.innerHTML = input_string;
            display_output.innerHTML = "";
        
    }
    return 0;
}
