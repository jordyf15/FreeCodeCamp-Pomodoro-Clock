import React from 'react';
class Timer extends React.Component{
    state={
        label: 'Session',
        timeMinute: this.props.session,
        timeSecond: 0,
        isRunning: false,
        color: 'white'
    }
    componentDidUpdate(prevProps){
        if(this.state.label==='Session'){
            if(prevProps.session !== this.props.session){
                this.setState({
                    timeMinute: this.props.session,
                    timeSecond: 0
                })
            }
        }else{
            if(prevProps.break !== this.props.break){
                this.setState({
                    timeMinute: this.props.break,
                    timeSecond: 0
                })
            }
        }
    }
    runTimer=(isRunning)=>{
        if(isRunning===true){
           this.timer= setInterval(()=>{
            if(this.state.timeMinute===0 && this.state.timeSecond===0){
                if(this.state.label==='Session'){
                    this.setState({
                        label: 'Break',
                        timeMinute: this.props.break,
                        timeSecond: 1
                    })
                    document.getElementById('beep').play();
                }else{
                    this.setState({
                        label: 'Session',
                        timeMinute: this.props.session,
                        timeSecond: 1
                    },()=>{
                        console.log('switch to session')
                    })
                    document.getElementById('beep').play();
                }
            }
            
            if(this.state.timeMinute===1 && this.state.timeSecond===1){
                this.setState({
                    color: '#a50d0d'
                })
            }else if(this.state.color==='#a50d0d' && this.state.timeMinute>=1 && this.state.timeSecond>=0){
                this.setState({
                    color: 'white'
                })
            } 
            
            if(this.state.timeSecond===0){
                    this.setState({
                        timeMinute:this.state.timeMinute-1,
                        timeSecond: 60
                    })
            }
            this.setState({
                timeSecond:this.state.timeSecond-1
            })
            },1000)
        }else{
            clearInterval(this.timer);
        }
    }
    formatter=()=>{
        var minute=this.state.timeMinute;
        var second=this.state.timeSecond;
        if(minute<10){
            minute='0'+minute
        }
        if(second<10){
            second='0'+second
        }
        return minute+':'+second;
    }
    start_stop=()=>{
        if(this.state.isRunning===false){
          this.setState({
            isRunning: true
          },()=>{
              this.runTimer(this.state.isRunning);
              this.props.setButton(this.state.isRunning);
            })
        }else{
          this.setState({
            isRunning: false
          },()=>{
            this.runTimer(this.state.isRunning);
            this.props.setButton(this.state.isRunning);
        })
        }
      }
    reset=()=>{
        this.setState({
            timeMinute: this.props.session,
            timeSecond: 0,
            label: 'Session',
            isRunning: false,
            color: 'white'
        },()=>{
            this.runTimer(this.state.isRunning);
            this.props.setButton(this.state.isRunning)
        })
        this.props.handleReset();
        document.getElementById("beep").pause();
        document.getElementById("beep").currentTime=0;
    }
    render(){
        return(
            <div id="timer">
                <div id="time-container">
                <div id="timer-label" style={{color: this.state.color}}>{this.state.label}</div>
                <div id="time-left" style={{color: this.state.color}}>{this.formatter()}
                <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
                </div>
                </div>
                <div id="timer-buttons">
                    <button id="start_stop" onClick={this.start_stop}><i className="fa fa-play fa-2x"></i><i className="fa fa-pause fa-2x"></i></button>
                    <button id="reset" onClick={this.reset}><i className="fa fa-refresh fa-2x"></i></button>
                </div>
            </div>
        )
    }
}
export default Timer;