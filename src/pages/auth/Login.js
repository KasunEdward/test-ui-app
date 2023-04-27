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
import React, { useState, useEffect, useContext } from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import { ROLE_FOOD_PROCESSOR } from "../../constants/Role";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";
import BackgroundImage from "../../images/background.png";

const LoginPage = () => {
  // const {token, setToken} = useToken();
  const navigate = useNavigate();
  const location = useLocation();
  const {auth, setAuth} = useContext(AuthContext);

  const handleSubmit = () => {
    const role = ROLE_FOOD_PROCESSOR;
    const token = "test@123";
    const name =  "test_user";

    setAuth({role, token, name})
  
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
