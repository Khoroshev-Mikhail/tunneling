import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import {getRingsByDate, getAllDates, checkArrays} from './redux/store';

let reRenderEntireTree = (state)=>{
  debugger
  ReactDOM.render(
    <React.StrictMode>
      <App 
        state={state}
        allDate={getAllDates()} 
        getRingsByDate={getRingsByDate} 
        checkArrays={checkArrays} 
        dispatch={store.dispatch.bind(store)}
        //getPump={store.getPump.bind(store)}
        />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
reRenderEntireTree(store.getState());
store.subscribe( () => {
  let state = store.getState();
  reRenderEntireTree(state);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
