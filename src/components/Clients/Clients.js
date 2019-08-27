import React from 'react';
import Typography from '@material-ui/core/Typography';

import './Clients.css';

const CLIENTS_DATA = [
  {
    img: '/assets/logos/logo1.png',
    label: 'Mercado Libre',
  },
  {
    img: '/assets/logos/logo2.png',
    label: 'PlayStation',
  },
  {
    img: '/assets/logos/logo3.png',
    label: 'Nintendo',
  },
  {
    img: '/assets/logos/logo4.png',
    label: 'SayMood',
  },
  {
    img: '/assets/logos/logo5.png',
    label: 'Coca Cola',
  },
  {
    img: '/assets/logos/logo6.png',
    label: 'Quilmes',
  },
  {
    img: '/assets/logos/logo7.png',
    label: 'Chanel',
  },
];

const Clients = () => (
  <div className="Clients">
    <div className="Clients__Title">
      <Typography variant="h4" color="secondary">
        Clientes
      </Typography>
    </div>
    <div className="Clients__List">
      {CLIENTS_DATA.map(({ img, label }, i) => (
        <div key={i} className="Clients__List__Item" title={label}>
          <img src={img} alt={label} />
        </div>
      ))}
    </div>
  </div>
);

export default Clients;
