import { Link, Outlet, useLocation} from 'react-router-dom';
import { useState} from 'react'
import './Singers.css';
export default function Singers(){
    const [singerLyrics, setSingerLyrics] = useState({});
    const location = useLocation();

  
    const getColor = (singer) => {
      switch (singer) {
        case '/singer/first':
          return '#DB8FF8';
        case '/singer/second':
          return '#90EE90';
        case '/singer/third':
          return '#7DFFDE';
        case '/singer/fourth':
          return '#FF7DF9';
        default:
          return '';
      }
    };
      
      const handleLyricsChange = (newLyrics) => {
        const singerPath = location.pathname;
        const singerKey = location.key;
        
        if(newLyrics !== ''){
           
          setSingerLyrics((prevLyrics) => ({
            ...prevLyrics,
            [singerKey]: {
              color: getColor(singerPath),
              lyrics: [newLyrics],
            },
          }));
        }else{
          setSingerLyrics((prevLyrics) => {
            const updatedLyrics = { ...prevLyrics };
            delete updatedLyrics[singerKey];
            return updatedLyrics;
          });
        }
      };
      
    return (
        <>  
        <h1>Complete the Lyrics</h1>
        <div className='singersOptions'>
            <Link to='/singer/first' className='first' >FIRST SINGER</Link> 
            <Link to='/singer/second'className='second'>SECOND SINGER</Link>
            <Link to='/singer/third' className='third' >THIRD SINGER</Link>
            <Link to='/singer/fourth'className='fourth'>FOURTH SINGER</Link>
        </div>
         <Outlet context={{setSingerLyrics: handleLyricsChange}}/>
         <div className='textarea'>
      
         {Object.entries(singerLyrics).map(([singer, { color, lyrics }]) => {
          return (
            <div key={singer}>
              <div className='container' style={{ backgroundColor: color }}>
                {lyrics.map((lyric, index) => (
                  <div key={index}>{lyric}</div>
                ))}
              </div>
            </div>
          );
        })}
        </div>
        </>    
    )
       
}

