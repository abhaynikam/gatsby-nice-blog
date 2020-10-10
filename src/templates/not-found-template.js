// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = ({ location }) => {
  const { title } = useSiteMetadata();

  return (
    <Layout title={title} location={location}>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundTemplate;
