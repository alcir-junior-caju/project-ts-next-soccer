import { Container } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Championships from "../components/Championships/Index";
import Header from "../components/Header/Index";
import api from "../services/api";

const Home = ({ championships }) => {
  return (
    <>
      <Header />
      <Container maxW="container.xl">
        <Championships championships={championships} />
      </Container>
    </>
  )
}

export default Home;

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
