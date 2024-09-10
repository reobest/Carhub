"use client"
import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import '../app/globals.css'
import { useRouter } from 'next/navigation'
import { updateSearchParams } from '@/app/utils';
const CustomFilters = () => {
  const router = useRouter()
  const [fuel, setFuel] = React.useState('');
  const [year, setYear] = React.useState('');
  const Updatesearchparams = (fuel: string, year: string) => {
    const NewPathName = updateSearchParams(undefined, undefined, fuel, year,undefined)
    router.push(NewPathName)
  }
  const handleChange = (event: SelectChangeEvent) => {
    const newFuel = event.target.value as string;
    setFuel(newFuel);
    Updatesearchparams(newFuel, year);
  };
  const handleChange2 = (event: SelectChangeEvent) => {
    const newYear = event.target.value as string;
    setYear(newYear);
    Updatesearchparams(fuel, newYear);
  };
  return (
    <div className='w-full h-10 flex items-center justify-center mt-8'>
      <Box sx={{ width: 120, marginInline: "20px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" className='top-[-10px]'>Fuel</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={fuel}
            label="Age"
            onChange={handleChange}
            className='h-[30px]'
          >
            <MenuItem value="fuel">Fuel</MenuItem>
            <MenuItem value="gas">Gas</MenuItem>
            <MenuItem value="Electricity">Electricity</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" className='top-[-10px]'>Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={year}
            label="Age"
            onChange={handleChange2}
            className='h-[30px]'
          >
            <MenuItem value="2015">2015</MenuItem>
            <MenuItem value="2016">2016</MenuItem>
            <MenuItem value="2017">2017</MenuItem>
            <MenuItem value="2018">2018</MenuItem>
            <MenuItem value="2019">2019</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  )
}

export default CustomFilters
