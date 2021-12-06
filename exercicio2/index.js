/*let passo
let arr =[]
for(passo = 0; passo< 5; passo ++){
    arr.push(passo)
}

console.log(arr)
*/

/*function minhaFuncao(array){
    const novoArray = array.map((numero, index, array)=>{
        return numero * index
    })

    return novoArray
}
console.log(minhaFuncao([124, 780,20]))
*/

function minhaFuncao(array, valor){
    let index;
    for(let i = 0; i < array.length; i++){
        if(array[i] === valor){
            index = i
        }
    }

    return index

}

console.log(["abc", "def", "ghi", "jkl"], "ghi")

