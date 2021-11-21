import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import { TableCellWithField } from './common/TableCellWithField'
import { useStyles } from './BaseInfoTable'
import { TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useContext } from 'react'
import { StateContext } from './Header'

//Nested in Header

// отрисовываю пустые столбцы если данные по какой-то причине не пришли, чтобы таблица не сломалась

export const MainTable = (props) => {
  const classes = useStyles() //стили для таблицы
  const data = useContext(StateContext) //получение данных из контекста

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell className={classes.tableBorder} rowSpan={3} align='center'>
            <Typography variant='h6' gutterBottom component='p'>
              <b>Первичное охлаждение и машинный зал</b>
            </Typography>
          </TableCell>
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            <b>ПГХ</b>
          </TableCell>
          {/* если данные есть, тогда отобажать их в стобцах */}
          {data !== null ? (
            data.gasTemp.map((item) => (
              <TableCell className={classes.tableBorder} align='center' key={item.id}>
                {item.id}
              </TableCell>
            ))
          ) : (
            // если данных нет - отрисовать пустые столбцы
            <>
              <TableCell className={classes.tableBorder} />
              <TableCell className={classes.tableBorder} />
              <TableCell className={classes.tableBorder} />
              <TableCell className={classes.tableBorder} />
              <TableCell className={classes.tableBorder} />
              <TableCell className={classes.tableBorder} />
            </>
          )}

          <TableCell component={'th'} className={classes.tableBorder} align='center' rowSpan={2}>
            <b>Давление газа после эксгаустеров мм.вод.ст.</b>
          </TableCell>

          {/* если данные о давл. газа есть, тогда отобажать их в стобцах */}
          {data !== null ? (
            data.gasPress.map((item) => <TableCellWithField value={item.id} key={item.id} />)
          ) : (
            // если данных нет - отрисовать пустые столбцы
            <>
              <TableCellWithField value={null} />
              <TableCellWithField value={null} />
            </>
          )}

          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            <b>сопротивление пгх</b>
          </TableCell>
          <TableCellWithField value={null} />
          <TableCellWithField value={null} />
        </TableRow>
        <TableRow>
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            <b>t газа после ПГХ, ºC</b>
          </TableCell>
          {/* если данные темп. газа(вторая строка) есть, тогда отобажать их в стобцах */}
          {data !== null ? (
            data.gasTemp.map((item) => <TableCellWithField value={item.value} key={item.id} />)
          ) : (
            // если данных нет - отрисовать пустые столбцы
            <>
              <TableCellWithField value={null} />
              <TableCellWithField value={null} />
              <TableCellWithField value={null} />
              <TableCellWithField value={null} />
              <TableCellWithField value={null} />
              <TableCellWithField value={null} />
            </>
          )}
          {/* если данные о давл. газа(вторая строка) есть, тогда отобажать их в стобцах */}
          {data !== null ? (
            data.gasPress.map((item) => (
              <TableCell className={classes.tableBorder}>
                {/* поле без отступов чтобы большое число давления влезло */}
                <TextField
                  inputProps={{
                    style: {
                      padding: 5,
                    },
                  }}
                  size='small'
                  defaultValue={item.value}
                  key={item.id}
                />
              </TableCell>
            ))
          ) : (
            // если данных нет - отрисовать пустые столбцы
            <>
              <TableCellWithField value={null} />
              <TableCellWithField value={null} />
            </>
          )}

          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            <b>сопротивление газопровода</b>
          </TableCell>
          <TableCellWithField value={null} />
          <TableCellWithField value={null} />
        </TableRow>
        <TableRow>
          <TableCell component={'th'} className={classes.tableBorder} align='center' colSpan={2}>
            <b>
              ПГХ Расход воды на первич. охл-е, м<sup>3</sup>/ч
            </b>
          </TableCell>
          <TableCell className={classes.tableBorder} colSpan={3}>
            <TextField inputProps={{ style: { textAlign: 'center' } }} style={{ width: '40%' }} defaultValue={null}></TextField>
            {<span style={{ fontSize: '40px', padding: '0 10px' }}>/</span>}
            <TextField inputProps={{ style: { textAlign: 'center' } }} style={{ width: '40%' }} defaultValue={null}></TextField>
          </TableCell>

          <TableCell component={'th'} className={classes.tableBorder} align='center' colSpan={2}>
            <b> ПГХ t воды на первич. охл-е, ºC</b>
          </TableCell>
          <TableCellWithField value={null} />
          <TableCell component={'th'} className={classes.tableBorder} align='center' colSpan={2}>
            <b>ПГХ t воды после первич. охл-я, ºC</b>
          </TableCell>
          <TableCell className={classes.tableBorder} colSpan={3}>
            <TextField defaultValue={null}></TextField>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
