//not working yet
import { mockGames } from "../data/games.mock";
import { Game } from "../types/game";

export async function getGames(): Promise<Game[]> {
  // later this becomes an API call
  return mockGames;
}
