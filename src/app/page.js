"use client";

import styles from "./page.module.css";
import SideBar from "./components/sidebar";
import Saved from "./components/saved";
import Repls from "./components/repls";
import Tags from "./components/tags";
import Filter from "./components/filter";

import { Component, useState } from "react";

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      projects: [
        {tag: "Cool Websites", title: "Website Inspiration", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  img: "/images/Saved_1.png"}, 
        {tag: "Cool Websites", title: "Website Inspiration", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  img: "/images/Saved_2.png"}, 
        {tag: "Cool Websites", title: "Website Inspiration", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  img: "/images/Saved_3.png"}, 
        {tag: "Cool Websites", title: "Website Inspiration", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  img: "/images/Saved_1.png"}, 
      ],

      orgRepls: [
        {author:"Ethan Huang", profile:"/headshots/1.jpg", title: "2023 Event Website", tags: ["frontend",], about: "Website Inspiration", img: "/images/Saved_1.png",}, 
        {author:"Dion Lewis", profile:"/headshots/1.jpg", title: "2024 Event Website", tags: ["frontend"], about: "TEDxCMU 2024 Website", img: "/images/Saved_2.png"}, 
        {author:"Aarnav Patel", profile:"/headshots/1.jpg", title: "Another Web3 Banger", tags:["web3"], about: "Website Inspiration", img: "/images/Saved_3.png"}, 
        {author:"Stanley Ip", profile:"/headshots/1.jpg", title: "Cool Websites", tags: ["AI"], about: "Website Inspiration", img: "/images/Saved_4.png"}, 
        {author:"Ethan Huang", profile:"/headshots/1.jpg",  title: "Cool Websites", tags: ["ML"], about: "Website Inspiration", img: "/images/Saved_1.png"}, 
        {author:"Dion Lewis", profile:"/headshots/1.jpg", title: "Cool Websites", tags: ["AI"], about: "Website Inspiration", img: "/images/Saved_1.png"}, 
        {author:"Aarnav Patel", profile:"/headshots/1.jpg", title: "Cool Websites", tags: ["ML"], about: "Website Inspiration", img: "/images/Saved_1.png"}, 
        {author:"Stanley Ip", profile:"/headshots/1.jpg", title: "Cool Websites", tags: ["AI"], about: "Website Inspiration", img: "/images/Saved_1.png"}, 
      ],

      repls: [
        {author:"Ethan Huang", profile:"/headshots/1.jpg", title: "2023 Event Website", tags: ["frontend",], about: "Website Inspiration", img: "/images/Saved_1.png",}, 
        {author:"Dion Lewis", profile:"/headshots/1.jpg", title: "2024 Event Website", tags: ["frontend"], about: "TEDxCMU 2024 Website", img: "/images/Saved_2.png"}, 
        {author:"Aarnav Patel", profile:"/headshots/1.jpg", title: "Another Web3 Banger", tags:["web3"], about: "Website Inspiration", img: "/images/Saved_3.png"}, 
        {author:"Stanley Ip", profile:"/headshots/1.jpg", title: "Cool Websites", tags: ["AI"], about: "Website Inspiration", img: "/images/Saved_4.png"}, 
        {author:"Ethan Huang", profile:"/headshots/1.jpg",  title: "Cool Websites", tags: ["ML"], about: "Website Inspiration", img: "/images/Saved_1.png"}, 
        {author:"Dion Lewis", profile:"/headshots/1.jpg", title: "Cool Websites", tags: ["AI"], about: "Website Inspiration", img: "/images/Saved_1.png"}, 
        {author:"Aarnav Patel", profile:"/headshots/1.jpg", title: "Cool Websites", tags: ["ML"], about: "Website Inspiration", img: "/images/Saved_1.png"}, 
        {author:"Stanley Ip", profile:"/headshots/1.jpg", title: "Cool Websites", tags: ["AI"], about: "Website Inspiration", img: "/images/Saved_1.png"}, 
      ],

      tags: [
        {tag: "frontend", pressed: false},
        {tag: "web3", pressed: false}, 
        {tag: "AI", pressed: false},  
        {tag: "ML", pressed: false},  
      ],

      clickedTags : [],

      filterClicked: false

    }
  }

  //for when filter is clicked
  clickFilter = () =>
  {
    this.setState({
     filterClicked: !this.state.filterClicked
    })
  }

  //onClick for tags
  clickTag = (idx, tag) =>
  {

    tag.pressed = !tag.pressed; 

    let clickedTags = [...this.state.clickedTags]; 

    //checking for membership of tag
    if (!this.state.clickedTags.includes(tag))
    {
      clickedTags = [...this.state.clickedTags, tag];
    }

    //if in clickedTags and false, remove 
    else
    {
      if (!tag.pressed)
      {
        let id = clickedTags.findIndex(temp => temp.tag === tag.tag);
        console.log("ID", id); 
        clickedTags.splice(id, 1); 
      }
    }

    let temp=[]; 
    let repls = this.state.orgRepls; 

    //search through repls for repls with matching tags in clickedTags
    for (var i = 0; i < repls.length; i++) {
      {
        let repl = repls[i]; 

        for(var j = 0; j < clickedTags.length; j++)
        {          
          if (repl.tags.includes(clickedTags[j].tag) && clickedTags[j].pressed)
          {
            temp.push(repl); 
          }
        }
      }
    }

    // Update the repls state with the filteredRepls array
    if (clickedTags.length == 0)
    {
      this.setState({
        repls: this.state.orgRepls,
        clickedTags: clickedTags, 
      })
    }
    else
    {
      this.setState({
        repls: temp,
        clickedTags: clickedTags, 
      })
    }

  }


  render() {
    return (
      <>
      <main className={styles.main}>
          <div className={styles.sidebar}>
            <SideBar/>
          </div>
          <div className={styles.right}>
            <div className={styles.search}>
              <input className={styles.searchbar} defaultValue="Search & run commands"/>
            </div>
            <div className={styles.dashboard}>
              <div className={styles.header}>
                <Saved projects={this.state.projects}/>
              </div>
              <div className={styles.recc}>
                <div className={styles.tags}>
                  <Tags repls={this.state.repls} tags={this.state.tags} clickTag={this.clickTag}/>
                </div>
                <div className={styles.repls}>
                  {this.state.filterClicked && <Filter/>}
                  <Repls repls={this.state.repls} clickFilter={this.clickFilter}/>
                </div>
              </div>
            </div>
          </div>
      </main>
       </>
    );
  }
}

export default Home; 