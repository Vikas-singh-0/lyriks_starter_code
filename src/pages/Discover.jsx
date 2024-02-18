import { genres } from "../assets/constants";
import { SongCard } from "../components";

const Discover = () => {
  const genresTitle = "Pop";
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-center items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="text-white text-left text-3xl font-bold ">
          Discover {genresTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-green-50 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          name="genere"
          id=""
        >
          {genres.map((genere) => {
            return (
              <option key={genere.value} value={genere.value}>
                {genere.title}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex text-white flex-wrap justify-center  md:max-w-screen-sm:justify-start gap-8">
        {[1, 2, 3, 4, 5, 6].map((song, i) => (
          <SongCard key={song.key} song={song} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
