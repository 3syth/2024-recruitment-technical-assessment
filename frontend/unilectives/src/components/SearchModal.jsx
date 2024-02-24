import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';



const SearchModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    margin: 'auto'
  };

  const buttonStyle = {
    width: '100%',
    justifyContent: "flex-start",
    borderWidth: '2px',
    margin: '10px 0px'
  }

  return (
    <>
      <Button variant="outlined" sx={buttonStyle} onClick={handleOpen}>
      <span>🔍</span>
      <span style={{marginLeft: '18px', textTransform: 'none'}}>Search for a course e.g. COMP1511</span>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
          >
            <Typography id="modal-modal-title" variant="h4" component="h2">
              This is a search bar that definitely works.
            </Typography>
            <IconButton onClick={() => handleClose()}>
              X
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default SearchModal
