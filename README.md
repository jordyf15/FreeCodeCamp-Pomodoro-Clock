# Podomoro Clock
For the fifth and final project of FreeCodeCamp Frontend Library Curriculum, we have to make a pomodoro clock using any mix of technology such as HTML, Javascript, CSS, Bootstrap, SASS, React, Redux, and jQuery.\

## Test/User Stories
1. I can see an element with id="break-label" that contains a string (e.g. "Break Length").
2. I can see an element with id="session-label" that contains a string (e.g. "Session Length").
3. I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement".
4. I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment".
5. I can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5.
6. I can see an element with a corresponding id="session-length", which by default displays a value of 25.
7. I can see an element with a corresponding id="session-length", which by default displays a value of 25.
8. I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).
9. I can see a clickable element with a corresponding id="start_stop".
10. I can see a clickable element with a corresponding id="reset".
11. When I click the element with the id of reset, any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to it's default state.
12. When I click the element with the id of break-decrement, the value within id="break-length" decrements by a value of 1, and I can see the updated value.
13. When I click the element with the id of break-increment, the value within id="break-length" increments by a value of 1, and I can see the updated value.
14. When I click the element with the id of session-decrement, the value within id="session-length" decrements by a value of 1, and I can see the updated value.
15. When I click the element with the id of session-increment, the value within id="session-length" increments by a value of 1, and I can see the updated value.
16. I should not be able to set a session or break length to <= 0.
17. I should not be able to set a session or break length to > 60.
18. When I first click the element with id="start_stop", the timer should begin running from the value currently displayed in id="session-length", even if the value has been incremented or decremented from the original value of 25.
19. If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).
20. If the timer is running and I click the element with id="start_stop", the countdown should pause.
21. If the timer is paused and I click the element with id="start_stop", the countdown should resume running from the point at which it was paused.
22. When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun.
23. When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.
24. When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun.
25. When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.
26. When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding id="beep".
27. The audio element with id="beep" must be 1 second or longer.
28. The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked.

We need to include the CDN link in the public\index.html file to be able to run the test in any environment we like. The example to include it:
```
<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
```

## Live Demo on Codepen
https://codepen.io/jordyf15/full/jOWdaWV

## Technology Used
1. HTML
2. CSS
3. Javascript
3. React version 16.13.1
4. Fontawesome version 5.8.1

## List of React Component

### App Component
The App component is the parent of the Clock component. In this component the title and the information element are also rendered. This component doesn't have any state or function.

#### Renders
The App component renders the following elements:
1. The title div which is the title of the project.
2. The Information div which contain information of the project.
3. The Clock Component.

### Clock Component
The Clock component is the parent of the Timer component, it is also the child of the App component. In this component the user can alter the length of session and break time.

#### States
The Clock component has 2 state, they are:
1. Session: this is the current session state of the pomodoro clock which determines the length of session time.
2. Break: this is the current break state of the pomodoro clock which determines the length of break time.

#### Functions
The Clock component has 6 state, they are:
1. increaseBreak: this function will increment the break state which increases the length of break time by 1.
2. decreaseBreak: this function will decrement the break state which decreases the length of break time by 1.
3. increaseSession: this function will increment the session state which increases the length of session time by 1.
4. decreaseSession: this function will decrement the session state which decreases the length of session time by 1.
5. setButton: this function will disable the buttons to alter the session and break time when the timer is running and enable the button when the timer is paused.
6. handle Reset: this function will reset the session and break state to the default state.

#### Renders
The Clock component renders the following:
1. A div setting container which will hold the session container and break container.
2. A div session container which will hold the session increment button, session decrement button and the session label.
3. A div break container which will hold the break increment button, break decrement button and the break label.
4. The session increment button which will call the increaseSession function when clicked.
5. The session decrement button which will call the decreaseSession function when clicked.
6. The session label that contain text of "session length"
6. The break increment button which will call the increaseBreak function when clicked.
7. The break decrement button which will call the decreaseBreak function when clicked.
8. The break label that contain text "break length"
9. The Timer component which receive props such as
    - the handleReset function
    - the setButton function
    - current session state
    - current break state

### Timer Component
The timer component is where the user can reset, play or pause the timer. The timer itself is also in this component

#### States
The timer component has 5 states, they are:
1. label: this is the current label state of the timer whether it is a session or break time.
2. timeMinute: this is the current timeMinute state which represent the current minute left in the timer.
3. timeSecond: this is the current timeSecond state which represent the current second left in the current minute.
4. isRunning: this is the current isRunning state which determine whether the timer is currently playing or paused.
5. color: this is the current color state which will be the color of the time in the timer.

#### Functions
The timer component has 5 functions, they are:
1. componentDidUpdate: this function will run when the timer receive new props from the Clock component. This will update the timeMinute and timeSecond state depending on the current label and the length of session or break in the prop.
2. runTimer: this function will run the timer and start decreasing the time by 1 second for each second passed. When the time reach 0 it will change labels and also play the soundclip. In here the color state will be changed to red if the time left in less than 1 minute.
3. formatter: this function will format the timeMinute and timeSecond state to the mm:ss format.
4. start_stop: this function will change the isRunning state to false (pausing the timer) or true (playing the timer).
5. reset: this function will call the handlereset function from Clock component and also reset the timer states to its default value. This function will also rewind the soundclip.

#### Renders
The Timer component renders the following elements:
1. A time container div which will hold the timer label and time left element.
2. A timer button div which will hold the reset and start_stop button.
3. A timer label a div that display the current label from the label state whether it is session or break.
4. A time left a div that displays the current time left of the timer.
5. A audio beep which contain the soundclip that will be played.
6. A start_stop button which will call the start_stop function when clicked.
7. A reset button which will call the reset function when clicked.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
