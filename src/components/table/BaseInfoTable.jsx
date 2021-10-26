import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import { TableCellWithField } from './common/TableCellWithField'

export const BaseInfoTable = () => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell align='center' colSpan={7}>
            Общая информация
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align='center' colSpan={4}>
            Отгрузка готового продукта
          </TableCell>
          <TableCell align='center' rowSpan={3}>
            Время обработки цеха службами УТ
          </TableCell>
          <TableCell align='center'>УРСБ</TableCell>
          <TableCell align='center'>Химия</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align='center'>Продукт</TableCell>
          <TableCell align='center'>№ цистерн/ж.д. ваг.</TableCell>
          <TableCell align='center'>Назначение</TableCell>
          <TableCell align='center'>Шт/Тонны</TableCell>
          <TableCellWithField value={null} rowspan={2} />
          <TableCellWithField value={null} />
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
          <TableCell rowSpan={6} align='center'>
            Замечания по работе цеха
          </TableCell>

          <TableCellWithField colspan={2} rowspan={6} value={null} />
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
        </TableRow>
        <TableRow>
          <TableCellWithField value={null} />
          <TableCellWithField value={null} />
          <TableCellWithField value={null} />
          <TableCellWithField value={null} />
        </TableRow>
      </TableBody>
    </Table>
  )
}
