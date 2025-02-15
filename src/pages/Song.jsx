import React from 'react' // eslint-disable-line no-unused-vars
import Player from '../components/Player';
import { Link } from 'react-router-dom';

const Song = () => {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24" alt="Imagem da música" />
        </div>
      </div>

      <div className="song__bar">
        <Link to="/artist/" className='song__artist-image'>
          <img 
            width={75}
            height={75}
            src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24" alt="Imagem do artista" />
        </Link>

        <Player />
        <div>
          <p className='song__name'>Última saudade - Ao vivo</p>
          <p>Henrique & Juliano</p>
        </div>
      </div>
    </div>
  );
};

export default Song