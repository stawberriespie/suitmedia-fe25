import React from 'react';
import '../styles/Controls.css';

const Controls = ({ showingInfo, currentSort, currentPerPage, onSortChange, onPerPageChange }) => {
  return (
    <div className="controls">
      <div className="showing-info">{showingInfo}</div>
      <div className="controls-right">
        <div className="per-page-controls">
          <label htmlFor="per-page-select">Show per page:</label>
          <select 
            id="per-page-select" 
            className="select"
            value={currentPerPage}
            onChange={(e) => onPerPageChange(parseInt(e.target.value))}
          >

            //utk opsi jumlah card yg akan ditampilkan
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="sort-controls">
          <label htmlFor="sort-select">Sort by:</label>
          <select 
            id="sort-select" 
            className="select"
            value={currentSort}
            onChange={(e) => onSortChange(e.target.value)}
          >

            //utk opsi tgl terbaru dan terlama yg akn ditampilkan
            <option value="-published_at">Newest</option>
            <option value="published_at">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Controls;
