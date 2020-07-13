import React ,{useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import styles from './styles.module.css';
import {useClipboard} from 'use-clipboard-copy';


export const MemeGenerated = () =>{
 
    const[copied, setCopied] = useState(false);

    const clipboard = useClipboard();
    const history = useHistory();
    const location = useLocation();
    const url = new URLSearchParams(location.search)
    .get('url');


   const copyLink = () => {
       clipboard.copy(url);
       setCopied(true);
   } 
    return(
        <div className="container">
            <button onClick={() =>history.push('/')}
             className={styles.home}>
                 generate more memes
             </button>
             <button onClick={copyLink} className ={styles.copy}>
                 {copied ? 'Link copid!': 'Copy link'}
             </button>
            {url && <img src = {url}/>}
        </div>
        );
};