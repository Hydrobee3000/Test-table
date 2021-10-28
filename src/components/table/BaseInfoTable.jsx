import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import { TableCellWithField } from './common/TableCellWithField'
import { makeStyles } from '@mui/styles'
import { TextField } from '@mui/material'

//Nested in Header
export const useStyles = makeStyles((theme) => ({
  root: {},
  tableBorder: {
    border: 1,
    // borderRightWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
}))

export const BaseInfoTable = () => {
  const classes = useStyles()

  const fieldArr = [1, 2, 3, 4]
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell component={'th'} className={classes.tableBorder} align='center' colSpan={7}>
            <b>Общая информация</b>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell component={'th'} className={classes.tableBorder} align='center' colSpan={4}>
            Отгрузка готового продукта
          </TableCell>
          <TableCell component={'th'} className={classes.tableBorder} align='center' rowSpan={3}>
            Время обработки цеха службами УТ
          </TableCell>
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            УРСБ
          </TableCell>
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            Химия
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            Продукт
          </TableCell>
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            № цистерн/ж.д. ваг.
          </TableCell>
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            Назначение
          </TableCell>
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            Шт/Тонны
          </TableCell>
          <TableCell className={classes.tableBorder} rowSpan={2}>
            <TextField defaultValue={null}></TextField>
          </TableCell>
          <TableCell className={classes.tableBorder} rowSpan={2}>
            <TextField defaultValue={null}></TextField>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCellWithField value={null} />
          <TableCellWithField value={null} />
          <TableCellWithField value={null} />
          <TableCellWithField value={null} />
        </TableRow>
        <TableRow>
          <TableCellWithField value={null} />
          <TableCellWithField value={null} />
          <TableCellWithField value={null} />
          <TableCellWithField value={null} />
          <TableCell component={'th'} className={classes.tableBorder} rowSpan={6} align='center'>
            Замечания по работе цеха
          </TableCell>
          <TableCell className={classes.tableBorder} colSpan={2} rowSpan={6}>
            <TextField style={{ width: '100%' }} multiline rows={15} defaultValue='' />
          </TableCell>
        </TableRow>
        {fieldArr.map((row) => (
          <TableRow>
            {fieldArr.map((cell) => (
              <TableCellWithField value={null} />
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
