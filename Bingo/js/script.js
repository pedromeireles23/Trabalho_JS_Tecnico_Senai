 var test = document.getElementsByTagName('td')
 let pedras = []
 let cartela = []

const randomunique = (range,count) => {
    let nums = new Set();
    while (nums.size<count){
        nums.add(Math.flor(Math.random()*(range-1+1)+1))
    }
    return {...nums}
}
for(let i =1;i<=60;i++){
    pedras.push(i)
}

cartela= randomunique(pedras.length, test.length)
for(let ){
    
}