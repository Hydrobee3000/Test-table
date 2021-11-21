import './App.css'
import Paper from '@mui/material/Paper'
import TableContainer from '@mui/material/TableContainer'
import { Header } from './components/table/Header'

function App() {
  return (
    <div className='App'>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 1840 }}>
          <Header />
        </TableContainer>
      </Paper>
    </div>
  )
}

export default App
