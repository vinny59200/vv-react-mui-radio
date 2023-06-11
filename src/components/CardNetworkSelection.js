import React, { useState } from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core/styles';

const CardNetworkSelection = () => {
  const [selectedCard, setSelectedCard] = useState("");

  const handleCardChange = (event) => {
    setSelectedCard(event.target.value);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4caf50", // Green color
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <RadioGroup
          name="cardNetwork"
          value={selectedCard}
          onChange={handleCardChange}
          row
        >
          <FormControlLabel
            value="visa"
            control={<Radio color="primary" />}
            label={
              <img
                src={`${process.env.PUBLIC_URL}/visa-card.png`}
                width="24"
                alt="Visa"
              />
            }
          />
          <FormControlLabel
            value="mastercard"
            control={<Radio color="primary" />}
            label={
              <img
                src={`${process.env.PUBLIC_URL}/mastercard.png`}
                width="24"
                alt="Mastercard"
              />
            }
          />
          <FormControlLabel
            value="americanexpress"
            control={<Radio color="primary" />}
            label={
              <img
                src={`${process.env.PUBLIC_URL}/american-express.png`}
                width="24"
                alt="American Express"
              />
            }
          />
          <FormControlLabel
            value="discover"
            control={<Radio color="primary" />}
            label={
              <img
                src={`${process.env.PUBLIC_URL}/discover-card.png`}
                width="24"
                alt="Discover"
              />
            }
          />
        </RadioGroup>
        <Typography variant="h6" style={{ marginTop: "16px" }}>
          Selected Card Network: {selectedCard}
        </Typography>
      </ThemeProvider>
    </div>
  );
};

export default CardNetworkSelection;
