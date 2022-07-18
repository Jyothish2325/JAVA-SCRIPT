let ages=[10,20,44,6,8856,'jy','svs','fan',1]
console.log(ages)
console.log(typeof(ages));
for (i=1;i<=ages.length-1;i=i+1){
    console.log(ages[i]);
}

for(i=1;i<=4;i=i+1){
    console.log(ages[i]);
}
for(age of ages){
    console.log(age);
}