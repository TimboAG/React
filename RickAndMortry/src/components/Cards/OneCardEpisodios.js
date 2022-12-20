import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  MyCard,
  MyP,
  MyCarOne,
} from "../../assets/style/ComponentesEstilizados.js";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 301,
    borderRadius: 25,
  },
});
const OneCardEpisodio = ({ episodio }) => {
  const classes = useStyles();

  return (
    <MyCard>
      <MyCarOne className={classes.root}>
        {" "}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Nombre: {episodio.name}
          </Typography>
          <MyP>Fecha de lanzamiento: {episodio.air_date}</MyP>
          <MyP>Episodio: {episodio.episode}</MyP>
        </CardContent>
      </MyCarOne>
      <br></br>
    </MyCard>
  );
};

export default OneCardEpisodio;
