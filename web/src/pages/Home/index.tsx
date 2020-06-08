import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi'
import './styles.css';
import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecollect logo"/>
        </header>

        <main>
          <h1>Your marketplace of waste collection.</h1>
          <p>We help people find collection points efficiently.</p>

          <Link to="/create-point">
            <span>
              <FiLogIn/>
            </span>
            <strong>Register collection points</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Home;