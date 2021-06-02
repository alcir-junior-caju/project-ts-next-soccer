import { Container, Heading } from "@chakra-ui/layout";
import { GetServerSideProps } from "next";
import Header from "../../components/Header/Index";
import ChampionshipsBox from "../../components/Championships/Index";
import api from "../../services/api";
import Breadcrumb from "../../components/Breadcrumb";

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Campeonatos', link: '/championships' },
];

const Championships = ({ championships }) => {
  return (
    <>
      <Header />
      <Container maxW="container.xl">
        <Heading align="center" mb={6}>Campeonatos</Heading>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <ChampionshipsBox championships={championships} />
      </Container>
    </>
  );
};

export default Championships;

export const getServerSideProps: GetServerSideProps = async () => {
  let championships = [];

  await api.get('/campeonatos')
    .then((response => {
      championships.push(...response.data);
    }));

  return {
    props: {
      championships
    }
  };
};
