import { useLazyQuery } from '@apollo/react-hooks';
import { Card, CardContent, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { DOCTOR_ROLE_TYPE, HOSPITAL_ROLE_TYPE } from '../../constants/constants';
import { setActiveRole } from '../../redux/actions/index';
import Logo from '../images/logo.png';
import useStyles from '../Styles';

const GET_DOCTOR_BY_NAME = gql`
  query singleDoctor($doctorName: String!) {
    singleDoctor(doctorName: $doctorName) {
      id
    }
  }
`;

const GET_HOSPITAL_BY_NAME = gql`
  query singleHospital($hospitalName: String!) {
    singleHospital(doctorName: $hospitalName) {
      id
    }
  }
`;

function Login() {
  const styles = useStyles();

  const [loginType, setLoginType] = useState(DOCTOR_ROLE_TYPE);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const history = useHistory();

  const [getDoctorByName, doctorResponse] = useLazyQuery(GET_DOCTOR_BY_NAME, {
    onCompleted: (data) => {
      dispatch(setActiveRole(data.singleDoctor.id, DOCTOR_ROLE_TYPE));
      history.push(`/${DOCTOR_ROLE_TYPE}/overview`);
    },
  });
  const [getHospitalByName, hospitalResponse] = useLazyQuery(GET_HOSPITAL_BY_NAME, {
    onCompleted: (data) => {
      dispatch(setActiveRole(data.singleHospital.id, HOSPITAL_ROLE_TYPE));
      history.push(`/${HOSPITAL_ROLE_TYPE}/overview`);
    }
  });

  return (
    <main className={styles.content}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh', minWidth: '100%' }}
      >
        <Grid container xs={12} style={{ width: '70%' }}>
          <Card
            align="center"
            justify="center"
            style={{ minWidth: '100%' }}
            className={styles.loginCard}
            elevation={0}
            variant="outlined"
          >
            <CardContent>
              <Typography className={styles.loginTitle}>Welcome! Please, login</Typography>
              <form autoComplete="off">
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
                          className: styles.customFieldStyle,
                        }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className={styles.loginContainer}>
                      <TextField
                        id="password"
                        label="Password"
                        type="password"
                        className={styles.loginField}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </Grid>
                </Grid>
                <div>
                  <Button
                    className={styles.loginField}
                    style={{ marginTop: 15, border: '1px solid rgba(0, 0, 0, 0.12)' }}
                    onClick={() =>
                      getDoctorByName({
                        variables: {
                          doctorName: name,
                        },
                      })
                    }
                  >
                    Login
                  </Button>
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
