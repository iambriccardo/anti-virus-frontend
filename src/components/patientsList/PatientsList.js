import React from 'react';
import Typography from '@material-ui/core/Typography';
import TopBar from '../common/TopBar';
import useStyles from '../Styles';
import PatientsTable from '../common/PatientsTable';

export default function PatientsList(props) {
  const styles = useStyles();

  return (
    <>
      <TopBar title={'Patients List ' + props.activeRole.type} />
      <main className={styles.content}>
        <div className={styles.toolbar} />
        <PatientsTable />
      </main>
    </>
  );
}
