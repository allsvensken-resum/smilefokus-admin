import React from 'react';
import './Path.css';
import HouseIcon from '@material-ui/icons/House';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import GetAppIcon from '@material-ui/icons/GetApp';
import PrintIcon from '@material-ui/icons/Print';

function Path() {
  return (
    <div className='path'>
      <div className='path__content'>
        <ul>
          <li><a><HouseIcon /></a></li>
          <li><a>/ Business Insight</a></li>
          <li><a>/ Report</a></li>
          <li><a>/ Member</a></li>
          <li><a>/ Member</a></li>
        </ul>
      </div>
      <div className='path__icon'>
        <ul>
          <li><a><EqualizerIcon fontSize='small' /></a></li>
          <li><a><GetAppIcon fontSize='small' /></a></li>
          <li><a><PrintIcon fontSize='small' /></a></li>
        </ul>
      </div>

    </div>
  )
}

export default Path
