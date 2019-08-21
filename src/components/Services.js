import React, { Component } from "react";
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
    state={
        services: [
            {
                icon:<FaCocktail/>,
                title:"free-cocktails",
                info: 'Enjoy Free complementary cocktails from our hotels'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: 'Our resorts have endless hiking routes so you can enjoy your explorations'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info: 'Travel with freedom with our Shuttle Van'
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: 'A nice cold beer will relax you on your warm sunny holiday'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>

        )
    }
}
