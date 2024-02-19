let rgbValue="(131,12,12)"
let rgb=bracketRemoveAndSplit(rgbValue)
let result=""
for(let i=0;i<rgb.length;i++){
	let element=parseInt(rgb[i])
	 result+=element!==0?rgbConveter(element):"00"
}
console.log("result",result)
function bracketRemoveAndSplit(value){
	let rgbColor=value.replace("(","").replace(")","").split(",")
return rgbColor
}
function rgbConveter(ele){
let quotient=parseInt(ele/16)
let remainder=ele%16
let quotientcon=callSwitchCase(quotient)
let remaindercon=callSwitchCase(remainder)
return quotientcon+remaindercon
}
function callSwitchCase(value){
	switch(value){
case 10:value="A"
	break;
case 11:value="B"
	break;
case 12:value="C"
	break;
case 13:value="D"
	break;
case 14:value="E"
	break;
case 15:value="F"
	break;
default:value=value.toString()
}
return value
}