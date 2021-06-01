import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, Menu as MenuChakra, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

type MenuData = {
  label: string;
  link: string;
};

interface MenuProps {
  menu: MenuData[];
};

const Menu = ({ menu }: MenuProps) => {
  return (
    <MenuChakra>
      <MenuButton
        as={IconButton}
        aria-label="Menu"
        fontSize={20}
        icon={<HamburgerIcon />}
        variant="unstyled"
      />
      <MenuList>
        {menu.map(({ label, link }) => (
          <MenuItem key={link}>{label}</MenuItem>
        ))}
      </MenuList>
    </MenuChakra>
  );
};

export default Menu;
