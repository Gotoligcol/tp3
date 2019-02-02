import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    return (

        class Top extends React.Component
        {
            render()
            {
                return (
                    <div className="container">
                        <button className ="Jeanne"></button>
                        <button className="Martine"></button>
                        <button className="Claude"></button>
                    </div>
                );

            }
        },

        class Middle extends React.Component
        {
            render()
            {
                return (
                    <div className="containerMiddle">
                        <div className="profPicture"></div>
                        <div className="Texts"></div>
                        <div className="changeStyle"></div>
                    </div>
                );
            }
        },

        class Bottom extends React.Component
        {
            render()
            {
                return (
                    <div className="containerBot">
                        <div className="Message"></div>
                        <div className="cSuper"></div>
                    </div>
                );
            }
        }
    );

  }
}

export default App;
