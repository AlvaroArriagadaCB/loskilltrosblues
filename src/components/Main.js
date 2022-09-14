import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import bg from '../images/bg.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import pic06 from '../images/pic06.jpg'
import pic07 from '../images/pic07.jpg'
import pic08 from '../images/pic08.jpg'
import alvaro from '../images/alvaroarriagada.jpg'
import ignacio from '../images/nacho.jpg'
import tutu from '../images/tutu.jpg'
import seba from '../images/seba.jpg'
import pic09 from '../images/pic09.jpeg'
import pic10 from '../images/pic10.jpeg'
import pic11 from '../images/pic11.jpeg'
import pic12 from '../images/pic12.jpg'
import pic13 from '../images/pic13.jpeg'
import pic14 from '../images/pic14.jpg'
import pic15 from '../images/pic15.png'


class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">La banda</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          Los Killtros Blues es una banda de Blues rock formada el año 2014, originaria de la comuna de Purranque, Provincia de Osorno en la Región de Los Lagos, cuyos miembros originales eran parte de Club de Motos Purrankilltros, desde donde nace la idea de conformar una banda
          </p>
          <p>
          Las principales influencias de la banda en un comienzo fueron Pappo Blues, Stevie Ray Vaughan y Jimmi Hendrix,  pero luego se dedicaron a componer canciones propias.
          </p>
          <p>
          Se han presentado en diversos eventos y ciudades por el sur de Chile, teloneros de Los Jaivas, Los Tetas, Lucybell entre otros, al alero también de los encuentros de motos que se realizan en distintas partes del país.
          </p>
          <p>
          No me sigas amor, Quiero Bailar, son algunas de las canciones que Álvaro Arriagada, Guitarrista, vocalista y principal compositor de la banda ha formado luego de un receso que los trajo de vuelta en 2018, con nueva formación, con la cual grabaron en Valdivia un demo que están pronto a dar a conocer, pero del cual hoy están presentando algunas de las canciones que este incluirá a través de una sesión en vivo grabada en formato video en la ciudad de Puerto Varas y que puedes encontrar en el canal de Youtube "killtrosblues".
          </p>
          <a href="https://www.youtube.com/user/KilltrosBlues" className="icon fa-youtube"> Canal de Youtube </a>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Galería</h2>
          <span className="image main">
            <img src={pic05} alt="" />
            <br></br>
            <img src={pic09} alt="" />
            <br></br>
            <img src={pic14} alt="" />
            <br></br>
            <img src={pic13} alt="" />
            <br></br>
            <img src={pic06} alt="" />
            <br></br>
            <img src={pic08} alt="" />
            <br></br>
            <img src={pic11} alt="" />
            <br></br>
            <img src={pic10} alt="" />
            <br></br>
            <img src={pic04} alt="" />
            <br></br>
            <img src={pic15} alt="" />
            <br></br>
          </span>
          {close}
        </article>

        <article
          id="members"
          className={`${this.props.article === 'members' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Miembros de la banda</h2>
          <span className="image main" style={{marginBottom: 10}}>
            <img src={alvaro} alt="" />
          </span>
          <p style={{textAlign: 'center', fontSize: 20, fontWeight:'bold'}} >
            Alvaro Arriagada -
            Guitarra y voz principal
          </p>
          <span className="image main" style={{marginBottom: 10}}>
            <img src={ignacio} alt="" />
          </span>
          <p style={{textAlign: 'center', fontSize: 20, fontWeight:'bold'}} >
            Ignacio Merino (Nacho Tattoo) -
            Armónica
          </p>
          <span className="image main" style={{marginBottom: 10}}>
            <img src={seba} alt="" />
          </span>
          <p style={{textAlign: 'center', fontSize: 20, fontWeight:'bold'}} >
            Sebastian Olavarría - 
            Batería y voces
          </p>
          <span className="image main" style={{marginBottom: 10}}>
            <img src={tutu} alt="" />
          </span>
          <p style={{textAlign: 'center', fontSize: 20, fontWeight:'bold'}} >
            Diego Hernandez - 
            Bajo
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Sesión</h2>
          <iframe style={{width:'100%'}} height="315" src="https://www.youtube.com/embed/6O6NF-YwkJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <p style={{fontSize: 20}}> Grabado en estudios SoundPro, Puerto Varas, Chile 2022</p>
          <ul className="icons">
            <li>
              <a href="https://web.facebook.com/loskilltrosblues" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/killtrosblues/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/artist/4lCDuQB8hu7FLvACsbFuJ1?si=0IWnydmoTsO9-shOpCgRnw"
                className="icon fa-spotify"
              >
                <span className="label">Spotify</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
