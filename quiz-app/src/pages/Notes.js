import React from "react";
import "./Notes.scss";

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
        <h2 id="html5">HTML5</h2>
      </div>
      <div>
        <h2 id="css">CSS3</h2>
      </div>
      <div>
        <h2 id="JavaScript">JavaScript</h2>
        <section className="left-section">
          <h1>What is JavaScript?</h1>
          <h3>
            Weakly typed programming language used for Front-end development to
            enhance website interactivity and dynamics through its
            object-oriented capabilities.
          </h3>
        </section>
        <section className="right-section">
          <h1>What does weakly typed mean?</h1>
          <h3>
            It is a type of system where variables are not bound to a specific
            data type. They can be dynamically assigned different types of value
            without explicit type declarations or strict type checking.
          </h3>
        </section>
        <section className="left-section">
          <h1>Variables</h1>
          <h3>
            They hold various types of data, such as numbers, strings, booleans,
            arrays, objects or even functions. They allow programmers to store
            and work with data dynamically, making code more flexible.
          </h3>
          <ul>
            <li>
              var - function scoped; can be re-declared and re-assigned within
              their scope; when hoisted to the top, can cause bugs
            </li>
            <li>
              let - block-scoped; only accessible within their block; can be
              re-assigned but not re-declared; accessible after they have been
              declared;{" "}
            </li>
            <li>
              const - block-scoped; must be initialized with a value when
              declared and can not be re-assigned a new value;
            </li>
          </ul>
        </section>
        <section className="right-section">
          <h1>What does hoisting mean?</h1>
          <h3>
            JS behavior where variables and functions can be declared on the top
            of their containing scope during compilation phase, before the code
            is executed. Only var allows you to use the variable before you have
            declared it.
          </h3>
        </section>
        <section className="left-section">
          <h1>What are the main data types?</h1>
          <ul>
            <li>
              strings - textual data enclosed in "" or ``; can contain letters,
              numbers, symbols, whitespace, special characters;
            </li>
            <li>
              numbers - numeric values; including integers, special nu,eric
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
        </section>
      </div>
      <div>
        <h2 id="reactJS">React.js</h2>
      </div>
    </section>
  );
}

export default Notes;
