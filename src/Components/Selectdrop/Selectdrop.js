import React, { useState } from 'react';
import { Typography, Box, Paper, Popper, List, ListItem, ListItemText } from '@mui/material';

const CustomSelect = () => {
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const options = ['All Category', 'Ten', 'Twenty', 'Thirty', 'Ten', 'Twenty', 'Thirty', 'Ten', 'Twenty', 'Thirty'];

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuItemClick = (value) => {
    setAge(value);
    setOpen(false);
  };

  return (
    <div>
      <div ref={anchorRef}>
        <Typography
          variant="body2"
          sx={{
            display: 'inline-block',
            background: '#f5f5f5',
            cursor: 'pointer',
            padding: '4px',
            borderRadius: '4px',
          }}
          onClick={handleToggle}
        >
          {age || 'Select Category'}
        </Typography>
      </div>
      <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start">
        <Paper sx={{ maxHeight: '200px', overflowY: 'scroll', width: '200px' }}>
          <List>
            {options.map((option, index) => (
              <ListItem
                button
                key={option}
                onClick={() => handleMenuItemClick(option)}
              >
                <ListItemText primary={option} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Popper>
    </div>
  );
};

export default CustomSelect;
