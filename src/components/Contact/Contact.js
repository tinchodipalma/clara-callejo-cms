import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ContactImage from '../../../static/assets/contact/contact.jpg';

import './Contact.css';

const Contact = () => (
  <div className="Contact">
    <div className="Contact__Title">
      <Typography variant="h4" color="secondary">
        Contacto
      </Typography>
    </div>
    <div className="Contact__Form">
      <div className="Contact__Image">
        <img src={ContactImage} alt="Contacto" />
      </div>
      <form>
        <div className="Contact__Form__Grid">
          <div className="Contact__Form__Group">
            <div className="Contact__Form__Row">
              <TextField
                name="name"
                label="Nombre y apellido"
                required
                fullWidth
              />
            </div>

            <div className="Contact__Form__Row">
              <TextField
                name="email"
                label="Correo electrónico"
                type="email"
                required
                fullWidth
              />
            </div>
            <div className="Contact__Form__Row">
              <TextField name="subject" label="Asunto" required fullWidth />
            </div>
          </div>

          <div className="Contact__Form__Group">
            <div className="Contact__Form__Row">
              <TextField
                name="text"
                label="Contenido"
                multiline
                required
                fullWidth
              />
            </div>
          </div>
        </div>
        <div className="Contact__Form__Row Contact__Form__SubmitContainer">
          <Button type="button" variant="contained" color="secondary">
            Enviar
          </Button>
        </div>
      </form>
    </div>
  </div>
);

export default Contact;
