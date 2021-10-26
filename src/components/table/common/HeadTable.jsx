import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'

export const HeadTable = ({ text, colspan = 1, rowspan = 1 }) => {
  return (
    <TableHead>
      <TableCell rowSpan={rowspan} colSpan={colspan}>
        {text}
      </TableCell>
    </TableHead>
  )
}
