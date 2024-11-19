import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Määritetään propien tyyppi
interface CustomTableProps {
  title: string; // Taulukon otsikko
  columns: string[]; // Sarakeotsikot
  data: Record<string, string | number | JSX.Element>[]; // Rivitiedot, joissa jokainen kenttä on string tai number
}

export default function CustomTable({
  title,
  columns,
  data,
}: CustomTableProps) {
  return (
    <div className="overflow-x-auto bg-white bg-opacity-70 shadow-lg rounded-lg p-10">
      <Table>
        <TableCaption className="text-lg font-semibold text-gray-700">
          {title}
        </TableCaption>
        <TableHeader>
          <TableRow>
            {columns.map((col, index) => (
              <TableHead
                key={index}
                className="text-left text-sm font-medium text-gray-600"
              >
                {col}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="border-b hover:bg-gray-50">
              {Object.values(row).map((cell, cellIndex) => (
                <TableCell key={cellIndex} className="text-gray-800 text-sm">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
