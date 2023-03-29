import { Box, Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const LoginPage = ({setToken}) => {
    // const {token, setToken} = useToken();
		const navigate = useNavigate();

	const handleSubmit = () => {
		setToken("app123");
		navigate("/");

	}

  return (
    <Grid container spacing={1}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        1111
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        1111
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box textAlign="center">
          <Button onClick={handleSubmit}>Login</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
