import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import BackgroundImage from "../../images/background.png";

const LoginPage = ({ setToken }) => {
  // const {token, setToken} = useToken();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const role = 
    navigate("/");
  };

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    // <Container maxWidth="sm">
    <Stack
      direction="column"
      sx={{ height: "100vh", backgroundImage: `url(${BackgroundImage})` }}
      spacing={2}
      alignItems="center"
      justifyContent="center"
    >
      <Paper
        elevation={4}
        sx={{ width: isSmallScreen ? "80%" : "30%", px: 4, py: 4 }}
      >
        <Box textAlign="center" justifyContent="center" sx={{ py: 2 }}>
          <Typography variant="h4">Sign in</Typography>
        </Box>
        <Grid container justifyContent="center" spacing={1}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <RadioGroup
              value={"seeker"}
              // onChange={handleChange}
            >
              <Stack direction="row" spacing={4}>
                <FormControlLabel
                  value="seeker"
                  control={<Radio />}
                  label="Seeker"
                />
                <FormControlLabel
                  value="procesor"
                  control={<Radio />}
                  label="Processor"
                />
              </Stack>
            </RadioGroup>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <TextField fullWidth size="small" label="Username" />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <TextField
              fullWidth
              size="small"
              type="password"
              label="Password"
            />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box textAlign="center" justifyContent="center">
              <Button fullWidth variant="contained" onClick={handleSubmit}>
                Login
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Stack>
    // </Container>
  );
};

export default LoginPage;
