import Table from '@mui/material/Table'
import { makeStyles } from '@mui/styles'
import { Button, FormControl, MenuItem, Paper, Select, Stack, TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab'
import DateAdapter from '@mui/lab/AdapterDateFns'
import ruLocale from 'date-fns/locale/ru'
import React, { useState } from 'react'
import { axios } from './../api/api'
import { MainTable } from './MainTable'
import { BaseInfoTable } from './BaseInfoTable'
import { TotalTable } from './TotalTable'

export const useStyles = makeStyles((theme) => ({
  root: {},
  tableBorder: {
    border: 1,
    // borderRightWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
}))
const localeMap = {
  ru: ruLocale,
}
export const StateContext = React.createContext()

export const Header = () => {
  const [value, setValue] = useState(new Date()) //состояние для календаря
  const [shift, setShift] = useState('Смена 1') //состояние для 'смены'
  const [state, setState] = useState(null) //данные с сервера
  let textValue = `ЦПХП №1. Суточный рапорт за ${value.toLocaleDateString('ru-RU')} ${shift} Сменный мастер:`
  console.log(shift)

  const fetchData = async () => {
    const response = await axios.get('/data')
    setState({ ...response.data })
  }
  const handleChange = (event) => {
    setShift(event.target.value)
  }

  return (
    <LocalizationProvider dateAdapter={DateAdapter} locale={localeMap.ru}>
      <StateContext.Provider value={state}>
        <Table>
          <Paper style={{ padding: '20px', display: 'flex', alignSelf: 'center' }} elevation={1} sx={{ width: '100%' }}>
            <Stack direction='row' spacing={2}>
              <TextField
                style={{ width: '55%' }}
                id='outlined-read-only-input'
                defaultValue='Сменный рапорт. ЦПХП №1.'
                InputProps={{
                  readOnly: true,
                }}
              />
              <DesktopDatePicker
                id='date-picker'
                value={value}
                minDate={new Date('2017-01-01')}
                onChange={(newValue) => {
                  setValue(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select value={shift} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                  <MenuItem value={'Смена 1'}>Смена 1</MenuItem>
                  <MenuItem value={'Смена 2'}>Смена 2</MenuItem>
                  <MenuItem value={'Смена 3'}>Смена 3</MenuItem>
                </Select>
              </FormControl>
              <Button style={{ width: '20%' }} variant='outlined' onClick={fetchData}>
                Просмотр
              </Button>
            </Stack>
          </Paper>
          <Stack direction='row' spacing={2}>
            <TextField
              style={{ width: '35em' }}
              id='outlined-read-only-input'
              value={textValue}
              variant='filled'
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField />
          </Stack>
        </Table>
        <MainTable /> {/* основная таблица */}
        <BaseInfoTable /> {/* таблица с общей информацией */}
        <TotalTable /> {/* завершающая таблица */}
      </StateContext.Provider>
    </LocalizationProvider>
  )
}
