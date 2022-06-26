import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/button";
import Menu from "../menuInicial"
import useAuth from "../../hooks/userAuth";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>
        <Menu />
      </C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
