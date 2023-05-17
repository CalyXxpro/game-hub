import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaLinux,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiIos, SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { color } from "framer-motion";

interface Props {
  platforms: Platform[];
}

const PLatformIconList = ({ platforms }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    linux: FaLinux,
    apple: FaApple,
    iphone: MdPhoneIphone,
    android: FaAndroid,
    ios: SiIos,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platforms) => (
        <Icon as={IconMap[platforms.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PLatformIconList;
