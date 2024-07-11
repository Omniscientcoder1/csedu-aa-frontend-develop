import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Avatar
  } from '@mui/material';
  import { useState } from 'react';
  import { styled } from '@mui/material/styles';
  import ProfileImg from 'src/assets/images/profile/user-1.jpg';


  
  function ViewPendingPopup({ children, onConfirm, onDecline, userData, style }) {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleAccept = () => {
      onConfirm();
      handleClose();
    };

    const handleDecline = () => {
        onDecline();
        handleClose();
      };

    const textFieldStyle = { width: '400px' }; 

    return (
        <>
            <span style={style} onClick={handleOpen}>
            {children}
            </span>
            <Dialog 
                open={open} 
                onClose={handleClose} 
                PaperProps={{
                    style: {
                      maxWidth: '450px',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }
                  }}
            >
            <DialogTitle>User Information</DialogTitle>

            <DialogContent>

                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                  <Avatar
                    src={userData?.profile_picture || ProfileImg}
                    alt="Profile"
                    sx={{ width: 120, height: 120 }}
                  />
                </div>
                
                <TextField
                margin="dense"
                label="Username"
                type="text"
                variant="filled"
                InputProps={{
                    readOnly: true,
                }}
                value={userData.username}
                style={textFieldStyle}
                />

                <TextField
                margin="dense"
                label="Email Address"
                type="email"
                variant="filled"
                InputProps={{
                    readOnly: true,
                }}
                value={userData.email_address}
                style={textFieldStyle}
                />

                <TextField
                margin="dense"
                label="First Name"
                type="text"
                variant="filled"
                InputProps={{
                    readOnly: true,
                }}
                value={userData.first_name}
                style={textFieldStyle}
                />

                <TextField
                margin="dense"
                label="Last Name"
                type="text"
                variant="filled"
                InputProps={{
                    readOnly: true,
                }}
                value={userData.last_name}
                style={textFieldStyle}
                />

                <StyledRow>
                    <TextField
                    margin="dense"
                    label="Batch Number"
                    type="text"
                    variant="filled"
                    InputProps={{
                        readOnly: true,
                    }}
                    value={userData.batch_number}
                    style={{ ...textFieldStyle, marginRight: '10px', flex: 1 }}
                    />

                    <TextField
                    margin="dense"
                    label="Sex"
                    type="text"
                    variant="filled"
                    InputProps={{
                        readOnly: true,
                    }}
                    value={userData.sex}
                    style={{ ...textFieldStyle, flex: 1 }}
                    />
                </StyledRow>

                <StyledRow>
                    <TextField
                    margin="dense"
                    label="City"
                    type="text"
                    variant="filled"
                    InputProps={{
                        readOnly: true,
                    }}
                    value={userData.city || 'N/A'}
                    style={{ ...textFieldStyle, marginRight: '10px', flex: 1 }}
                    />

                    <TextField
                    margin="dense"
                    label="Country"
                    type="text"
                    variant="filled"
                    InputProps={{
                        readOnly: true,
                    }}
                    value={userData.country || 'N/A'}
                    style={{ ...textFieldStyle, flex: 1 }}
                    />
                </StyledRow>


                <TextField
                margin="dense"
                label="Current Company"
                type="text"
                variant="filled"
                InputProps={{
                    readOnly: true,
                }}
                value={userData.current_company || 'N/A'}
                style={textFieldStyle}
                />

            </DialogContent>
            <DialogActions>

                <Button onClick={handleAccept} color="primary" autoFocus>
                  Accept
                </Button>
                <Button onClick={handleDecline} color="error">
                  Decline
                </Button>
                
            </DialogActions>
            </Dialog>
        </>
    );
  }

const StyledRow = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}));



  export default ViewPendingPopup;
  