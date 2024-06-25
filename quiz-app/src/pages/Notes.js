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
      </ul>
      <div>
        <h2 className="notes__title" id="html5">
          HTML5
        </h2>
      </div>
      <div>
        <h2 className="notes__title" id="css">
          CSS3
        </h2>
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
        </Accordion>
      </div>
      <div>
        <h2 className="notes__title" id="reactJS">
          React.js
        </h2>
      </div>
    </section>
  );
}

export default Notes;
