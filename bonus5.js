let hexaValue="#FF5733"
let hex=hexaFunction(hexaValue)
let rgb =rgbCalculator(hex)
console.log(rgb)
function rgbCalculator(hexa){
	let result=[]
	for(i=0;i<3;i++){
		let strings=hexa[i]
let sf1=callSwitchCase(strings[0])*16
let sf2=callSwitchCase(strings[1])
result.push(sf1+sf2)
	}
	return `rgb(${result[0]},${result[1]},${result[2]})`
}
function callSwitchCase(value){
	switch(value){
case "A":value=10
	break;
case "B":value=11
	break;
case "C":value=12
	break;
case "D":value=13
	break;
case "E":value=14
	break;
case "F":value=15
	break;
default:value=parseInt(value)
}
return value
}
function hexaFunction(value){
	let values=value.replace("#","")
	let splitZone=[]
	if(values.length==6){
	let set1=values.slice(0,2)
	let set2=values.slice(2,4)
	let set3=values.slice(4,6)
	splitZone.push(set1)
	splitZone.push(set2)
	splitZone.push(set3)
	return splitZone
		}
	if(values.length==3){
let set1=values.slice(0,1)
let set2=values.slice(1,2)
let set3=values.slice(2,3)
splitZone.push(set1+set1)
splitZone.push(set2+set2)
splitZone.push(set3+set3)
return splitZone
	}
	
}