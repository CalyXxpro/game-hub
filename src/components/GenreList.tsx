import React from "react";
import useData from "../hooks/useData";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && null}
      {isLoading && <Spinner />}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="10px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={genre.image_background}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

{
  /* {isLoading && (
        <>
          <List>
            {skeleton.map((skeleton) => (
              <GenreListSkeleton key={skeleton} />
            ))}
          </List>
        </>
      )} */
}
