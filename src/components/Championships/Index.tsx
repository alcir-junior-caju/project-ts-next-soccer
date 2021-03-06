import { Badge, Box, Image, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import Link from 'next/link';

type Championship = {
  campeonato_id: number;
  logo: string;
  nome: string;
  nome_popular: string;
  rodada_atual: {
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
          <Link href={`/championships/${championship.campeonato_id}/${championship.slug}`}>
            <a>
              <Image src={championship.logo} alt={championship.nome_popular} p={2} mx="auto" />
              <Box p={6}>
                <Box d="flex" alignItems="baseline">
                  {championship.rodada_atual?.nome && (
                    <Badge variant="outline" borderRadius="full" px={2} mr={2} colorScheme="teal">
                      {championship.rodada_atual?.nome}
                    </Badge>
                  )}
                  <Badge variant="outline" borderRadius="full" px={2} colorScheme="pink">
                    {championship.status}
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
            </a>
          </Link>
        </Box>
      )))}
    </SimpleGrid>
  );
};

export default Championships;
