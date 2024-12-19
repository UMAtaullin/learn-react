import style from './Users.module.css';

const Pagination = (props) => {
  let pagesCount = props.totalCount / props.pageSize;
  let pages = [];
  for (let i = 1; i <= Math.ceil(pagesCount); i++) {
    pages.push(i);
  }

  return (
    <div className={style.pagination}>
      {pages.map((page) => {
        return (
          <span
            className={props.currentPage === page ? style.activePage : null}
            onClick={() => {
              props.onPageChange(page);
            }}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
