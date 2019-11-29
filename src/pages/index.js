import React, { Component } from "react"
import { graphql } from 'gatsby';

import background from "../../public/static/images/bg-1.jpg"
import Button from "../components/button";
import ButtonLink from "../components/buttonLink";
import CollectionTable from "../components/collectionTable";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Nav from "../layout/nav";
import SEO from "../components/seo";


class IndexPage extends Component {
    constructor(props) {
        super(props);

        this.getRandomCard = this.getRandomCard.bind(this);
    }
    getRandomCard() {
        const collection = this.props.data.allCollectionCsv.nodes;

        const randomIndex = Math.floor(Math.random() * collection.length);

        console.log(collection[randomIndex]);
    }
    render() {
        return (
            <div id="index">
                <SEO title="Home" />
                <Header image={background}>
                    <div className="container-lg">
                        <Nav />
                        <h1>Cards.<br />Lots of cards.</h1>
                        <ButtonLink to="/history" color="white">What happened last week?</ButtonLink>
                        <Button color="white" border={true} onClick={this.getRandomCard}>View a random card</Button>
                    </div>
                </Header>
                <div className="container-lg">
                    <CollectionTable data={this.props.data.allCollectionCsv.nodes}/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default IndexPage;

export const query = graphql`
query CollectionQuery {
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
