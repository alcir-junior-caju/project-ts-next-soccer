import { Container } from "@chakra-ui/react";
import Championships from "../components/Championships/Index";
import Header from "../components/Header/Index";

const Home = () => {
  return (
    <>
      <Header />
      <Container maxW="container.xl">
        <Championships />
      </Container>
    </>
  )
}

export default Home;
