import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../images/picture.jpg'
import './Home.css'

const Home = () => (
    <div className="hero is-fullheight">
        <div className="hero-body">
            <div className="container v-centered">
                <div className="columns">
                    <div className="column has-text-centered">
                        <img src={profile} className="profile-image" alt="My profile" />
                    </div>
                    <div className="column">
                        <h1 className="title is-1">I'm Alain MATESO</h1>
                        <h3 className="title is-3">Software Developer to be</h3>
                        <hr />
                        <p className="about-me">
                            Rwandan citizen aspiring to become a world class Software Developer through Andela
            </p>
                        <div className="columns">
                            <div className="column">
                                <Link
                                    to="/resume"
                                    className="button is-info is-large is-fullwidth"
                                >
                                    RESUME
                </Link>
                            </div>
                            <div className="column">
                                <Link
                                    to="/contact"
                                    className="button is-light is-large is-fullwidth"
                                >
                                    CONTACT
                </Link>
                            </div>
                        </div>
                        <p className="social-icons">
                            <a
                                href="https://github.com/alainmateso/"
                                target="_blank"
                                className="social-icon"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github" />
                            </a>
                            <a
                                href="https://twitter.com/alainmat__"
                                target="_blank"
                                className="social-icon"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-twitter" />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default Home;
