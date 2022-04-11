import React from 'react';
import { NavLink } from './Link.styled';

const styles = {
  p: {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: '700',
    marginBottom: '20px', 
  },
};
const HomeView = () => {
  return (
    <>
      <p style={styles.p}>
        Wellcome!{' '}
        {/* <span>
          <NavLink to="/login">back</NavLink>
        </span>{' '} */}
        To use the Phone Book, please log in or sign up.
      </p>
      <p style={styles.p}>
        Or{' '}
        <span>
          <NavLink to="/register">create</NavLink>
        </span>{' '}
        your own collection
      </p>
    </>
  );
};
export default HomeView;