"use client";

import { useEffect, useState } from "react";

export type UseFetchReturnType = {
  data: unknown;
  isLoading: boolean;
  error: string | null;
};

const useAPI = (url: string, interval: number): UseFetchReturnType => {
  const [data, setData] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, interval);

    return () => clearInterval(intervalId);
  }, [url, interval]);

  return { data, isLoading, error };
};

export default useAPI;