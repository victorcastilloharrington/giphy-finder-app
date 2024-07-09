import { useEffect, useState } from "react";

type Props = {
  url: string;
};

const useFetch = ({ url }: Props) => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error: any) {
        setError(error?.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
