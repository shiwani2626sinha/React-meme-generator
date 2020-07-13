import React from 'react';
import styles from './styles.module.css';
import {Meme }from '../Meme/Meme';
import {Switch, Route} from 'react-router-dom';
import { MemeGenerated } from '../MemeGenerated/MemeGenerated';

export const App = () => {
  return (
           <Switch>
             <Route exact path='/'>
               <Meme></Meme>
             </Route>
             <Route path = '/generated'>
               <MemeGenerated></MemeGenerated>
             </Route>

           </Switch>
  );
}


