import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image"
import moment from "moment";

import background from "../../public/static/images/bg-2.jpg"

import Button from "../components/button";
import ButtonLink from "../components/buttonLink";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Nav from "../layout/nav";
import SEO from "../components/seo";

class HistoryPage extends Component {
    constructor(props) {
        super(props);

        const days = props.data.allCollectionCsv.group;

        const start = moment(new Date(days[days.length - 1].nodes[0].date_added));

        this.state = {
            ...moment.duration(moment().diff(start))._data
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    componentDidMount() {
        const days = this.props.data.allCollectionCsv.group;
        const start = moment(new Date(days[days.length - 1].nodes[0].date_added));

        this.timer = setInterval(() => {
            const timeSinceStart = moment.duration(moment().diff(start))._data;
            this.setState({ ...timeSinceStart });
        }, 1000);
    }
    renderCards(cards) {
        return cards.map(card => {
            return (
                <Link to={`/${card.id}`} className="card" key={card.id}>
                    <Img
                        fluid={card.front_img.childImageSharp.fluid}
                        alt={card.first_name}
                    />
                </Link>
            );
        })
    }
    renderTimeline() {
        return this.props.data.allCollectionCsv.group.map(day => {
            return (
                <div className="day" key={day.nodes[0].date_added}>
                    <header>
                        <h2>{moment(new Date(day.nodes[0].date_added)).format('MMMM D, YYYY')}</h2>
                        <span className="cardNumber">{day.nodes.length} cards</span>
                    </header>
                    <div className="dayCards">
                        {this.renderCards(day.nodes)}
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div id="history">
                <SEO title="History" />
                <Header image={background}>
                    <div className="container-lg">
                        <Nav />
                        <div className="timeSince">
                            <div className="timeIncrement">
                                <h3>{`${(this.state.days / 10) >= 1 ? "" : 0}${this.state.days}`}</h3>
                                <span>Days</span>  
                            </div>
                            <div className="timeIncrement">
                                <h3>{`${(this.state.hours / 10) >= 1 ? "" : 0}${this.state.hours}`}</h3>
                                <span>Hours</span>  
                            </div>
                            <div className="timeIncrement">
                                <h3>{`${(this.state.minutes / 10) >= 1 ? "" : 0}${this.state.minutes}`}</h3>
                                <span>Minutes</span>  
                            </div>
                            <div className="timeIncrement seconds">
                                <h3>{`${(this.state.seconds / 10) >= 1 ? "" : 0}${this.state.seconds}`}</h3>
                                <span>Seconds</span>  
                            </div>
                        </div>

                        <h1>Since the collection started</h1>
                        <Button color="white">Recently added</Button>
                        <ButtonLink color="white" border={true} to="/1">What was the first card?</ButtonLink>
                    </div>
                </Header>

                <div className="timeline container-lg">
                    { this.renderTimeline() }
                </div>  
                <Footer />
            </div>
        )
    }
};

export default HistoryPage;

export const query = graphql`
    query MyQuery {
        allCollectionCsv {
            group(field: date_added) {
                nodes {
                    card_number
                    career_length
                    date_added
                    first_name
                    id
                    last_name
                    manufacturer
                    position
                    position_abbreviation
                    rookie
                    sport
                    team_location
                    team_mascot
                    year
                    front_img {
                        childImageSharp {
                            fluid(maxWidth: 250, maxHeight: 350) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;
