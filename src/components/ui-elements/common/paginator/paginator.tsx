import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import usePaginator from "./usePaginator";
import { MoveLeft, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {}

function Paginator() {
  const {
    currentPage,
    prevDisabled,
    nextDisabled,
    goNextPage,
    goPrevPage,

    maxPages,
  } = usePaginator({ totalItems: 25, itemsPerPage: 5 });

  return (
    <Pagination className="flex w-full items-center px-2 md:px-6">
      <Button onClick={goPrevPage} disabled={prevDisabled} className="mr-auto">
        <MoveLeft />
      </Button>
      {/* {intermediatePages.slice(0, 2).map((pageNumber) => (
          <PaginationItem>
            <PaginationLink href="#">{pageNumber}</PaginationLink>
          </PaginationItem>
        ))} */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm">Page</span>
          <span className="text-md font-bold">{currentPage}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">of</span>
          <span className="text-md font-bold">{maxPages}</span>
        </div>
      </div>
      {/* {intermediatePages.slice(2, 4).map((pageNumber) => (
          <PaginationItem>
            <PaginationLink href="#">{pageNumber}</PaginationLink>
          </PaginationItem>
        ))} */}
      <Button onClick={goNextPage} disabled={nextDisabled} className="ml-auto">
        <MoveRight />
      </Button>
    </Pagination>
  );
}

export default Paginator;
