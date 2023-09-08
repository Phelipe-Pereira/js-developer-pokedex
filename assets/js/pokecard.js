function openModal() {
	modal.style.display = 'block'
}

function convertPokemonDetailToHtml(pokemon) {
	return `
		<div class="card-modal ${pokemon.type}">
			<div class="barTitle">
					<span class="number-card">#${pokemon.number}</span>
					<span class="name-pokemon">${pokemon.name}</span>
					<button id="btnCloserModal" onclick="closerModal()">X</button>
			</div>

			<p><img src="${pokemon.photo}"></p>
				
			<div class="detail-card">
					<span>Type</span>
					<ol class="types">
						${pokemon.types.map((type) => `<li class="liDetail ${type}">${type}</li>`).join("")}
					</ol>
					<span>Abilities</span>
					<ol class="abilities">
						${pokemon.abilities.map((ability) => `<li class="liDetail ability">${ability}</li>`).join("")}
					</ol>
			</div>
		</div>
	`
}


function closerModal() {
	modal.style.display = 'none'
}

let box = document.getElementById('box')


function openDetails(pokemonName) {
	const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
	fetch(url)
		.then((response) => response.json())
		.then(convertPokeApiDetailToPokemon)

		.then((pokemon) => {
			//console.log(pokemon)
			//console.log(convertPokemonDetailToHtml(pokemon))
			box.innerHTML = convertPokemonDetailToHtml(pokemon)
			openModal()
		})




}

let modal = document.getElementById('modal')