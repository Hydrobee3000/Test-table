import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import { TableCellWithField } from './common/TableCellWithField'
import { useStyles } from './BaseInfoTable'
import { TextField } from '@mui/material'
import { useContext } from 'react'
import { StateContext } from './Header'

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
          <TableCell className={classes.tableBorder} align='center'>
            1
          </TableCell>
          <TableCell className={classes.tableBorder} align='center'>
            2
          </TableCell>
          <TableCell className={classes.tableBorder} align='center'>
            3
          </TableCell>
          <TableCell className={classes.tableBorder} align='center'>
            4
          </TableCell>
          <TableCell className={classes.tableBorder} align='center'>
            5
          </TableCell>
          <TableCell className={classes.tableBorder} align='center'>
            6
          </TableCell>
          <TableCell component={'th'} className={classes.tableBorder} align='center' rowSpan={2}>
            Давление газа после эксгаустеров мм.вод.ст.
          </TableCell>
          <TableCellWithField value={1} />
          <TableCellWithField value={3} />
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            сопротивление пгх
          </TableCell>
          <TableCellWithField value={0} />
          <TableCellWithField value={0} />
        </TableRow>
        <TableRow>
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            t газа после ПГХ, ºC
          </TableCell>

          {data !== null
            ? data.gasTemp.map((item) => <TableCellWithField value={item.value} key={item.id} />)
            : console.log('wait')}

          {/* <TableCellWithField value={27} />
          <TableCellWithField value={31} />
          <TableCellWithField value={26} />
          <TableCellWithField value={26} />
          <TableCellWithField value={28} />
          <TableCellWithField value={0} /> */}
          <TableCellWithField value={1900} />
          <TableCellWithField value={1900} />
          <TableCell component={'th'} className={classes.tableBorder} align='center'>
            сопротивление газопровода
          </TableCell>
          <TableCellWithField value={0} />
          <TableCellWithField value={0} />
        </TableRow>
        <TableRow>
          <TableCell component={'th'} className={classes.tableBorder} align='center' colSpan={2}>
            ПГХ Расход воды на первич. охл-е, м<sup>3</sup>/ч
          </TableCell>
          <TableCell className={classes.tableBorder} colSpan={3}>
            <TextField defaultValue={0 + '/' + 0}></TextField>
          </TableCell>

          <TableCell component={'th'} className={classes.tableBorder} align='center' colSpan={2}>
            ПГХ t воды на первич. охл-е, ºC
          </TableCell>
          <TableCellWithField value={27} />
          <TableCell component={'th'} className={classes.tableBorder} align='center' colSpan={2}>
            ПГХ t воды после первич. охл-я, ºC
          </TableCell>
          <TableCell className={classes.tableBorder} colSpan={3}>
            <TextField defaultValue={40}></TextField>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
