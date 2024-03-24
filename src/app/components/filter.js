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
          <p>Filter</p>
        </div>
    )
    }
}

export default Filter; 