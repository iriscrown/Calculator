function answer(){
	Calculator.display.value = eval (Calculator.display.value)
}

function deletebtn(){
	var displayValue = document.getElementsByTagName('input')[0].value;
	console.log(displayValue);
	Calculator.display.value = displayValue.substring(0,displayValue.length-1);
}

function point(){
	var Current = document.Calculator.display.value  ;
	 if (Current.length == 0){
	 	Current= "0.";
	 }
	 else{
	 	if (Current.indexOf(".")==-1){
	 		Current = Current + ".";
	 	}
	 }
	 document.Calculator.display.value = Current;
}

 