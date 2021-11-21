import Table from '@mui/material/Table'
import { Button, FormControl, MenuItem, Paper, Select, Stack, TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab'
import DateAdapter from '@mui/lab/AdapterDateFns'
import ruLocale from 'date-fns/locale/ru'
import React, { useState } from 'react'
import { axios } from './../api/api'
import { MainTable } from './MainTable'
import { BaseInfoTable } from './BaseInfoTable'
import { TotalTable } from './TotalTable'
import Typography from '@mui/material/Typography'

const localeMap = {
  //карта местности для провайдера даты
  ru: ruLocale,
}
export const StateContext = React.createContext() //создание контекста

export const Header = () => {
  const [value, setValue] = useState(new Date()) //состояние для календаря
  const [shift, setShift] = useState('Смена 1') //состояние для 'смены'
  const [state, setState] = useState(null) //данные с сервера

  //запросить данные и получить результат в state при нажатии на кнопку
  const fetchData = async () => {
    const response = await axios.get('/data')
    setState({ ...response.data })
  }

  //обработчик для изменения рабочей смены
  const handleChange = (event) => {
    setShift(event.target.value)
  }

  return (
    <LocalizationProvider dateAdapter={DateAdapter} locale={localeMap.ru}>
      {/* провайдер для даты */}
      <StateContext.Provider value={state}>
        {/* контекст со значением state */}
        <Table>
          <Paper style={{ display: 'flex', alignSelf: 'center' }} elevation={1} sx={{ width: '100%' }}>
            <Stack direction='row' spacing={2} style={{ padding: '15px' }}>
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
              {/* при клике на кнопку происходит запрос данных */}
              <Button style={{ width: '20%' }} variant='outlined' onClick={fetchData}>
                Просмотр
              </Button>
            </Stack>
          </Paper>
          <Stack direction='row' spacing={2}>
            {/* <TextField
              style={{ width: '37em', padding: '10px' }}
              id='outlined-read-only-input'
              value={textValue}
              variant='filled'
              InputProps={{
                readOnly: true,
              }}
            /> */}
            <Typography variant='subtitle1' gutterBottom component='p' style={{ padding: '10px', alignSelf: 'center' }}>
              ЦПХП №1. Суточный рапорт за {value.toLocaleDateString('ru-RU')} <b style={{ padding: '0 10px' }}>{shift}</b> Сменный
              мастер:
            </Typography>

            <TextField style={{ padding: '10px' }} />
          </Stack>
        </Table>
        <MainTable /> {/* основная таблица(первичное охлаждение) */}
        <BaseInfoTable /> {/* таблица с общей информацией */}
        <TotalTable /> {/* завершающая таблица */}
      </StateContext.Provider>
    </LocalizationProvider>
  )
}
