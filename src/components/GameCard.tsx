import { Card, Heading, Image, CardBody, Text, HStack } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PLatformIconList from "./PlatformIconList";
import CriticsScore from "./CriticsScore";
import getCroppedImage from "../hooks/image-url";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PLatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticsScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
