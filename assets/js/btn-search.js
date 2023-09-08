const btnSearch = document.getElementById('btn-search')

btnSearch.addEventListener('click', () => searchPokemon())

function searchPokemon() {
	let nameNumber = document.getElementById('input-search').value.toLowerCase()
	
	openDetails(nameNumber)
}