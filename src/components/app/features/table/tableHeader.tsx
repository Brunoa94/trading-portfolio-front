import {
  TableHead,
  TableHeader as StyledTableHeader,
  TableRow,
} from "@/components/ui/table";
import clsx from "clsx";

interface Props {
  columns: string[];
}

const TableHeader = ({ columns }: Props) => (
  <StyledTableHeader>
    <TableRow>
      {columns.map((column: string, index: number) => (
        <TableHead className={clsx(index === 0 ? "w-[100px]" : "")}>
          {column}
        </TableHead>
      ))}
    </TableRow>
  </StyledTableHeader>
);

export default TableHeader;
