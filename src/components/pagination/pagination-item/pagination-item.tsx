import classNames from 'classnames';
import { ReactNode } from 'react';

import style from './pagination-item.module.scss'

const cx = classNames.bind(style);


type PaginationItem = {
    text?: string | ReactNode,
    page?: number,
    currentPage: number,
    onPageChange: (page: number) => void,
    isDisabled?: boolean
}

export const PaginationItem = ({ page, currentPage, onPageChange, isDisabled, text }: PaginationItem) => {
    const liClasses = cx({
        [`${style['active']}`]: page === currentPage,
        [`${style['disabled']}`]: isDisabled,
    });
    return (
        <li className='flex' onClick={() => onPageChange(page!)}>
            <span className={`${liClasses} text-2xl mx-8 cursor-pointer`}>
                {page ? page : text}
            </span>
        </li>
    );
};

