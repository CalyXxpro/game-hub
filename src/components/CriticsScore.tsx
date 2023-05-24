import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticsScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="5px">
      {score}
    </Badge>
  );
};

export default CriticsScore;
