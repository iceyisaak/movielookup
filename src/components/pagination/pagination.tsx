import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { useSearchParams } from "react-router-dom";
import { PaginationItem } from './pagination-item';
import { useEffect } from "react";


type Pagination = {
    currentPage: number,
    total: number,
    limit: number,
    onPageChange: (page: number) => void
}

export const Pagination = ({ currentPage, total, limit, onPageChange }: Pagination) => {

    const [pageParams, setPageParams] = useSearchParams()


    const range = (start: number, end: number) => {
        return [...Array(end - start).keys()].map((el) => el + start);
    };

    type GetPagesCut = {
        pagesCount: number,
        pagesCutCount: number,
        currentPage: number
    }

    const getPagesCut = ({ pagesCount, pagesCutCount, currentPage }: GetPagesCut) => {
        const ceiling = Math.ceil(pagesCutCount / 2);
        const floor = Math.floor(pagesCutCount / 2);
        // console.log("ceiling", ceiling);
        // console.log("floor", floor);

        if (pagesCount < pagesCutCount) {
            return { start: 1, end: pagesCount + 1 };
        } else if (currentPage >= 1 && currentPage <= ceiling) {
            return { start: 1, end: pagesCutCount + 1 };
        } else if (currentPage + floor >= pagesCount) {
            return { start: pagesCount - pagesCutCount + 1, end: pagesCount + 1 };
        } else {
            return { start: currentPage - ceiling + 1, end: currentPage + floor + 1 };
        }
    };



    const pagesCount = Math.ceil(total / limit);
    const pagesCut = getPagesCut({ pagesCount, pagesCutCount: limit, currentPage });
    const pages = range(pagesCut.start, pagesCut.end);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === pagesCount;


    useEffect(() => {
        updateResultPageQuery()
    }, [currentPage])


    const updateResultPageQuery = () => {
        pageParams.set("page", currentPage.toString())
        setPageParams(pageParams)
    }



    const getFirstPageHandler = () => {
        onPageChange(1)
    }

    const getLastPageHandler = () => {
        onPageChange(pagesCount)
    }

    const getPrevPageHandler = () => {
        if (currentPage <= 1) return
        onPageChange(currentPage - 1)
    }

    const getNextPageHandler = () => {
        if (currentPage < pagesCount) {
            onPageChange(currentPage + 1)
        }
    }



    return (
        <article className="flex justify-center mt-40">
            <ul className="flex">

                <LuChevronFirst
                    size={20}
                    onClick={getFirstPageHandler}
                    className={``}
                    isDisabled={isFirstPage}
                />

                <HiOutlineChevronLeft
                    size={20}
                    onClick={getPrevPageHandler}
                    isDisabled={isFirstPage}
                />

                {pages.map((page) => (
                    <PaginationItem
                        page={page}
                        key={page}
                        currentPage={currentPage}
                        onPageChange={onPageChange}
                    />
                ))}

                <HiOutlineChevronRight
                    size={20}
                    onClick={getNextPageHandler}
                />


                <LuChevronLast
                    size={20}
                    onClick={getLastPageHandler}
                />


            </ul>
        </article>

    )
}
