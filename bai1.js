let array=[];

for(let i=1;i<=100;i++){
    array.push(i);
}
//Hàm chẵn
console.log(array)
for(let i=0;i<=100;i++){
    if(array[i]%2==0){
        console.log(array[i])
    }
    
    
}
//Hàm lẻ
for(let i=0;i<=100;i++){
    if(array[i]%2!=0){
        console.log(array[i])
    }
    
    
}