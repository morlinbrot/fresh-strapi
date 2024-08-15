import { PokemonDetails } from "../routes/index.tsx";

export function PokemonCards({ pokemons }: { pokemons: PokemonDetails[] }) {
  return (
    <div class="flex flex-col items-center my-40">
      <h1 class="text-4xl font-bold w-[492px] text-center">
        Choose the Pokemon that's right for you
      </h1>
      <p class="text-lg mt-10 text-gray-400 font-semibold">
        Choose a pokemon that works best for you, feel free to contact us
      </p>
      <div class="flex lg:justify-evenly w-full mt-24 lg:flex-row flex-col items-center gap-10 px-10">
        {pokemons.map((pokemon) => (
          <div class="flex flex-col bg-white shadow-lg rounded-xl h-[644px] w-[374px] items-center p-12">
            <div class="capitalize font-bold text-2xl">{pokemon.name}</div>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              height={200}
              width={200}
              loading="lazy"
            />
            <div class="bg-green-50/50 p-5 rounded-lg flex flex-col gap-4 w-full h-full">
              <div class="flex items-center gap-3">
                <div class="bg-green-500 w-4 h-4 rounded-full" />
                <b>Height</b>: {pokemon.height}
              </div>
              <div class="flex items-center gap-3">
                <div class="bg-green-500 w-4 h-4 rounded-full" />
                <b>Weight</b>: {pokemon.weight}
              </div>
              <div class="flex items-center gap-3">
                <div class="bg-green-500 w-4 h-4 rounded-full" />
                <b>Order</b>: {pokemon.order}
              </div>
              <button class="bg-white rounded-xl text-primary font-semibold p-4 shadow-md mt-auto">
                Sign up for free
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
