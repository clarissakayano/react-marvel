import { ThumbnailType } from './CharacterType';

export type ComicType = {
  id: number;
  title: string;
  thumbnail: ThumbnailType;
  description: string;
  text: string;
  creators: string;
};
