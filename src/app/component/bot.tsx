"use client";
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import Chatbox from './app1';
import './gift.css';
import eee from  "../assets/chatbox-icon.svg"
const BOT: NextPage = () => {
    useEffect(() => {
        const chatboxInstance = new Chatbox();
        chatboxInstance.display();
        
        return () => {
        };
      }, []);
  return (
        <div class="chatbox">
        <div class="chatbox__support">
            <div class="chatbox__header">
                <div class="chatbox__image--header">
                    <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image"></img>
                </div>
                <div class="chatbox__content--header">
                    <h4 class="chatbox__heading--header">Chat support</h4>
                    <p class="chatbox__description--header">Hi. My name is Sam. How can I help you?</p>
                </div>
            </div>
            <div class="chatbox__messages">
                <div></div>
            </div>
            <div class="chatbox__footer">
                <input type="text" placeholder="Write a message..."></input>
                <button class="chatbox__send--footer send__button">Send</button>
            </div>
        </div>
        <div class="chatbox__button">
            <button><img src="https://image.pngaaa.com/809/3704809-middle.png" width="60"  alt="Button Image" /></button>
        </div>
    </div>
);  
};

export default BOT;
