import React from 'react';
import { connect } from 'react-redux';
import s from './ActiveBets.module.css';
import CustomTable from '../CustomTable/CustomTable';

const ActiveBets = ({ session }) => {
  return (
    <div className={s.back}>
      <CustomTable session={session} active={session.user.bets} />
    </div>
  );
};

export default ActiveBets;
