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

import bdmg from '../assets/images/bdmg.jpeg'
import kim from '../assets/images/kim.png'
import simplicidata from '../assets/images/simplicidata.jpg'
import dataviva from '../assets/images/dataviva.jpeg'
import gravol from '../assets/images/gravol.jpeg'

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
    </Layout>
    <section id="one" className="wrapper special">
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
    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={bdmg} alt="bdmg" />
          </div>
          <div className="col-lg-6">
            <div className="bg-white text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-gray">BDMG APP</h4>
                  <p className="mb-0 text-white-50">
                    App of contract management, that allows clients sign contracts digitaly
                    with proof of life and documents validation.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={kim} alt="kim" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-white text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-gray">KIM+</h4>
                  <p className="mb-0 text-white-50">
                    App of service management, that helps users with daily tasks such as recharging bus cards
                    and phone data, paying bills and offering discounts in a variety of stores.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={simplicidata} alt="simplicidata" />
          </div>
          <div className="col-lg-6">
            <div className="bg-white text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-gray">Simplicidata</h4>
                  <p className="mb-0 text-white-50">
                    Artificial intelligence web platform for data preparation,
                    which allows the users to perform a lot of customized data transformations.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={dataviva} alt="dataviva" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-white text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-gray">Dataviva</h4>
                  <p className="mb-0 text-white-50">
                    Collaborative web platform for visualization of Brazilian socioeconomic data,
                    which an overview of country data divided by states even cities, and so on.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={gravol} alt="gravol" />
          </div>
          <div className="col-lg-6">
            <div className="bg-white text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-gray">Gravol</h4>
                  <p className="mb-0 text-white-50">
                    Web platform to helps teams collect and organize performance data by storing match events and videos
                    and creates reports with key video clips.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <PageFooter />
  </>
);

export default IndexPage;
