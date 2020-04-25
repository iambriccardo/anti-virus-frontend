import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, Typography } from "@material-ui/core";
import useStyles from "../Styles";
import Logo from "../images/logo.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';


function Login() {
  const styles = useStyles();
  return (
    <main className={styles.content}>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh", minWidth: "100%"}}
    >
      <Grid container xs={12} style={{ width: "70%" }}>
        <Card
          align="center"
          justify="center"
          style={{ minWidth: "100%",}}
          className={styles.loginCard}
          elevation={0}
          variant="outlined"
        >
          <CardContent>
            <Typography className={styles.loginTitle}>
              Welcome! Please, login
            </Typography>

            <form autoComplete="off" >
              <Grid container>
                <Grid item xs={4}>
                  <img src={Logo} width="60%" />
                </Grid>
                <Grid item xs={8}>
                  <div className={styles.loginContainer}>
                    <TextField
                      id="username"
                      label="Username"
                      className={styles.loginField}
                      InputProps={{
                        className: styles.customFieldStyle
                      }}
                    />
                  </div>
                  <div className={styles.loginContainer}>
                    <TextField
                      id="password"
                      label="Password"
                      type="password"
                      className={styles.loginField}
                    />
                  </div>
                </Grid>
              </Grid>
              <div>
                <Button className={styles.loginField} style={{marginTop: 15, border: "1px solid rgba(0, 0, 0, 0.12)"}}>Login</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </main>
  );
}

export default Login;
