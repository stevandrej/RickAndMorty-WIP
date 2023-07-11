import { Gender } from "./Gender";
import { Status } from "./Status";

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterFilter {
  name?: string;
  status?: Status;
  species?: string;
  type?: string;
  gender?: Gender;
}
