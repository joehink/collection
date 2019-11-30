import React from "react";

import background from "../../public/static/images/bg-1.jpg";
import coinslashImg from "../../public/static/images/coinslash.jpg";
import normImg from "../../public/static/images/norm.jpg";
import giffordImg from "../../public/static/images/gifford.jpg";

import Footer from "../layout/footer";
import Header from "../layout/header";
import Nav from "../layout/nav";
import SEO from "../components/seo";

export default () => (
    <div id="about">
        <SEO title="About" />
        <Header image={background}>
            <div className="container-lg">
                <Nav />
            </div>
        </Header>
        <div className="container-md aboutContent">
            <h1>Rookies to Legends</h1>
            <h2>The story of my first sports card collection</h2>
            
            <div className="paragraph">
                My dad was a collector. He collected coins, football cards, board games, 
                and we had a lot of DVDs. I don’t know if you can really count that as a 
                collection but we had a lot of them. DVDs, Blu Rays, and even one HD DVD, 
                but anyway… My first collection was a low-budget spinoff of my dad’s coin 
                collection. He seeded me some 50 cent pieces and wheat pennies and started 
                me on my way. That collection didn’t last long however as it soon got 
                replaced by another.
            </div>
            <div className="paragraph">
                In 2003 I discovered NFL football; my first true love. Lucky for me, the NFL 
                allowed a few companies to sell little paper rectangles adorned with pictures of 
                all my favorite players that I had seen on TV. Collecting those rectangles, also 
                known as trading cards, quickly became an all-consuming obsession.
            </div>
            <figure className="banner">
                <img src={normImg} alt="Me with former NFL offensive lineman Norm Evans"/>
                <figcaption>Me with former NFL offensive lineman Norm Evans</figcaption>
            </figure>
            <div className="paragraph">
                I was a football fiend. As the NFL Network played in the background, I would read 
                books, look up player stats, memorize names, numbers, records, absolutely anything 
                I could find. I even had a computer program called “Action! PC Football” that allowed 
                me to simulate games between teams from any year and add players from any era to 
                those teams as free agents.
            </div>
            <div className="paragraph">
                <figure className="right">
                    <img src={coinslashImg} alt="The Stamp and Coin Place in Mount Vernon, WA" />
                    <figcaption>The Stamp and Coin Place in Mount Vernon, WA</figcaption>
                </figure>
                As a result of my immersion into football history, I became fixated on the legends 
                of the NFL. In my mind, no current player could compete with the stats, status, or 
                fame of the greats that came before them. So when my dad, sister, and me would make 
                our weekly trip to “The Stamp and Coin Place” (commonly referred to by us as “Coin 
                Slash Card Shop” or “Coin Slash”) in Mount Vernon, WA, I would run straight to the 
                bins filled with used cards hoping to find a gem. 
            </div>
            <div className="paragraph">
                <figure className="left">
                    <img src={giffordImg} alt="1955 Frank Gifford Bowman" />
                    <figcaption>My 1955 Frank Gifford Bowman</figcaption>
                </figure>
                I was always given a spending budget of $2, which when searching for valuable and 
                rare collectibles, really limits the possibilities. So to compensate, instead of 
                finding Hall of Famer’s rookie cards in mint condition, I would find Hall of Famer’s 
                cards from the middle of their career and tell myself they were in mint condition 
                when in reality they were probably “fair” or worse.
            </div>
            <div className="paragraph">
                Now looking back, my collection holds a lot of sentimental value but certainly was 
                not the lucrative investment choice I once believed it to be. As it turns out, a 
                battered and beaten Frank Gifford Bowman from 1955 and a 1968 Joe Namath Topps used 
                as a coloring book by a bored baby boomer on a long road trip are not considered 
                highly collectible. 
            </div>
            <div className="paragraph">
                On the bright side, a few “new” cards that I happened to pick up during my years of 
                collecting have become sought-after pieces of sports memorabilia. Among these are a 
                Tom Brady Bowman rookie card from 2000 and a Mike Trout Bowman rookie card from 2012 
                (one of the few baseball cards in my collection).
            </div>
            <div className="paragraph">
                These two relics have inspired me to get back into my old hobby, but this time I plan 
                to put more of an emphasis on the up-and-comers rather than the distinguished greats. 
                So please join me in tracking, logging, and analyzing the collection as it grows. And 
                hopefully, we will share in the joy of watching a few rookies become legends.
            </div>
            <div className="paragraph">Thanks,<br />Joe Hinkley</div>
        </div>
        <Footer />
    </div>
);
