import { Gif } from "./GifContainer";
const giphy = require('giphy-api')('4FXcRCZFZHO3MolGadfYQdIqxVEF6zfa');

type JSON = { [key: string]: any };

export const searchGifs = async (searchText: string): Promise<Gif[]> => {
  const res = await giphy.search(searchText);

  return res.data.map((apiGif: JSON) => {
    return {
      id: apiGif.id,
      label: apiGif.title,
      url: apiGif.images['fixed_width'].url,
    }
  })
}
