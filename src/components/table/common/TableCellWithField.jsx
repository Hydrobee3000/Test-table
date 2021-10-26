import TableCell from '@mui/material/TableCell'
import TextField from '@mui/material/TextField'

export const TableCellWithField = ({ size = 'small', value, colspan = 1, rowspan = 1 }) => {
  return (
    <TableCell>
      <TextField size={size} defaultValue={value} colSpan={colspan} rowSpan={rowspan} />
    </TableCell>
  )
}
