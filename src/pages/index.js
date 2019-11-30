import React, { Component } from "react"
import { graphql } from 'gatsby';

import background from "../../public/static/images/video-poster.png";
import backgroundVid from "../../public/static/videos/video-bg.mp4";
import poster from "../../public/static/images/bg-1.jpg";
import Button from "../components/button";
import ButtonLink from "../components/buttonLink";
import CardPopup from "../components/cardPopup";
import CollectionTable from "../components/collectionTable";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Nav from "../layout/nav";
import SEO from "../components/seo";


class IndexPage extends Component {
    constructor(props) {
        super(props);

        this.getRandomCard = this.getRandomCard.bind(this);
        this.hideRandomCard = this.hideRandomCard.bind(this);

        this.state = {
            randomCard: null
        };
    }
    getRandomCard() {
        const collection = this.props.data.allCollectionCsv.nodes;
        const randomIndex = Math.floor(Math.random() * collection.length);

        this.setState({ randomCard: collection[randomIndex] })
    }
    hideRandomCard() {
        this.setState({ randomCard: null });
    }
    renderRandomCard() {
        if (this.state.randomCard) {
            return <CardPopup card={this.state.randomCard} onClick={this.hideRandomCard} />
        }
    }
    render() {
        return (
            <div id="index">
                <SEO title="Home" />
                <Header video={backgroundVid} image={background} poster={poster}>
                    <div className="container-lg">
                        <Nav />
                        <h1>Cards.<br />Lots of cards.</h1>
                        <ButtonLink to="/history" color="white">What happened last week?</ButtonLink>
                        <Button color="white" border={true} onClick={this.getRandomCard}>Pick a random card</Button>
                    </div>
                </Header>
                <div className="container-lg">
                    <CollectionTable data={this.props.data.allCollectionCsv.nodes}/>
                </div>
                <Footer />
                {this.renderRandomCard()}
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
            front_img {
                childImageSharp {
                    fluid(maxWidth: 350) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
}
`
