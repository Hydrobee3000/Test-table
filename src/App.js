import './App.css'
import Paper from '@mui/material/Paper'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import { useEffect, useState } from 'react'
import { axios } from './components/api/api'
import { MainTable } from './components/table/MainTable'
import { BaseInfoTable } from './components/table/BaseInfoTable'
import { TotalTable } from './components/table/TotalTable'
import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab'
import DateAdapter from '@mui/lab/AdapterDateFns'
import ruLocale from 'date-fns/locale/ru'

const localeMap = {
  ru: ruLocale,
}

const columns = [
  { id: 'product', label: 'Продукт' },
  { id: 'number', label: '№ цистерн/ж.д. ваг.' },
  { id: 'direction', label: 'Назначение' },
  { id: 'count', label: 'Шт/Тонны' },
]

function App() {
  const [value, setValue] = useState(new Date())
  const [state, setState] = useState([])
  const [shift, setShift] = useState('')

  const handleChange = (event) => {
    setShift(event.target.value)
  }

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
      <LocalizationProvider dateAdapter={DateAdapter} locale={localeMap.ru}>
        <Paper sx={{ width: '100%' }}>
          <TableContainer sx={{ maxHeight: 1840 }}>
            <Table>
              <Paper style={{ padding: '20px', display: 'flex', alignSelf: 'center' }} elevation={1} sx={{ width: '100%' }}>
                <Stack direction='row' spacing={3}>
                  <TextField
                    style={{ width: '70%' }}
                    id='outlined-read-only-input'
                    defaultValue='Сменный рапорт. ЦПХП №1.'
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <DesktopDatePicker
                    value={value}
                    minDate={new Date('2017-01-01')}
                    onChange={(newValue) => {
                      setValue(newValue)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select value={shift} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                      <MenuItem value={1}>Смена 1</MenuItem>
                      <MenuItem value={2}>Смена 2</MenuItem>
                      <MenuItem value={3}>Смена 3</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Paper>
            </Table>
            <MainTable />
            <BaseInfoTable />
            <TotalTable />
          </TableContainer>
        </Paper>
      </LocalizationProvider>
    </div>
  )
}

export default App
