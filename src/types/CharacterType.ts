export type ThumbnailType = {
  path: string;
  extension: string;
};

export type CharacterType = {
  id: number;
  name: string;
  description: string;
  thumbnail: ThumbnailType;
  urls: string;
};
