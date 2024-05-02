"use client";

import styles from "../page.module.css"; 
import React, {Component } from 'react';
import Image from "next/image";

class displaySaved extends Component{
    constructor(props){
        super(props);
    }

    render(){
    return(
        <div className={styles.replRow}>
            <div className={styles.savedRow}>
                <div onClick={()=>this.props.clickBack()}>
                    <div className={styles.back}>
                        <p>BACK</p>
                    </div>
                </div>
                <div className={styles.filtering}>
                    <button className={styles.filter}><p>Filter</p></button> 
                </div>
            </div>
            {this.props.repls.map((repl, idx) => {
                    return (
                        <div>
                            <>
                                <div className={styles.about}> 
                                    <div>
                                        <Image style={{marginRight:"8px", borderRadius: "50%"}} width={24} height={24} borderRadius={48} src={repl.profile} alt="Profile Image"/> 
                                    </div>
                                        <p><a>{repl.author}</a> published a Repl</p>
                                </div>
                                <div id = {idx} className={styles.repl}>
                                    <Image style={{borderRadius: "5%"}} width={84} height={84} borderRadius={16} src={repl.img} alt="Repl Image"/>
                                    <div className={styles.replText}> 
                                        <h2>{repl.title}</h2>
                                        <p>{repl.about}</p>
                                    </div>
                                </div>  
                            </>
                        </div>                     
                    )
                }              
            )}
      </div>
    )
    }
}

export default displaySaved; 