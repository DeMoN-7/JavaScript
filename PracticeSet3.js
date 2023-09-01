let Mark={
    "Ayush": 99,
    "Aman": 92,
    "Khalid": 89,
}
for (let i=0;i<Object.keys(Mark).length;i++){
    console.log("The Mark of "+Object.keys(Mark)[i]+" are: "+Mark[Object.keys(Mark)[i]]);
}

for (let j in Mark){
    console.log(j+": "+Mark[j]);
}