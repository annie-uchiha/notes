import React from "react";
import "./Notes.scss";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function Notes() {
  return (
    <section className="notes">
      <h1>Notes Page</h1>
      <ul className="notes__anchors">
        <li>
          <a href="#html5">HTML5</a>
        </li>
        <li>
          <a href="#css">CSS3</a>
        </li>
        <li>
          <a href="#JavaScript">JavaScript</a>
        </li>
        <li>
          <a href="#reactJS">React.js</a>
        </li>
        <li>
          <a href="#general">General</a>
        </li>
      </ul>
      <div>
        <h2 className="notes__title" id="html5">
          HTML5
        </h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is HTML?</Accordion.Header>
            <Accordion.Body className="left-section">
              Hyper Text Markup Language. It defines the content and structure of web content. It is not a programming language.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What are the semantic HTML elements?</Accordion.Header>
            <Accordion.Body className="left-section">
              They clearly describe their meaning in a human and machine readable way: header, footer, article, section, nav.
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
      </div>
      <div>
        <h2 className="notes__title" id="css">
          CSS3
        </h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is CSS?</Accordion.Header>
            <Accordion.Body className="left-section">
              Cascading Style Sheets.
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
          <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What is box model?</Accordion.Header>
            <Accordion.Body className="left-section">
            The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders and margins.
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
          <Accordion>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What is flexbox?</Accordion.Header>
            <Accordion.Body className="left-section">
            Flexbox is a CSS layout that makes it easier to design flexible and responsive layout structures without using float or positioning. It allows you to align items vertically and horizontally with space distribution.
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
      </div>
      <div>
        <h2 className="notes__title" id="JavaScript">
          JavaScript
        </h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is JavaScript?</Accordion.Header>
            <Accordion.Body className="left-section">
              Weakly typed programming language used for Front-end development to
              create interactive and dynamic web applications.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What does weakly typed mean?</Accordion.Header>
            <Accordion.Body className="right-section">
              It is a type of system where variables are not bound to a specific
              data type. They can be dynamically assigned different types of value
              without explicit type declarations or strict type checking.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Variables</Accordion.Header>
            <Accordion.Body className="left-section">
              They hold various types of data, such as numbers, strings, booleans,
              arrays, objects or even functions. They allow programmers to store
              and work with data dynamically, making code more flexible.
              <ul>
                <li>
                  var - function scoped; can be re-declared and re-assigned within
                  their scope; when hoisted to the top, can cause bugs
                </li>
                <li>
                  let - block-scoped; only accessible within their block; can be
                  re-assigned but not re-declared; accessible after they have been
                  declared;
                </li>
                <li>
                  const - block-scoped; must be initialized with a value when
                  declared and can not be re-assigned a new value;
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What does hoisting mean?</Accordion.Header>
            <Accordion.Body className="right-section">
              JS behavior where variables and functions can be declared on the top
              of their containing scope during compilation phase, before the code
              is executed. Only var allows you to use the variable before you have
              declared it.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>What are the main data types?</Accordion.Header>
            <Accordion.Body className="left-section">
              The main difference between a primitive data type and the complex
              data type lies in how they are stored and manipulated. The primitive
              DT hold a single simple value (string, boolean, null, undefined) and
              when manipulated you operate on its value. The complex DT hold
              multiple data types, meaning they hold multiple values and are
              stored by reference (objects) - you operate on a reference to the
              value not the value itself.
              <ul>
                <li>
                  strings - textual data enclosed in "" or ``; can contain letters,
                  numbers, symbols, whitespace, special characters;
                </li>
                <li>
                  numbers - numeric values; including integers, special numeric
                  values like NaN and Infinity;
                </li>
                <li>
                  booleans - logical value that can be true or false; used to make
                  decisions, control the flow of code (conditions, loops, logical
                  operators)
                </li>
                <li>
                  symbol - primitive data type that presents unique and immutable
                  value;
                </li>
                <li>
                  undefined - a variable has been declared but has not been given a
                  value;
                </li>
                <li>null - intentional absence of value;</li>
                <li>
                  bigInt - built-in object that provides a way to represent integers
                  with precision;
                </li>
                <li>
                  objects - complex data type; collection of key-value pairs, which
                  stores and organizes data for more complex manipulation
                </li>
              </ul>
              <h3>NB! Not to be mistaken for variable types: number, string, boolean, undefined, null, object, array, function.</h3>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Difference between NaN, null and undefined</Accordion.Header>
            <Accordion.Body className="right-section">
              <ul>
                <li>
                  NaN - Not a Number; it is returned after a math operation fails to
                  return a valid number; it is a numeric data type but not equal to
                  any other value, including itself;
                </li>
                <li>
                  null - intentional absence of any object value; used to represent
                  a variable that should explicitly not have a value;
                </li>
                <li>
                  undefined - the variable has been declared but not been assigned a
                  value;
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Operators</Accordion.Header>
            <Accordion.Body className="left-section">
              <ul>
                <li>
                  Math operators: +, -, *, /, %, **; == (checks for equality); ===
                  (compares value and type); !== (strict inequality, evaluates to
                  true if the operands are not equal and/or not of the same type);
                  != (inequality operator; true if the operands are not equal,
                  regardless of their type); etc.
                </li>
                <li>
                  Logical operators: && (AND both requirements need to be met); OR
                  (one of the requirements need to be met); !A (NOT - gives the
                  opposite value);
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Type Conversions</Accordion.Header>
            <Accordion.Body className="right-section">
              <ul>
                <li>parseInt() - parse a string and convert it to integer;</li>
                <li>
                  parseFloat() - parse a string and convert it to floating-point
                  number;
                </li>
                <li>toString() - convert a value to its string representation;</li>
                <li>
                  toFixed() - format a number with a specified number of digits
                  after the decimal point and return the resulting string
                  representation;
                </li>
                <li>Number() - a value to a number</li>
                <li>String() - a value to a string</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>What are Classes?</Accordion.Header>
            <Accordion.Body className="right-section">
              Classes are a way to create objects with specific properties and methods, providing a blueprint for creating multiple objects with similar characteristics.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>Conditions</Accordion.Header>
            <Accordion.Body className="right-section">
              If a condition is met the code is executed.
              <ul>
                <li>if - if a statement is true, the code executes</li>
                <li>if ... else - if a statement is true, the code executes - if not, it executes the code after the else condition</li>
                <li>switch - when you have to check multiple conditions (more than 3 else statements); but always put a break to It
                  otherwise it will keep giving results until infinity or until the terminal breaks; It provides
                  more concise and readible way to write code.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>Ways to increase values</Accordion.Header>
            <Accordion.Body className="right-section">
              let a=5;
              a = a+6; or a+=6;
              a++ or ++a
              let a = 5;
              console.log(++a + a++);
              result:12
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>Loops</Accordion.Header>
            <Accordion.Body className="right-section">
              Executes block of code repeatedly as long as a specific condition is met.
              <ul>
                <li>for - repeats a block of code a certain number of times;</li>
                <li>while - repeats a block of ocde while a specific condition is true</li>
                <li>do ... while - similar to the while loop but it always executes the block of code at least once, even if the condition is false;
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div>
        <h2 className="notes__title" id="reactJS">
          React.js
        </h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is React.js?</Accordion.Header>
            <Accordion.Body className="left-section">
              JavaScript library.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What is JSX?</Accordion.Header>
            <Accordion.Body className="left-section">
              JSX stands for JavaScript XML. It is a HTML-like syntax extension for JS used in React. 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Difference between JS frameworks and libraries?</Accordion.Header>
            <Accordion.Body className="left-section">
              Framework: Inversion of control (the framework calls your code rather than the code calling the framework. 
              Provides a structure and predefined way to build applications; it manages the control flow); 
              Opinionated (set of conventions and dictate how you should structure your code); Integrated (provide everything needed to build
              an application: routing, state management, data binding and more).
              Library: Call-based (collection of functions and utilities that your code calls to perform specific tasks. More control); 
              Unopinionated (more flexibility and freedom in how you structure your application); Complementary - used in conjunction with other libraries or frameworks to build applications. 
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
      </div>
      
        <h2 className="notes__title" id="general">
          General
        </h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Sync ans Async?</Accordion.Header>
            <Accordion.Body className="left-section">
              Sync programming - tasks are performed one ata  time in a sequential order, blocking further execution until the current task is completed.
              Async programming - tasks are performed without blocking the main thread, allowing other tasks to run concurrently. It uses callbacks, promises and async/await.
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
    </section>
  );
}

export default Notes;
