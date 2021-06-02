import { Badge, Box, Image, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";

type Championship = {
  campeonato_id: number;
  logo: string;
  nome: string;
  nome_popular: string;
  rodada_atual: {
    rodada: number;
    nome: string;
  },
  slug: string;
  status: string;
};

interface ChampionshipsProps {
  championships: Championship[];
};

const Championships = ({ championships }: ChampionshipsProps) => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const color = useColorModeValue('gray.900', 'gray.200');

  return (
    <SimpleGrid minChildWidth="auto" spacing={20}>
      {championships.map((championship => (
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg={bgColor}
          color={color}
          key={championship.campeonato_id}
        >
          <Image src={championship.logo} alt={championship.nome_popular} />
          <Box p={6}>
            <Box d="flex" alignItems="baseline">
              <Badge variant="outline" borderRadius="full" px={2} colorScheme="teal">
                {championship.rodada_atual.nome}
              </Badge>
            </Box>
            <Text
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              mt={2}
            >
              {championship.nome}
            </Text>
          </Box>
        </Box>
      )))}
    </SimpleGrid>
  );
};

export default Championships;
