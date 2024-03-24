"use client";

import styles from "../page.module.css"; 
import React, {Component } from 'react';
import Image from "next/image";


export default function Saved({ projects }) {
    return(
        <div className={styles.savedRow}>
            {projects.map((project, idx) => {
                    return (
                        <div className={styles.saved} id = {idx}>
                             <Image className={styles.savedImg} src={project.img} width={225} height={225} alt="Saved Image" />
                             <div className={styles.savedText}>
                                <h2>{project.tag}</h2>
                                <p>{project.title}</p>
                            </div>
                            <div className={styles.savedTextHover}>
                                <p>{project.about}</p>
                            </div>
                        </div>                       
                    )
            
            }
            )}
      </div>
    )
    }
