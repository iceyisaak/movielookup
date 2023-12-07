import { PaginationItem } from './pagination-item'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";


type Pagination = {
    currentPage: number,
    total: number,
    limit: number,
    onPageChange: (page: number) => void
}

export const Pagination = ({ currentPage, total, limit, onPageChange }: Pagination) => {


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
        console.log("ceiling", ceiling);
        console.log("floor", floor);

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
    const pagesCut = getPagesCut({ pagesCount, pagesCutCount: 10, currentPage });
    const pages = range(pagesCut.start, pagesCut.end);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === pagesCount;

    console.log('currentPage', currentPage)
    console.log('pages.length', pages.length)
    console.log('pagesCut.end', pagesCut.end)



    return (
        <article className="flex justify-center mt-40">
            <ul className="flex">

                <PaginationItem
                    text={<LuChevronFirst size={20} />}
                    currentPage={currentPage}
                    onPageChange={() => onPageChange(1)}
                    isDisabled={isFirstPage}
                />

                <PaginationItem
                    text={<HiOutlineChevronLeft size={20} />}
                    currentPage={currentPage}
                    onPageChange={() => onPageChange(currentPage - 1)}
                />

                {pages.map((page) => (
                    <PaginationItem
                        page={page}
                        key={page}
                        currentPage={currentPage}
                        onPageChange={onPageChange}
                    />
                ))}

                <PaginationItem
                    text={<HiOutlineChevronRight size={20} />}
                    currentPage={currentPage}
                    onPageChange={() => onPageChange(currentPage + 1)}
                    isDisabled={isLastPage}
                />

                <PaginationItem
                    text={<LuChevronLast size={20} />}
                    currentPage={currentPage}
                    onPageChange={() => onPageChange(pagesCount)}
                    isDisabled={isLastPage}
                />

            </ul>
        </article>

    )
}
