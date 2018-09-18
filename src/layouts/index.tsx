import * as React from 'react';
import Helmet from 'react-helmet';

import './header.css';
import './common.css';
import Navbar from '../components/Navbar';

interface LayoutProps {
  children: () => React.ReactChildren;
  data: {
    site: { siteMetadata: { title: string } }
    markdownRemark: {
      frontmatter: {
        copyright: string
        description: string,
      },
    },
  };
}

export default ({ children, data }: LayoutProps) => (
  <div>
    {/* This is basically the head */}
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: '' },
        {
          name: 'keywords',
          content:
            'demokrácia, független, média, szabad, sajtó, propaganda, álhír',
        },
      ]}
    >
      <a
        href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed|Cabin+Sketch"
        rel="stylesheet"
      />
      <a
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Helmet>
    {children()}
  </div>
);

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
