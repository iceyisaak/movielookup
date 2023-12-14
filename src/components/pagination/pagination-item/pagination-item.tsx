import classNames from 'classnames';

import style from './pagination-item.module.scss';

const cx = classNames.bind(style);


type PaginationItem = {
    page?: number,
    currentPage: number,
    onPageChange: (page: number) => void,
    disabled?: boolean
}

export const PaginationItem = ({ page, currentPage, onPageChange, disabled }: PaginationItem) => {
    const liClasses = cx({
        [`${style['active']}`]: page === currentPage,
        [`${style['disabled']}`]: disabled,
    });

    const getSelectedPageHandler = () => {
        onPageChange(page!)
    }

    return (
        <li className='flex' onClick={getSelectedPageHandler}>
            <span className={`${liClasses} text-2xl mx-8 cursor-pointer`}>
                {page}
            </span>
        </li>
    );
};

