import { Box, ListItem, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="20px">
      <Box display="flex" flexDir="row" justifyContent="space-between">
        <SkeletonCircle size="35px" />
        <SkeletonText
          noOfLines={1}
          skeletonHeight="15px"
          width="125px"
          paddingX="10px"
          paddingY="5px"
        />
      </Box>
    </ListItem>
  );
};

export default GenreListSkeleton;
