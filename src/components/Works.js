import React from 'react';
import music from '../images/audio-unscreen.gif';
import Tilt from 'react-parallax-tilt';



const Works = () => {
  const works = [
    {
      title: 'AUDACITY',
      youtube: 'https://youtu.be/O0eLnJ_-v-s',
      description: 'This song reflects a boy\'s realization that his life has improved and become more vibrant since the girl who caused him pain is no longer a part of it.',
      albumArt: 'https://i.scdn.co/image/ab67616d00001e02f1df1dee711eeb8f1a77da31',
      spotifyEmbed: 'https://open.spotify.com/embed/track/1N4TubxZXkhFTGEICOqAht?utm_source=generator',
      streams: '1.2M'
    },
    {
      title: 'SULTRY',
      youtube: 'https://youtu.be/qDIvZx6fF5w',
      description: 'This song narrates a boy\'s frustration as he tries to focus on an assassination mission while his girlfriend incessantly discusses her emotional issues, prompting him to repeatedly sing that he doesn\'t want to talk and will address it later.',
      albumArt: 'https://i.scdn.co/image/ab67616d00001e0270aac13ac8a24628d08065d5',
      spotifyEmbed: 'https://open.spotify.com/embed/track/4FW7RGggxRZ0f8nRNzUOLd?utm_source=generator',
      streams: '850K'
    },
    {
      title: 'SLIDE ZARA',
      youtube: 'https://youtu.be/link-to-slide-zara',
      description: 'The song revolves around the emotions of longing and hesitation in a romantic relationship. The singer expresses their frustration and confusion over why their partner isn\'t more open and expressive about their feelings. They question why their partner doesn\'t show affection, share more about themselves, or even acknowledge the singer\'s efforts and presence.' ,
      albumArt: 'https://i.scdn.co/image/ab67616d00001e023022b399cf1ac37c29b230e4',
      spotifyEmbed: 'https://open.spotify.com/embed/track/5svinFbE044frhIYJzs2GZ?utm_source=generator',
      streams: '500K'
    },
    {
      title: 'FIROZI FITOOR',
      youtube: 'https://youtu.be/link-to-firozi-fitoor',
      description: 'The song "Firozi Fitoor" is a heartfelt expression of love where the singer declares that his entire being and world belong to his beloved and how love didn’t happen instantly but grew slowly and steadily over time. The arrival of his beloved brought vibrant colors into his life, marking a wonderful turn of fortune.',
      albumArt: 'https://i.scdn.co/image/ab67616d00001e0286a5445cdd5458c5e0a681ba',
      spotifyEmbed: 'https://open.spotify.com/embed/track/327vFaJvqx2yD9gyUTYB9U?utm_source=generator',
      streams: '900K'
    }
  ];

  return (
    <>
    
    <section className="works">
      
      <h2 style={{ display: 'flex', alignItems: 'center' }}>
        Works
        <img className='musiccd' src={music} alt="music" style={{ height: '105px', width: '105px', marginLeft: '10px' }} />
      </h2>
      {works.map((work, index) => (
                                  <Tilt tiltMaxAngleY={4} tiltMaxAngleX={4}>
                                    
        <div className="work-item" key={index}>
        
          
          <img src={work.albumArt} alt={`${work.title} album art`} className="album-art" />
          <div className="work-details">
          
            
            <a href={work.youtube} className="work-title" target="_blank" rel="noopener noreferrer">
              {work.title}
            </a>
            <p>{work.description}</p>
            <p><strong>Streams:</strong> {work.streams}</p>
            <div className='embedded'>
              <iframe
                title={work.title}
                src={work.spotifyEmbed}
                width="250"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>
        </Tilt>
      ))}
    </section>
    </>
  );
};

export default Works;
