import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}

const SortSelector = ({ selectedSortOrder, onSelectSortOrder }: Props) => {
  const selectOrder = [
    { value: "", name: "Relevance" },
    { value: "-created", name: "Date Added" },
    { value: "name", name: "Name" },
    { value: "-released", name: "Release Date" },
    { value: "-metacritic", name: "Popularity" },
    { value: "-rating", name: "Average Rating" },
  ];

  const currentSortOrder = selectOrder.find(
    (sortOrder) => sortOrder.value === selectedSortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by :{" "}
        {currentSortOrder?.value ? currentSortOrder.name : "Relevance"}
      </MenuButton>
      <MenuList>
        {selectOrder.map((sortOrder) => (
          <MenuItem
            key={sortOrder.value}
            onClick={() => onSelectSortOrder(sortOrder.value)}
          >
            {sortOrder.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
