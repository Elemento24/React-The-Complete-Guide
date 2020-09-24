import React from 'react';

import User from '../../components/User';

const authIndexPage = (props) => (
  <div>
    <h1>The Auth Index Page - {props.appName}</h1>
    <User name='Max' age={28} />
  </div>
);

// This is how we can use getInitialProps in functional components, and it allows us to populate our props, before the page is loaded in actual.
authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: 'Super App (Auth)' })
    }, 1000)
  });
  return promise;
}

export default authIndexPage;