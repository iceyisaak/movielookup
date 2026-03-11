import { useWatchlistStore } from "../../features/store/watchlist-store";
import { useQueries } from "@tanstack/react-query";
import { fetchCinemaDetail } from "../../apis/movie-api";
// import { Pagination } from "../../components/pagination";

export function WatchlistPage() {
  const { ids } = useWatchlistStore();

  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["cinema", id],
      queryFn: () => fetchCinemaDetail(id, "short"),
    })),
  });

  return (
    <section className="mt-40 px-5 text-gray-300">
      <div className="">
        <article className="mb-5 px-5 text-center">
          <h2 className="text-6xl mb-7 font-extrabold">Watchlist</h2>
        </article>
        <article className="flex justify-center">
          <div
            className="flex flex-wrap justify-center
                        w-[auto]
                        sm:w-[120rem]
                        "
          >
            {ids.length > 0 ? (
              <div className="grid grid-cols-4 gap-4">
                {results.map((result, index) => {
                  if (!result.isSuccess) return null;
                  const movie = result.data;
                  return (
                    <img
                      key={ids[index]}
                      src={movie.Poster}
                      alt={movie.Title}
                    />
                  );
                })}
              </div>
            ) : (
              <h3 className="text-3xl">Watchlist is Empty</h3>
            )}
          </div>
          <div></div>
        </article>
      </div>
    </section>
  );
}
