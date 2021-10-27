import TableCell from '@mui/material/TableCell'
import TextField from '@mui/material/TextField'
import { useStyles } from '../BaseInfoTable'

//table cell with text field and border style
export const TableCellWithField = ({ size = 'small', value, colspan = 1, rowspan = 1 }) => {
  const classes = useStyles()

  return (
    <TableCell className={classes.tableBorder}>
      <TextField style={{ width: '100%' }} size={size} defaultValue={value} colSpan={colspan} rowSpan={rowspan} />
    </TableCell>
  )
}
