import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {
  MyCard,
  MyDivImage,
  MyCarOne,
  MyP,
  MySpan,
  MyImagenCirculo,
} from "../../assets/style/ComponentesEstilizados.js";
import CiurculoRojo from "../../assets/imagen/circuloRojo.png";
import CiurculoVerde from "../../assets/imagen/circuloVerde.png";
import CiurculoGris from "../../assets/imagen//circuloGris.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 301,
    borderRadius: 25,
  },
});
const OneCard = ({ personaje }) => {
  const classes = useStyles();

  const estado = () => {
    if (personaje.status === "Alive") {
      return <MyImagenCirculo src={CiurculoVerde} />;
    } else if (personaje.status === "Dead") {
      return <MyImagenCirculo src={CiurculoRojo} />;
    } else {
      return <MyImagenCirculo src={CiurculoGris} />;
    }
  };

  return (
    <MyCard>
      <MyCarOne className={classes.root}>
        <MyDivImage>
          {" "}
          <CardMedia
            className={classes.media}
            image={personaje.image}
            title="Contemplative Reptile"
          />
        </MyDivImage>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {personaje.name}
          </Typography>
          <MyP>
            {estado()} {personaje.status} - {personaje.species}
          </MyP>
          <MyP>
            Género: <MySpan>{personaje.gender}</MySpan>{" "}
          </MyP>
          <MyP>
            Última ubicación conocida: <MySpan>{personaje.origin.name}</MySpan>{" "}
          </MyP>
          <MyP>
            Visto por primera vez en: <MySpan>{personaje.location.name}</MySpan>{" "}
          </MyP>
        </CardContent>
      </MyCarOne>
      <br></br>
    </MyCard>
  );
};

export default OneCard;
