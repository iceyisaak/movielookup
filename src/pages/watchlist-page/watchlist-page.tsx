import { useWatchlistStore } from "../../features/store/watchlist-store";
import { useQueries } from "@tanstack/react-query";
import { fetchCinemaDetail } from "../../apis/movie-api";
import { Link } from "react-router-dom";
import { MdOutlinePlayCircle } from "react-icons/md";
import { TbMovieOff } from "react-icons/tb";
import { MdPlaylistRemove } from "react-icons/md";
import { Pagination } from "../../components/pagination";
import { SlClose } from "react-icons/sl";

import { useEffect, useState } from "react";

export function WatchlistPage() {
  const { ids } = useWatchlistStore();
  const { remove, removeAll } = useWatchlistStore();
  const [currentPage, setCurrentPage] = useState(1);
  const LIMIT = 10;

  const onPageChangeHandler = (page: number) => {
    setCurrentPage(page);
  };

  const clearWatchlistHandler = () => {
    if (confirm("Are you sure you want to clear the Watchlist?")) {
      removeAll();
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  // Slice ids based on current page BEFORE passing to useQueries
  const paginatedIds = ids.slice(
    (currentPage - 1) * LIMIT,
    currentPage * LIMIT,
  );

  const results = useQueries({
    queries: paginatedIds.map((id) => ({
      queryKey: ["cinema", id],
      queryFn: () => fetchCinemaDetail(id, "short"),
    })),
  });

  return (
    <section className="mt-40 px-5 text-gray-300">
      <article className="mb-5 px-5 text-center">
        <h2 className="text-6xl mb-7 font-extrabold flex justify-center">
          Watchlist
          <MdOutlinePlayCircle size={30} className="text-gray-600" />
        </h2>
        <p className="text-gray-300 mb-20 text-3xl">
          Total Saved: {ids.length} Cinema(s)
        </p>
      </article>
      <article className="flex justify-center">
        <div className="flex flex-wrap justify-center">
          {ids.length > 0 ? (
            <article className="flex justify-center">
              <div className="flex flex-wrap justify-center">
                {results.map((result, index) => {
                  if (!result.isSuccess) return null;
                  const cinema = result.data;
                  const imdbID = cinema.imdbID;
                  return (
                    <Link
                      key={index}
                      to={`/detail/${cinema.imdbID}`}
                      className="mx-2 my-2 bg-gray-900 relative rounded-lg w-108 flex flex-col"
                    >
                      <div className="inline-flex h-full overflow-hidden">
                        <img
                          src={
                            cinema.Poster === "N/A"
                              ? `https://placehold.co/90x135?text=N/A`
                              : cinema.Poster
                          }
                          alt={cinema.Title}
                          className="w-108 h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://placehold.co/90x135?text=N/A";
                          }}
                        />
                      </div>
                      <div className="px-1 pb-5 relative flex-1">
                        <div className="flex flex-wrap">
                          <h1 className="text-3xl font-bold break-words text-gray-100">
                            {cinema.Title}
                          </h1>
                        </div>
                        <p className="uppercase text-xl text-gray-100">
                          {cinema.Type}
                        </p>
                        <p className="text-gray-300 text-xl">{cinema.Year}</p>
                      </div>
                      <span className="absolute right-1 bottom-0 flex">
                        {
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              remove(imdbID!);
                            }}
                          >
                            <MdPlaylistRemove size={30} />
                          </button>
                        }
                      </span>
                    </Link>
                  );
                })}
              </div>
            </article>
          ) : (
            <div className="flex flex-col items-center">
              <h3 className="text-3xl mb-3">Watchlist is Empty</h3>
              <TbMovieOff size={50} />
            </div>
          )}
        </div>
      </article>

      {ids.length > 0 && (
        <button
          onClick={() => clearWatchlistHandler()}
          className="absolute top-24 right-3 flex flex-col items-center gap-2"
        >
          <SlClose size={30} className="text-gray-600" />
        </button>
      )}

      {ids.length > 0 && (
        <Pagination
          currentPage={currentPage}
          total={ids.length}
          limit={LIMIT}
          onPageChange={onPageChangeHandler}
        />
      )}
    </section>
  );
}
