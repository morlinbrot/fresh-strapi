import { Handlers, PageProps } from "$fresh/server.ts";

import { CallToAction } from "../components/CallToAction.tsx";
import { Header } from "../components/Header.tsx";
import { HowWe } from "../components/HowWe.tsx";
import { PeopleSaying } from "../components/PeopleSaying.tsx";
import { PokemonCards } from "../components/PokemonCards.tsx";
import { SocialProofs } from "../components/SocialProofs.tsx";

export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonDetails = {
  name: string;
  height: number;
  weight: number;
  order: number;
  sprites: {
    front_default: string;
  };
};

export const handler: Handlers<PokemonDetails[]> = {
  async GET(_req, ctx) {
    let pokemonDetails: PokemonDetails[] = [];
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      if (!response.ok) {
        throw new Error("Failed to fetch Pokémon list");
      }
      const data = await response.json();
      const pokemonList: Pokemon[] = data.results;

      pokemonDetails = await Promise.all(
        // Get every third to remove evolutions
        pokemonList.slice(0, 3).map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          if (!response.ok) {
            throw new Error("Failed to fetch Pokémon details");
          }
          return response.json();
        }),
      );
    } catch (error) {
      console.error("Error fetching the Pokémon data:", error);
    }

    return ctx.render(pokemonDetails);
  },
};

export default function Home(props: PageProps<PokemonDetails[]>) {
  const pokemons = props.data;

  return (
    <div className=" flex items-center flex-col ">
      <Header />
      <main className="flex flex-col items-center justify-center w-full ">
        <section className="flex flex-col justify-between w-full pb-[130px] gap-[130px]">
          <CallToAction />
          <SocialProofs />
        </section>

        <section className="bg-[#F9F8FE] flex py-[70px] gap-[30px] w-full justify-center px-[130px]">
          <HowWe />
        </section>

        <section className="flex py-[120px] flex-col justify-center align-middle items-center">
          <PokemonCards pokemons={pokemons} />
        </section>

        <section className="w-full">
          <PeopleSaying />
        </section>
      </main>
    </div>
  );
}
