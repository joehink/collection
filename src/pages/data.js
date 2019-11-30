import React from "react";

import background from "../../public/static/images/bg-3.jpg";

import Button from "../components/button";
import ButtonLink from "../components/buttonLink";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Nav from "../layout/nav";
import SEO from "../components/seo";

export default ({ data }) => (
    <div id="data">
        <SEO title="Data" />
        <Header image={background}>
            <div className="container-lg">
                <Nav />
                <h3>{data.allCollectionCsv.nodes.length}</h3>
                <h1>Cards in the collection</h1>
                <Button color="white">More collection data</Button>
                <ButtonLink color="white" border={true} to="/about">About the collection</ButtonLink>
            </div>
        </Header>
        <Footer />
    </div>
);

export const query = graphql`
    query CollectionDataQuery {
        allCollectionCsv {
            nodes {
                year
                team_mascot
                team_location
                sport
                rookie
                position
                position_abbreviation
                manufacturer
                last_name
                id
                first_name
                date_added
                card_number
            }
        }
    }
`