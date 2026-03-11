import { useWatchlistStore } from "../../features/store/watchlist-store";
import { useQueries } from "@tanstack/react-query";
import { fetchCinemaDetail } from "../../apis/movie-api";

export function WatchlistPage() {
  const { ids } = useWatchlistStore();

  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["cinema", id],
      queryFn: () => fetchCinemaDetail(id, "short"), // 👈 raw function, not the hook
    })),
  });

  return (
    <section className="mt-40 px-5 text-gray-300">
      <div className="">
        <h1 className="text-6xl mb-7 font-extrabold">Watchlist</h1>
        <div>
          {ids.length > 0 ? (
            <div className="grid grid-cols-4 gap-4">
              {results.map((result, index) => {
                if (!result.isSuccess) return null;
                const movie = result.data;
                return (
                  <img key={ids[index]} src={movie.Poster} alt={movie.Title} />
                );
              })}
            </div>
          ) : (
            <h3 className="text-3xl">Watchlist is Empty</h3>
          )}
        </div>
        <div></div>
      </div>
    </section>
  );
}
