import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';
import ContactImage from '../../../static/assets/contact/contact.jpg';

import './Contact.css';
import { LinearProgress } from '@material-ui/core';

const Contact = () => {
  const [formData, setFormData] = useState({
    sent: false,
  });

  const onFormChange = (property) => ({ target: { value } }) => {
    setFormData({ ...formData, [property]: value });
  };

  const isSubmitEnabled = () => {
    if (!formData.name || !formData.name.trim().length) {
      return false;
    }

    if (!formData.email || !formData.email.trim().length) {
      return false;
    }

    if (!formData.subject || !formData.subject.trim().length) {
      return false;
    }

    if (!formData.body || !formData.body.trim().length) {
      return false;
    }

    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const now = new Date();

    setFormData({
      ...formData,
      isLoading: true,
    });

    if (isSubmitEnabled()) {
      const data = {
        ...formData,
        date: `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`,
        time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
      };

      try {
        await emailjs.send('cc_zoho', 'template_rqvxrF3t', data, 'user_lDxsa2crRoCss0IMsL1ZB');
        setFormData({
          ...formData,
          sent: true,
          isLoading: false,
        });
      } catch (e) {
        console.error(e);
        setFormData({
          ...formData,
          sent: false,
          isLoading: false,
        });
      }
    }
  };

  return (
    <div className="Contact">
      <div className="Contact__Title MainSection__Title">
        <Typography variant="h4" color="secondary">
          Contacto
        </Typography>
      </div>
      <div className="Contact__Form">
        <div className="Contact__Image">
          <img src={ContactImage} alt="Contacto" />
        </div>
        <form onSubmit={onSubmit}>
          <div className="Contact__Form__Grid">
            <div className="Contact__Form__Group">
              <div className="Contact__Form__Row">
                <TextField
                  disabled={formData.isLoading || formData.sent}
                  name="name"
                  label="Nombre y apellido"
                  value={formData.name || ''}
                  onChange={onFormChange('name')}
                  required
                  fullWidth
                />
              </div>

              <div className="Contact__Form__Row">
                <TextField
                  disabled={formData.isLoading || formData.sent}
                  name="email"
                  label="Correo electrónico"
                  value={formData.email || ''}
                  onChange={onFormChange('email')}
                  type="email"
                  required
                  fullWidth
                />
              </div>
              <div className="Contact__Form__Row">
                <TextField
                  disabled={formData.isLoading || formData.sent}
                  name="subject"
                  label="Asunto"
                  value={formData.subject || ''}
                  onChange={onFormChange('subject')}
                  required
                  fullWidth
                />
              </div>
            </div>

            <div className="Contact__Form__Group">
              <div className="Contact__Form__Row">
                <TextField
                  disabled={formData.isLoading || formData.sent}
                  name="body"
                  label="Contenido"
                  value={formData.body || ''}
                  onChange={onFormChange('body')}
                  multiline
                  required
                  fullWidth
                />
              </div>
            </div>
          </div>
          <div className={`Contact__Form__Row Contact__Form__SubmitContainer Contact__Form__SubmitContainer--${formData.sent ? 'sent' : ''} Contact__Form__SubmitContainer--${formData.isLoading ? 'isLoading' : ''}`}>
            <LinearProgress color="primary" className="Contact__Form__SubmitProgress" />
            {!formData.sent &&
              <Button
                className="Contact__Form__SubmitButton"
                disabled={!isSubmitEnabled()}
                type="submit"
                variant="contained"
                color="secondary"
              >
                Enviar
              </Button>
            }
            {formData.sent &&
              <Typography variant="body1">
                Tu mensaje ha sido enviado con éxito. ¡Gracias!
              </Typography>
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
