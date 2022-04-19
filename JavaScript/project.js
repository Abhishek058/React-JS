function Navbar() {
  return (
    <nav>
      <img
        src="https://lh3.googleusercontent.com/UKX7QFsF7f5UaWus2pRUfTb-lXso2ad7vrPCk8a6rJOKw7pjhw_4JBvYsCmwkmTLnA2MMxdUIaTbBmeTzBw28e9DsGmlra7f-xFTvMIGriz3NzWfl4twkBPr8WCdwRr18GmFhw18ksViM9LoT6eGyLPwpZdelGbp_qBsbhtV3ciBAnQRtF3nhhhaJTWaqlhBEI1md45sNoAiH-LIYiCL11Wg0klTduIFzrkop4-UmIKhv8Om9tWbOdQanEfhpCTdP2_7IP6bu_TxF6zLfAgjMGOc06qWD1A2oMBVFBAlz9IlV1Xueh7Qh3PrT1EwTFKUlb22_vzugGsFONz0lsTRBw_0iUDe5bc1mj6vM0u4-9qpYAjHg4g1frKwvbj3-EeRueDRVZn3zj9GLcZFqpQL-D7rXGFCtnbm58E7AEXuJ_vW8jIyUlot6bS2_FoCm_lKnMT1dHJQ9yWSrKCFFOeUhbwsvL5LHH7WvoSo02ZTPb7_3sK7FR24bT2R_claMSLrQ-iec7wJFa7L08NLp79KQWFarL9thhSZZOlohOQ_WxtCm8roW0tdB9ZcSqHBhSMD98mBjYUTl7i_8iJUrBdVUAbUiniaswJootez4n9r2EHTZzWD_TJ7If9kiKi75GbyTfaBV2oBCfE9U79GR1uwbWikebu4ZQRks446Gjv8dktekg_1f-TdTb3KD8ZZA9UCU7dT_Msb2OW_aYWf_uevUM7AuIczN1hhsBC9lNh8clFbCVpD02KPVx7WXOVo=w543-h460-no?authuser=0"
        width="50px"
      ></img>
      <h2>ReactFacts</h2>
      <h3>React Course-Project 1</h3>
    </nav>
  );
}

function Main() {
  return (
    <div class="main">
      <h1>Fun facts about react</h1>
      <ul>
        <li>React is not a framework</li>
        <li>React has a strong community</li>
        <li>Virtual DOM is faster than real DOM</li>
        <li>React development and SEO go together</li>
        <li>Keep your components small</li>
        <li>Supports Type Systems</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
