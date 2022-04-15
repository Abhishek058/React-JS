function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="https://lh3.googleusercontent.com/T-awol_CLZuqZeXvm5YzzT_jNXTmUW9w_iaoMicgZ2trYX-PRY71U8eHEcvLki66Nf3vGPsNcOmDwiTXLIeSCwa2MId1Cj1TEkMF3ygrTLBvdtXajNaSVB4Jpa2hTJl_mkOBWVmATBk10ftMxthdVnx7I7fLqzPkWbxJ-knfDjc-DdhHKiV7Ti2PCfT1P78SwDXM1zJGBVLjzeB49DlpOmorrMBIUsLQySImVjiYNZ_0k-NKnOaFw9swnzAvqUa3H98LmJ9Z5CjrTD-HWWkV_2bvW9QwdwqBWg2vJZuURKa5RVApvcU06X-gcs0f6upsekotYk78v63nz2CETsuvEIIHHMfnuScY2sJXLy1qb0cj-XzLZyBddGSVjAci22kVudLM-abOUOuuSImzgql4olsup2inbRoBpRI-L6ZSTnV4oiKd-U-04H6W_QZO1Q1rzkFpIPbZAFuPY0J1z3rc8bju-o05GKdbkVpic5Jv-eB7dDEqZmZyW0E-L9Ji67SU6MdiBu_UIs5-VnhMWALLirWI6AM-uyC6xR215RYVC7zlJDVXykK-AFT-b5UzZkTsGb5tRTuQcSgbPXTYI4d83nrlx_6y0Vk-FP-D3M42p_skl7h9QzpssaJQ3hNMzX7vvZ7E0mlu2necYtUCdxc2MP6gqco_mpYSAVACI0pAYo5pMq4251g8MQor_p2BYSXKtsEYfzL9oAZZ7IAgIP7GUJ6qJrs0DHBmDw-WNZe0XrCu3Mj7D8tycqdUbJ2W=w820-h695-no?authuser=0"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer-tag">
      <small>2021 All Rights are reserved</small>
    </footer>
  );
}

function MainContent() {
  return (
    <div className="div-tag">
      <Header />
      <h1>Fun Fact about React</h1>
      <ul>
        <li>React is Not A Framework</li>
        <li>React development And SEO Go Together</li>
        <li>Virtual DOM is Faster Than Real DOM</li>
        <li>React Has a Strong Community</li>
        <li>React is Not Just a Fad</li>
      </ul>
      <Footer />
    </div>
  );
}

ReactDOM.render(<MainContent />, document.getElementById("root"));
