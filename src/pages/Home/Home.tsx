import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import "./Home.scss";
import { Container } from "@mui/material";

function Home() {
  return (
    <Container className="home-container">
      <Header />

      <Grid />
    </Container>
  );
}

export default Home;
