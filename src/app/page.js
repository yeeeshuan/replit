"use client";

import styles from "./page.module.css";
import SideBar from "./components/sidebar";
import Saved from "./components/saved";
import Repls from "./components/repls";
import Tags from "./components/tags";
import Filter from "./components/filter";
import DisplaySaved from "./components/displaySaved";

import { Component, useState } from "react";
import displaySaved from "./components/displaySaved";

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      projects: [
        {drag: false, tag: "Cool Websites", title: "Website Inspiration", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  img: "/images/Saved_1.png"}, 
        {drag: false, tag: "Web3 Projects", title: "Website Inspiration", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  img: "/images/Saved_2.png"}, 
        {drag: false, tag: "AI Inspo", title: "Website Inspiration", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  img: "/images/Saved_3.png"}, 
        {drag: false, tag: "ML Docs", title: "Website Inspiration", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  img: "/images/Saved_1.png"}, 
      ],

      orgRepls: [
        {author:"Ethan Huang", profile:"/headshots/1.jpg", title: "2023 Event Website", tags: ["frontend",], about: "Website Inspiration", img: "/images/Saved_1.png", drag: false}, 
        {author:"Dion Lewis", profile:"/headshots/3.png", title: "2024 Event Website", tags: ["frontend"], about: "TEDxCMU 2024 Website", img: "/images/Saved_2.png", drag: false}, 
        {author:"Aarnav Patel", profile:"/headshots/2.png", title: "Another Web3 Banger", tags:["web3"], about: "Website Inspiration", img: "/images/Saved_3.png", drag: false}, 
        {author:"Stanley Ip", profile:"/headshots/4.png", title: "Cool Websites", tags: ["AI"], about: "Javascript AI Exploration", img: "/images/Saved_5.png", drag: false}, 
        {author:"Ethan Huang", profile:"/headshots/1.jpg",  title: "ML5.js Explorations", tags: ["ML"], about: "A deep dive into Ml5.js handpose, facemesh, and more", img: "/images/Saved_6.png", drag: false}, 
        {author:"Dion Lewis", profile:"/headshots/3.png", title: "AI Chatbot", tags: ["AI"], about: "Using ChatGPT API to create an interview chatbot", img: "/images/Saved_7.png", drag: false}, 
        {author:"Aarnav Patel", profile:"/headshots/2.png", title: "WebGL Data Visualization Project", tags: ["frontend"], about: "WebGL intergration to Next.js", img: "/images/Saved_8.png", drag: false}, 
      ],

      repls: [
        {author:"Ethan Huang", profile:"/headshots/1.jpg", title: "2023 Event Website", tags: ["frontend",], about: "Website Inspiration", img: "/images/Saved_1.png", drag: false}, 
        {author:"Dion Lewis", profile:"/headshots/3.png", title: "2024 Event Website", tags: ["frontend"], about: "TEDxCMU 2024 Website", img: "/images/Saved_2.png", drag: false}, 
        {author:"Aarnav Patel", profile:"/headshots/2.png", title: "Another Web3 Banger", tags:["web3"], about: "Website Inspiration", img: "/images/Saved_3.png", drag: false}, 
        {author:"Stanley Ip", profile:"/headshots/4.png", title: "Cool Websites", tags: ["AI"], about: "Javascript AI Exploration", img: "/images/Saved_5.png", drag: false}, 
        {author:"Ethan Huang", profile:"/headshots/1.jpg",  title: "ML5.js Explorations", tags: ["ML"], about: "A deep dive into Ml5.js handpose, facemesh, and more", img: "/images/Saved_6.png", drag: false}, 
        {author:"Dion Lewis", profile:"/headshots/3.png", title: "AI Chatbot", tags: ["AI"], about: "Using ChatGPT API to create an interview chatbot", img: "/images/Saved_7.png", drag: false}, 
        {author:"Aarnav Patel", profile:"/headshots/2.png", title: "WebGL Data Visualization Project", tags: ["frontend"], about: "WebGL intergration to Next.js", img: "/images/Saved_8.png", drag: false}, 
      ],

      saved: [[],[],[],[]],

      tags: [
        {tag: "frontend", pressed: false},
        {tag: "web3", pressed: false}, 
        {tag: "AI", pressed: false},  
        {tag: "ML", pressed: false},  
      ],

      clickedTags: [],

      filterClicked: false, 

      draggedTo: -1, 

      displaySaved: -1,

    }
  }

  setDraggedTo = (idx) => {
    this.setState({draggedTo: idx });
  }

  setDisplaySaved = (idx) => {
    this.setState({displaySaved: idx });
  }

  // Function to set repl.drag to true
  onDrag = (repl, idx) => {
    const updatedRepls = this.state.repls.map(item =>
      item === repl ? { ...item, drag: true } : item
    );
    this.setState({ repls: updatedRepls, dragged: idx });
  }

  // Function to set repl.drag to false
  offDrag = (repl) => {
    const updatedRepls = this.state.repls.map(item =>
      item === repl ? { ...item, drag: false } : item
    );
    this.setState({ repls: updatedRepls });
  }

  addSaved = (replId, savedId) => {
    console.log(replId, savedId); 
    console.log("addSaved"); 
    
    // Create a copy of the saved array
    const temp = [...this.state.saved]; 
    console.log("temp", temp); 
    
    // Add the element from the repls array to the saved array at the specified index
    if (!temp[savedId].includes(this.state.repls[replId]))
    {
      temp[savedId] = [...temp[savedId], this.state.repls[replId]]; 
      console.log("temp after", temp); 
      this.setState({
          saved: temp,
      })
    }
  // }
    // Log the updated saved state after setState is completed
    console.log(this.state.saved);
    
};

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

  clickBack = () =>{
    this.setState({
      displaySaved: -1
    })
  }


  render() {
    return (
      <>
      <main className={styles.main}>
          <SideBar/>
          <div className={styles.right}>
            <div className={styles.search}>
              <input className={styles.searchbar} defaultValue="Search & run commands"/>
            </div>
            <div className={styles.dashboard}>
              <div className={styles.header}>
                <Saved projects={this.state.projects} repls={this.state.repls} dragged={this.state.draggedTo} setDraggedTo={this.setDraggedTo} setDisplaySaved={this.setDisplaySaved} onEnter={this.addSaved}/>
              </div>

              {this.state.displaySaved == -1 && (
                <div className={styles.recc}>
                  <div className={styles.tags}>
                    <Tags repls={this.state.repls} tags={this.state.tags} clickTag={this.clickTag}/>
                  </div>
                  <div className={styles.repls}>
                    {this.state.filterClicked && <Filter/>}
                    <Repls repls={this.state.repls} clickFilter={this.clickFilter} onDrag={this.onDrag} offDrag={this.offDrag}/>
                  </div>
                </div>
              )
              }

              {this.state.displaySaved != -1 && (
                <div className={styles.displaySaved}>
                  <DisplaySaved repls={this.state.saved[this.state.displaySaved]} clickBack={this.clickBack}/>
                </div>
              )
              }

            </div>
          </div>
      </main>
       </>
    );
  }
}

export default Home; 