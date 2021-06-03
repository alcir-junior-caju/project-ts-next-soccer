import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Header from "../../components/Header/Index";
import api from "../../services/api";
import Breadcrumb from "../../components/Breadcrumb";
import Table from "../../components/Table";

type tableData = {
  posicao: number;
  pontos: number;
  time: {
    time_id: number;
    nome_popular: string;
    sigla: string;
    escudo: string;
  };
  jogos: number;
  vitorias: number;
  empates: number;
  derrotas: number;
  gols_pro: number;
  gols_contra: number;
  saldo_gols: number;
  aproveitamento: number;
  variacao_posicao: number;
  ultimos_jogos: Array<string>;
};

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
  },
  table: tableData[];
};


const Championship = ({ championship, table }: ChampionshipProps) => {
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
          <Flex ml={8} direction="column">
            <Box>
              <Text as="strong">Nome:</Text>
              <Text as="span" ml={2}>{championship.nome}</Text>
            </Box>
            <Box>
              <Text as="strong">Nome Popular:</Text>
              <Text as="span" ml={2}>{championship.nome_popular}</Text>
            </Box>
            <Box>
              <Text as="strong">Temporada:</Text>
              <Text as="span" ml={2}>{championship.edicao_atual.temporada}</Text>
            </Box>
            <Box>
              <Text as="strong">Região:</Text>
              <Text as="span" ml={2}>{championship.regiao}</Text>
            </Box>
            <Box>
              <Text as="strong">Rodada:</Text>
              <Text as="span" ml={2}>{championship.rodada_atual.nome} ({championship.rodada_atual.status})</Text>
            </Box>
            <Box>
              <Text as="strong">Status:</Text>
              <Text as="span" ml={2}>{championship.status}</Text>
            </Box>
            <Box>
              <Text as="strong">Tipo:</Text>
              <Text as="span" ml={2}>{championship.tipo}</Text>
            </Box>
          </Flex>
        </Flex>

        <Heading align="center" mb={6}>
          Tabela
        </Heading>
        <Table source={table} name={championship.nome} />
      </Container>
    </>
  );
};

export default Championship;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let championship = {};
  let table = [];
  const { slug } = params;
  const [id]: any = slug;

  await api.get(`/campeonatos/${id}`)
    .then(response => {
      championship = response.data
    });

  await api.get(`/campeonatos/${id}/tabela`)
    .then(response => {
      table.push(...response.data)
    });

  return {
    props: {
      championship,
      table
    }
  };
};
