import React, { Component } from "react";
import Img from "gatsby-image";

import ButtonLink from "../components/buttonLink";

class CardPopup extends Component {
    componentDidMount() {    
        document.body.style.overflow = 'hidden'; 
    }
    
    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }
    render() {
        return (
            <div className="popupBackground" onClick={this.props.onClick}>
                <div className="popup">
                    <Img
                        fluid={this.props.card.front_img.childImageSharp.fluid}
                        alt={this.props.card.first_name}
                    />
                    <ButtonLink to={`/${this.props.card.id}`} color="black">View this card</ButtonLink>
                </div>
            </div>
        )
    }
}

export default CardPopup;
