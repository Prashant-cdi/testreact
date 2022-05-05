import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Hello } from './Hello';
import { Test1 } from './Test';
import { Image } from './Image';
import { Greet } from './Greet';
import reportWebVitals from './reportWebVitals';
import { element1 } from './Test3';
import { Name } from './test2';
import { Test3 } from './Test3';
export const customStyle = {
  color: "darkgreen"
}

// const element1 = <h1>This is something</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Hello />
    <Image />
    <Test1 />
    <Name />
    <Greet name="Prashant"/>
    <Greet name="Sundram"/>
    <Greet name="Vipin"/>
    <Greet />
    <Test3 />
  </React.StrictMode>
);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<h2>Helloworld</h2>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
