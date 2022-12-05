import { memo } from 'react';
import './index.css';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getImageUrl, strToSlug } from 'helpers';

import { ComicType } from 'types/ComicType';

import { Cover } from './styles';

interface IComicCardProps {
  comic: ComicType;
}

const ComicCard: React.FC<IComicCardProps> = ({ comic }) => (
  <Card className="w-100 effectcard color effect ">
    <Link to={`/comics/${comic.id}/${comic.title}`}>
      <Cover
        aspectRatio="1x1"
        coverimage={getImageUrl(comic.thumbnail)}
        alt={comic.title}
        className="img-fluid px-4 zoom"
      >
        <div />
      </Cover>
    </Link>

    <Card.Body>
      <Card.Title>
        <Link to={`/comics/${comic.id}/${strToSlug(comic.title)}`}>
          {comic.title}
        </Link>
      </Card.Title>
    </Card.Body>
  </Card>
);

export default memo(ComicCard);
