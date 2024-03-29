import React from 'react';
import ReactDOM from 'react-dom';

//Part- 1a
//Component

/*
Component::::Technically the component is defined as a JavaScript function. The function 
defining the component may contain any kind of JavaScript code. It is also possible to 
render dynamic content inside of a component. React component names must be capitalized.

JSX::::The layout of React components is mostly written using JSX. Although JSX looks like 
HTML, we are actually dealing with a way to write JavaScript. Under the hood, JSX returned 
by React components is compiled into JavaScript. JSX is "XML-like", which means that every 
tag needs to be closed. when writing JSX, the tag needs to be closed. 
*/

//React-component with the name App::
/*const App = () => {
    const now = new Date();
    const x = 10;
    const y = 20;

    return (
        <div>
            <p>Hello World, It is {now.toString()} </p>
            <br />
            <p>{x} + {y} = {x + y}</p>
        </div>
    );
};*/

/*Multiple components:::: We have defined a new component Hello and used it inside the 
component App. Naturally, a component can be used multiple times. React is composing 
applications from many specialized reusable components.

props-- passing data to components::::It is possible to pass data to components using so 
called props.*/
const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}!!! Now I am {props.age}.</p>
        </div>
    );
};

const Footer = () => {
    return (
        <div>
            Greeting app created by 
            <a href="https://github.com/mluukkai"> mluukkai</a>
        </div>
    );
}

/*props- Now the function defining the component has a parameter props. As an argument, the 
parameter receives an object, which has fields corresponding to all the "props" the user of 
the component defines. There can be an arbitrary number of props and their values can be 
"hard coded" strings or results of JavaScript expressions. If the value of the prop is 
achieved using JavaScript it must be wrapped with curly braces.*/

// const App = () => {
//     const name = 'Karim';
//     const age = 25;

//     return (
//         <div>
//             <h1>Greetings</h1>
//             <Hello name="Jalal" age={30}/>
//             <Hello name={name} age={age} />
//             <Hello name="Sogir" age={age+1} />
//             <Footer />
//         </div>
//     );
// };

/*NOTE::::The content of a React component (usually) needs to contain one root element. 
Using a root element is not the only working option. An array of components is also a 
valid solution: */
// const App = () => {
//     const name = 'Karim';
//     const age = 25;

//     return [
//             <h1>Greetings</h1>,
//             <Hello name="Jalal" age={30}/>,
//             <Hello name={name} age={age} />,
//             <Hello name="Sogir" age={age+1} />,
//             <Footer />
//     ];        
// };

/*However, when defining the root component of the application this is not a particularly 
wise thing to do, and it makes the code look a bit ugly. Because, we have "extra" 
div-elements in the DOM-tree. This can be avoided by using fragments, i.e. by wrapping the elements to be returned by the component with an empty element */
const App = () => {
    const name = 'Karim';
    const age = 25;

    return (
        <>            
            <h1>Greetings</h1>
            <Hello name="Jalal" age={30} />
            <Hello name={name} age={age} />
            <Hello name="Sogir" age={age+1} />
            <Footer />
        </>    
    );        
};

ReactDOM.render(<App />, document.getElementById('root'));

//Exercise
//Part 1a- 1.1(course information, step1):

//Part 1b - Javascript- Exercises(Modify the existing application):::::::::::::::::::
//1b- 1.3(course information, step3):

const MyApp = () => {
    //1b-1.5(course information step5):
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
    
            {
                name: 'Using props to pass data',
                exercises: 7
            },
    
            {
                name: 'State of a component',
                exercises: 14
            }
        ]

    };


    const Header = (props) => {
        return <h1>{props.course}</h1>
    };

    //1a- 1.2(course information, step2):
    const Content = () => {
        const Part = (props) => {
            return (
                <p>
                    {props.parts} {props.exercise}
                </p>
            );
        };

        return (
            <div>
                <Part parts={course.parts[0]['name']} exercise={course.parts[0]['exercises']}/>
                <Part parts={course.parts[1]['name']} exercise={course.parts[1]['exercises']}/>
                <Part parts={course.parts[2]['name']} exercise={course.parts[2]['exercises']}/>
            </div>
        );
    };

    const Total = (props) => {
        return <p>Number of exercises {props.total}</p>
    };

    return (
        <div>
            <Header  course={course.name}/>
            <Content />
            <Total total={course.parts[0]['exercises'] + course.parts[1]['exercises'] + course.parts[2]['exercises']}/>
        </div>
    );
};

ReactDOM.render(<MyApp />, document.getElementById('root'));

