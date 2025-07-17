//menampilkan halaman 1, 2, 3
import React from 'react';
import '../styles/Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const goToPage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
    
    // Scroll utk konten teratas
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const renderPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      pages.push(
        <button key={1} onClick={() => goToPage(1)}>
          1
        </button>
      );
      
      if (startPage > 2) {
        pages.push(
          <span key="ellipsis1" className="page-info">...</span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={i === currentPage ? 'active' : ''}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="ellipsis2" className="page-info">...</span>
        );
      }
      
      pages.push(
        <button key={totalPages} onClick={() => goToPage(totalPages)}>
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button 
        onClick={() => goToPage(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        ‹
      </button>
      
      {renderPageNumbers()}
      
      <button 
        onClick={() => goToPage(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        ›
      </button>
    </div>
  );
};

export default Pagination;
