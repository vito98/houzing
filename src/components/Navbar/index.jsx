import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Filter from "../Filter";
import { Button } from "../Generic/Button";
import { Container, Logo, Link, Section, Wrapper, Main } from "./style";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Logo /> <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate("/signin")} type="dark">
              Sign in
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
    </Container>
  );
};
