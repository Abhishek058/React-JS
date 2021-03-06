ReactDOM.render(<p>Hi, i am learning React!</p>, document.querySelector("#root"));
ReactDOM.render(<h1>Welcome to React...!</h1>, document.getElementById('root'));
/*****we can write getElementById instead of querySelector*/

/******creating nested tags */
ReactDOM.render(<ul><li>1st item</li><li>1st item</li><li>1st item</li></ul>, document.getElementById('root'));

/*******creating 2 elements in 1 div */
function Navbar() {
  return (<h1>new file added</h1>);
}

function MainContent() {
  return (<h1>I am learning React!</h1>);
}

ReactDOM.render(<div><Navbar /><MainContent /></div>, document.getElementById('root'));

/******Create tag using javascript */
const h1 = document.createElement("h1");
h1.textContent = "This is created using JS";
h1.className = "header";
document.getElementById("root").append(h1);

const navb = (
  <nav>
      <h1>HalfCoder</h1>
      <ul>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
  </nav>
)

ReactDOM.render(
  navb, document.getElementById("navbar")
);