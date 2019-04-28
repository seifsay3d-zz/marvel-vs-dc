import { AxiosRequestConfig } from "axios";

export interface Character {
  id: number;
  name: string;
  description: string;
  power: number;
}
export interface CharacterSearch extends AxiosRequestConfig {
  name?: string;
}
export interface CharactersState {
  list: Character[];
  character: Character | null;
  match: Match | null;
  matches: Match[] | null;
}

export interface MatchPayload {
  first: number;
  second: number;
}

export interface MatchVotePayload {
  character: number;
  match: number;
}

export interface RootState {
  characters: CharactersState;
}

export interface Match {
  id: number;
  first: {
    character: Character;
    votes: number;
  };
  second: {
    character: Character;
    votes: number;
  };
}
