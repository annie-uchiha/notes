import React from "react";
import "./Notes.scss";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import boxModelImg from '../components/box-model.png';


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
            <Accordion.Body className="notes__section">
              <p>
                Hyper Text Markup Language. It defines the content and structure
                of web content. It is not a programming language.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What are the semantic HTML elements?
            </Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                They clearly describe their meaning in a human and machine
                readable way: header, footer, article, section, nav.
              </p>
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
            <Accordion.Body className="notes__section">
              <p>Cascading Style Sheets. Not a programming language</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What is box model?</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                The CSS box model is essentially a box that wraps around every
                HTML element. It consists of: content, padding, borders and
                margins.
              </p>
              <img alt="box-model-img" src={boxModelImg}></img>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What is flexbox?</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                Flexbox is a CSS layout that makes it easier to design flexible
                and responsive layout structures without using float or
                positioning. It allows you to align items vertically and
                horizontally with space distribution.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>CSS selectors</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Fonts, FontFace</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>BEM, Bootstrap</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Creating forms</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>SVG</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>CSS animations</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>CSS GRID</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>Cross-browser compatibility</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>Adaptive and responsive design</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>Responsive graphics</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="13">
            <Accordion.Header>Responsive navigation</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="14">
            <Accordion.Header>SEO for developer</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
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
            <Accordion.Body className="notes__section">
              <p>
                Weakly typed programming language used for Front-end development
                to create interactive and dynamic web applications.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What does weakly typed mean?</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                It is a type of system where variables are not bound to a
                specific data type. They can be dynamically assigned different
                types of value without explicit type declarations or strict type
                checking.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Variables</Accordion.Header>
            <Accordion.Body className="notes__section">
              <div>
                They hold various types of data, such as numbers, strings,
                booleans, arrays, objects or even functions. They allow
                programmers to store and work with data dynamically, making code
                more flexible.
                <ul>
                  <li>
                    var - function scoped; can be re-declared and re-assigned
                    within their scope; when hoisted to the top, can cause bugs
                  </li>
                  <li>
                    let - block-scoped; only accessible within their block; can
                    be re-assigned but not re-declared; accessible after they
                    have been declared;
                  </li>
                  <li>
                    const - block-scoped; must be initialized with a value when
                    declared and can not be re-assigned a new value;
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What does hoisting mean?</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                JS behavior where variables and functions can be declared on the
                top of their containing scope during compilation phase, before
                the code is executed. Only var allows you to use the variable
                before you have declared it.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>What are the main data types?</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                The main difference between a primitive data type and the
                complex data type lies in how they are stored and manipulated.
                The primitive DT hold a single simple value (string, boolean,
                null, undefined) and when manipulated you operate on its value.
                The complex DT hold multiple data types, meaning they hold
                multiple values and are stored by reference (objects) - you
                operate on a reference to the value not the value itself.
                <ul>
                  <li>
                    strings - textual data enclosed in "" or ``; can contain
                    letters, numbers, symbols, whitespace, special characters;
                  </li>
                  <li>
                    numbers - numeric values; including integers, special
                    numeric values like NaN and Infinity;
                  </li>
                  <li>
                    booleans - logical value that can be true or false; used to
                    make decisions, control the flow of code (conditions, loops,
                    logical operators)
                  </li>
                  <li>
                    symbol - primitive data type that presents unique and
                    immutable value;
                  </li>
                  <li>
                    undefined - a variable has been declared but has not been
                    given a value;
                  </li>
                  <li>null - intentional absence of value;</li>
                  <li>
                    bigInt - built-in object that provides a way to represent
                    integers with precision;
                  </li>
                  <li>
                    objects - complex data type; collection of key-value pairs,
                    which stores and organizes data for more complex
                    manipulation
                  </li>
                </ul>
              </p>
              <h6>
                NB! Not to be mistaken for variable types: number, string,
                boolean, undefined, null, object, array, function.
              </h6>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Difference between NaN, null and undefined
            </Accordion.Header>
            <Accordion.Body className="notes__section">
              <ul>
                <li>
                  NaN - Not a Number; it is returned after a math operation
                  fails to return a valid number; it is a numeric data type but
                  not equal to any other value, including itself;
                </li>
                <li>
                  null - intentional absence of any object value; used to
                  represent a variable that should explicitly not have a value;
                </li>
                <li>
                  undefined - the variable has been declared but not been
                  assigned a value;
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Operators</Accordion.Header>
            <Accordion.Body className="notes__section">
              <div>
                <ul>
                  <li>
                    Math operators: +, -, *, /, %, **; == (checks for equality);
                    === (compares value and type); !== (strict inequality,
                    evaluates to true if the operands are not equal and/or not
                    of the same type); != (inequality operator; true if the
                    operands are not equal, regardless of their type); etc.
                  </li>
                  <li>
                    Logical operators: && (AND both requirements need to be
                    met); OR (one of the requirements need to be met); !A (NOT -
                    gives the opposite value);
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Type Conversions</Accordion.Header>
            <Accordion.Body className="notes__section">
              <div>
                <ul>
                  <li>
                    parseInt() - parse a string and convert it to integer;
                  </li>
                  <li>
                    parseFloat() - parse a string and convert it to
                    floating-point number;
                  </li>
                  <li>
                    toString() - convert a value to its string representation;
                  </li>
                  <li>
                    toFixed() - format a number with a specified number of
                    digits after the decimal point and return the resulting
                    string representation;
                  </li>
                  <li>Number() - a value to a number</li>
                  <li>String() - a value to a string</li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>Classes</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                Classes are a way to create objects with specific properties and
                methods, providing a blueprint for creating multiple objects
                with similar characteristics.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>Conditions</Accordion.Header>
            <Accordion.Body className="notes__section">
              <div>
                If a condition is met the code is executed.
                <ul>
                  <li>if - if a statement is true, the code executes;</li>
                  <li>
                    if ... else - if a statement is true, the code executes - if
                    not, it executes the code after the else condition;
                  </li>
                  <li>
                    switch - when you have to check multiple conditions (more
                    than 3 else statements); but always put a break to It
                    otherwise it will keep giving results until infinity or
                    until the terminal breaks; It provides more concise and
                    readible way to write code.
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>Ways to increase values</Accordion.Header>
            <Accordion.Body className="notes__section">
              <div>
                let a = 5;
                <br />
                a = a + 6; or a += 6;
                <br />
                a++ or ++a
                <br />
                let a = 5;
                <br />
                console.log(++a + a++);
                <br />
                result: 12
                <br />
              </div>
              <p>
                Pre-increment (++variable): the value increases by 1 before the
                expression is evaluated; the updated value is used in the
                expression.
                <br />
                Post-increment (variable++): the value is used in the expression
                before it is increased by 1 - the incrementation occurs after
                the expression is evaluated.
                <br />
                Both operators work only with numeric values.
                <br />
                Unexpected behavior if used within complex expressions.
                <br />
                Both modify the value of the variable which can lead to
                unexpected behavior if the same variable is used multiple times
                within a single expression.
                <br />
                If used within parentheses(), they will be evaluated first. They
                have a higher precedence than most arithmetic operators: +, -,
                *, ?. Used only in simple straightforward expressions.
                <br />
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>Loops</Accordion.Header>
            <Accordion.Body className="notes__section">
              <div>
                Executes block of code repeatedly as long as a specific
                condition is met.
                <ul>
                  <li>
                    for - repeats a block of code a certain number of times;
                  </li>
                  <li>
                    while - repeats a block of code while a specific condition
                    is true;
                  </li>
                  <li>
                    do ... while - similar to the while loop but it always
                    executes the block of code at least once, even if the
                    condition is false;
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>Closure</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                The ability of the inner function to remember the data (values)
                of their outer function.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="13">
            <Accordion.Header>Objects</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                Data types used to store collections of data and functionality.
                They consist of key-value pairs where each key is a string (or
                symbol) and each value can be any data type, including other
                objects.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="14">
            <Accordion.Header>Primitive vs Reference values</Accordion.Header>
            <Accordion.Body className="notes__section">
              <div>
                Primitive types: strings, numbers, booleans, undefined, null,
                symbol, bigInt. Reference values: objects, arrays, functions.
                Objects, arrays and functions are reference values because they
                don't store data directly, instead they store reference to the
                memory location where data is stored.
                <ul>
                  <li>
                    Objects: when you assign an object to a variable, what you
                    are storing in that variable is a reference to the memory
                    location where the object is stored. So if you assign the
                    same object to multiple variables or pass it as an argument
                    to a function, you're working with the same underlying
                    object.
                  </li>
                  <li>
                    Arrays: also objects, similar behavior. When assign an array
                    to a variable, you are storing a reference to the memory
                    location where the array is stored. Like objects, if you
                    assign the same array to multiple variables or pass it as an
                    argument to a function - you're working with the same
                    underlying array.
                  </li>
                  <li>
                    Functions: when you define a function you create an object
                    of type function so the same applies.
                  </li>
                </ul>
                <h3>
                  Operations that modify objects, arrays and functions affect
                  the underlying data directly. Analogy: ID's in the HTML -
                  changes made to one elements' styling or attribute using its
                  ID will affect all elements with the same ID, just as changes
                  made to an object, array or function using one reference will
                  affect all references to that object, array or function.
                </h3>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="14">
            <Accordion.Header>Arrays</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="15">
            <Accordion.Header>DOM</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="16">
            <Accordion.Header>Events</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="17">
            <Accordion.Header>jQuery</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="18">
            <Accordion.Header>AJAX</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="19">
            <Accordion.Header>Work with API</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="20">
            <Accordion.Header>Web storage</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="21">
            <Accordion.Header>Gulp</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
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
            <Accordion.Body className="notes__section">
              <p>JavaScript library.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What is JSX?</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                JSX stands for JavaScript XML. It is a HTML-like syntax
                extension for JS used in React.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Difference between JS frameworks and libraries?
            </Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                Framework: Inversion of control (the framework calls your code
                rather than the code calling the framework. Provides a structure
                and predefined way to build applications; it manages the control
                flow); Opinionated (set of conventions and dictate how you
                should structure your code); Integrated (provide everything
                needed to build an application: routing, state management, data
                binding and more). Popular frameworks: Angular, Vue.js, Svelte, Ember;
              </p>
              <p>
              Library: Call-based (collection of functions
                and utilities that your code calls to perform specific tasks.
                More control); Unopinionated (more flexibility and freedom in
                how you structure your application); Complementary - used in
                conjunction with other libraries or frameworks to build
                applications. Popular libraries: React.js, jQuery, Backbone.js;
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>React hooks</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>React routing</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>React state and props</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Lists and conditional rendering</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              Stateful vs Stateless components
            </Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <h2 className="notes__title" id="general">
        Additional
      </h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Sync and Async?</Accordion.Header>
          <Accordion.Body className="notes__section">
            <p>
              Sync programming - tasks are performed one ata time in a
              sequential order, blocking further execution until the current
              task is completed. Async programming - tasks are performed without
              blocking the main thread, allowing other tasks to run
              concurrently. It uses callbacks, promises and async/await.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default Notes;
