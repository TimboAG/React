import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
export const Volver = () => {
  return (
    <Button size="small" color="primary">
      <Link to="/personajes">Volver</Link>
    </Button>
  );
};
