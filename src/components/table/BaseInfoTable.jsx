import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import { TableCellWithField } from './common/TableCellWithField'
import { makeStyles } from '@mui/styles'
import { TextField } from '@mui/material'
import Typography from '@mui/material/Typography'

//Nested in Header
export const useStyles = makeStyles((theme) => ({
  root: {},
  tableBorder: {
    border: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
}))

export const BaseInfoTable = () => {
  const classes = useStyles() //обращаться к классам стилей

  const fieldArr = [1, 2, 3, 4] //массив просто для отображения столбцов, т.к. данные в API не прописаны
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell component={'th'} className={classes.tableBorder} align='center' colSpan={7}>
            <Typography variant='h6' gutterBottom component='p'>
              Общая информация
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell component={'th'} className={classes.tableBorder} align='center' colSpan={4}>
            <b>Отгрузка готового продукта </b>
          </TableCell>
          <TableCell component={'th'} className={classes.tableBorder} align='center' rowSpan={3}>
            <b>Время обработки цеха службами УТ</b>
          </TableCell>
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            <b>УРСБ</b>
          </TableCell>
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            <b> Химия</b>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            <b>Продукт</b>
          </TableCell>
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            <b>№ цистерн/ж.д. ваг.</b>
          </TableCell>
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            <b>Назначение</b>
          </TableCell>
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            <b>Шт/Тонны</b>
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
            <b>Замечания по работе цеха</b>
          </TableCell>
          <TableCell className={classes.tableBorder} colSpan={2} rowSpan={6}>
            <TextField style={{ width: '100%' }} multiline rows={15} defaultValue='' />
          </TableCell>
        </TableRow>
        {/* отрисовка пустых столбцов, которые в дальнейшем могут быть заполнены при готовом API */}
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
