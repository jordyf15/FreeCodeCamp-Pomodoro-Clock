import React from'react';
import Timer from'./Timer.js'
class Clock extends React.Component{
    state={
        break: 5,
        session: 25
      }
      increaseBreak=()=>{     
        if(this.state.break<60 ){
        this.setState({
          break: this.state.break+1
        })
        }
      }
      decreaseBreak=()=>{
        if(this.state.break>1 ){
        this.setState({
          break: this.state.break-1
        })
        }
      }
      increaseSession=()=>{
        if(this.state.session<60 ){
        this.setState({
          session: this.state.session+1
        })
        }
      }
      decreaseSession=()=>{  
        if(this.state.session>1 ){
          this.setState({
            session: this.state.session-1
          })
        }
      }
      setButton=(bool)=>{
        console.log(bool);
        if(bool===true){
          document.getElementById('break-increment').disabled=true;
          document.getElementById('break-decrement').disabled=true;
          document.getElementById('session-increment').disabled=true;
          document.getElementById('session-decrement').disabled=true;
        }else{
          document.getElementById('break-increment').disabled=false;
          document.getElementById('break-decrement').disabled=false;
          document.getElementById('session-increment').disabled=false;
          document.getElementById('session-decrement').disabled=false;
        }
      }
      handleReset=()=>{
        this.setState({
          break: 5,
          session: 25
        })
      }
      render(){
        return(
          <div id="clock">
            <div id="setting-container">
              <div id="break-container">
                <div id="break-label">Break Length</div>
                <div className="increment-decrement">
                  <button id="break-decrement" onClick={this.decreaseBreak}><i className="fa fa-arrow-down fa-2x"></i></button>
                  <div id="break-length">{this.state.break}</div>
                  <button id="break-increment" onClick={this.increaseBreak}><i className="fa fa-arrow-up fa-2x"></i></button>
                </div>
              </div>
              <div id="session-container">
                <div id="session-label">Session Length</div>
                <div className="increment-decrement">
                  <button id="session-decrement" onClick={this.decreaseSession}><i className="fa fa-arrow-down fa-2x"></i></button>
                  <div id="session-length">{this.state.session}</div>
                  <button id="session-increment" onClick={this.increaseSession}><i className="fa fa-arrow-up fa-2x"></i></button>
                </div>
              </div>
            </div>
            <Timer handleReset={this.handleReset} setButton={this.setButton}session={this.state.session} break={this.state.break}/>
          </div>
        )
      }
}
export default Clock;