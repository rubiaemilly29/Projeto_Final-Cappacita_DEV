import * as React from "react";
import Rating from '@mui/material/Rating';
import {Box} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  1: "Péssimo ",
  2: "Ruim",
  3: "Ok",
  4: "Bom",
  5: "Excelente"
};

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
    console.log(value)
  return (
    <Box
      sx={{
        width: '100%',
        display: "flex",
        alignItems: "center"
      }}
    >
      <Rating 
        style={{margin:'20px'}}
        name="hover-feedback"
        value={value}
        precision={1.0}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}