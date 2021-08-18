const pokemonContainer = document.querySelector('.pokemoncontainer');
const btn = document.getElementById('btn-buscar');

const fetchPokemon = id => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
    createPokemon(data);
    });
    
}

const createPokemon = (pokemon) => {    

    const card = document.createElement('div');
    card.classList.add('pokemon-block');
    card.classList.add('card');
    card.classList.add('w-auto');
    card.classList.add('text-white');
    card.classList.add('bg-dark');
    card.classList.add('text-end');

    const col = document.createElement('div');
    col.classList.add('col');
    col.style.marginTop = '2em';
    
    
    col.appendChild(card);

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_shiny;
    sprite.classList.add('card-img-top');
    
    spriteContainer.appendChild(sprite);

    const name = document.createElement('h5');
    // Formato de nombre propio
    name.textContent = pokemon.name.split('-').map(p => p[0].toUpperCase() + p.slice(1)).join(' ');
    name.classList.add('card-title');

    const id = document.createElement('p');
    id.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;
    
    // Type
    const typep = document.createElement('p');
    typep.textContent = `Tipo: ${pokemon.type}`;
    
    id.appendChild(typep);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.appendChild(name);
    cardBody.appendChild(id);

    card.appendChild(spriteContainer);
    card.appendChild(cardBody);
    
    pokemonContainer.appendChild(col);

}
btn.addEventListener('click', () => {
    // Se obtiene el dato con formato
    const nombreid = document.getElementById('nombreid').value.replace(' ', '-').toLowerCase();
    fetchPokemon(nombreid);   
    
});
