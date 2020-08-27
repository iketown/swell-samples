import React from "react";
import {
  List,
  Grid,
  Button,
  Segment,
  Header,
  Container,
} from "semantic-ui-react";
import { GetServerSideProps } from "next";
import allSitesQ from "@queries/allSitesQuery";
import client from "../../client";
import JView from "@utils/JView";
import Link from "next/link";
import moment from "moment";
const MockupsHome = (props) => {
  console.log("props", props);
  return (
    <Container>
      <Header content="Web Sites" as="h1" textAlign="center" />
      <Grid columns={2} stackable>
        <Grid.Column>
          <Segment>
            <Header content="BleyEvans" as="h3" color="grey" />
            <List>
              {props.sites?.map(
                ({ clientName, template, slug, _updatedAt }, index) => {
                  return (
                    <Link
                      href="/mockups/[slug]"
                      as={`/mockups/${slug.current}`}
                      key={index}
                    >
                      <List.Item>
                        <List.Icon name="law" verticalAlign="middle" />
                        <List.Content>
                          <List.Header as="a">{clientName}</List.Header>
                          <List.Description as="a">
                            {moment(_updatedAt).fromNow()}
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </Link>
                  );
                }
              )}
            </List>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Header content="...other templates" as="h3" color="grey" />
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const sites = await client.fetch(allSitesQ);
  return { props: { sites } };
};

export default MockupsHome;
