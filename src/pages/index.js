import React from "react"

import Footer from "../layout/footer";
import Nav from "../layout/nav";
import SEO from "../components/seo"

const IndexPage = () => (
    <main>
        <SEO title="Home" />
        <Nav />
        <Footer />
    </main>
);

export default IndexPage
