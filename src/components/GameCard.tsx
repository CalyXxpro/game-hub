import { Card, Heading, Image, CardBody, HStack } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PLatformIconList from "./PlatformIconList";
import CriticsScore from "./CriticsScore";
import getCroppedImage from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PLatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticsScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
