import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export default function BasicSelect() {
  const [day, setDay] = React.useState(10);

  const handleChange = (event) => {
    setDay(event.target.value);
  };

  const renderValue = (value) => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CalendarTodayOutlinedIcon sx={{ marginRight: 1 }} />
      {value === 10 ? 'Today' : value === 20 ? 'Yesterday' : 'Tomorrow'}
    </Box>
  );

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={day}
          onChange={handleChange}
          IconComponent={KeyboardArrowDownIcon}
          renderValue={renderValue}
        >
          <MenuItem value={10}>Today</MenuItem>
          <MenuItem value={20}>Yesterday</MenuItem>
          <MenuItem value={30}>Tomorrow</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
