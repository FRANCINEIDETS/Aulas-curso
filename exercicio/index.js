/*function handleArr(ar){
    let sum = 0;
    for(const number of ar){
        sum += number
    } 
    if(sum> 0){
        return sum
    }else {
        return " E zero"
    }

}

    console.log(handleArr([12,8,30]))
*/

/*function comparaArr( a,b){
    let pontos = 0
    for( let i = 0; i< a.length; i++){
        if(a[i]> b[i]){
            pontos ++
        }
    }
    return pontos

}

console.log( comparaArr([1,2,2], [1,1,1]))
*/

const pokemons = [{nome: "Bulbasaur", tipo: "grama"},
{nome: "brllsprout", tipo: "grama"},
{nome:"charmander", tipo:" fogo"},
{nome: "vulpix", tipo:"fogo"},
{nome: "squirtle", tipo:"agua"},
{nome: "psyduck", tipo: "agua"},

]

const callback = (pokemon, indice, array )=> {
    if(pokemon.tipo === "grama"){
        return true

    }else {
        return false
    }
}

const algunsPokemons = pokemon.filter(callback)