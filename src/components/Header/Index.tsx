import { Container, Flex, useColorModeValue } from "@chakra-ui/react"
import ColorMode from "./ColorMode";
import Menu from "./Menu";
import TextLogo from "./TextLogo";

const dataMenu = [
  { label: 'Menu 1', link: '1' },
  { label: 'Menu 2', link: '2' },
  { label: 'Menu 3', link: '3' },
];

const Header = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.900');
  const color = useColorModeValue('gray.900', 'gray.200');

  return (
    <Flex
      as="header"
      py={4}
      mb={4}
      bg={bgColor}
      color={color}
      boxShadow="sm"
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Menu menu={dataMenu} />
          <TextLogo />
          <ColorMode />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
