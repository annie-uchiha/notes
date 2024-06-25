const questionsData = [
  // HTML questions
  {
    id: 1,
    module: "HTML",
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    correct: "Hyper Text Markup Language",
  },
  {
    id: 2,
    module: "HTML",
    question: "What is the correct HTML element for the largest heading?",
    answers: ["<h1>", "<heading>", "<h6>", "<head>"],
    correct: "<h1>",
  },
  {
    id: 3,
    module: "HTML",
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    answers: ["title", "src", "alt", "longdesc"],
    correct: "alt",
  },
  {
    id: 4,
    module: "HTML",
    question: "Which HTML element defines navigation links?",
    answers: ["<navigation>", "<nav>", "<navigate>", "<navbar>"],
    correct: "<nav>",
  },
  {
    id: 5,
    module: "HTML",
    question: "How can you create an ordered list?",
    answers: ["<ul>", "<ol>", "<dl>", "<list>"],
    correct: "<ol>",
  },
  {
    id: 6,
    module: "HTML",
    question:
      "Which HTML element is used to specify a footer for a document or section?",
    answers: ["<bottom>", "<section>", "<footer>", "<foot>"],
    correct: "<footer>",
  },
  {
    id: 7,
    module: "HTML",
    question: "Which is the correct HTML element for inserting a line break?",
    answers: ["<break>", "<lb>", "<br>", "<newline>"],
    correct: "<br>",
  },
  {
    id: 8,
    module: "HTML",
    question: "How do you create a link that opens in a new tab?",
    answers: [
      `<a href="url" new>`,
      `<a href="url" target="_blank">`,
      `<a href="url" target="new">`,
      `<a href="url" newtab>`,
    ],
    correct: `<a href="url" target="_blank">`,
  },
  {
    id: 9,
    module: "HTML",
    question:
      "Which HTML element is used to specify a section that is quoted from another source?",
    answers: ["<blockquote>", "<quote>", "<q>", "<cite>"],
    correct: "<blockquote>",
  },
  {
    id: 10,
    module: "HTML",
    question: "Which HTML attribute is used to define inline styles?",
    answers: ["class", "style", "font", "styles"],
    correct: "style",
  },

  // CSS questions
  {
    id: 11,
    module: "CSS",
    question: "What does CSS stand for?",
    answers: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correct: "Cascading Style Sheets",
  },
  {
    id: 12,
    module: "CSS",
    question: "Which HTML attribute is used to define inline styles?",
    answers: ["style", "class", "font", "styles"],
    correct: "style",
  },
  {
    id: 13,
    module: "CSS",
    question: "Which property is used to change the background color?",
    answers: ["bgcolor", "color", "background-color", "background"],
    correct: "background-color",
  },
  {
    id: 14,
    module: "CSS",
    question: "Which CSS property controls the text size?",
    answers: ["text-size", "font-size", "font-style", "text-style"],
    correct: "font-size",
  },
  {
    id: 15,
    module: "CSS",
    question:
      "How do you make each word in a text start with a capital letter?",
    answers: [
      "text-transform: capitalize;",
      "text-style: capitalize;",
      "text-decoration: capitalize;",
      "font-style: capitalize;",
    ],
    correct: "text-transform: capitalize;",
  },
  {
    id: 16,
    module: "CSS",
    question:
      "Which CSS property is used to change the text color of an element?",
    answers: ["fgcolor", "color", "text-color", "font-color"],
    correct: "color",
  },
  {
    id: 17,
    module: "CSS",
    question: "Which CSS property controls the visibility of an element?",
    answers: ["visible", "display", "visibility", "shown"],
    correct: "visibility",
  },
  {
    id: 18,
    module: "CSS",
    question: "Which CSS property is used to change the font of an element?",
    answers: ["font-style", "font-weight", "font-family", "font"],
    correct: "font-family",
  },
  {
    id: 19,
    module: "CSS",
    question: "Which property is used to change the left margin of an element?",
    answers: ["padding-left", "margin-left", "indent", "space-left"],
    correct: "margin-left",
  },
  {
    id: 20,
    module: "CSS",
    question: "How do you select elements with class name 'test'?",
    answers: [".test", "#test", "test", "*test"],
    correct: ".test",
  },

  // JavaScript questions
  {
    id: 21,
    module: "JavaScript",
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<script>", "<js>", "<javascript>", "<scripting>"],
    correct: "<script>",
  },
  {
    id: 22,
    module: "JavaScript",
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: [
      "<script name='xxx.js'>",
      "<script href='xxx.js'>",
      "<script src='xxx.js'>",
      "<script file='xxx.js'>",
    ],
    correct: "<script src='xxx.js'>",
  },
  {
    id: 23,
    module: "JavaScript",
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      "msgBox('Hello World');",
      "alertBox('Hello World');",
      "msg('Hello World');",
      "alert('Hello World');",
    ],
    correct: "alert('Hello World');",
  },
  {
    id: 24,
    module: "JavaScript",
    question: "How do you create a function in JavaScript?",
    answers: [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "myFunction():function",
    ],
    correct: "function myFunction()",
  },
  {
    id: 25,
    module: "JavaScript",
    question: "How do you call a function named 'myFunction'?",
    answers: [
      "call myFunction()",
      "myFunction()",
      "call function myFunction",
      "Call.myFunction()",
    ],
    correct: "myFunction()",
  },
  {
    id: 26,
    module: "JavaScript",
    question: "How to write an IF statement in JavaScript?",
    answers: ["if i = 5 then", "if (i == 5)", "if i == 5 then", "if i = 5"],
    correct: "if (i == 5)",
  },
  {
    id: 27,
    module: "JavaScript",
    question:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    answers: ["if (i <> 5)", "if (i != 5)", "if i <> 5", "if i =! 5 then"],
    correct: "if (i != 5)",
  },
  {
    id: 28,
    module: "JavaScript",
    question: "How does a WHILE loop start?",
    answers: [
      "while i = 1 to 10",
      "while (i <= 10; i++)",
      "while (i <= 10)",
      "while (i++ <= 10)",
    ],
    correct: "while (i <= 10)",
  },
  {
    id: 29,
    module: "JavaScript",
    question: "How does a FOR loop start?",
    answers: [
      "for (i = 0; i <= 5)",
      "for (i <= 5; i++)",
      "for (i = 0; i <= 5; i++)",
      "for (i = 0; i++)",
    ],
    correct: "for (i = 0; i <= 5; i++)",
  },
  {
    id: 30,
    module: "JavaScript",
    question: "How can you add a comment in a JavaScript?",
    answers: [
      "//This is a comment",
      "'This is a comment",
      "<!--This is a comment-->",
      "/*This is a comment*/",
    ],
    correct: "//This is a comment",
  },

  // React questions
  {
    id: 31,
    module: "React",
    question: "What is React?",
    answers: [
      "A JavaScript framework",
      "A JavaScript library for building user interfaces",
      "A CSS framework",
      "A backend framework",
    ],
    correct: "A JavaScript library for building user interfaces",
  },
  {
    id: 32,
    module: "React",
    question: "What is a React component?",
    answers: [
      "A function or class that optionally accepts inputs and returns a React element",
      "A function that returns an HTML element",
      "A class that handles state management",
      "A tool for debugging React applications",
    ],
    correct:
      "A function or class that optionally accepts inputs and returns a React element",
  },
  {
    id: 33,
    module: "React",
    question: "What is JSX?",
    answers: [
      "A syntax extension for JavaScript",
      "A template language for React",
      "A CSS preprocessor",
      "A type of JavaScript",
    ],
    correct: "A syntax extension for JavaScript",
  },
  {
    id: 34,
    module: "React",
    question: "How do you create a React component using a function?",
    answers: [
      "class MyComponent extends React.Component",
      "function MyComponent() {}",
      "React.createComponent('MyComponent')",
      "const MyComponent = () => {}",
    ],
    correct: "const MyComponent = () => {}",
  },
  {
    id: 35,
    module: "React",
    question: "What is a state in React?",
    answers: [
      "A permanent storage",
      "A way to manage component data",
      "A CSS class",
      "A JavaScript variable",
    ],
    correct: "A way to manage component data",
  },
  {
    id: 36,
    module: "React",
    question: "What is a prop in React?",
    answers: [
      "A way to pass data from one component to another",
      "A CSS property",
      "A method to update state",
      "A type of React component",
    ],
    correct: "A way to pass data from one component to another",
  },
  {
    id: 37,
    module: "React",
    question: "What hook is used to manage state in a functional component?",
    answers: ["useState", "useEffect", "useReducer", "useContext"],
    correct: "useState",
  },
  {
    id: 38,
    module: "React",
    question:
      "What hook is used to perform side effects in a functional component?",
    answers: ["useState", "useEffect", "useReducer", "useContext"],
    correct: "useEffect",
  },
  {
    id: 39,
    module: "React",
    question: "What is the virtual DOM?",
    answers: [
      "A direct representation of the actual DOM",
      "A copy of the real DOM kept in memory",
      "A CSS model",
      "A way to update the UI without reloading the page",
    ],
    correct: "A copy of the real DOM kept in memory",
  },
  {
    id: 40,
    module: "React",
    question: "How do you pass a prop to a child component?",
    answers: [
      "<ChildComponent propName={value} />",
      "<ChildComponent prop={value} />",
      "<ChildComponent {propName: value} />",
      "<ChildComponent [propName]=value />",
    ],
    correct: "<ChildComponent propName={value} />",
  },
];

export default questionsData;
