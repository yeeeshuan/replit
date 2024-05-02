import React, { Component } from 'react';
import Image from "next/image";
import styles from "../page.module.css"; 

class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dragEnter: false,
        };
    }

    handleDragEnter = (idx, event) => {
        event.preventDefault();
        console.log(idx); 

        let repls = this.props.repls; 
        let replId = -1; 

        for (var i = 0; i < repls.length; i++)
        {
            console.log(repls[i]); 
            if (repls[i].drag)
            {
                replId = i; 
            }
        }

        console.log("entered");
        this.props.onEnter(replId, idx);
        this.props.setDraggedTo(idx); 
        this.setState({ dragEnter: true });
    };
    
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState({ dragEnter: false });
    };

    render() {
        return (
            <div className={styles.savedRow}>
                {this.props.projects.map((project, idx) => (
                    <div
                        key={idx}
                        className={styles.saved}
                        id={idx}
                        onDragEnter={(event) => this.handleDragEnter(idx, event)}
                        onDragOver={(event) => event.preventDefault()}
                        onDragLeave={(event)=>this.handleDragLeave(event)}
                        onClick = {()=>this.props.setDisplaySaved(idx)}
                        style={{ 
                            // backgroundColor: (this.state.dragEnter && idx === this.props.dragged)? '#4E5569': '#2B3245'      
                            border:  (this.state.dragEnter && idx === this.props.dragged)? '3px #F26207 solid' : '1px #4E5569 solid',
                        }}
                    >
                        <Image className={styles.savedImg} src={project.img} width={225} height={225} style={{borderRadius:"6%"}} alt="Saved Image" />
                        <div className={styles.savedText}>
                            <h2>{project.tag}</h2>
                            <p>{project.title}</p>
                        </div>
                        <div className={styles.savedTextHover}>
                            <p>{project.about}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Saved;
