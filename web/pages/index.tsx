import React from "react";
import { Header, Icon, Container, Button } from "semantic-ui-react";
import Link from "next/link";
const HomePage = () => {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Header as="h2" textAlign="center" icon>
        <Icon circular name="world" />
        <Header.Content>Law mockups</Header.Content>
        <Link href="/mockups" as="/mockups">
          <Button primary>GO</Button>
        </Link>
      </Header>
    </Container>
  );
};

export default HomePage;
