class Footer {
  displayFooter(el) {
    el.innerHTML = ` <div class="footer_links">
                         <div class="security">
                              <h3>SERVICE & SECURITY</h3>
                              <span class="material-symbols-outlined">
                                   done <span class="point"> Fast delivery</span>
                              </span>
                              <p>Delivery within 2 business days</p>
                              <span class="material-symbols-outlined">
                                   done <span class="point">Free returns within 30 days</span>
                              </span>
                              <p>Convenient return service</p>

                              <span class="material-symbols-outlined">
                                   done <span class="point">Secure payment and data protection</span>
                              </span>
                              <p>SSL encryption for secure transactions and personal data</p>
                         </div>
                         <div class="my_links">
                              <h3>MYTHERESA</h3>
                              <a href="#">About us</a>
                              <a href="#">Trust & services</a>
                              <a href="#">Sustainability</a>
                              <a href="#">Press</a>
                              <a href="#">Careers</a>
                              <a href="#">Investor Relations</a>
                              <a href="#">Affiliates</a>
                         </div>
                         <div class="cc_links">
                              <h3>CUSTOMER CARE</h3>
                              <a href="#">Contact us</a>
                              <a href="#">Shipping information</a>
                              <a href="#">Secure payment</a>
                              <a href="#">Exchanges</a>
                              <a href="#">Returns</a>
                              <a href="#">After sale service</a>
                              <a href="#">Gift card</a>
                         </div>
                    </div>
                    <div class="footer_cta">
                         <h3>GET TREND UPDATES, STYLE TIPS AND MORE</h3>
                         <div class="input-group">
                              <input type="email" placeholder="Enter Your Email Address" class="cta_mail" id="cta_mail">
                              <button class="cta_btn">SIGN UP</button>
                         </div>
                         <p><a href="#">Wish List <span class="material-symbols-outlined">
                                        favorite
                                   </span></a></p>
                         <p>Receive personal notifications</p>
                         <span class="socialLinkscontainer">
                              <p>Follow us on</p>
                              <span class="links">
                                   <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                                   <a href="#"><i class="fa-brands fa-facebook"></i></a>
                                   <a href="#"><i class="fa-brands fa-twitter-square"></i></a>
                                   <a href="#"><i class="fa-brands fa-pinterest"></i></a>
                                   <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                   <a href="#"><i class="fa-brands fa-youtube"></i></a>
                                   <a href="#"><i class="fa-brands fa-weixin"></i></a>
                                   <a href="#"><i class="fa-brands fa-weibo"></i></a>
                              </span>
                         </span>
                    </div>
    
    `;
  }
}
export default Footer;