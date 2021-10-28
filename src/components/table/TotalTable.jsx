import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import { TableCellWithField } from './common/TableCellWithField'
import { TextField } from '@mui/material'
import { useStyles } from './BaseInfoTable'

//Nested in Header
export const TotalTable = () => {
  const classes = useStyles()

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell align='center' rowSpan='3'>
            Выполнено за смену
          </TableCell>
          <TableCell className={classes.tableBorder} rowSpan={3}>
            <TextField style={{ width: '100%' }} multiline rows={7} defaultValue='' />
          </TableCell>
          <TableCell align='center'>Смену сдал</TableCell>
          <TableCellWithField />
        </TableRow>
        <TableRow>
          <TableCell align='center'>Смену принял</TableCell>
          <TableCellWithField />
        </TableRow>
        <TableRow>
          <TableCell align='center'>Начальник цеха</TableCell>
          <TableCellWithField />
        </TableRow>
      </TableBody>
    </Table>
  )
}
