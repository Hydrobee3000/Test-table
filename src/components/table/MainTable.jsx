import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import { TableCellWithField } from './common/TableCellWithField'
import { useStyles } from './BaseInfoTable'
import { TextField } from '@mui/material'
import { useContext } from 'react'
import { StateContext } from './Header'

//Nested in Header
export const MainTable = (props) => {
  const classes = useStyles()
  const data = useContext(StateContext)

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell className={classes.tableBorder} rowSpan={3} align='center'>
            <b>Первичное охлаждение и машинный зал</b>
          </TableCell>
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            ПГХ
          </TableCell>
          {data !== null ? (
            data.gasTemp.map((item) => (
              <TableCell className={classes.tableBorder} align='center' key={item.id}>
                {item.id}
              </TableCell>
            ))
          ) : (
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
            Давление газа после эксгаустеров мм.вод.ст.
          </TableCell>

          {data !== null ? (
            data.gasPress.map((item) => <TableCellWithField value={item.id} key={item.id} />)
          ) : (
            <>
              <TableCellWithField value={null} />
              <TableCellWithField value={null} />
            </>
          )}

          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            сопротивление пгх
          </TableCell>
          <TableCellWithField value={null} />
          <TableCellWithField value={null} />
        </TableRow>
        <TableRow>
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            t газа после ПГХ, ºC
          </TableCell>

          {data !== null ? (
            data.gasTemp.map((item) => <TableCellWithField value={item.value} key={item.id} />)
          ) : (
            <>
              <TableCellWithField value={null} />
              <TableCellWithField value={null} />
              <TableCellWithField value={null} />
              <TableCellWithField value={null} />
              <TableCellWithField value={null} />
              <TableCellWithField value={null} />
            </>
          )}

          {data !== null ? (
            data.gasPress.map((item) => <TableCellWithField value={item.value} key={item.id} />)
          ) : (
            <>
              <TableCellWithField value={null} />
              <TableCellWithField value={null} />
            </>
          )}

          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            сопротивление газопровода
          </TableCell>
          <TableCellWithField value={null} />
          <TableCellWithField value={null} />
        </TableRow>
        <TableRow>
          <TableCell component={'th'} className={classes.tableBorder} align='center' colSpan={2}>
            ПГХ Расход воды на первич. охл-е, м<sup>3</sup>/ч
          </TableCell>
          <TableCell className={classes.tableBorder} colSpan={3}>
            <TextField
              inputProps={{ style: { textAlign: 'center' } }}
              style={{ width: '40%', textAlign: 'center' }}
              defaultValue={0}></TextField>{' '}
            {<span style={{ fontSize: '40px', padding: '0 10px' }}>/</span>}
            <TextField inputProps={{ style: { textAlign: 'center' } }} style={{ width: '40%' }} defaultValue={0}></TextField>
          </TableCell>

          <TableCell component={'th'} className={classes.tableBorder} align='center' colSpan={2}>
            ПГХ t воды на первич. охл-е, ºC
          </TableCell>
          <TableCellWithField value={null} />
          <TableCell component={'th'} className={classes.tableBorder} align='center' colSpan={2}>
            ПГХ t воды после первич. охл-я, ºC
          </TableCell>
          <TableCell className={classes.tableBorder} colSpan={3}>
            <TextField defaultValue={null}></TextField>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
