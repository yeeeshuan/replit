"use client";

import styles from "../page.module.css"; 
import React, {Component } from 'react';
import Image from "next/image";


class Filter extends Component{
    constructor(props){
        super(props);
    }
    render(){
    return(
        <div className={styles.filterPopup}>
            <div className={styles.search}>
                <input className={styles.searchbarSmall} defaultValue="Search & run commands"/>
            </div>
            <div className={styles.filterOptions}>
                <button className={styles.filterButton}><p>Language</p></button> 
                <button className={styles.filterButton}><p>Complexity</p></button> 
                <button className={styles.filterButton}><p>Time</p></button> 
                <button className={styles.filterButton}><p>People</p></button> 
            </div>
        </div>
    )
    }
}

export default Filter; 