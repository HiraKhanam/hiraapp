export const getStaticProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
const api1 = ({ data }) => {
  return (
    <div>
      {data?.map((curElem) => {
        return (
          <div key={curElem.id}>
            <h3>{curElem.id}</h3>
            <h2>{curElem.name}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default api1;
