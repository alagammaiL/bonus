let array=[1,2,3,4,5]
let targetNumber=7
let result=[]
let flag
for(i=0;i<array.length;i++){
	for(j=i+1;j<array.length;j++){
let tot=array[i]+array[j]
flag=(tot==targetNumber)?true:false
if(flag==true){
result.push(array[i])
result.push(array[j])
break
}
}
if(flag==true)break
}
console.log(result)