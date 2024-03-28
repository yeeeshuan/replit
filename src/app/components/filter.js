"use client";

import styles from "../page.module.css"; 
import React, {Component } from 'react';
import Image from "next/image";


class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: -1
        }
    }

    setClicked(idx){
        this.setState({clicked:idx}); 
    }
    render(){
    return(
        <div className={styles.filterPopup}>
            <div className={styles.search}>
                <input className={styles.searchbarSmall} defaultValue="Search & run commands"/>
            </div>
            <div className={styles.filterOptions}>
                <button className={styles.filterButton} onClick={()=>this.setClicked(0)}><p>Language</p></button> 
                <button className={styles.filterButton} onClick={()=>this.setClicked(1)}><p>Complexity</p></button> 
                <button className={styles.filterButton} onClick={()=>this.setClicked(2)}><p>Time</p></button> 
                <button className={styles.filterButton} onClick={()=>this.setClicked(3)}><p>People</p></button> 
            </div>

            {this.state.clicked===0 && (
                <div>
                    <p>Language</p>
                </div>
            )}
            {this.state.clicked===1 && (
                <div>
                    <p>Complexity</p>
                </div>
            )}  
            {this.state.clicked===2 && (
                <div>
                    <p>Time</p>
                </div>
            )}  
            {this.state.clicked===3 && (
                <div>
                    <p>People</p>
                </div>
            )}  
        </div>
    )
    }
}

export default Filter; 