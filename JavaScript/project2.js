function Navbar() {
  return (
    <nav>
      <img src="https://lh3.googleusercontent.com/RMz5PMi5IrrB-kSb_2dIHV-3xT4xipaZ-9duApCp6e3KsUg9xTv42tLc6PE3O1VkXhYwzOXKdobSDugSW0l2PozJzAOLraNVRwlfenKC66M6vCQV8U4LU6T_MwZU2aFKiOsl64wTpfLOJ_pJ1C999yv41aI5EMbL_KUR77joko77j54FI9fHBJq70kcCgjsO6nwljg7Q98__Fn_LK-eUwbG6mvc9wXLM2RE1zqSbQKa5pGBW4NMpC60gcngwkXCyBG0_NRy5Rrgy7FZRsakqQHt5yXNK9Bs8bF_NMdQzrgzyMzQQiX2aaJzNNehgxeRUvNqssYW2DkvutXLvOCr36zG04S_8rNV5KgT-FXN5h6o6HZrQFGIkLpOt3SLFmTHd3qJLNwagBI2gtwKFWOcQgTlABwKHTZ3WuE4IDF8yNeIUX_SmOWu5OxzLvGh7eMn02kJGxjYvZgxGDHW6nIQu232h5X_7x39ec0SV8IQVGviagLQY66xCSYZ_JP5zQ3nVCNqrJIrMwu_9rBCPBLVv0K4kqLFSiPuDVMyvembwW3ihcogTLIUuD8FaLRS53VSvQGgkC9-PJyo-6GieqFCVYvuaF9rZ4_-13Xg-YHg3d0wyRd0rjAEKoHY6Nsm7PnI1XuZsBoW9UJdjYRTZEEjJFV44FUvYMh6j_KeVxs5x2TK9_UQsflGaD9q1FtM63G_FISpJU-Bs7i4bQpAfavRKjjuYZLUqg_byrWDMpnBtI-0B4IUvofTTAFsGsO3y=w83-h26-no?authuser=0" width="100px"/>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero--img"
        src="https://lh3.googleusercontent.com/c2IuYXdthZLPf62TF62_uXpqyLj_RVnLqMGhSoX3Yz8Q0qvlRy6CsGHIM2AWKMunYB_ZvatqYT-xcH_0Q7ZNq-Y_Hu6d5IueOOkUGdiFp5VfIYuPhvcy4XGfHT5-ucqVcPq7CWn3_5SvD4hbL3KRp_Fbjjy_OA_hTQst8CVGBEKzzwMsnebtHOrVtaBcAfvuwDhzkZYShp62XKFL0SdO8iCcst5UiZn2g9yCO1w-eJdx2eYKeakXlPN4AI2FLhPbyrydPBiiPXN48mja_dfzx4z7XY8rjMJL1pRYqLAGTVelgiJ0yKDFCDfYpI-QewD4aMP6FUJtPwLqegKOZj6ybZ913ruOOC6E-CW5gK8mc5jHRACwXJ7X_40x7ZS_Ie_mVDZHqCJTCyrvSvGK5wQLAn45NpviEbNc4gfYzZHAJt91fFKiRFvmoUwDusV1zTaGRMJ8C2dQorOQG7u4xIkOTulvbNurr_SbB-ZxAHquQFWOcAZYdCBt4a_2S_xCq6rmVCxUxZuvQmyk9de-ofaj3wwdHjPP_s2ZE_rmpxwBIJJ7nB__arXUAQKYyFHZBFaUhvVrXwWfTLL2U_9vLsgQ5PPzwt1-Vrk82jCxHOC5TcFe2WhZ0iHETwcMdajpeVb81gkczjuGaViGpRINknPKW-vbzCaHuyqGMUdcLHD5nSp1LyVtFVse1K1YCsuN8IVq--szu-HbVFQJDSDs8N2PL_lleNEjqG58t6Sm3i1pWEMKozXmFlmv03c0S2Rg_w=w792-h464-no?authuser=0"
      />
      <h1 className="hero--h">Online Experiences</h1>
      <p className="hero--p">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home. <br /> Plan a trip with help from local Hosts
        around the world
      </p>
    </section>
  );
}

function Card() {
  return (
    <div className="card">
        
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
