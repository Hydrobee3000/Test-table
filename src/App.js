import './App.css'
import Paper from '@mui/material/Paper'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'
import { axios } from './components/api/api'
import { MainTable } from './components/table/MainTable'
import { HeadTable } from './components/table/common/HeadTable'
import { TableCellWithField } from './components/table/common/TableCellWithField'
import { BaseInfoTable } from './components/table/BaseInfoTable'

const columns = [
  { id: 'product', label: 'Продукт' },
  { id: 'number', label: '№ цистерн/ж.д. ваг.' },
  { id: 'direction', label: 'Назначение' },
  { id: 'count', label: 'Шт/Тонны' },
]

function App() {
  const [state, setState] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/data')
      setState(response.data)
    }
    fetchData()
  }, [])
  console.log(state)

  return (
    <div className='App'>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 840 }}>
          <MainTable />
          <BaseInfoTable />
        </TableContainer>
      </Paper>
    </div>
  )
}

export default App
