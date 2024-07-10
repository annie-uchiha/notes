import React from "react";
import "./Notes.scss";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import boxModelImg from "../components/box-model.png";

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
          <a href="#general">Additional</a>
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
              <p>
                CSS (Cascading Style Sheets) is a stylesheet language used to
                describe the presentation of a document written in HTML or XML
                (including XML dialects such as SVG, MathML, or XHTML). CSS
                describes how elements should be rendered on screen, on paper,
                in speech, or on other media. CSS is used to style HTML
                elements, controlling their appearance, layout, and behavior on
                the web page. CSS consists of properties (such as color,
                font-size, margin) and values assigned to those properties. The
                term "cascading" refers to the way CSS applies styles based on
                multiple rules. Specificity determines which rules are applied
                when there are conflicting styles. CSS allows for responsive web
                design, enabling websites to adapt to different screen sizes and
                devices using media queries.
              </p>
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
              <img
                className="notes__img"
                alt="box-model-img"
                src={boxModelImg}
              ></img>
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
            <Accordion.Body className="notes__section">
              <p>
                CSS selectors are patterns used to select the elements you want
                to style. Common selectors include element selectors, class
                selectors, ID selectors, and attribute selectors.
              </p>
            </Accordion.Body>
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
            <Accordion.Body className="notes__section">
              <p>
                CSS supports animations and transitions, allowing for smooth and
                visually appealing changes to styles.
              </p>
            </Accordion.Body>
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
                <h6>
                  Operations that modify objects, arrays and functions affect
                  the underlying data directly. Analogy: ID's in the HTML -
                  changes made to one elements' styling or attribute using its
                  ID will affect all elements with the same ID, just as changes
                  made to an object, array or function using one reference will
                  affect all references to that object, array or function.
                </h6>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="15">
            <Accordion.Header>Arrays</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                Store collections of data (data lists). They can hold multiple
                values, including other arrays and objects. Each element in
                array has a numeric starting from 0.
              </p>
              <h6>Built-in array methods:</h6>
              <ul>
                <h6>Methods that do not change the original array:</h6>
                <li>
                  at: access an element at a specific index in an array, if the
                  index is out of bounds = undefined;
                </li>
                <li>
                  map: creates a new array from the results of a called
                  function;
                </li>
                <li>
                  filter: creates a new array with all elements that pass the
                  test implemented by the provided function;
                </li>
                <li>
                  slice: returns a copy of a portion of an array into a new
                  array object selected from start to end (end not included);
                </li>
                <li>
                  concat: combines tow or more arrays and returns a new array
                  without modifying the existing one;
                </li>
                <li>
                  findIndex: returns the index of the first element that
                  satisfied the provided testing function, otherwise it returns
                  -1;
                </li>
                <li>
                  indexOf: returns the first index at which an element can be
                  found, or -1 if it is not present;
                </li>
                <li>join: joins all elements of an array into a string;</li>
                <h6>Built-in array methods that change the original array:</h6>
                <li>
                  push: adds one more element to the end of an array and returns
                  the new length of the array;
                </li>
                <li>
                  pop: removes the last element of the array and returns the
                  elements;
                </li>
                <li>
                  unshift: adds element to the begining and returns the new
                  length;
                </li>
                <li>
                  shift: removes the first element of an array and returns the
                  removed element and updated the indices of the remaining
                  elements;
                </li>
                <li>
                  splice: adds or removes elements from an array at a specified
                  index and returns the removed elements as a new array;
                </li>
                <li>sort: sorts the elements and returns the sordet array;</li>
                <li>
                  fill: change all elements to the static value, from start
                  index(0) to an end one, returns the modified array;
                </li>
                <li>reverse: reverse the order of the array;</li>
                <li>
                  includes: determines if an array includes an element, returns
                  true or false;
                </li>
              </ul>
              <h6>Loop through arrays: for; for ... if; forEach;</h6>
              <h6>
                * forEach - executes a provided function once for each array
                element;
              </h6>
              <h6>Create new array: spread operator; concat; splice;</h6>
              <h6>
                * spread operator - allows an iterable (array, string) to be
                expanded into individual elements. Can be used to make copies of
                arrays, concatenate arrays, pass function arguments, etc.
              </h6>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="16">
            <Accordion.Header>Events</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="17">
            <Accordion.Header>DOM</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="18">
            <Accordion.Header>jQuery</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="19">
            <Accordion.Header>AJAX</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="20">
            <Accordion.Header>Work with API</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="21">
            <Accordion.Header>Web storage</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="22">
            <Accordion.Header>Gulp</Accordion.Header>
            <Accordion.Body className="notes__section">
              <h6>Open source JS toolkit (JS task runner).</h6>
              <h6>
                * task runner: post rocessor; makes the code tidier and gets it
                ready for deployment (compiling the code, minifying files,
                running tests, linting, deploying applications.); Task runners
                help improve efficiency, reduce errors and ensure consistency
                across development environments.
              </h6>
              <p>
                Gulp uses code-centric approach, allowing developers to define
                tasks using JS. This makes it more flexible an easier to read an
                maintain.
              </p>
              <p>
                Streaming: Gulp uses Node.js streams, which allows for efficient
                handling of files. This streaming mechanism enables Gulp to pipe
                data through multiple tasks without creating temporary files
                leading to faster build process.
              </p>
              <p>
                Plugins: for variety of tasks (file minification, compilation,
                concatination, etc.). Designed to do one thing well and they can
                be composed to build complex workflows.
              </p>
              <p>
                Simple and easy to use API, consisting of four methods: src,
                dest, task, watch.
              </p>
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
                binding and more). Popular frameworks: Angular, Vue.js, Svelte,
                Ember;
              </p>
              <p>
                Library: Call-based (collection of functions and utilities that
                your code calls to perform specific tasks. More control);
                Unopinionated (more flexibility and freedom in how you structure
                your application); Complementary - used in conjunction with
                other libraries or frameworks to build applications. Popular
                libraries: React.js, jQuery, Backbone.js;
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
            <Accordion.Body className="notes__section">
              <h6>
                Props - used to pass data from a parent component to a child
                component.
              </h6>
              <h6>
                State - used to store info that can change and affect the
                rendering of the component. Unlike props, which are read-only
                and passed from parent to child components, state is local to
                the component and can be updated directly within the component.
              </h6>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Lists and conditional rendering</Accordion.Header>
            <Accordion.Body className="notes__section"></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              Stateful vs Stateless components
            </Accordion.Header>
            <Accordion.Body className="notes__section">
              <h6>
                Stateless components (functional components) - are simple
                functions that take props as input and return React elements.
                They do not manage their own state.
              </h6>
              <h6>
                Stateful components - class components, manage their own state.
                They can hold and modify state using the this.state object and
                the setState method. It can also be achieved in functional
                components using hooks.
              </h6>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>Lifecycle methods</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                Sequence that describes the methods that occur throughout the
                "life" of the component. React components go through several
                lifecycle phases from creation to deletion amd React provides
                lifecycle methods that allow developers to execute code at a
                specific point in a components lifecycle. Managed by using
                hooks. Traditionally associated with class components
                (componentDidMount, componentDidUpdate, componentWillUnmount,
                shouldComponentUpdate, getDerivedStateFromProps,
                componentDidCatch) but after the introduction of hooks,
                functional components can also handle lifecycle events.
              </p>
              <ul>
                <li>
                  useEffect can handle the class components: componentDidMount,
                  componentDidUpdate, componentDidUnmount
                </li>
                <li>useState and useReducer can manage state updated</li>
                <li>useContext - context updates</li>
              </ul>
            </Accordion.Body>
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
