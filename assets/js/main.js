// Utilização do return para poder utilizar o "response.json" na linha abaixo sem necessídade de fazer uma função dentro de outra, possibilitanto o encadeamento de then's.

// utilização do return faz com que não ocorra a situação de callback dentro de callback que possui outro callback.


// a utilização '.then(function (response) {})' 
// foi alterado por '.then((response) => {})'
/* 
Pode ser reduzido ainda mais a sintaxe, mantendo somente em uma linha.
DISSO >> .then((response) => {
       return response.json()
    })

PARA ISSO >> .then((response) => response.json())

Isso foi possível, pois, somente a uma linha de solicitação, não sendo necessário abrir o corpo de instrução.
*/

const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')


const maxRecords = 151
const limit = 10
let offset = 0



function convertPokemonToLi(pokemon) {

    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
        
        <!--<button class="btn" type="button" onclick="onDetail('${pokemon.name}')"}>
                Detail
        </button> -->


        <button class="btn" type="button" onclick="openDetails('${pokemon.name}');"}>
                Detail
        </button>

        <img src= "${pokemon.photo}"
        alt="${pokemon.name}"/>
    </div>
    </li>
`

}

function loadPokemonItens(offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')

        pokemonList.innerHTML += newHtml
    })

}

loadPokemonItens(offset,  limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordsNextPage = offset + limit

    if (qtdRecordsNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

function onDetail(nome){
       localStorage.setItem('storageNome', nome)
       window.location = 'detail.html'
}