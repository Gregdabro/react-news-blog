import _ from "lodash"
import classes from "./pagination.module.css"

const PaginationItem = ({ page, currentPage, onPageChange }) => {
  const getClasses = () => {
    return page === currentPage
      ? `${classes.pageItem} ${classes.active}`
      : classes.pageItem
  }
  return (
    <li className={getClasses()} onClick={() => onPageChange(page)}>
      <button className={classes.pageLink}>{page}</button>
    </li>
  )
}

const Pagination = ({ totalCount, onPageChange, currentPage, limit }) => {
  const pagesCount = Math.ceil(totalCount / limit)
  const pages = _.range(1, pagesCount + 1)

  if (pagesCount === 1) return null
  return (
    <nav className={classes.nav}>
      <ul className={classes.pagination}>
        {pages.map((page) => (
          <PaginationItem
            key={page}
            page={page}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
