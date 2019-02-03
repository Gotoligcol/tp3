import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Buttons extends React.Component {
    render(){
        return(
            <button className="btn">{this.props.value}</button>
        )
    }
}

class ContainerTop extends React.Component {
    renderBtns(name) {
        return <Buttons value={name}/>;
    }

    render() {
        const name1 = 'Claude';
        const name2 = 'Martine';
        const name3 = 'Jeanne';
        
        return(
            <div className="container">
                {this.renderBtns(name1)}
                {this.renderBtns(name2)}
                {this.renderBtns(name3)}
            </div>
        )
    }
}

class ContainerMid extends React.Component {

    render(){
        return(
<div className="container"></div>

        )
    }
}

class ContainerBot extends React.Component{
    render(){
        return(

<div className="container"></div>
        )
    }
}

class GlobalContainer extends React.Component {
    render(){
        return(
            <div>
                <ContainerTop/>
                <ContainerMid/>
                <ContainerBot/>
            </div>
        )
    }
}

ReactDOM.render(
    <GlobalContainer />,
    document.getElementById('root')
);