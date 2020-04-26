import { useLazyQuery } from '@apollo/react-hooks';
import { Card, CardContent, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
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
    singleHospital(hospitalName: $hospitalName) {
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

  const [getDoctorByName] = useLazyQuery(GET_DOCTOR_BY_NAME, {
    onCompleted: (data) => {
      dispatch(setActiveRole(data.singleDoctor.id, DOCTOR_ROLE_TYPE));
      history.push(`/${DOCTOR_ROLE_TYPE}/overview`);
      console.log('doctor logging');
    },
  });
  const [getHospitalByName] = useLazyQuery(GET_HOSPITAL_BY_NAME, {
    onCompleted: (data) => {
      dispatch(setActiveRole(data.singleHospital.id, HOSPITAL_ROLE_TYPE));
      history.push(`/${HOSPITAL_ROLE_TYPE}/overview`);
      console.log('hospital logging');
    },
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
        <Grid item xs={12} style={{ width: '70%' }}>
          <Card
            align="center"
            justify="center"
            style={{ minWidth: '100%' }}
            className={styles.loginCard}
            elevation={0}
            variant="outlined"
          >
            <CardContent>
              <Typography className={styles.loginTitle}>Welcome! Please login</Typography>
              <form autoComplete="off">
                <Grid container>
                  <Grid item xs={4}>
                    <img src={Logo} width="60%" alt="logo" />
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
                    <div className={styles.loginContainer}>
                      <FormControl component="fieldset">
                        <RadioGroup
                          row
                          aria-label="Choose one"
                          name="role_type"
                          value={loginType}
                          onChange={(event) => setLoginType(event.target.value)}
                        >
                          <FormControlLabel value="doctor" control={<Radio />} label="Doctor" />
                          <FormControlLabel value="hospital" control={<Radio />} label="Hospital" />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </Grid>
                </Grid>
                <div>
                  <Button
                    className={styles.loginField}
                    style={{ marginTop: 15, border: '1px solid rgba(0, 0, 0, 0.12)' }}
                    onClick={() => {
                      if (loginType === 'doctor') {
                        getDoctorByName({
                          variables: {
                            doctorName: name,
                          },
                        });
                      } else if (loginType === 'hospital') {
                        getHospitalByName({
                          variables: {
                            hospitalName: name,
                          },
                        });
                      }
                    }}
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
