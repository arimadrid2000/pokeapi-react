import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
      .then(async (r) => await r.json())
      .then((data) => setData(data));
    }, []);

    return {data};
}