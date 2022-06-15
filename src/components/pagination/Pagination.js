import React from 'react';
import { getPagesArray } from '../../utils/pages';

export default function Pagination({ totalPages, page, changePage }) {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div style={{ marginTop: 30 }} className="page_wrapper">
      {pagesArray.map(p => (
        <span
          key={p}
          className={page === p ? 'page page_current' : 'page'}
          onClick={() => changePage(p)}
        >
          {p}
        </span>
      ))}
    </div>
  );
}
