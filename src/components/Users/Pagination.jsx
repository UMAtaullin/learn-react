import { useState } from 'react';
import style from './Pagination.module.css';

const Pagination = ({
  totalCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize = 10,
}) => {
  debugger
  let pagesCount = Math.ceil(totalCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [currentPortion, setCurrentPortion] = useState(1);
  let currentLeftBorder = (currentPortion - 1) * portionSize + 1;
  let currentRightBorder = currentPortion * portionSize;

  return (
    <div className={style.listPages}>
      {currentPortion > 1 ? (
        <span>
          <button
            onClick={() => {
              onPageChange(pages[0]);
              setCurrentPortion(1);
            }}
          >
            toFirst
          </button>
          <button
            onClick={() => {
              currentPortion !== 1 && setCurrentPortion(currentPortion - 1);
            }}
          >
            {' '}
            PREV{' '}
          </button>
        </span>
      ) : null}
      {pages
        .filter((p) => currentLeftBorder <= p && p <= currentRightBorder)
        .map((p) => (
          <span
            key={p}
            onClick={(e) => {
              onPageChange(p);
            }}
            className={currentPage === p ? style.selectedPage : style.pageLink}
          >
            {' '}
            {p}
          </span>
        ))}
      {currentPortion < portionCount ? (
        <span>
          <button
            onClick={() => {
              currentPortion !== pagesCount &&
                setCurrentPortion(currentPortion + 1);
            }}
          >
            {' '}
            NEXT{' '}
          </button>{' '}
          <button
            onClick={() => {
              onPageChange(pages[pages.length - 1]);
              setCurrentPortion(portionCount);
            }}
          >
            toLast
          </button>
        </span>
      ) : null}
    </div>
  );
};

export default Pagination;
