import {
  TableCell,
  TableFooter as StyledTableFooter,
  TableRow,
} from "@/components/ui/table";

interface Props {
  colSpan: number;
}

const TableFooter = ({ colSpan = 4 }: Props) => (
  <StyledTableFooter>
    <TableRow>
      <TableCell colSpan={colSpan}></TableCell>
      <TableCell className="text-right"></TableCell>
    </TableRow>
  </StyledTableFooter>
);

export default TableFooter;
