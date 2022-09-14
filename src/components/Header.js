import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.png';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img className="logazo" src={logo} alt="" />
    </div>
    <div className="content" style={{marginTop:30}}>
      <div className="inner">
        <h1>Los Killtros Blues</h1>
        <p>
         Blues rock del sur de Chile
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Banda
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Galería
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('members')
            }}
          >
            Miembros
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Session
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
