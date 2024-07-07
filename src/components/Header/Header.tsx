import "./Header.scss";
import { AppBar, Box, Button, Container } from "@mui/material";
import logoSVG from "../../assets/gobrax 1.svg";

function Header() {
  return (
    <AppBar color="transparent" className="app-bar">
      <Container className="container">
        <Box>
          <Button color="inherit">Motoristas</Button>
          <Button color="inherit">Veículos</Button>
        </Box>

        <Box display="flex" justifyContent="center">
          <img className="image-logo" src={logoSVG} alt="Logomarca da Gobrax" loading="lazy" />
        </Box>

        <Box display="flex" justifyContent="flex-end">
          <Button color="primary" variant="contained">
            LinkedIn
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Header;
