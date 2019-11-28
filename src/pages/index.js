import React from "react"
import { graphql } from 'gatsby';

import background from "../../public/static/images/bg-1.jpg"
import Button from "../components/button";
import ButtonLink from "../components/buttonLink";
import CollectionTable from "../components/collectionTable";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Nav from "../layout/nav";
import SEO from "../components/seo";

export default ({ data }) => (
    <div id="index">
        <SEO title="Home" />
        <Header image={background}>
            <Nav />
            <h1>Cards.<br />Lots of cards.</h1>
            <ButtonLink to="/history" color="white">What happened last week?</ButtonLink>
            <Button color="white" border={true}>View a random card</Button>
        </Header>
        <CollectionTable data={data.allCollectionCsv.nodes}/>
        <Footer />
    </div>
);

export const query = graphql`
query CollectionQuery {
    allCollectionCsv {
        nodes {
            year
            team_mascot
            team_location
            sport
            rookie
            position_abbreviation
            manufacturer
            last_name
            id
            first_name
            date_purchased
            card_number
        }
    }
}
`
