const pokemonContainer = document.querySelector('.pokemoncontainer');
const btn = document.getElementById('btn-buscar');

const fetchPokemon = id => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
        createPokemon(data);
    });
}

const fetchPokemons = number => {
    for(let i =1; i <= number; i++) {
        fetchPokemon(i);
    }
}

const createPokemon = pokemon => {    

    const card = document.createElement('div');
    card.classList.add('pokemon-block');
    card.classList.add('card');
    card.classList.add('w-auto');
    card.classList.add('text-white');
    card.classList.add('bg-dark');
    card.classList.add('text-end');

    // card text-dark bg-warning mb-3

    const col = document.createElement('div');
    col.classList.add('col');
    col.style.marginTop = '2em';
    
    
    col.appendChild(card);

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.back_default;
    sprite.classList.add('card-img-top');
    
    spriteContainer.appendChild(sprite);

    const name = document.createElement('h5');
    name.textContent = pokemon.name;
    name.classList.add('card-title');

    const number = document.createElement('p');
    number.textContent = `ID: ${pokemon.id.toString().padStart(3, 0)}`;
    number.classList.add('card-text');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.appendChild(name);
    cardBody.appendChild(number);

    card.appendChild(spriteContainer);
    card.appendChild(cardBody);

    
    pokemonContainer.appendChild(col);

}

btn.addEventListener('click', () => {
    const nombreid = document.getElementById('nombreid').value;
    fetchPokemons(10);
    fetchPokemon(nombreid);
});
