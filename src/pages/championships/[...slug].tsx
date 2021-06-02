import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Header from "../../components/Header/Index";
import api from "../../services/api";
import Breadcrumb from "../../components/Breadcrumb";

interface ChampionshipProps {
  championship: {
    campeonato_id: number;
    edicao_atual: {
      temporada: string;
    };
    fase_atual: {
      fase_id: number;
    };
    logo: string;
    nome: string;
    nome_popular: string;
    regiao: string;
    rodada_atual: {
      nome: string;
      rodada: number;
      status: string;
    };
    slug: string;
    status: string;
    tipo: string;
  }
};


const Championship = ({ championship }: ChampionshipProps) => {
  const breadcrumbs = [
    { label: 'Home', link: '/', current: false },
    { label: 'Campeonatos', link: '/championships', current: false },
    {
      label: championship.nome_popular,
      link: `/championships/${championship.campeonato_id}/${championship.slug}`,
      current: true
    }
  ];

  return (
    <>
      <Header />
      <Container maxW="container.xl">
        <Heading align="center" mb={6}>
          {championship.nome}
        </Heading>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Flex my={16}>
          <Image src={championship.logo} alt={championship.nome_popular} boxSize="200px" />
          <Box pl={8}>
            <Box flex={1}>
              <Text as="strong">Temporada:</Text>
              <Text as="span" ml={2}>{championship.edicao_atual.temporada}</Text>
            </Box>
            <Box flex={1}>
              <Text as="strong">Temporada:</Text>
              <Text as="span" ml={2}>{championship.edicao_atual.temporada}</Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Championship;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let championship = {};
  const { slug } = params;
  const [id]: any = slug;

  await api.get(`/campeonatos/${id}`)
    .then(response => {
      championship = response.data
    });

  return {
    props: {
      championship
    }
  };
};
