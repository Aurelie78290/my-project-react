
interface PokemonCard {
pokemon : {
  name: string;
  imgSrc?: string;
  color: string;
}
}

function PokemonCard ({pokemon} : PokemonCard) {


return <figure className="card" style={{ backgroundColor: pokemon.color }}>

    {pokemon.imgSrc !== undefined ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} className="card-img"/>
    ) : (
        <p>???</p>
)}

    <figcaption>{pokemon.name}</figcaption>
  </figure>;
}

export default PokemonCard;