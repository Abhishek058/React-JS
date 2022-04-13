// ReactDOM.render(<p>Hi, i am learning React!</p>, document.querySelector("#root"));
// ReactDOM.render(<h1>Welcome to React...!</h1>, document.getElementById('root'));
/*****we can write getElementById instead of querySelector*/

// ReactDOM.render(<ul><li>1st item</li><li>1st item</li><li>1st item</li></ul>, document.getElementById('root'));

function Navbar() {
  return (<h1>new file added</h1>);
}

function MainContent() {
  return (<h1>I am learning React!</h1>);
}

ReactDOM.render(<div><Navbar /><MainContent /></div>, document.getElementById('root'));