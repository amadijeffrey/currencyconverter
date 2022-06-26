import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import CurrencyList from './currencyList';

function PaginatedItem({ itemsPerPage, allCurrencyData }) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(allCurrencyData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(allCurrencyData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, allCurrencyData]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % allCurrencyData.length;
        
        setItemOffset(newOffset);
      
    };

    return (
        <div className='content'>
            <CurrencyList currentItems={currentItems}  />
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
}

export default PaginatedItem