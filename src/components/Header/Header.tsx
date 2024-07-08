import "./Header.scss";
import { AppBar, Box, Button, Container } from "@mui/material";
import logoSVG from "../../assets/gobrax 1.svg";

import * as T from "./types";

function Header({ menuOptions }: T.HeaderProps) {
  return (
    <AppBar color="transparent" className="app-bar">
      <Container className="container">
        <Box>
          {menuOptions.map(({ label, onClick }) => (
            <Button key={label} color="inherit" onClick={onClick}>
              {label}
            </Button>
          ))}
        </Box>

        <Box display="flex" justifyContent="center">
          <img className="image-logo" src={logoSVG} alt="Logomarca da Gobrax" loading="lazy" />
        </Box>

        <Box display="flex" justifyContent="flex-end">
          <Button
            color="primary"
            variant="contained"
            href="https://www.linkedin.com/company/gobrax/"
          >
            LinkedIn
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Header;
