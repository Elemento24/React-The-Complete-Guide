import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {
  // static async getInitialProps(context) {
  //   console.log(context);
  //   return { appName: 'Super App' };
  // }

  // It is a super-important LifeCycle Hook, where it pre-populates the results of the promises, which we provide or provided by some other package, and then wait for it to be resolved, and once it's done, then it returns the results.
  static getInitialProps(context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: 'Super App' })
      }, 1000)
    });
    return promise;
  }

  render() {
    return (
      <div>
        <h1>The Main Page of {this.props.appName}</h1>
        <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
        <button onClick={() => Router.push('/auth')}>Go to Auth</button>
      </div>
    );
  }
}

export default IndexPage;