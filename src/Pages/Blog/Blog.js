import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='text-lg lg:w-6/12 mx-5   shadow-lg lg:mx-auto my-12 p-10'>
                <p className='rounded-xl text-xl font-bold'>How will you improve the performance of a React Application?</p>
                <div><strong>Ans:</strong>
                 <p>1.Using Immutable Data Structures</p>
                 <p>2.Stateless component </p>
                 <p>3.Dependency optimization</p>
                 <p>4.Avoid Inline Funcion Definition in Render Funcion</p>
                 <p>5.Avoid using Index as key for map</p>
                 <p>6.Avoiding Props in Initial States</p>
                 <p>7.Memoize React Components</p>
                 <p>8.Consider server side rendering </p>
                 by using these   I can improve the performance of a react applicaion.
                </div>
            </div>
            <div className='rounded-xl text-lg lg:w-6/12  shadow-lg mx-5 lg:mx-auto my-12 p-10'>
                <p className='text-xl font-bold'>What are the different ways to manage a state in a React application?</p>
                <p><strong>Ans:</strong>
                 State is the heart of react application.State is an object that holds information about a certain component.In react There are many different way to manage the state . Basically react  provide the default hook useState that help us to manage state easily . But the big application 
                 we need to use different functionality for manage the state . React context api help us to manage the state easily .UseReducer  hook is the another hook that  manage the state .A reducer is a pure function that takes the previous state and an action as an argument, and returns the next state. Another way to manage a state by using Redux.Redux is a tool that comes to solve both of the problems prop drilling and unpredictable state behavior on frequent and complex state changes.
                 Zustand is another open source state management library built for React.
                 
                </p>
            </div>
            <div className='rounded-xl text-lg lg:w-6/12  shadow-lg mx-5 lg:mx-auto my-12 p-10'>
                <p className='text-xl font-bold'> What is a unit test? Why should write unit tests?</p>
                <div><strong>Ans:</strong>
                <p><strong>What is a unit test:-</strong></p>
                Unit testing is a type of testing in which individual units or functions of software testing. Its primary purpose is to test each unit or function. A unit is the smallest testable part of an application. It mainly has one or a few inputs and produces a single output. In procedural programming, a unit referred to as an individual program, while object-oriented programming languages include Base/Superclass, abstract class, Derived/Child class takes place.
                <p><strong>Reasone to write unit tests:-</strong></p>
                unit tests act as documentation for our code. Any developer can quickly look at our tests and know the purpose of our functions.Unit testing improves code coverage. A debatable topic is to have 100% code coverage across our application.Unit tests make code reuse easier it also save time and money.
                 
                </div>
            </div>
            <div className='rounded-xl text-lg lg:w-6/12  shadow-lg mx-5 lg:mx-auto my-12 p-10'>
                <p className='text-xl font-bold'> What is a unit test? Why should write unit tests?</p>
                <p><strong>Ans:</strong>
                In React, whenever a component is rendering either in theMounting phase or in Updating Phase, it always renders all the components that are in its tree.Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.If we set products =[...] instead  then this data can not be renderd or change or modified later . If we use  useState() hook  then it give us the setState method that help us to modife the data  and render the react component . This is the case so that we do not set the state directly in React .
                 
                </p>
            </div>
            <div className='rounded-xl text-lg lg:w-6/12  shadow-lg mx-5 lg:mx-auto my-12 p-10'>
                <p className='text-xl font-bold'>  How does prototypical inheritance work?</p>
                <p><strong>Ans:</strong>
                Every single JavaScript object has a property, called prototype, which points to a different object.This different object is the object prototype. Prototypical inheritance refers to the ability to access object properties from another object.Every object holds a link to a prototype object  that contains the properties of its base object.  A function's prototype refers to Function.prototype.Prototypical inheritance is when objects inherit from another object's prototype. For example, a Function is an Object because Function.prototype is an extension of Object.prototype. All properties of objects are inherited in Function.prototype.Prototypical inheritance can easily be achieved by using the Object.create function
                 
                </p>
            </div>
            
        </div>
    );
};

export default Blog;