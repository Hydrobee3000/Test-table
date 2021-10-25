import './App.css'
import Paper from '@mui/material/Paper'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'

const columns = [
  { id: 'product', label: 'Продукт' },
  { id: 'number', label: '№ цистерн/ж.д. ваг.' },
  { id: 'direction', label: 'Назначение' },
  { id: 'count', label: 'Шт/Тонны' },
]

function App() {
  return (
    <div className='App'>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table>
            <TableHead>Общая информация</TableHead>

            <TableBody>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align='center' colSpan={4}>
                      Отгрузка готового продукта
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column.id}>{column.label}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody></TableBody>
              </Table>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )
}

export default App
