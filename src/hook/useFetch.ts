import { useCallback, useEffect, useMemo, useState } from 'react';
import axios, { AxiosError } from 'axios';

interface IUseFetch<T> {
  endpoint: string;
  queryParams: T;
}

interface IUseFetchReturns<T> {
  refetchData: () => void;
  isLoading: boolean;
  data: T[];
  error: string | null;
}

const API_URL = 'https://jsearch.p.rapidapi.com';
const RAPID_API_KEY = 'c1e913e40cmshb43bbd6ec50979ap1b0706jsn42868e8c7a83';

const useFetch = <T>({
  endpoint,
  queryParams,
}: IUseFetch<T>): IUseFetchReturns<T> => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const options = useMemo(() => {
    return {
      method: 'GET',
      url: `${API_URL}/${endpoint}`,
      headers: {
        'X-RapidAPI-Key': RAPID_API_KEY,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
      },
      params: { ...queryParams },
    };
  }, [endpoint, queryParams]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (e: any) {
      if (axios.isAxiosError(e)) {
        const axiosError = e as AxiosError;
        setError(axiosError.message);
      } else {
        setError(e?.message as string);
      }
    } finally {
      setIsLoading(false);
    }
  }, [options]);

  const refetchData = useCallback(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    refetchData();
  }, []);

  return {
    refetchData,
    isLoading,
    data,
    error,
  };
};

export default useFetch;
