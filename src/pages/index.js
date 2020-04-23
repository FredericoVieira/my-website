import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import PageFooter from '../components/PageFooter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faSass,
  faLess,
  faNpm,
  faYarn,
  faNodeJs,
  faPython,
  faAws
} from "@fortawesome/free-brands-svg-icons"

const IndexPage = () => (
  <>
    <Layout>
      <section id="main">
        <Header />
        <Footer />
      </section>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
      <PageFooter />
    </Layout>
    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Degree in Computer Engineering
          </h2>
          <p>
            Development of mobile applications, video and image analysis systems, artificial intelligence an big data platforms.
            <br />
          </p>
        </header>
        <ul className="icons major">
          <li>
            <FontAwesomeIcon icon={faHtml5} size="2x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faCss3Alt} size="2x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faJsSquare} size="2x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faReact} size="2x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faSass} size="2x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faLess} size="2x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faNpm} size="2x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faYarn} size="2x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faNodeJs} size="2x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faPython} size="2x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faAws} size="2x" />
          </li>
        </ul>
      </div>
    </section>
  </>
);

export default IndexPage;
