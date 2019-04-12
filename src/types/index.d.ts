export interface Character {
  name: string;
  id: number;
}

export interface CharactersState {
  list: Character[];
  character: Character | null;
  match: Character[];
}

export interface CharacterMatch {
  first: number;
  second: number;
}

export interface RootState {
  characters: CharactersState;
}
