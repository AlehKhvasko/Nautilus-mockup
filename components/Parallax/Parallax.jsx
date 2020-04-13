import React from 'react';
import './Parallax.modules.css';

function Parallax() {
  return (
    <div >
      <div className='parallax'>
        <div className='parallax_main'>
          <p>
            issue 079
          </p>
          <p>
            Catalysts
          </p>
          <div>
            <p>
              Agents of change
            </p>
            <p>
            read more
            <hr/>
          </p>
          </div>
          <button>see full issue</button>
        </div>
      <div className='parallax_bottom'>
        <div className='arrow'></div>
        <div>Scroll down</div>  
      </div>
      </div>
    </div>
  );
}

export default Parallax;