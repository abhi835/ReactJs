import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom";


const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

function MyApp(){
    const username = "abhishek"
    return (
        <div>
            <h1>Custom React App</h1>
            <h1>Custom React App {username}</h1>
        </div>
    )
}

const AnotherElement = (
    <a href='http://google.com' target='_blank'>Visit Google</a>
)

const AreactElement= React.createElement(
    'a',
    {href:'http://google.com',target:"_blank"},
    'Click to visit google'
)

createRoot(document.getElementById('root')).render(
 
    <MyApp/>
    // AreactElement

)
