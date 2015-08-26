React.js Workshop with Ryan Florence
====================================

You will need

```
git clone https://github.com/FrontendMasters/2015-02-13-React.git
cd 2015-02-13-React
npm install
npm start
```

Then visit http://localhost:8080.

This runs the webpack dev server, any changes you make to javascript
files in `excercises` will cause the browser to reload live.

Links mentioned in the workshop
-------------------------------

https://github.com/ryanflorence/react-training/blob/gh-pages/lessons/05-wrapping-dom-libs.md

http://react-router-mega-demo.herokuapp.com/

Video Tutorial Status
-------------------------------
React Intro:
- follow the install instructions on your readme ^^ and not on his
readme on the screen- there is a typo that he addresses.
- the file that he works on (ex 0) is not on the repo; meant for 
you to just watch and not code along.  He will explain in a bit

React Intro Questions: no notes

JSX vs JavaScript functions:
- Javascript functions: When React creates UI, it creates objs that rep html.  The elements with arguments.  A series of functions embeded in each other
- JSX: you pass in blocks of html in a function.  React will turn the html into function calls that resembles the Javascript functions. Parens on the right side optional.
- The people who look at React as a platform use Javascript but normally people use JSX; no performance tradeoffs with either one.

Composite Components:
- When you use React.createClass(), it's called a Composite Component
- When you render it, do not call it directly, use React.createElement(Foobar, {}) within React.render()
- or Turn this into a factory, and you may call it directly as Foobar().  

Ex- 1 Rendering Data:
- return() needs a root html element, like a div or something
- the excercise actually wants you to omit the southern food
- when doing this exercise, you will need to pass the id of the object to the component in the array.
- you need a root element in your JSX

Ex-2 Props:
- in regards to bulletpoint number 3 in Ex 1, the Virtual DOM keeps an original copy and does a diff based on your changes, it will only 'do the diff' instead of trying to make a brand new copy based off of everything.  
passing the key through helps keep track of things you are reordering. Great performance.

