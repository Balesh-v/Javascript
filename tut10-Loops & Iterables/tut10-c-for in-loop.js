// -------------------------- for in loop ----------------------------

// The For In Loop

let y = "balesh"
for(i in y ){
    console.log(y[i])
}

// For In Over Arrays

const num = [45 , 67 , 1 , 89 , 100]
for(j in num){
    console.log(num[j])
}

// Array.forEach()

const sum = [ 45 , 35 ,67 ,89]

sum.forEach((values , index , Array)=>{
    console.log(index)

})