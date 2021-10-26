import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import { HeadTable } from './common/HeadTable'
import { TableCellWithField } from './common/TableCellWithField'

export const MainTable = () => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell rowSpan={3}>Первичное охлаждение и машинный зал</TableCell>
          <HeadTable text={'ПГХ'} />
          <TableCell>1</TableCell>
          <TableCell>2</TableCell>
          <TableCell>3</TableCell>
          <TableCell>4</TableCell>
          <TableCell>5</TableCell>
          <TableCell>6</TableCell>
          <TableCell align='center' rowSpan={2}>
            давление газа
          </TableCell>
          <TableCell>1</TableCell>
          <TableCell>3</TableCell>
          <TableHead>
            <TableCell align='center'>сопротивление пгх</TableCell>
          </TableHead>
          <TableCellWithField value={0} />
          <TableCellWithField value={0} />
        </TableRow>
        <TableRow>
          <TableHead>
            <TableCell>t газа после ПГХ, ºC</TableCell>
          </TableHead>
          <TableCellWithField value={27} />
          <TableCellWithField value={31} />
          <TableCellWithField value={26} />
          <TableCellWithField value={26} />
          <TableCellWithField value={28} />
          <TableCellWithField value={0} />

          <TableCellWithField value={1900} />
          <TableCellWithField value={1900} />
          <TableHead>
            <TableCell>сопротивление газопровода</TableCell>
          </TableHead>
          <TableCellWithField value={0} />
          <TableCellWithField value={0} />
        </TableRow>
        <TableRow>
          <TableHead>
            <TableCell colSpan={2}>
              ПГХ Расход воды на первич. охл-е, м<sup>3</sup>/ч
            </TableCell>
          </TableHead>
          <TableCell colSpan={3}>0/0</TableCell>
          <TableHead>
            <TableCell align='center' colSpan={2}>
              пгх т воды
            </TableCell>
          </TableHead>
          <TableCellWithField value={27} />
          <TableHead>
            <TableCell align='center' colSpan={2}>
              пгх т воды после
            </TableCell>
          </TableHead>
          <TableCellWithField value={40} />
          <TableCell colSpan={2}></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
