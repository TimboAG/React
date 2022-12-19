import React from "react";
import Card from "react-bootstrap/Card";
import {
  SobreSerieCard,
  TitulosLestras,
} from "../assets/style/ComponentesEstilizados";

const SobreSerie = () => {
  return (
    <SobreSerieCard>
      <Card.Body>
        <Card.Title>
          <TitulosLestras>Sobre la serie</TitulosLestras>
        </Card.Title>
        <Card.Text>
          Rick y Morty (en inglés: Rick and Morty) es una serie de televisión
          americana de animación para adultos creada por Justin Roiland y Dan
          Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network.
          La serie sigue las desventuras de un científico, Rick Sanchez, y su
          fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre
          la vida doméstica y los viajes espaciales, temporales e
          intergalácticos. Dan Harmon, el co-creador de la serie y Justin
          Roiland son los encargados de las voces principales de Morty y Rick,
          la serie también incluye las voces de Chris Parnell, Spencer Grammer y
          Sarah Chalke. La serie se originó por un cortometraje rudimentario
          animado por Roiland para el festival de cine Channel 101 llamado Doc
          and Mharti, una parodia de los principales protagonistas de Back to
          the Future. Cuando la cadena NBC despidió a Harmon en 2013 por
          discusiones entre él y los ejecutivos de la serie que había creado,
          Community, él y Roiland desarrollaron una serie basada en los
          personajes ya creados por Roiland.
        </Card.Text>

        <Card.Title>
          {" "}
          <TitulosLestras>Argumento</TitulosLestras>{" "}
        </Card.Title>
        <Card.Text>
          Rick Sánchez es un ejemplo del típico "científico loco". Es un genio,
          pero es irresponsable, alcohólico, egoísta, un poco depresivo y con
          poca cordura. Rick por diferentes razones termina mudándose a la casa
          de su hija Beth y en ese momento se encuentra con su nieto Morty; un
          chico de 14 años de edad, tímido y no muy listo. Al juntarse con su
          nieto, Rick y Morty viven una variedad de aventuras a lo largo del
          cosmos y universos paralelos. Y es mediante tantas vivencias y
          reflexiones que Rick busca que su nieto Morty no acabe como su padre,
          Jerry, un hombre muy poco exitoso que a pesar de tener buenas
          intenciones resulta ser bastante inútil en muchas ocasiones y depende
          mucho de su esposa, Beth, hija de Rick. A pesar de estar muy apegados,
          Rick y su nieto experimentan momentos en los que Summer, hermana de
          Morty, se une en ocasiones a las pintorescas aventuras provocadas por
          Rick.
        </Card.Text>

        <Card.Title>
          <TitulosLestras>Escritura</TitulosLestras>
        </Card.Title>
        <Card.Text>
          La fórmula general en Rick y Morty consiste en la yuxtaposición de dos
          escenarios que confluyen. Por un lado se muestran las aventuras que
          vive un abuelo extremadamente egoísta y alcohólico por lo vasto y
          desconocido del espacio intergaláctico o interdimensional, el cual
          arrastra a su nieto para que viaje con él. Estas aventuras se
          intercalan en cada episodio con dramas domésticos familiares más
          propios del género sitcom. Dan Harmon describe esta fusión de ciencia
          ficción y ambiente familiar como una mezcla de influencias entre las
          dos obras de Matt Groening: Los Simpson y Futurama. Por otro lugar, el
          coautor Justin Roiland comunicó la intención de los creadores de que
          la serie sobrepasara la continuidad tradicional en la televisión,
          optando así por storylines discontinuas, «no fijadas por reglas».
          Roiland describe cada episodio como su propio punto de vista».
        </Card.Text>
      </Card.Body>
    </SobreSerieCard>
  );
};

export default SobreSerie;
