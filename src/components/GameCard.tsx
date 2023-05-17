import { Card, Heading, Image, CardBody, Text } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PLatformIconList from "./PlatformIconList";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PLatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
