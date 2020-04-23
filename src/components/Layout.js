import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Particles from 'react-particles-js';

import '../assets/sass/main.scss';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 1000);
  }

  render() {
    const { children } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: 'Fullstack Developer | Javascript | ReactJS | React Native | NodeJS | HTML | CSS | GIT'
                },
                {
                  name: 'keywords',
                  content: 'site, frederico vieira, dev, developer, development, css, html, js, javascript, node, react, reactjs, reactnative, native, git'
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
              <Particles
                params={{
                  particles: {
                    number: {
                      value: 60,
                    },
                    size: {
                      value: 4,
                    },
                  },
                }}
                style={{
                  position: 'absolute',
                }}
              />
              <div id="wrapper">{children}</div>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
