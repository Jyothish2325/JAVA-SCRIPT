let sizes=[32,34,36,37,40,'size1','size2']
console.log(sizes);
console.log(typeof(sizes));
for(i=1;i<=sizes.length-1;i=i+1){
    console.log(sizes);
}

for(i=1;i<=7;i=i+1){
    console.log(sizes);
}

for(size of sizes){
    console.log(size);
}