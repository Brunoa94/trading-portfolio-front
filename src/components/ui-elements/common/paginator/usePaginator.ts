import { useEffect, useState } from "react";

interface Props {
  totalItems: number;
  itemsPerPage: number;
  onClick: (page: number) => void;
}

function usePaginator({ totalItems, itemsPerPage, onClick }: Props) {
  const maxPages = Math.ceil(totalItems / itemsPerPage) - 1;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === maxPages;
  const [intermediatePages, setIntermediatePages] = useState<number[]>([]);

  const getCurrentPageGroup = () => {
    const maxVisiblePages = 4;
    let minPageLimit =
      Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1;

    let maxPageLimit = minPageLimit + maxVisiblePages - 1;

    if (maxPageLimit > maxPages) {
      maxPageLimit = maxPages;
    }

    const currentPageGroup = [];

    for (let i = minPageLimit; i <= maxPageLimit; i++) {
      currentPageGroup.push(i);
    }
    console.log(currentPageGroup);
    setIntermediatePages(currentPageGroup);
  };

  useEffect(() => {
    console.log("Generating");
    getCurrentPageGroup();
  }, [currentPage]);

  const goNextPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicking next");
    e.preventDefault();

    if (currentPage >= maxPages) return;
    onClick(currentPage + 1);
    setCurrentPage((prev) => prev + 1);
  };

  const goPrevPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicking next");
    e.preventDefault();
    if (currentPage === 1) return;
    onClick(currentPage - 1);
    setCurrentPage((prev) => prev - 1);
  };

  return {
    currentPage,
    prevDisabled,
    nextDisabled,
    goNextPage,
    goPrevPage,
    intermediatePages,
    maxPages,
  };
}

export default usePaginator;
