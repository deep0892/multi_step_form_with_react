import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Contact = ({ formData, setForm, navigation }) => {
  const { phone, email } = formData;
  return (
    <div>
      <Container maxWidth="xs">
        <h3>Contact</h3>
        <TextField
          label="Phone"
          name="phone"
          value={phone}
          onChange={setForm}
          type="number"
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          value={email}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <div style={{ marginTop: '1rem' }}>
          <Button
            onClick={navigation.previous}
            variant="contained"
            color="secondary"
            style={{
              marginRight: '1rem',
            }}
          >
            Back
          </Button>
          <Button onClick={navigation.next} variant="contained" color="primary">
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
