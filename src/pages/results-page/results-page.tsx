import { Link, useSearchParams } from "react-router-dom";
import { getSearchCinema } from "../../apis/movie-api";

import { useEffect, useState } from "react";
import { MdPlaylistAdd, MdPlaylistRemove } from "react-icons/md";

import { Pagination } from "../../components/pagination";
import { useWatchlistStore } from "../../features/store/watchlist-store";

export const ResultsPage = () => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const searchTitleString = searchParams.get("title")?.toString();
  const searchPageString = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(+searchPageString!);
  const { data: SearchResult } = getSearchCinema(
    searchTitleString,
    +currentPage,
  );
  const { add, remove, has } = useWatchlistStore();

  const onPageChangeHandler = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTitleString]);

  return (
    <section className="w-screen pt-32 pb-52">
      <article className="mb-5 px-5 text-center">
        <h2 className="text-gray-300 text-6xl mb-7 font-extrabold">
          Search Results for: "{searchTitleString ? searchTitleString : null}"
        </h2>
        <p className="text-gray-300 mb-20 text-3xl">
          Found: {SearchResult?.totalResults} Cinema(s)
        </p>
      </article>

      <article className="flex justify-center">
        <div className="flex flex-wrap justify-center">
          {!SearchResult?.Search?.length && searchTitleString && (
            <p className="text-gray-400 text-xl mt-10">
              No results found for "{searchTitleString}"
            </p>
          )}
          {SearchResult?.Search?.map((cinema) => {
            const saved = has(cinema.imdbID);
            return (
              <Link
                key={cinema.imdbID}
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
                  <p className="uppercase text-l text-gray-100 text-xl">
                    {cinema.Type}
                  </p>
                  <p className="text-gray-300 text-xl">{cinema.Year}</p>
                </div>
                <span className="absolute right-1 bottom-0 flex">
                  <button
                    className="flex flex-col items-center mt-4"
                    onClick={(e) => {
                      e.preventDefault();
                      saved ? remove(cinema.imdbID) : add(cinema.imdbID);
                    }}
                  >
                    {saved ? (
                      <>
                        <MdPlaylistRemove size={30} />
                      </>
                    ) : (
                      <>
                        <MdPlaylistAdd size={30} />
                      </>
                    )}
                  </button>
                </span>
              </Link>
            );
          })}
        </div>
      </article>

      <Pagination
        currentPage={currentPage}
        total={+SearchResult?.totalResults!}
        limit={10}
        onPageChange={onPageChangeHandler}
      />
    </section>
  );
};
