export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  officialSite: string | null;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number | null;
  };
  image: {
    medium?: string;
    original?: string;
  };
  summary: string;
}

export interface Cast{
  id: number;
  name: string;
  image: {
    medium?: string;
    original?: string;
  };
}
export interface Action<T=undefined>{
  type: string;
  payload?: T;
}
export type ActionCreator<P=void,T=P > = (value: P)=> Action<T>
export type EmptyActionCreator = () => Action;