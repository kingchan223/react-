import React from 'react';
import Login from '../components/login/Login';

const LoginPage = (props) => {
  console.log('LoginPage', props);
  console.log('LoginPage', props.match.params.id);
  const { history } = props.history;

  return (
    <div>
      <button onClick={() => props.history.go(-1)}>뒤로가기1</button>
      <button onClick={() => props.history.goBack()}>뒤로가기2</button>
      <button onClick={() => props.history.push('/')}>홈 이동</button>
      <Login />
    </div>
  );
};

export default LoginPage;
