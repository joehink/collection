import React from "react";

import background from "../../public/static/images/bg-3.jpg";

import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from "recharts";
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
                <h3>{data.collectionCount.totalCount}</h3>
                <h1>Cards in the collection</h1>
                <Button color="white">More collection data</Button>
                <ButtonLink color="white" border={true} to="/about">About the collection</ButtonLink>
            </div>
        </Header>
        <div className="charts container-lg">
            <div className="chart-container">
                <h4>Cards added per day</h4>
                <div className="chart">
                    <ResponsiveContainer>
                        <BarChart data={data.cardsPerDay.group}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="fieldValue" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="totalCount" name="Cards" fill="#3FAA6C" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            
            <div className="chart-container">
                <h4>Cards per team</h4>
                <div className="chart">
                    <ResponsiveContainer>
                        <BarChart data={data.cardsPerTeam.group.sort((a, b) => b.totalCount - a.totalCount).slice(0,10)}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="fieldValue" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="totalCount" name="Cards" fill="#3FAA6C" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            
            <div className="chart-container">
                <h4>Cards per player</h4>
                <div className="chart">
                    <ResponsiveContainer>
                        <BarChart data={data.cardsPerPlayer.group.sort((a, b) => b.totalCount - a.totalCount).slice(0,10)}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="fieldValue" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="totalCount" name="Cards" fill="#3FAA6C" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export const query = graphql`
    query {
        cardsPerDay: allCollectionCsv(sort: {fields: date_added, order: ASC}) {
            group(field: date_added) {
                totalCount
                fieldValue
            }
        }
        cardsPerTeam: allCollectionCsv(sort: {fields: team_mascot, order: ASC}) {
            group(field: team_mascot) {
                totalCount
                fieldValue
            }
        }
        cardsPerPlayer: allCollectionCsv(sort: {fields: full_name, order: ASC}) {
            group(field: full_name) {
                totalCount
                fieldValue
            }
        }
        collectionCount: allCollectionCsv {
            totalCount
        }
    }
`