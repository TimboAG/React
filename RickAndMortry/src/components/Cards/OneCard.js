import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  MyCard,
  MyDivImage,
  MyCarOne,
  MyP,
  MySpan,
} from "../../assets/style/ComponentesEstilizados.js";
import { Link } from "react-router-dom";
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

  return (
    <MyCard>
      <MyCarOne className={classes.root}>
        <CardActionArea>
          <MyDivImage>
            {" "}
            <CardMedia
              className={classes.media}
              image={personaje.image}
              // image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
          </MyDivImage>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {personaje.name}
            </Typography>
            <MyP>
              {personaje.status} - {personaje.species}
            </MyP>
            <MyP>
              Género: <MySpan>{personaje.gender}</MySpan>{" "}
            </MyP>
            <MyP>
              Última ubicación conocida:{" "}
              <MySpan>{personaje.origin.name}</MySpan>{" "}
            </MyP>
            <MyP>
              Visto por primera vez en:{" "}
              <MySpan>{personaje.location.name}</MySpan>{" "}
            </MyP>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={`./detalles/${personaje.id}`}>Ver personaje</Link>
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </MyCarOne>
    </MyCard>
  );
};

export default OneCard;
