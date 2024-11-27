import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const useFetch = (url,options = {}) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchRespectiveApi = async () => {
      try {
        setPending(true);
        setTimeout(async() => {
            new Promise(async(resolve) => {
                const { data } = await axios.get(url, { ...options });
            setResult(data);
            setPending(false);
            setError(false);
            resolve()
            })
        }, 3000)
      } catch (error) {
        setError(true);
        setPending(false);
      }
    };

    if (url?.length > 0) {
      fetchRespectiveApi();
    }
  }, [url]);

  return { pending, error, result };
};

export default useFetch;
