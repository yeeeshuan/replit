"use client";

import styles from "../page.module.css"; 
import React, {Component } from 'react';


class Tags extends Component{
    constructor(props){
        super(props);
        this.state = {
            tags: props.tags,
        }
    }
    render(){
    return(
        <>
        <p style={{marginBottom:"16px"}}>YOUR TAGS</p>
        <div>
            {this.state.tags.map((tag, idx) => {
                if (!tag.pressed)
                {
                    return (
                        <>
                        <div className={styles.tag} key={idx} onClick={() => this.props.clickTag(idx, tag)}>
                            <p>#{tag.tag}</p>
                        </div>
                        </>
                        
                    )         
                }
                else
                {
                    return (
                        <>
                        <div className={styles.tagPressed} key={idx} onClick={() => this.props.clickTag(idx, tag)}>
                            <p>#{tag.tag}</p>
                        </div>
                        </>
                        
                    )         
                }
            }
            )}
      </div>
      </>
    )
    }
}

export default Tags; 