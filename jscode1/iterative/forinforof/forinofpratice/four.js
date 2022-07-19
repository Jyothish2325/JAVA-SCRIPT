let forins=[10,4364,75,90,'jyothish','reddy']
console.log(forins);
console.log(typeof(forins));
for(i=1;i<=8;i=i+1){
    console.log(forins[i]);
}

for(forin of forins){
    console.log(forin);
}


for(i=1;i<=forins.length-1;i=i+1){
    console.log(forins[i]);
}