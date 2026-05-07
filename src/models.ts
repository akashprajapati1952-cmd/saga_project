interface Show {
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