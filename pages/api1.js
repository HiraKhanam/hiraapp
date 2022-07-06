import image from "next/image";
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
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-pink-200 border">
      {data.results.map((curElem) => {
        return (
          <div
            key={curElem.id}
            className="flex  bg-indigo-400 items-center justify-center p-5"
          >
            <img className="my-2 rounded md:w-64 w-40" src={curElem.image} />
            <div class="ml-2 md:ml-5 my-auto">
              <h3 className="font-extrabold italic sm:text-lg text-sm text-indigo-200 sm:mb-2 mb-0">
                {curElem.id}.
              </h3>
              <h2 className="font-bold text-xl  text-indigo-100">
                Name: {curElem.name}
              </h2>
              <h2 className="font-semibold text-lg  text-indigo-100">
                Status:{curElem.status}
              </h2>
              <h2 className="font-semibold text-lg  text-indigo-100">
                Species:{curElem.species}
              </h2>
              <h2 className="font-semibold text-lg  text-indigo-100">
                Gender:{curElem.gender}
              </h2>
              <h2 className="italic text-sm  text-indigo-100">{curElem.url}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default api1;
