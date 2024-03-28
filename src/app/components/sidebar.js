"use client";

import styles from "../page.module.css"; 
import React, {Component } from 'react';


class SideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects:[
                {page: "Create"}, 
                {page: "Power Up"},  
                {page: "Home"},
                {page: "Templates"}, 
                {page: "My Repls"},  
                {page: "My Cycles"},  
                {page: "Community"}, 
            ]
        }
    }
    render(){
    return(
        <div className={styles.sidebar}>
            <div className={styles.username}><p>@username</p></div>
            {this.state.projects.map((project, idx) => {
                if (idx == 0)
                {
                    return (
                        <div className={styles.create}>
                            <p>{project.page}</p>
                        </div>
                        
                    )
                }
                if (idx == 1)
                {
                    return (
                        <div className={styles.powerUp}>
                            <p>{project.page}</p>
                        </div>
                        
                    )
                }
                else
                {
                    return (
                        <div className={styles.page}>
                            <p>{project.page}</p>
                        </div>
                        
                    )
                }
            }
            )}
      </div>
    )
    }
}

export default SideBar;