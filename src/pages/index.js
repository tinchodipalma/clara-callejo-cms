import React from 'react';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Layout from '../layouts/Layout';
import SEO from '../components/seo';

const IndexPage = ({ location }) => {
  const siteTitle = 'Gatsby Starter Personal Website';

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <div>
        <Typography variant="h4">Contenido del sitio</Typography>
        <Typography variant="body">Algún texto acá</Typography>
      </div>

      <Link to="/blog/">
        <Button variant="contained" color="secondary">
          Ir al blog
        </Button>
      </Link>
    </Layout>
  );
};

export default IndexPage;
