import React from "react";
import "./Notes.scss";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import boxModelImg from "../components/box-model.png";
import cookieStorage from "../components/cookie.local.storage.png";
import eventLoopsEvents from "../components/event-loop-vs-events.png";
import routerSetUp from "../components/react-router-setup.png";
import routerComponents from "../components/react-router-components.png";
import lifecycleImg from "../components/lifecycle-methods.png";
import stateAndProp from "../components/react-state-and-prop.png";
import objectImg from "../components/javascript-object.png";
import classKeyword from "../components/class-and-new-keyword.png";
import factoryVsConstructor from "../components/factory-vs-constructor-function.png";
import staticMethods from "../components/static-properties-and-methods.png";
import staticNotes from "../components/static-method-notes.jpg";
import callApplyBind from "../components/apply-call-and-bind.png";
import polymorphism from "../components/polymorphism.png";
import abstraction from "../components/abstraction.png";
import inheritance from "../components/inheritance.png";

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
          <a href="#general">Additional</a>
        </li>
        <li>
          <a href="#reactJS">React.js</a>
        </li>
        <li>
          <a href="#mongoDB">MongoDB</a>
        </li>
        <li><a href="#mongoDB">Node.js</a></li>
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
          <Accordion.Item eventKey="2">
            <Accordion.Header>What is a markup language?</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                Markup language is a set of symbols or sequences, inserted into
                the text to transfer information about its output or structure.
                It is part of the computer languages class. A text document
                written with a markup language contains not only the text itself
                (as the sequence of words and symbols), but also the additional
                information about its segments, for example, specification of
                the headings, accentuation, lists etc. For more complicated
                cases, the markup language allows the input of interactive
                elements and contents of other documents.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>A tag/ a descriptor</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                A tag/a descriptor is a named marker. In SGML (HTML, WML,
                AmigaGuide, and languages of the XML family) it is the element
                of a hypertext markup language. The text contained in between
                the start tag and the end tag is displayed and located according
                to the properties, specified in the start tag.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Attribute</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                An attribute is part of a tag which extends the capacity of
                specific tags and allows agile management of the container
                contents.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Syntax</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                Syntax is a set of rules that describe the combinations of
                alphabet symbols compiled by a properly structured program
                (document) or its fragment. The syntax is opposed to semantics
                of the language. The syntax describes “clear” language, while
                semantics applies values (actions) to numerous syntax
                constructs.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Semantics</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                Semantics is a discipline that studies the meaning formalization
                of programming languages constructs through building the formal
                mathematical models of them.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Anchor</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                An anchor is a page mark with a unique name at a certain place
                on a web page. It is used to jump to that specific place.
                Anchors come in handy in large documents when you need quick
                access to needed segments.
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
              <p>
                CSS rule: A CSS rule is a block that consists of a selector, a
                property, and a value. The properties and values for a selector
                are written in brackets. Every CSS rule consists of two parts:
                select and one or more declarations. Each declarations consists
                of property and value.
              </p>
              <p>
                CSS specificity: CSS selector specificity is a way which
                browsers use to define which CSS values are the most relevant
                for the element and need to be applied accordingly.
              </p>
              <p>Block vs Inline vs Inline-block:</p>
              <p>
                Block elements are highest level elements that are visually
                formatted as blocks and located vertically on a page in a
                browser window.
              </p>
              <p>
                Inline elements are elements that generate inline containers.
                They don’t form any new blocks of content.{" "}
              </p>
              <p>
                Inline-block elements are inline elements but you can apply
                margins, paddings, width, and height values to them.
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
              />
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
              <p>
                ID, Classes, Attributes, Types, Elements, Universal. A CSS
                selector is part of the CSS rule which tells the browser which
                element or elements of the web page the style will be applied
                to/ A compound selector is a sequence of simple selectors that
                are not divided by combinators, so one goes right after another.
                A complex selector is a sequence of selectors, divided by
                combinators. Selector grouping is selectors separated by a
                comma. Combinators are used for joining simple CSS selectors,
                and they specify the connection between them.
              </p>
              <p>
                Pseudo-classes: a simple selector used to select what can’t be
                selected with other selectors, or it is done in a too
                complicated way.
              </p>
              <p>
                Pseudo-element: a virtual element that doesn’t exist in an
                explicit form within the element tree of a document.
                Pseudo-elements are used to select the parts of an element, that
                cannot be selected with other selectors, and also for styling
                only certain parts of an element.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Fonts, FontFace</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                Font: a graphic drawing of typefaces of letters and symbols,
                which create a wholesome stylistic and compositional system, a
                set of symbols of particular size and look. A font family is a
                set of fonts that share the same characteristics. A font style
                is a visual change of a font that belongs to the same typeface.
              </p>
              <p>
                Font families: A font family is a set of fonts that share the
                same characteristics. Sans serif is a typeface that does not
                have extending features called "serifs" at the end of strokes.
                Serif is a typeface that has extending features called serifs on
                its symbols. Cursive is a handwritten font with many smooth
                transitions and flowy elements, whirls etc. Monospace is a font
                where every two letters have equal spacing between them.
              </p>
              <p>
                Font properties: Font-variant font-stretch, letter-spacing,
                white-space, text-decoration, text-shadow;
              </p>
              <p>
                Font style: A font style is a visual change of a font that
                belongs to the same typeface.
              </p>

              <p>
                Text properties: line-height, text-align, white-space,
                font-display;
              </p>
              <p>
                Line-spacing is the space between the lines of a paragraph. A
                baseline is a conceptual line that serves as axis for aligning
                the bottom edge of most letters. Sans serif is a typeface that
                does not have extending features called "serifs" at the end of
                strokes. Serif is a typeface that has extending features called
                serifs on its symbols. Cursive is a handwritten font with many
                smooth transitions and flowy elements, whirls etc. Monospace is
                a font where every two letters have equal spacing between them.
                A glyph is a specific graphic image of a symbol.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>BEM, Bootstrap</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                The BEM (Block Element Modifier) methodology is a front-end
                development approach used to structure CSS classes. It divides a
                web page into blocks (independent components), elements (parts
                of blocks), and modifiers (variants or states of
                blocks/elements), ensuring modularity and reusability.
              </p>
              <p>
                Bootstrap: a popular CSS and JS framework. It contains
                ready-made styles and scripts, so you only need to write the
                needed style classes and attributes for html-elements to apply
                them.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Creating forms</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                Web form on a site is an analog of a paper form, survey, or
                blank sheet. Form fields are the elements of a form where the
                text can be put in. These are text fields, switches, buttons,
                etc. The choice of elements depends on the type of information
                needed from the visitor. Validation rules are rules that ensure
                the proper filling of forms by the website visitor.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>SVG</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                SVG (Scalable Vector Graphics) is the markup language for
                scalable vector graphics, created by the W3C; it is part of the
                XML and is used for describing two-dimensional vector and
                vector/halftone graphics in the XML format. It supports both
                static and animated interactive graphics. SVG standard is an
                open standard without license charges.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>CSS animations</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                CSS supports animations and transitions, allowing for smooth and
                visually appealing changes to styles.
              </p>
              <ul>
                <li>
                  Animation — a gradual change of visual parameters of an
                  object.
                </li>
                <li>
                  Transition — an animation which occurs between the two states
                  of an object (starting state and end-state). It may be a
                  change of size, transparency, position etc. There’s always a
                  start point and an end point.
                </li>
                <li>
                  CSS animation — an animation which does not necessarily
                  include the start and end stages, or requires some more
                  careful frame-by-frame setup.
                </li>
                <li>
                  Key frame — a property of an element (transparency, color,
                  position etc.) which has to be applied to the element at a
                  certain moment of time.
                </li>
                <li>
                  Time function for key frames — a time function which is to be
                  used when moving the animation to the next key frame.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>CSS GRID</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                CSS Grid Layout is the most powerful tool for mapping out
                layouts that is currently available in CSS. This is a
                two-dimensional system that can contain rows and columns (while
                the Flexbox module is a one-dimensional system). The purpose of
                Grid Layout is to fully change the design of user interfaces,
                which are completely grid-based. Grid container is an element
                with a “display: grid” property. It is parent to all the other
                grid items. Grid items are direct descendants of the grid
                container. It is important that the descendants of grid items
                are no longer descendants of the grid container. Grid lines are
                division lines which make up the grid structure. They can be
                horizontal and vertical (row lines and column lines) and are
                placed on both sides of a row or a grid. Grid track is the space
                between the two neighboring grid lines. Grid cell is the space
                in between the two neighboring horizontal and two neighboring
                vertical grid lines. Grid area is a general space surrounded by
                four grid lines. A grid area can consist of any number of grid
                cells.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>Cross-browser compatibility</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                A browser is a special program for viewing websites on the
                internet. Cross browser is the right layout of the website that
                helps the pages be displayed in the same way in different
                browsers. The execution is conveyed by using HTML and CSS as
                well as many different hacks, and sometimes JavaScript. Vendor
                prefixes are prefixes to the name of a CSS property that are
                added by vendors, or manufacturers of browsers for
                unstandardized properties. Progressive enhancement is an
                approach that suggests that web interfaces should be created
                step-by-step in a cycled way from simple to complex. Graceful
                Degradation is a development approach when the product is
                created first, it expects a full range of components from the
                environment, and then the ability to work without some of them
                is added.
              </p>
              <p>
                https://autoprefixer.github.io/ - Autoprefixer CSS can generate
                the prefixes for your code.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>Adaptive and responsive design</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                Adaptive design uses fixed layouts tailored to specific screen
                sizes, while responsive design uses flexible layouts that adjust
                dynamically to any screen size.
              </p>
              <p>
                A media query is a statement consisting of a keyword that
                describes the type of device (optional) and a statement that
                checks the specs of the device. Usually width is the one being
                checked. A media query is a logical statement that returns
                either true or false.
              </p>
              <p>
                Fixed or static layout is a layout that will stay the same
                despite the size of a browser window or a device. All the
                elements have specific width in pixels. If the screen resolution
                is big, the browser window will be full screen, sometimes with
                extra space. Vice versa, on mobile devices a scrollbar appears.
              </p>
              <p>
                Fluid layout is a layout when a page takes up the whole browser
                width despite its size and the device you view it from. The
                width of elements is given in percent from the width of the
                window, and thus occupies the whole available space. It is hard
                to achieve efficient design with this layout since the pages
                won’t look the same on all devices.
              </p>
              <p>
                Responsive layout is when pages respond to any screen
                resolution. It doesn’t matter whether a user opened it on a
                laptop, a giant hi res screen or a smartphone - the page will
                look good and be comfortable to use anyway. It is achieved by
                applying multiple stylesheets for different resolutions.
              </p>
              <p>
                Dynamic layout is created with a CMS right away from the
                database blocks, chosen by the layout designer. The page is laid
                out every time its URL gets a query, this takes longer than a
                page once made by hand.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>Responsive graphics</Accordion.Header>
            <Accordion.Body className="notes__section">
              <h6>Ways to make graphics responsive:</h6>
              <ul>
                <li>
                  Using percentage-based widths: Set the width of images and
                  graphics to a percentage of their container.
                </li>
                <li>
                  CSS media queries: Adjust the styles of graphics based on
                  different screen sizes.
                </li>
                <li>
                  Flexible grid systems: Use CSS Grid or Flexbox to create
                  responsive layouts that adjust the size of graphics within a
                  grid.
                </li>
                <li>
                  Viewport units: Use vw, vh, vmin, and vmax units to scale
                  graphics relative to the viewport size.
                </li>
                <li>
                  Object-fit property: Make images fit within their containers
                  while preserving aspect ratio.
                </li>
                <li>
                  Picture element: Use the 'picture element to serve different
                  images based on screen size or resolution.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="13">
            <Accordion.Header>Responsive navigation</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                Website navigation is the possibility to move between the pages.
                The simpler and clearer it is, the better for the users, since
                it helps find the needed information and orient oneself on the
                website faster.
              </p>
              <p>
                A hamburger menu is an icon with three horizontal lines (two
                buns and a patty), which is used to signify a menu. Clicking the
                icon opens up the navigation panel.
              </p>
              <p>
                Dropup menu is used to save space on a page. It is relevant if
                an internet platform has a complex multi-level organization and
                you need to make the navigation as informative as possible. 5
                points in a row is no use, so instead, hovering over the item
                makes the sub-items drop from it.
              </p>
              <p>
                Curtain Menu is a full screen menu with a few smooth
                transitions.
              </p>
              <p>
                Collapse Sidebar is a menu that collapses to the side of a page
                and takes up some part of it.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="14">
            <Accordion.Header>SEO for developer</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                A search engine is a computer system for info search. One of the
                most well-known ways to use it is web-services for finding text
                or graphic information on the web.
              </p>
              <p>
                Search engine optimization or SEO is a set of regulations for
                internal and external optimization aimed to raise the rank of
                the website in the search results of search engines according to
                the user queries. It is meant to increase web traffic (for info
                resources), number of potential clients (for commerce), and
                future monetization (income) for this traffic.
              </p>
              <p>
                Web traffic or Internet traffic is the scope of information
                transferred via computer network within a certain time frame.
              </p>
              <p>
                URL is the first thing the search engine sees. It also creates
                the impression of a website for a user. The way the search
                engine reads the website address is the determining factor of
                SEO efficiency.
              </p>
              <div>
                Ways to increase SEO:
                <ul>
                  <li>
                    Meta tags are tags that supply additional information about
                    the website page to the search systems. Meta tags are placed
                    between head open and close tag.
                  </li>
                  <li>Adding favicon</li>
                  <li>
                    Optimizing page load speed: Minify CSS/JS, use image
                    compression, and leverage browser caching.
                  </li>
                  <li>
                    Using semantic HTML: Proper HTML tags (like header, article,
                    section) improve readability and search engine
                    understanding.
                  </li>
                  <li>
                    Creating an XML sitemap: Helps search engines index site
                    pages efficiently.
                  </li>
                  <li>
                    Using structured data: Implement schema markup to enhance
                    search engine results.
                  </li>
                  <li>
                    Ensuring mobile-friendliness: Use responsive design
                    principles to enhance mobile user experience.
                  </li>
                  <li>
                    Improving URL structure: Use descriptive, keyword-rich URLs.
                  </li>
                  <li>
                    Implementing alt attributes: Use descriptive alt text for
                    images.
                  </li>
                  <li>
                    Creating high-quality content: Regularly update the site
                    with relevant and valuable content.
                  </li>
                  <li>
                    Using HTTPS: Ensure the site is secure with an SSL
                    certificate.
                  </li>
                  <li>
                    Internal linking: Improve site navigation and link to
                    important pages within the site.
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="15">
            <Accordion.Header>
              CSS Positioning and transformation
            </Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                A reference point - the absolute elements by default are
                positioned in the coordinate system, bound to the browser
                window. But it can be changed. Position is what helps to define
                where the elements appear on screen and how they appear in CSS.
                Static position is a default value for elements. Statically
                positioned objects are displayed in the normal flow of pages.
                Absolute position is the position when an element doesn’t exist
                the flow of a document and its position is set referred to the
                edges of a browser. This type can be applied by the absolute
                value of the position property. The coordinates are set in
                relation to the browser window edges aka display area. Fixed
                positioning is similar to absolute but with a few differences: A
                fixed element is also out of the flow.. A fixed element is bound
                to a certain point in a browser window and stays there even when
                scrolling the page. A fixed element can be positioned with help
                of top, left, right, bottom properties, but the reference point
                is always bound to the browser window. Relative position is used
                for fixing an element at a specific place when scrolling the
                page. It is usually applied to headings, menu or navigation bars
                for quick access or visibility. CSS transform is transforming an
                element referred to the internal coordinate system without
                interfering with any other elements on a web page.
              </p>
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
            <Accordion.Body className="notes__section">
              <p>
                Weakly typed programming language used for Front-end development
                to create interactive and dynamic web applications. JS is a
                single-threaded asynchronous programming language.
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
              <p>
                Temporal Dead Zone: a behavior that occurs with variables
                declared using let and const keywords. It is a behavior where we
                try to access a variable before it is initialized.
              </p>
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
              <ul>
                Key components of a class:
                <li>
                  Class declaration - using class keyword followed by a class
                  name;
                  <img
                    className="notes__img"
                    alt="class-keyword-img"
                    src={classKeyword}
                  />
                </li>
                <li>
                  Constructor method;
                  <p>
                    The factory function is a pattern for creating objects.
                    Regular functions that return new objects. Simplicity. No
                    new keywords. Encapsulation: they can encapsulate private
                    data and functions using closure.
                  </p>
                  <img
                    className="notes__img"
                    alt="factory-vs-constructor"
                    src={factoryVsConstructor}
                  />
                  <p>
                    *Encapsulation: bundling of data (variables) and methods
                    (functions) that operate on the data into a single unit or
                    class. It also involves restricting direct access to some of
                    an object's components which means that the internal
                    representation of an object is hidden from the outside. This
                    is typically achieved through access modifiers like private
                    and protected. Can be implemented using closures, symbols
                    and recently - private class yields.
                  </p>
                  <p>
                    *Abstraction - concept of hiding the complex implementation
                    details of a system and exposing only the necessary parts to
                    the user. This allows for simplifying complex systems by
                    modeling classes appropriate to the problem domain,
                    emphasizing what an object does rather than how it does it.
                    Achieved through classes and methods, as well as by defining
                    interfaces and abstract classes.
                  </p>
                  <img
                    className="notes__img"
                    alt="abstraction-img"
                    src={abstraction}
                  />
                  <p>
                    Constructor function: common way to create objects that
                    share the same properties and methods. They use the new
                    keyword to create an instance of an object. Function
                    definition: define a function where this refers to the
                    object that'll be created. Prototype: properties and methods
                    defined on the constructor's prototype are shared across all
                    instances. To avoid duplicating methods for every instance,
                    you can add methods to the constructor functions' prototype.
                  </p>
                </li>
                <li>
                  Methods;
                  <p>
                    Apply, call and bind - useful for managing the context
                    (this) within methods, as well as for borrowing methods from
                    other classes or objects.
                  </p>
                  <ul>
                    <li>
                      Call - invoke a method of a class with a specific this
                      value and arguments.
                    </li>
                    <li>
                      *extends - keyword to create class that is a child of
                      another class. The child class inherits all the properties
                      and methods of the parent class.
                    </li>
                    <li>
                      *super - keyword for calling the constructor of the parent
                      class and to access methods of the parent class. Must be
                      called before this.
                    </li>
                    <li>
                      Apply - method similar to call but takes arguments as an
                      array.
                    </li>
                    <li>
                      Bind - method, creates a new function that when called has
                      its this value set to the provided value. Useful for event
                      handlers or callbacks where you want to ensure that this
                      refers to the class instance.
                    </li>
                  </ul>
                  <p>
                    Combining apply, call and bind helps setup a dynamic context
                    or partial application.
                  </p>
                  <img
                    className="notes__img"
                    alt="call-apply-bind-img"
                    src={callApplyBind}
                  />
                </li>
                <li>
                  Inheritance - allows a class (called a subclass or derived
                  class) to inherit properties and methods from another class
                  (called superclass or base class). Implemented by the extends
                  and super keywords;
                  <img
                    className="notes__img"
                    alt="inheritance-img"
                    src={inheritance}
                  />
                </li>
                <li>
                  Static methods and static properties - belong to the
                  constructor function (or class) itself, rather than to the
                  instances. They can be accessed directly on the constructor or
                  class, without needing to create an instance;
                  <img
                    className="notes__img"
                    alt="static-notes"
                    src={staticNotes}
                  />
                  <img
                    className="notes__img"
                    alt="static-methods-and-properties-img"
                    src={staticMethods}
                  />
                  <p>
                    Static properties: used to store data rather than functions.
                    Properties of the constructor function or class itself. Used
                    also to store const or configuration values that are shared
                    across all instances.
                  </p>
                  <p>
                    Static methods are usd for utility functions that don't
                    require any instance data. They cannot access instance
                    properties or methods directly.
                  </p>
                  <p>
                    Static methods and properties are accessed directly on the
                    class or constructor, not on instances.
                  </p>
                </li>
                <li>
                  Polymorphism - inheritance facilities polymorphism where a
                  subclass can be treated as an instance of its superclass.
                  Useful for generic code that can work with objects of multiple
                  types.
                  <img
                    className="notes__img"
                    alt="polymorphism-img"
                    src={polymorphism}
                  />
                </li>
              </ul>
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
                    readable way to write code.
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
              <img className="notes__img" alt="object-img" src={objectImg} />
              <p>
                this keyword is a special identifier referring to the current
                execution context. Its value is determined by how a function is
                called rather than where it is defined:
              </p>
              <p>
                global context - outside of any function this refers to the
                global object. In browsers, the global object is window.
              </p>
              <p>
                function context - refers to the object that is calling the
                function - but it depends on how the function is invoked.
              </p>
              <p>
                Method invocation: this refers to the object that the method is
                called on.
              </p>
              <p>
                A function within an object is called a method. The method uses
                the properties in the object.
              </p>
              <ul>
                Objects, arrays and functions are reference values because they
                don't store reference to the memory location where data is
                stored:
                <li>
                  Objects: when you assign an object to a variable, what you are
                  storing in that variable is a reference to the memory location
                  where the object is stored. So if you assign the same object
                  to multiple variables or pass it as an argument to a function,
                  you're working with the same underlying object.
                </li>
                <li>
                  Arrays: also objects, similar behavior. When you assign an
                  array to a variable, you are storing a reference to the memory
                  location where the array is stored. Like objects, if you
                  assign the same array to multiple variables or pass it as an
                  argument to a function you're working with the same underlying
                  array.
                </li>
                <li>
                  Functions: when you define a function, you create an object of
                  type function.
                </li>
                <li>
                  Operations that modify objects, arrays, functions affect the
                  underlying data directly. Analogy: ID's in HTML - changes made
                  to one elements' styling or attributes using its ID will
                  affect all elements with the same ID, just as changes made to
                  an object, array or function using one reference will affect
                  all references to that object, array or function.
                </li>
                <li>
                  Most times objects are declared with a const because even if
                  we do make a change it is to a property within the object not
                  the object itself.
                </li>
                <li>Primitives can not be changed while objects can be.</li>
                <li>
                  You can access property of object using dot notation
                  (object.property) or bracket notation (object['property']) -
                  more useful if property name is dynamic or contains special
                  characters.
                </li>
                <li>
                  Adding and modifying properties - simply assign a value to a
                  new or existing property.
                </li>
                <li>
                  Object literals: create objects directly in the code, consists
                  of coma-separated key-value pairs enclosed in curly braces.
                </li>
                <li>
                  Iterations: you can loop through the properties of an object
                  using for ... in loop or object.keys(), object.values(), or
                  object.entries() methods
                </li>
              </ul>
              <ul>
                Built-in methods:
                <li>
                  object.keys() - returns an array of the objects own enumerable
                  property names (keys).
                </li>
                <li>
                  object.values() - returns an array of the objects own
                  enumerable values.
                </li>
                <li>
                  object.entries() - returns an array of the objects own
                  enumerable properties (keys; values).
                </li>
                <li>
                  object.assign() - copy values from the objects own properties
                  to the target object.
                </li>
                <li>
                  object.freeze() - freezes an object and prevents it from being
                  added a new property, existing properties cannot be removed
                  and changed.
                </li>
                <li>
                  object.seal(obj) - new properties cannot be added, existing
                  cannot be removed but they can be modified.
                </li>
                <li>
                  object.create(proto,[propertiesObject]) - creates a new object
                  with specified prototyped object and optional properties.
                  Prototypal inheritance.
                </li>
                <li>
                  object.hasOwnProperty(prop) - returns a boolean indicating
                  wether an object has a specified property as its own (not
                  inherited).{" "}
                </li>
              </ul>
              <p>
                JS objects are dynamic, meaning you can add, modify or delete
                properties and methods on runtime. This allows for powerful and
                flexible programming pattern.
              </p>
              <p>
                *JSON: JavaScript Object Natation - lightweight data interchange
                format. It transmits data between a server and a web
                application, used for configuration of files and data storage.
                JSON syntax consists of key-value pairs, where keys are string
                and values can be strings, numbers, arrays, objects, booleans or
                null. It allows nesting. It can be parsed into objects using
                JSON.parse() method and JS objects can be converted tp JSON
                strings via JSON.stringify(). Used for data transmission, data
                storage API's.
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
            <Accordion.Body className="notes__section">
              <p>
                Actions or occurrences that happen in the browser, triggered by
                user interaction or by the browser itself. These interactions
                include mouse clicks, keyboard inputs, page loading, etc.
              </p>
              <p>
                Event handling involves attaching event listeners to HTML
                elements, which listen for specific events and then executes a
                function in response.
              </p>
              <img
                className="notes__img"
                alt="event-loop-vs-events"
                src={eventLoopsEvents}
              />
              <p>
                Event loops are part of the JS runtime environment responsible
                for async operations. It checks the call stack and task queue.
                When the call stack is empty it takes tasks from the task queue
                for execution. Stack overflow: occurs when the call stack
                exceeds its maximum size due to excessive function calls,
                leading to a stack overflow error.
              </p>
              <p>
                Events in JS: drive the interactivity of web applications,
                allowing them to respond dynamically to user actions.
              </p>
              <p>
                Event propagation: mechanism by which events are transmitted
                through the DOM hierarchy. Two phases: capturing and bubbling.
              </p>
              <p>
                Bubbling: after the event reaches the target element, it then
                bubbles up through the ancestor elements. This might become a
                problem because it causes events to propagate up the DOM tree,
                triggering parent elements' event handlers attached to parent
                elements that you don't want triggered when a child element is
                interacted with. Methods like stopPropagation() can prevent
                this.
              </p>
              <p>
                Delegation: technique for managing event handling - attach a
                single event listener to a parent element, instead of multiple
                to individual child elements.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="17">
            <Accordion.Header>DOM</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>DOM - Document Object Model</p>
              <p>
                An element may be added, changed, or removed from a document
                using the DOM, a programming interface for HTML and XML
                documents. It specifies how a document is accessed and handled,
                as well as its logical structure. The DOM allows the webpage to
                be represented as a structured hierarchy, making it simple to
                access and modify HTML tags, IDs, classes, attributes, and
                elements using the Documen object's provided commands and
                methods. This makes it easier for programmers and users to
                understand the document.
              </p>
              <p>
                There are several methods to find and manipulate the behavior of
                the HTML Element:
              </p>
              <ul>
                <li>getElementById() method - select by element's ID</li>
                <li>
                  getElementsByClassName() method - select based on class
                  attribute
                </li>
                <li>getElementsByName() method </li>
                <li>
                  getElementsByTagName() method - select based on tag name
                </li>
                <li>
                  querySelector() method - selects the first element that
                  matches a specified CSS selector
                </li>
                <li>
                  querySelectorAll() method - selects all elements that match a
                  specified CSS selector
                </li>
                <li>
                  * Some selectors might not be supported in older browsers.
                </li>
              </ul>
              <p>Built-in methods in DOM</p>
              <ul>
                <li>
                  createElement - creates a new element with a specified tag
                  name;
                </li>
                <li>
                  appendChild - appends a node as the last child of a specified
                  parent node;
                </li>
                <li>removeChild - removes a child node from the DOM;</li>
                <li>
                  setAttribute - sets the value of an attribute on the specific
                  element;
                </li>
                <li>
                  getAttribute - retrieves the value of a specified attribute on
                  the element;
                </li>
                <li>
                  addEventListener - attaches an event listener to an element,
                  triggering a function when event occurs;
                </li>
                <li>
                  removeEventListener - removes an event listener from an
                  element;
                </li>
              </ul>
              <p>Event listener vs. On-event</p>
              <p>
                Event listener: functions attached to elements to listen to
                specific events (click, mouseover, keyup). Can be attached to
                multiple elements or multiple events on the same element. Better
                control and flexibility. Separate JS behavior from HTML markup.
              </p>
              <p>
                On-event: HTML attribute that specify JS code to execute when a
                specific event occurs on element (onclick, onmouseover,
                onkeydown). Simpler. Limitations: attached to only one event
                handler per event type per element. For small projects and quick
                prototyping.
              </p>
              <p>*BOM - Browser Object Model</p>
              <p>
                Browser-specific convention referring to all the object exposed
                by the web browser. The BOM allows JS to "interact with" the
                browser. The window object represents a browser window and all
                its corresponding features. A window object is created
                automatically by the browser itself. JS's window.screen object
                contains information about the user's screen.
              </p>
              <p>Window properties of BOM:</p>
              <ul>
                <li>screen.width</li>
                <li>screen.height</li>
                <li>screen.availWidth</li>
                <li>screen.availHeight</li>
                <li>screen.colorDepth</li>
                <li>screen.pixelDepth</li>
              </ul>
              <p>Window methods of BOM:</p>
              <ul>
                <li>window.open() method</li>
                <li>window.close() method</li>
                <li>window.moveTo() method</li>
                <li>window.moveBy() method</li>
                <li>window.resizeTo() method</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="18">
            <Accordion.Header>
              Is JavaScript a statically typed or a dynamically typed language?
            </Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                JavaScript is a dynamically typed language. In a dynamically
                typed language, the type of a variable is checked during
                run-time in a contrast to a statically typed language, where the
                type of a variable is checked during compile-time.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="19">
            <Accordion.Header>Global and local scopes</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                Global Scope: A variable with global scope is one that can be
                accessed from anywhere in the application. It is the default
                scope for all code running in script mode.
              </p>
              <p>
                Local Scope: Any declared variable inside of a function is
                referred to as having local scope. Within a function, a local
                variable can be accessed. It throws an error if you attempt to
                access any variables specified inside a function from the
                outside or another function. The scope for code running in
                module mode.
              </p>
              <p>
                Function Scope: In JavaScript, every new function results in the
                general of a fresh scope. Variables declared inside a function
                cannot be accessed from outside the function or from another
                function. When used inside of a function, var, let and const all
                act similarly. The scope created with a function.
              </p>
              <p>
                Scope Chain: a situation when one variable, which may have a
                global, local, function or block scope, is used by another
                variable, function, or block, which may also have a global,
                local, function or block scope. This entire chain construction
                continues till the user decides to halt it in accordance with
                the need.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="20">
            <Accordion.Header>Explain This keyword</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                this keyword refers to an object. The thing about it is that the
                object it refers to will vary depending on how and where this is
                being called. If we call it by itself, meaning not within a
                function, object, or whatever it will refer to the global window
                object. The majority of time, the value of this depends on the
                runtime binding used to call a function. It may change every
                time the function is called and cannot be changed by assignment
                while the function is being executed. Although arrow functions
                don't give their own this binding (it keeps the this value of
                the enclosing lexical context), the bind() method can set the
                value of a function's this regardless of how it's called.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="21">
            <Accordion.Header>Functions</Accordion.Header>
            <Accordion.Body className="notes__section">
              <h6>
                Functions are blocks of reusable code that perform a specific
                task.
              </h6>
              <p>
                Arguments - added in brackets; allow us to call the function but
                change the strings inside just how in SCSS we use _mixins but we
                can change things up without changing the main mixin. Arguments
                are the values that a function needs to wrk with.
              </p>
              <ul>
                Times when we might need to write the return statement:
                <li>
                  Returning a value: if the function is suppose to produce a
                  result or a value that needs to be used elsewhere in the code.
                </li>
                <li>
                  Early termination: if the function needs to terminate early
                  based on certain conditions, a return statement can be used to
                  exit the function prematurely.
                </li>
                <li>
                  Explicit Control Flow: the return statement at the end of the
                  function can make the control flow more explicit and easier to
                  understand.
                </li>
              </ul>
              <ul>
                Times when it may not be needed:
                <li>
                  Void function: if the function does not need to return a
                  value, you can omit it all together, or explicitly return
                  undefined.
                </li>
                <li>
                  Side Effects Only: if the function performs some actions or
                  side effects (modifying a global variable or logging to the
                  console) but does not need to return any value.
                </li>
                <li>
                  Recursive Functions: each recursive call may have its own
                  return statement, but it's not mandatory to have a return
                  statement at the end of the function itself.
                </li>
              </ul>
              <ul>
                Scopes - define the accessibility and visibility of variables
                and functions within your code. Two types:
                <li>
                  Global: variables and functions declared outside of any
                  function or block. They can be accessed from anywhere within
                  the script, including inside functions and blocks.
                </li>
                <li>
                  Local: variables declared inside of functions or block. They
                  are only accessible within the function or block.
                </li>
                <li>
                  *Variables declared by let and const are block-scoped - they
                  are only accessible within the block they are defined (inside
                  loops or conditional statements).
                </li>
                <li>
                  *Scopes are similar to nesting in SCSS: a concept of defining
                  a context or container within which certain variables or
                  functions are accessible. In SCSS nesting helps organize and
                  maintain CSS styles, making them easy to read. Scopes serve
                  the purpose of managing variable visibility and avoiding name
                  conflicts, contributing to the overall structure and
                  functionality of the code.
                </li>
              </ul>
              <ul>
                Modules:
                <li>
                  Modules allow for encapsulating code into separate files,
                  making it easier to manage and reuse functionality across
                  different part of an application. Mixins, in this context,
                  refer to reusable code snippets or functions that can be
                  imported from modules and "mixed in" to other objects or
                  classes to extend their functionality.
                </li>
                <li>Encapsulation: avoid naming conflicts.</li>
                <li>
                  Exporting: variables, functions, classes, objects using export
                  keyword.
                </li>
                <li>
                  Importing: the exported items become available for other
                  modules using import keyword.
                </li>
                <li>
                  *Just like _mixins, there could be a separate js file linked
                  to the HTML, that holds all variables: script
                  src="variables.js" type="module"/script
                </li>
                <li>Default exports: primary thing exported from a module.</li>
                <li>Named exports: export several items from one module.</li>
                <li>
                  Static Analysis: dependencies are resolved at compile time not
                  runtime.
                </li>
                <li>
                  Browser support: modern browsers and Node.js support JS
                  modules but older browsers might need transpilation using
                  tools like Babel to convert module syntax to a format they
                  know.{" "}
                </li>
                <li>
                  Module Formats: common JS, AMD, ESM, ES or ESM is the standard
                  format - simplicity and native browser support.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div>
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
                task is completed. Async programming - tasks are performed
                without blocking the main thread, allowing other tasks to run
                concurrently. It uses callbacks, promises and async/await.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Gulp</Accordion.Header>
            <Accordion.Body className="notes__section">
              <h6>Open source JS toolkit (JS task runner).</h6>
              <h6>
                * task runner: post processor; makes the code tidier and gets it
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
          <Accordion.Item eventKey="2">
            <Accordion.Header>Webpack</Accordion.Header>
            <Accordion.Body className="notes__section">
              <h6>Module bundler for JS applications.</h6>

              <p>
                Module bundling: bundles various modules (JS, CSS, images, etc.)
                into single or multiple output files, reducing the number of
                HTTP requests needed and improving load times.
              </p>
              <p>
                Code splitting: splits the code into multiple bundles that can
                be loaded on demand, improving the initial load time and
                performance of web applications.
              </p>
              <p>
                Loaders: transformations applied to the source files of your
                modules. They allow to preprocess files as they are loaded, such
                as transpiling ES6+ to ES5 using Babel, compiling SASS to CSS,
                or loading images and fonts.
              </p>
              <p>
                Plugins: for optimizing bundles, managing environment variables
                and injecting environment-specific code.
              </p>
              <p>
                The Webpack Dev Server: provides live reloading, making it easy
                to see changes in real-time as you develop.
              </p>
              <p>
                While Gulp is a task runner focusing on automating repetitive
                tasks through code, Webpack is primarily a module bundler
                designed to manage and optimize dependencies and assets. They
                handle the same tasks with a different approach.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>AXIOS</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                JS library, used to make HTTP requests from both the browser and
                Node.js
              </p>
              <p>
                Often used to interact with API and handle network requests.
                Uses promises, which makes it easy to work with async requests
                and handle responses and errors. Automatic JSON data
                transformation. X-CSFR-TOKEN: supports cross-site requests
                forgery protection. Allows timeouts for requests. Works in
                browser environment and Node.js
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>jQuery</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                jQuery is a fast, small, and feature-rich JavaScript library. It
                simplifies tasks like HTML document traversal and manipulation,
                event handling, animation, and Ajax with an easy-to-use API that
                works across a multitude of browsers.
              </p>
              <ul>
                <li>
                  Cross-browser Compatibility: jQuery abstracted away the
                  differences in how browsers handled JavaScript, allowing
                  developers to write code that worked consistently across all
                  major browsers.
                </li>
                <li>
                  Simplified DOM Manipulation: It made tasks like selecting
                  elements, modifying content, and handling events much easier
                  and more concise.
                </li>
                <li>
                  Reduced Code Complexity: Common tasks could be done with fewer
                  lines of code compared to vanilla JavaScript.
                </li>
                <li>
                  Plugins and Extensions: A large community contributed numerous
                  plugins, extending its functionality and enabling developers
                  to implement complex features quickly.
                </li>
                <li>
                  Ajax Simplification: jQuery streamlined the process of making
                  asynchronous HTTP requests, making dynamic content updates
                  more straightforward.
                </li>
              </ul>
              <p>
                jQuery empowered developers to create more interactive,
                responsive, and cross-browser compatible web applications
                efficiently.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>AJAX</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>Async JavaScript and XML</p>
              <p>
                Creates dynamic web applications with async requests without
                reloading the page.
              </p>
              <p>
                A technique used in web development to send and receive data
                from a server async without interfering with the current page.
                Before AJAX, interacting with the web pages required full page
                reloads whenever data was fetched or sent to a server. AJAX
                requests are typically performed using XMLHttpRequest object in
                JS, or more recently using the FetchAPI or libraries like Axios.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Work with API</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                Working with APIs in JavaScript involves making HTTP requests to
                retrieve or send data to a server.
              </p>
              <ul>
                <li>
                  Using fetch API: the fetch function is a modern, promise-based
                  way to make network requests. It supports all HTTP methods
                  like GET, POST, PUT, DELETE, etc.
                </li>
                <li>
                  Using XMLHttpRequest: this is an older way to make network
                  requests, providing more control but with more complexity.
                </li>

                <li>
                  Using axios: axios is a popular third-party library for making
                  HTTP requests, offering a cleaner syntax and additional
                  features.
                </li>
              </ul>

              <li>
                Handling asynchronous operations: Use async and await to handle
                asynchronous operations more cleanly.
              </li>
              <li>
                Working with JSON: APIs often send and receive data in JSON
                format. Use JSON.stringify to send JSON data and response.json()
                to parse received JSON data.
              </li>
              <li>
                Handling CORS (Cross-Origin Resource Sharing): when working with
                APIs from a different origin, ensure the server supports CORS.
                You might need to set the Access-Control-Allow-Origin header on
                the server.
              </li>
              <li>
                Error handling: always handle errors to ensure the application
                can gracefully manage failed network requests.
              </li>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Web storage</Accordion.Header>
            <Accordion.Body className="notes__section">
              <img
                className="notes__img"
                alt="storage-img"
                src={cookieStorage}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>Critical Rendering Path</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                The sequence of steps the browser goes through to convert the
                HTML, CSS and JS into pixels on the screen. Optimizing the
                critical render path improves render performance. The critical
                rendering path includes the DOM, CSS Object Model, render tree
                and layout.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>Callback Hell</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                Callback Hell is an anti-pattern with multiple nested callbacks
                which makes code hard to read and debug when dealing with async
                logic.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>Pure Function</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                A function or section of code that always yields the same
                outcome when the same arguments are supplied is known as a pure
                function. It is independent of any state or data changes that
                occur while a program is running. Instead, it just relies on the
                arguments it is given. Additionally, a pure function does not
                result in any side effects that can be seen, such as network
                queries, data alteration, etc.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>JS Strict Mode</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                Allows you to write a code or a function in a "strict"
                operational environment. When it comes to throwing errors, JS is
                often not extremely severe. However, in "strict mode", all
                errors, even silent faults, will result in a throw. Debugging
                hence becomes more easier. Thus, the chance of a coder
                committing a mistake is decreased.
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
              <p>
                Component-based application. Uses the virtual DOM.
                Unidirectional data flow. Reusable components. Seamless Update.
              </p>
              <p>
                In React, Webpack is build-in - you don't need to set it up
                additionally or use Gulp or any other alternatives - npm run
                build will build the application.
              </p>
              <p>React runs in local host 3000</p>
              <p>
                React uses functions while Angular uses classes. With the
                introduction of hooks it made more sense to use functions
                instead of classes to make the code simple and readable,
                reducing errors.
              </p>
              <p>On each save, it compiles the code and checks for errors.</p>
              <p>
                Popular libraries used in React: React Bootstrap, And Design,
                Material UI, Chakra UI, React Router, React Motion, Fluent UI,
                Maintain, Redux, etc.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What is JSX?</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                JSX stands for JavaScript XML. It is a HTML-like syntax
                extension for JS used in React.
              </p>
              <p>Difference between HTML and JSX:</p>
              <ul>
                <li>
                  when using classes in CSS in HTML we use class = name; while
                  in JSX we use className = name;
                </li>
                <li>
                  the files are not encapsulated - they are available everywhere
                  in the code;
                </li>
                <li>does not need a converter for SCSS files.</li>
              </ul>
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
            <Accordion.Body className="notes__section">
              <h6>
                React hooks are functions that let you use state and other React
                features without writing a class. The most commonly used hooks
                are useState and useEffect.
              </h6>
              <p>useState Hook - lets you add state to functional components</p>
              <p>
                useEffect - lets you perform side effects in functional
                components. It's similar to lifecycle methods like:
                componentDidMount, componentDidUpdate, componentWillUnmount in
                class component.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>React routing</Accordion.Header>
            <Accordion.Body className="notes__section">
              <h6>
                React Router is a library used to handle routing in React
                applications. It enables navigation among different components
                and allows the app to be single-page application, meaning it
                dynamically updated the content without reloading the page.
              </h6>
              <p>1. npm install react-router-dom</p>
              <p>2. setting up routes - BrowserRouter, Route, Switch</p>
              <img
                className="notes__img"
                alt="router-setup-img"
                src={routerSetUp}
              />
              <img
                className="notes__img"
                alt="router-component-img"
                src={routerComponents}
              />
            </Accordion.Body>
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
              <img
                className="notes__img"
                alt="state-and-prop-img"
                src={stateAndProp}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Lists and conditional rendering</Accordion.Header>
            <Accordion.Body className="notes__section">
              <ul>
                <li>if...else;</li>
                <li>
                  ternary conditional operator - useful for rendering one of two
                  elements based on a condition;
                </li>
                <li>
                  logical operators - && (AND) is used instead of if, which is
                  not supported in JSX; || (OR), instead of else, which is not
                  supported in JSX;
                </li>
                <li>
                  map - create and display a list of similar objects/components.
                  It is standard JS function that can be called on arrays;
                </li>
                <li>
                  switch - if there are more than 3 conditions to be checked;
                </li>
              </ul>
            </Accordion.Body>
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
              <p>
                Which one to use: depending on do you need to manage state or
                just render based on props.
              </p>
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
              <p>
                React components go through several lifecycle phases from
                creation to deletion, and React provides lifecycle methods that
                allow developers to execute code at specific points in a
                component's lifecycle. Managed using hooks.
              </p>
              <img
                className="notes__img"
                alt="lifecycle-img"
                src={lifecycleImg}
              />
              <p>
                Mounting: componentDidMount() - called once after the component
                is rendered. Used to perform side effects such as data fetching.
              </p>
              <p>
                Updating - componentDidUpdate(prevProps, prevState): called
                after an update (state or props change). Used to act on changes
                such as updating the DOM or making API calls based on prop
                changes.
              </p>
              <p>
                Unmounting - componentWillUnmount() - called before the
                component is removed from the DOM. Used to clean up resources
                like event listeners or timers.
              </p>
              <p>
                useEffect(() function curly brackets with the actual function,
                []) - after the component mounts, the empty dependency array
                ensures it runs only once.
              </p>
              <p>
                useEffect(() function curly brackets with the actual function) -
                the effect runs after every render (component updates). Add
                dependencies to the array to control when it runs.
              </p>
              <p>
                useEffect(() function curly brackets with the actual function; ,
                []): - the cleanup function runs before the component unmounts.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div>
        <h2 className="notes__title" id="mongoDB">
          MongoDB
        </h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is MongoDB?</Accordion.Header>
            <Accordion.Body className="notes__section">
              <p>
                MongoDB is a type of database. Think of it as a big digital
                filing cabinet where you store information. Instead of using
                tables and rows like traditional databases, MongoDB uses
                documents and collections.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Documents and collections in MongoDB
            </Accordion.Header>
            <Accordion.Body className="notes__section">
              <ul>
                <li>
                  Document: A document is like a record in a filing cabinet.
                  It’s stored in a format called JSON (JavaScript Object
                  Notation), which looks like a dictionary in Python or an
                  object in JavaScript.
                </li>
                <li>
                  Collection: A collection is like a folder that holds multiple
                  documents. For example, you might have a collection called
                  "users" that holds documents for each user.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>CRUD operations</Accordion.Header>
            <Accordion.Body className="notes__section">
              <ul>
                CRUD stands for Create, Read, Update, Delete. These are the
                basic operations you can perform on your data.
                <li>Create: add new document to collection.</li>
                <li>Read: Retrieve documents from a collection.</li>
                <li>Update: Modify existing documents in a collection.</li>
                <li>Delete: Remove documents from a collection.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              MongoDB in Front-end development
            </Accordion.Header>
            <Accordion.Body className="notes__section">
              <ul>
                Use a MongoDB client library (like mongoose or the native
                mongodb package) to connect your backend to the MongoDB
                database.
                <li>
                  Set Up a Backend: Usually, you use a backend server to
                  interact with MongoDB. A popular choice for this is Node.js
                  with Express.js.
                </li>
                <li>
                  Connect to MongoDB: Use a MongoDB client library (like
                  mongoose or the native mongodb package) to connect your
                  backend to the MongoDB database.
                </li>
                <li>
                  API Endpoints: Create API endpoints in your backend that the
                  front end can call to perform CRUD operations.
                </li>
                <li>
                  Fetch Data from Front-End: From your front-end application,
                  you use fetch or Axios to make HTTP requests to your backend
                  API.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div>
        <h2 className="notes__title" id="nodeJS">
          NodeJS
        </h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is NodeJS?</Accordion.Header>
            <Accordion.Body className="notes__section">
              <ul>
                <li>
                  JavaScript Runtime: Node.js is a runtime environment that
                  allows you to run JavaScript code on the server side, outside
                  of a web browser.
                </li>
                <li>
                  Built on V8 Engine: It uses Google Chrome's V8 JavaScript
                  engine, which makes it fast and efficient.
                </li>
                <li>
                  Non-Blocking I/O: Node.js uses an event-driven, non-blocking
                  I/O model, which makes it lightweight and efficient for
                  handling multiple connections simultaneously.
                </li>
              </ul>
              <ul>
                Key Features:
                <li>
                  Asynchronous Programming: Allows for non-blocking operations
                  using callbacks, promises, and async/await, making it suitable
                  for handling I/O-heavy operations.
                </li>
                <li>
                  Single-Threaded Event Loop: Uses a single-threaded model with
                  an event loop to manage multiple connections efficiently, even
                  though JavaScript is single-threaded.
                </li>
                <li>
                  Package Ecosystem (npm): Node.js has a rich package ecosystem,
                  npm (Node Package Manager), which provides thousands of
                  libraries and modules to extend its functionality.
                </li>
              </ul>
              <ul>
                Use cases:
                <li>
                  Web Servers: Building server-side applications and APIs.
                </li>
                <li>
                  Real-Time Applications: Ideal for applications that require
                  real-time data processing, like chat applications and online
                  gaming.
                </li>
                <li>
                  Microservices: Often used for developing microservices due to
                  its lightweight nature.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Express.js</Accordion.Header>
            <Accordion.Body className="notes__section">
              <ul>
                <li>
                  Web Application Framework: Express.js is a minimal and
                  flexible Node.js web application framework that provides a
                  robust set of features to build web and mobile applications.
                </li>
                <li>
                  Middleware-Based: It uses middleware to handle HTTP requests
                  and responses, which allows for modular and reusable code.
                </li>
              </ul>
              <ul>
                Key Features:
                <li>
                  Routing: Provides a powerful routing mechanism to define
                  routes and handle HTTP methods like GET, POST, PUT, DELETE,
                  etc.
                </li>
                <li>
                  Middleware Support: Middleware functions are functions that
                  have access to the request object (req), the response object
                  (res), and the next middleware function in the application’s
                  request-response cycle.
                </li>
                <li>
                  Template Engines: Supports various template engines like Pug,
                  EJS, and Handlebars to generate HTML dynamically.
                </li>
                <li>
                  HTTP Utility Methods: Provides a variety of HTTP utility
                  methods to handle requests and responses, making it easier to
                  build APIs and web applications.
                </li>
              </ul>
              <ul>
                Use cases:
                <li>
                  RESTful APIs: Widely used for creating RESTful APIs due to its
                  simple and flexible routing.
                </li>
                <li>
                  Single-Page Applications (SPAs): Works well as a backend for
                  single-page applications.
                </li>
                <li>
                  Full-Stack Applications: Often used in combination with
                  front-end frameworks like React, Angular, or Vue.js to build
                  full-stack applications.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How Node.js and Express.js work together?
            </Accordion.Header>
            <Accordion.Body className="notes__section">
              <ul>
                <li>
                  Node.js Server: Node.js acts as the server that runs your
                  JavaScript code.
                </li>
                <li>
                  Express.js Framework: Express.js runs on top of Node.js and
                  simplifies the process of handling HTTP requests, managing
                  routes, and rendering views.
                </li>
              </ul>
              <ul>
                When building a web application:
                <li>
                  Node.js provides the runtime: It handles the execution of
                  JavaScript on the server side.
                </li>
                <li>
                  Express.js simplifies server code: It provides tools and
                  abstractions for managing routes, middleware, and HTTP
                  requests.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
}

export default Notes;
