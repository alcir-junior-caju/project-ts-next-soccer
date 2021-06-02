import { Container, Heading } from "@chakra-ui/layout";
import { GetServerSideProps } from "next";
import Header from "../../components/Header/Index";
import ChampionshipsBox from "../../components/Championships/Index";
import api from "../../services/api";

const Championships = ({ championships }) => {
  console.log(championships);

  return (
    <>
      <Header />
      <Container maxW="container.xl">
        <Heading align="center" mb={6}>Campeonatos</Heading>
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
