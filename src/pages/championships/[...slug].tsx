import { Container } from "@chakra-ui/layout";
import { GetServerSideProps } from "next";
import Header from "../../components/Header/Index";
import api from "../../services/api";

const breadcrumbs = [
  { label: 'Home', link: '/', current: false },
  { label: 'Campeonatos', link: '/championships', current: false },
];

const Championship = ({ championship }) => {
  console.log(championship);

  return (
    <>
      <Header />
      <Container maxW="container.xl">
        <p>championship</p>
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
