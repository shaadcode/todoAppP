const useFetch = async (url: string) => {
  let data = null;
  const prom = await fetch(url)
    .then((parseData) => parseData.json())
    .then((dataJs) => (data = dataJs));

  return data;
};

export default useFetch;
