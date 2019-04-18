export interface Character {
  name: string;
  id: number;
}

export interface CharactersState {
  list: Character[];
  character: Character | null;
  match: Match | null;
  matches: Match[] | null;
}

export interface CharacterMatch {
  first: number;
  second: number;
}

export interface RootState {
  characters: CharactersState;
}

export interface CharacterStatus extends Character {
  votes: number;
}
export interface Match {
  first: CharacterStatus;
  second: CharacterStatus;
}
