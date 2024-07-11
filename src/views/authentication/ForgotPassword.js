import { Link } from 'react-router-dom';
import { Grid, Box, Card, Stack, Typography, Button } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormBuilder, Input } from 'src/components/forms/FormBuilder';
import { AuthContext } from 'src/context/AuthContext';
import { toast } from 'react-toastify';

// components
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/full/shared/logo/Logo';

const ForgotPassword = () => {
  const { resetAccountPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleSubmit = async (data) => {
    try {
      const res = await resetAccountPassword(data);
      console.log(res);
      toast.success(`Successfully sent password reset email.`);
      navigate('/auth/login');
    } catch (error) {
      const statusCode = error.response?.status;

      // Handle different toasts based on the status code
      if (statusCode === 404) {
        toast.error('User does not exist with the given email.'); // Toast for 401 Unauthorized
      } else {
        toast.error(`An error occurred.`); // Generic error toast
      }

      console.log(error);
    } finally {
    }
  };

  return (
    <PageContainer title="Forgot Password" description="this is foegot password page">
      <Box
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3',
          },
        }}
      >
        <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <h3>Forgot your Password?</h3>
              </Box>
              <FormBuilder onSubmit={handleSubmit}>
                {(register, errors, { control }) => {
                  return (
                    <>
                      <div className="row mt-3">
                        <Input
                          name="email"
                          errors={errors}
                          required={true}
                          register={register}
                          class_name="col-12"
                          label={'E-mail'}
                        />
                        <Box>
                          <Button
                            color="primary"
                            variant="contained"
                            size="large"
                            fullWidth
                            type="submit"
                          >
                            Send password reset e-mail
                          </Button>
                        </Box>
                      </div>
                    </>
                  );
                }}
              </FormBuilder>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default ForgotPassword;
