import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const VerDetallesCard = ({ personaje }) => {
  return (
    <div>
      <Button>
        <Link to={`./detalles/${personaje.id}`}>Ver personaje</Link>
      </Button>
    </div>
  );
};

export default VerDetallesCard;
