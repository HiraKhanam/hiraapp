export const getStaticProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
};

const api1 = ({ data }) => {
  return (
    <div>
      {data.results.map((curElem) => {
        return (
          <div key={curElem.id}>
            <h3 className="font-extrabold italic">{curElem.id}</h3>
            <h2 className="font-bold">{curElem.name}</h2>
            <h2 className="font-semibold">{curElem.status}</h2>
            <h2>{curElem.species}</h2>
            <h2 className="italic">{curElem.url}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default api1;
