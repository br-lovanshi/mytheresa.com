class Home {
  displayHome(parent) {
    let offerTag = document.createElement("a");
    offerTag.href = "sales.html";
    offerTag.classList.add("offerTag");
    offerTag.innerText = "Sales: Now up to 60% off";
    let bannerImg = document.createElement("img");
    bannerImg.classList.add("bannerImg");
    bannerImg.src =
      "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW24/BIG_EN/Valentino_Act_Big_Desktop_1_x2_20220613155108.jpg?imwidth=1180&imdensity=1";

    let newArrivalContainer = document.createElement("div");

    newArrivalContainer.classList.add("newArrivalContainer");
    let nac_p1 = document.createElement("p");
    nac_p1.classList.add("nac_p1");
    nac_p1.innerText = "DON'T MISS OUT";
    let nac_h1 = document.createElement("h1");
    nac_h1.classList.add("nac_h1");
    nac_h1.innerText = "New Arrivals";
    let nac_p2 = document.createElement("p");
    nac_p2.classList.add("nac_p2");
    nac_p2.innerText = "Alexander McQueen, Balenciaga, Missoni, Aquazzura...";

    let nac_btn = document.createElement("a");
    nac_btn.classList.add("nac_btn");
    nac_btn.innerHTML = "Shop Now &raquo";
    newArrivalContainer.append(nac_p1, nac_h1, nac_p2, nac_btn);

    let hm_productContainer = document.createElement("div");
    hm_productContainer.classList.add("hm_productContainer");
    hm_productContainer.innerHTML = `
    <div class="r_prds r1_prds">
         <div class="c1_prd">
              <div class="prd">
                   <div class="testmonial">
                        <p>MYTHERESA PRESENTS</p>
                        <h1>The Loro Piana Resort Collection</h1>
                   </div>
                   <div class="img">
                        <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW24/ActboxTall_Loro_Piana_Resor_Collection_2x_20220613121847.jpg?imwidth=600&imdensity=1"
                             alt="">
                   </div>
                   <a href="#" class="shp_nw_btn">Shop Now &raquo</a>
              </div>
         </div>
         <div class="c2_prd">
              <div class="prd">
                   <div class="testmonial">
                        <p>KEEP YOUR COOL</p>
                        <h1>Sandals for soaring temperatures</h1>
                   </div>
                   <div class="img">
                        <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW24/CW24_ActboxSmall_2x__20220612214303.jpg?imwidth=600&imdensity=1"
                             alt="">
                   </div>
                   <a href="#" class="shp_nw_btn">Shop Now &raquo</a>
              </div>
              <div class="prd">
                   <div class="testmonial">
                        <p>THE LIFE EDITL</p>
                        <h1>The choice is clear with our glassware</h1>
                   </div>
                   <div class="img">
                        <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW24/CW24_ActboxSmall_2x_2_20220612214253.jpg?imwidth=600&imdensity=1"
                             alt="">
                   </div>
                   <a href="#" class="shp_nw_btn">Shop Now &raquo</a>
              </div>
         </div>
    </div>

    <div class="r_prds r2_prds">
         <div class="c1_prd">
              <div class="prd">
                   <div class="testmonial">
                        <p>GOING OUT-OUT?</p>
                        <h1>We've got just the party bag</h1>
                   </div>
                   <div class="img">
                        <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW24/CW24_ActboxSmall_2x_3_20220612214253.jpg?imwidth=600&imdensity=1"
                             alt="">
                   </div>
                   <a href="#" class="shp_nw_btn">Shop Now &raquo</a>
              </div>
              <div class="prd">

                   <div class="testmonial">

                        <p>RHINESTONE RENDITIONS</p>
                        <h1>Jewelry making the case for crystals</h1>
                   </div>
                   <div class="img">
                        <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW24/CW24_ActboxSmall_2x_4_20220612214309.jpg?imwidth=600&imdensity=1"
                             alt="">
                   </div>
                   <a href="#" class="shp_nw_btn">Shop Now &raquo</a>

              </div>
         </div>
         <div class="c2_prd">
              <div class="prd">
                   <div class="testmonial">



                        <p>AQUAZZURA X MYTHERESA</p>
                        <h1>The Aquazzura exclusive summer capsule collection</h1>
                   </div>
                   <div class="img">
                        <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW24/Aquazzura_ActTall_2x_20220612215135.jpg?imwidth=600&imdensity=1"
                             alt="">
                   </div>
                   <a href="#" class="shp_nw_btn">Shop Now &raquo</a>
              </div>
         </div>
    </div>
    
    `;
    let mc_section = document.createElement("div");
    mc_section.classList.add("mc_section");

    mc_section.innerHTML = `
    <div class="testmonial">
         <p>SITTING PRETTY</p>
         <h1>Summery styles for picnics in the park</h1>
    </div>
    <div class="mc_prds">
         <div class="mc_prd">
              <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW24/CW24_FE_641x642_2x__20220612214323.jpg"
                   alt="">
              <p>Saint Laurent</p>
         </div>
         <div class="mc_prd">
              <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW24/CW24_FE_641x642_2x_2_20220612214316.jpg"
                   alt="">
              <p>Kenzo</p>
         </div>
         <div class="mc_prd">
              <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW24/CW24_FE_641x642_2x_3_20220612214316.jpg"
                   alt="">
              <p>Isabel Marant</p>
         </div>
         <div class="mc_prd">
              <img src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW24/CW24_FE_641x642_2x_4_20220612214317.jpg"
                   alt="">
              <p>Loewe</p>
         </div>
    </div>
    <a href="#" class="shp_nw_btn">Shop Now &raquo;</a>
    `;

    let aboutSection = document.createElement("div");
    aboutSection.classList.add("au_section");
    aboutSection.innerHTML = `
    
    <h3 class="section-heading">MYTHERESA – WOMEN’S LUXURY AND DESIGNER FASHION</h3>
                         <p>Mytheresa is the most-trusted source for finding the finest selection of luxurious
                              womenswear. Our expert buying team travels the globe with a simple mission: to bring
                              international fashion’s finest directly to your doorstep. With our runway-fresh new
                              arrivals every week, an easy-to-navigate platform and a mobile app to shop on-the-go, we
                              ensure a boutique-like feeling for a unique shopping experience.</p>
                         <div class="exp_ser">
                              <div class="exp">
                                   <h3>A LUXURY SHOPPING EXPERIENCE</h3>
                                   <ul>
                                        <li>The finest edit of more than 200 international luxury brands</li>
                                        <li>900 new arrivals each week directly from the runway</li>
                                        <li>Well-curated selection of items for a boutique-like shopping experience</li>
                                        <li>Exclusive designer collaborations and capsule collections that you won’t
                                             find anywhere else</li>
                                   </ul>
                              </div>
                              <div class="ser">
                                   <h3>SERVICE AND QUALITY</h3>
                                   <ul>
                                        <li>Authentic products guaranteed</li>



                                        <li>Fast, reliable delivery within 3 business days</li>
                                        <li>Free returns and exchanges within 30 days</li>
                                        <li>Exceptional customer service available 24 hours a day, 6 days a week in 13
                                             different languages</li>
                                   </ul>
                              </div>
                         </div>
                         <p>Whether you are looking for the latest Bottega Veneta pouch for everyday wear, Jimmy Choo
                              heels for an upcoming wedding, or a Burberry scarf to gift a friend, our edit comprises
                              the key pieces that you need for an elegant season ahead. With our assortment of timeless
                              items and exclusive capsule collections, which includes everything from the understated
                              luxury of Loro Piana and avant-garde appeal of Maison Margiela, to Saint Laurent bags and
                              time-honored Gucci loafers; you are certain to find everything you want to build your
                              dream closet.</p>
                         <p>Get inspired by our coveted edit, which makes occasion dressing easy by breaking down our
                              buy into easy-to-shop categories such as fashion sneakers or exquisite gowns. Our
                              exceptional customer service team is here to help you through every step of the order
                              process, and beyond, to make sure you start every day dressed to conquer.</p>
                         <p>Shop with us and discover why Mytheresa is your final destination for online shopping for
                              women.</p>
    `;
    let app_section = document.createElement("div");
    app_section.classList.add("app_section");
    app_section.innerHTML = `<h3>SHOP WHENEVER, WHEREVER WITH THE APP</h3>
<div class="imglinks">
     <!-- Apple App Store -->
     
     <img src="https://uploads-ssl.webflow.com/5e25ea7b0482df1d18440a43/5e2670a016b6d16ca1fb17db_App_Store_Badge.svg"
          class="appStore download-btn">
     <img src="http://dash.coolsmartphone.com/wp-content/uploads/2017/08/GooglePlay.png"
          class="googlePlay download-btn">
</div>`;

    parent.append(
      offerTag,
      bannerImg,
      newArrivalContainer,
      hm_productContainer,
      mc_section,
      aboutSection,
      app_section
    );
  }
}

export default Home;
