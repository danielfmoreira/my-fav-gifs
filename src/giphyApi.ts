import { Gif } from "./container/GifContainer";
const giphy = require('giphy-api')(process.env.GIPHY_API_KEY);

type JSON = { [key: string]: any };

export const searchGifs = async (searchText: string): Promise<Gif[]> => {
  const res = await giphy.search(searchText);

  return res.data && res.data.map((apiGif: JSON) => {
    return {
      id: apiGif.id,
      name: apiGif.title,
      url: apiGif.images['fixed_width'].url,
    }
  })
}
