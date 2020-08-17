import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Address = ({ formData, setForm, navigation }) => {
  const { address, city, state, zip } = formData;

  return (
    <div>
      <Container maxWidth="xs">
        <h3>Address</h3>
        <TextField
          label="Address"
          name="address"
          value={address}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="City"
          name="city"
          value={city}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="State"
          name="state"
          value={state}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Zipcode"
          name="zip"
          value={zip}
          onChange={setForm}
          type="number"
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

export default Address;
