import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Api from 'services/Api';

import { ComicType } from 'types/ComicType';

interface IContextProps {
  comics: ComicType[];
  comic: ComicType | null;
  isLoading: boolean;
  totalPages: number;
  currentPage: number;
  error: string | null;
  fetchComic: (id: number, search?: string) => Promise<void>;
  fetchComics: (page: number, serch?: string) => Promise<void>;
}

interface IComicsProviderProps {
  children: React.ReactNode;
}

export const ReactContext = createContext<IContextProps>({} as IContextProps);

export const ComicsProvider: React.FC<IComicsProviderProps> = ({
  children,
}) => {
  const [comics, setComics] = useState<ComicType[]>([]);
  const [comic, setComic] = useState<ComicType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const fetchComics = useCallback(async (page: number, search?: string) => {
    const limit = 24;
    const offset = (page - 1) * limit;

    setCurrentPage(page);
    setIsLoading(true);
    setError(null);

    const params = {
      offset,
      limit,
      titleStartsWith: search?.length ? search : undefined,
    };

    try {
      const response = await Api.get('/comics', { params });
      setComics(response.data.data.results);
      setTotalPages(Math.ceil(response.data.data.total / limit));
    } catch {
      // eslint-disable-next-line no-console
      console.log('deu erro');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const fetchComic = useCallback(async (id: number, search?: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await Api.get(`comics/${id}`);
      setComic(response.data.data.results[0]);
    } catch {
      setError('Erro: Não foi possível carregar');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchComics(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          comics,
          comic,
          isLoading,
          totalPages,
          currentPage,
          error,
          fetchComic,
          fetchComics,
        }),
        [
          comics,
          comic,
          isLoading,
          totalPages,
          currentPage,
          error,
          fetchComics,
          fetchComic,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const useComics = (): IContextProps => {
  const context = useContext(ReactContext);

  if (!context) {
    throw new Error('useComics must be within ComicsProvider');
  }

  return context;
};
