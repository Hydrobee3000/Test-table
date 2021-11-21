import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import { TableCellWithField } from './common/TableCellWithField'
import { TextField } from '@mui/material'
import { useStyles } from './BaseInfoTable'
import Typography from '@mui/material/Typography'

//Nested in Header
export const TotalTable = () => {
  const classes = useStyles() //стили для таблицы

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell align='center' rowSpan='3'>
            <Typography variant='button' gutterBottom component='div'>
              Выполнено за смену
            </Typography>
          </TableCell>
          <TableCell className={classes.tableBorder} rowSpan={3}>
            <TextField style={{ width: '100%' }} multiline rows={7} defaultValue='' />
          </TableCell>
          <TableCell align='center'>
            <Typography variant='button' gutterBottom component='div'>
              Смену сдал
            </Typography>
          </TableCell>
          <TableCellWithField />
        </TableRow>
        <TableRow>
          <TableCell align='center'>
            <Typography variant='button' gutterBottom component='div'>
              Смену принял
            </Typography>
          </TableCell>
          <TableCellWithField />
        </TableRow>
        <TableRow>
          <TableCell align='center'>
            <Typography variant='button' gutterBottom component='div'>
              Начальник цеха
            </Typography>
          </TableCell>
          <TableCellWithField />
        </TableRow>
      </TableBody>
    </Table>
  )
}
