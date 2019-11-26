import React from "react"

import background from "../../public/static/images/bg-1.jpg"
import Button from "../components/button";
import ButtonLink from "../components/buttonLink";
import CollectionTable from "../components/collectionTable";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Nav from "../layout/nav";
import SEO from "../components/seo";

const IndexPage = () => (
    <div id="index">
        <SEO title="Home" />
        <Header image={background}>
            <Nav />
            <h1>Cards.<br />Lots of cards.</h1>
            <ButtonLink to="/history" color="white">What happened last week?</ButtonLink>
            <Button color="white" border={true}>View a random card</Button>
        </Header>
        <CollectionTable />
        <Footer />
    </div>
);

export default IndexPage
