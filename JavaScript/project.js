function Navbar() {
  return (
    <nav className="nav">
      {/* <img src="https://lh3.googleusercontent.com/ivXWlwY0b-og_bhjPLFh76N9w34s4iYQZMv4RQpDuLPWtMHaBxqoEYyVKaCFvXVPuZCtzu1X3HSKbi39rZ-5BjDXAw2hmgEpW5JOZkMgGzl-PsXByMq7LFziXkKbJyL1My4nsv-zyOz-q34O7nKYxRhY_bAmqXUxJkcYe5KoRkh5yFh-ylcJ5echfazTMkNJgGLbifDKKtvH0YwK1amVCLkxnh4zG_R6303kmjjYT8aR3pMdrrMJHB62ANZJlEfInh2ODM4EP5Rq4dQJqW5uGoK03pzF11o50bvjmjcg5Db9Fopv3RvYmvrCzx853BStE0zg1b4q_fx-R7vYC2mq8liV0zGo9KG3Di19P-luuEzdJl1S_ucYPzr5lqmQ9_vFrZunEcWtSQLjzKrtIEzvXNnQvy4gNI4jVAFmJnPfFDnDQYPsTwCppyzrpvNUXufKYmO57obiO2xn751O5h0rShhbI5I2owXkURQQCA9yyr0pWkwWEapx_aoEFB1G1jp1Qb4yxPb1rpqUb_oPEuZH2rkYTD_cUiltJWP-6e7uHzELMtGJYHXHG6wuL5naMBfkOQVDwtvedcGmWXp9AqfWooz-VRyUsKmwvUHXKQhjbbvQnhN8enOwc4n6sX8mYVNp3X8Sq--zPE-uO_JmafqknBBlnvW3-T-FWYYrorNqa8B1JRL9Hi1-ngWHtPx92Cocyfv7jbT6LaGWuK8Za-zy0olQvNwX4aYVBeOt83n3ph3cGfINaxiwxEwc-1pg=w681-h578-no?authuser=0"></img> */}
      <h1>navbar component</h1>
    </nav>
  );
}

function Main() {
  return <h1>Main component</h1>;
}

function App() {
  return (
    <div className="">
      <Navbar />

      <Main />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
