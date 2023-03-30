const getPokemon = async (n) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`);
  const data = await response.json();
  return data.name;
};

const getPokemons = async (input) => {
  const memo = {};
  const output = [];

  for (const n of input) {
    if (!memo[n]) {
      memo[n] = await getPokemon(n);
    }
    output.push(memo[n]);
  }

  return output;
};

(async () => {
  const input = [1, 6, 7, 7, 9, 10];
  const output = await getPokemons(input);
  console.log(output); // ["bulbasaur", "charizard", "squirtle", "squirtle", "blastoise", "caterpie"]
})();
