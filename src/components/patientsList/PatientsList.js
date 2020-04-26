import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DOCTOR_ROLE_TYPE } from '../../constants/constants';
import PatientsTable from '../common/PatientsTable';
import TopBar from '../common/TopBar';
import useStyles from '../Styles';

const GET_PATIENTS_OF_DOCTOR = gql`
  query patientsOfDoctor($doctorId: Int) {
    patientsOfDoctor(doctorId: $doctorId) {
      id
      fiscalCode
      name
      surname
      dateOfBirth
      familyMembers
      homeLat
      homeLon
      imageUrl
    }
  }
`;

const GET_PATIENTS_OF_HOSPITAL = gql`
  query patientsOfHospital($hospitalId: Int) {
    patientsOfHospital(hospitalId: $hospitalId) {
      id
      fiscalCode
      name
      surname
      dateOfBirth
      familyMembers
      homeLat
      homeLon
      imageUrl
    }
  }
`;

function useQueryByActiveRole(doctorQuery, hospitalQuery, onCompleted) {
  const activeRole = useSelector((state) => state.activeRole);
  const isDoctor = activeRole.type === DOCTOR_ROLE_TYPE;

  useQuery(isDoctor ? doctorQuery.query : hospitalQuery.query, {
    onCompleted: (data) => {
      onCompleted(isDoctor ? data.patientsOfDoctor : data.patientsOfHospital);
    },
    variables: {
      doctorId: isDoctor ? activeRole.id : undefined,
      hospitalId: !isDoctor ? activeRole.id : undefined,
    },
  });
}

export default function PatientsList(props) {
  const styles = useStyles();

  const [patients, setPatients] = useState([]);

  useQueryByActiveRole(
    {
      query: GET_PATIENTS_OF_DOCTOR,
    },
    {
      query: GET_PATIENTS_OF_HOSPITAL,
    },
    (patients) => {
      setPatients(patients);
    }
  );

  return (
    <>
      <TopBar title={'Patients List ' + props.activeRole.type} />
      <main className={styles.content}>
        <div className={styles.toolbar} />
        <PatientsTable {...props} data={patients} />
      </main>
    </>
  );
}
