let array=[1, "2", "3", 2]
let typeOfTheArrayValue=array.map((value)=>typeFunction(value))
let result=[]
let eachArrayNumber=[]
let eachArrayString=[]
for(i in array){
let flag=typeOfTheArrayValue[i]==="number"?true:false
if(flag==true){
	eachArrayNumber.push(array[i])
}
else if(flag==false){
	eachArrayString.push(array[i])
}
}

result.push(eachArrayNumber)
result.push(eachArrayString)
console.log("result",result)

function typeFunction(element){
	return typeof(element)
}

