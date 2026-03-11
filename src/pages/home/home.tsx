import { SearchForm } from "../../components/search-form";
import { useWatchlistStore } from "../../features/store/watchlist-store";
import { RiMovie2Line, RiPlayList2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export function Home() {
  const ids = useWatchlistStore((s) => s.ids);
  const hasWatchlist = ids.length > 0;
  return (
    <section>
      <article className="flex w-screen h-screen bg-gray-950 justify-center pt-60">
        <div className="h-max w-11/12 md:w-10/12 lg:w-6/12 flex flex-col items-center">
          <h1 className="text-8xl mb-5 text-yellow-300 flex">
            Movie Lookup
            <RiMovie2Line />
          </h1>
          <RiMovie2Line />
          <SearchForm />
        </div>
        {hasWatchlist && (
          <Link
            to="/watchlist"
            className="absolute top-6 right-6 flex items-center gap-2"
          >
            <RiPlayList2Fill size={30} className="text-gray-600" />
          </Link>
        )}
      </article>
    </section>
  );
}
