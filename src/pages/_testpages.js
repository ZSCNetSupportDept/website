import React from 'react';
import Layout from '@theme/Layout';

export default function main() {
    console.log("Hello World!"+navigator.UserAgent);
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
      <p></p>
    </Layout>

  );
}
