import React from 'react';

class Toggle extends React.Component{
  state: { isToggleOn: boolean; };
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true
    };
    
    //necessario pois o javascript nao faz o bind automaticamente
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  setState(arg0: (prevState: any) => { isToggleOn: boolean; }) {
    throw new Error('Method not implemented.');
  }

  render(){
    return(
      <button onClick={this.handleClick}>
        <h2>{this.state.isToggleOn ? 'ON': 'OFF'}</h2>
      </button>
    );
  }
}

export default Toggle;
