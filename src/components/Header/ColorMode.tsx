import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Icon, IconButton, useColorMode } from "@chakra-ui/react";

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Change Theme"
      fontSize={20}
      variant="unstyled"
      icon={<Icon as={colorMode === 'light' ? MoonIcon : SunIcon} />}
      onClick={toggleColorMode}
    />
  );
};

export default ColorMode;
