export const randomPoke = (allPokemon) => {

    let x = Math.floor(Math.random() * 1118);
    let randomPokemon = allPokemon[x];
    return(randomPokemon);

}