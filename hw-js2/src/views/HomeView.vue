<template>
  <div>
    <header>
      <div class="info_background">
        <div class="info container">
          <a href="#" class="header_logo"
            ><img src="@/assets/header/logo.png" alt=""
          /></a>
          <div class="contacts">
            <img src="@/assets/header/phone.png" alt="" />
            <p class="number">+123 456 7890</p>
            <img src="@/assets/header/mail.png" alt="" />
            <p class="mail">info@example.com</p>
          </div>
          <div class="form_cart">
            <Filter />
            <Cart />
          </div>
        </div>
      </div>
      <nav class="menu container">
        <ul>
          <li class="link active"><a href="#">Home</a></li>
          <li class="link"><a href="#">About</a></li>
          <li class="link"><a href="#">Services</a></li>
          <li class="link"><a href="#">Gallery</a></li>
          <li class="link"><a href="#">News</a></li>
          <li class="link"><a href="#">Team</a></li>
          <li class="link"><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <hr noshade size="1" color="#ffffff" />
    </header>
    <main>
      <section class="intro_info">
        <div class="intro_info_block container">
          <p>Nunc eget nibh</p>
          <h1>Morbi in nisl auctor</h1>
          <div class="social">
            <a href="#"><i class="fab fa-facebook-f fa-2x"></i></a>
            <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
            <a href="#"><i class="fas fa-rss"></i></a>
            <a href="#"><i class="fab fa-vk fa-2x"></i></a>
          </div>
        </div>
      </section>
      <section class="about_us">
        <div class="about_us_block container">
          <div class="about_text">
            <h2 class="h2">About Us!</h2>
            <p class="little_text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit. Ut enim ad
              minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </p>
            <p class="little_text">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur?
            </p>
          </div>
          <img src="@/assets/main/about_us_img.jpg" alt="" />
        </div>
      </section>
      <section class="services">
        <div class="services_block container">
          <h2 class="h2">Services</h2>
          <div class="services_info">
            <div class="services_info_inside">
              <div class="services_info_h3_p">
                <a href="#">Repreh Qui In Ea Voluptate</a>
                <p class="little_text">
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat.
                </p>
              </div>
              <a href="#" class="img"
                ><img src="@/assets/main/services1.png" alt=""
              /></a>
            </div>
            <div class="services_info_inside">
              <div class="services_info_h3_p">
                <a href="#">Aut Perferendis Doloribus</a>
                <p class="little_text">
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat.
                </p>
              </div>
              <a href="#" class="img"
                ><img src="@/assets/main/services2.png" alt=""
              /></a>
            </div>
            <div class="services_info_inside">
              <div class="services_info_h3_p">
                <a href="#">Maiores Alias Consequatur</a>
                <p class="little_text">
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat.
                </p>
              </div>
              <a href="#" class="img"
                ><img src="@/assets/main/services3.png" alt=""
              /></a>
            </div>
            <div class="services_info_inside reverse">
              <div class="services_info_h3_p">
                <a href="#">Voluptatibus Maiores Alias</a>
                <p class="little_text">
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat.
                </p>
              </div>
              <a href="#" class="img"
                ><img src="@/assets/main/services4.png" alt=""
              /></a>
            </div>
            <div class="services_info_inside reverse">
              <div class="services_info_h3_p">
                <a href="#">Dut Aut Reiciendis Maiores</a>
                <p class="little_text">
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat.
                </p>
              </div>
              <a href="#" class="img"
                ><img src="@/assets/main/services5.png" alt=""
              /></a>
            </div>
            <div class="services_info_inside reverse">
              <div class="services_info_h3_p">
                <a href="#">Doloribus Volupta Maiores</a>
                <p class="little_text">
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat.
                </p>
              </div>
              <a href="#" class="img"
                ><img src="@/assets/main/services6.png" alt=""
              /></a>
            </div>
          </div>
        </div>
      </section>
      <section class="gallery">
        <div class="gallery_block container">
          <h2 class="h2">Our gallery</h2>

          <Gallery />
        </div>
      </section>
      <section class="testimonial">
        <div class="testimonial_block container slider_block">
          <h2 class="h2">Testimonial</h2>
          <img src="@/assets/main/commas.png" alt="" />
          <input type="radio" name="slider" id="switch1" checked />
          <input type="radio" name="slider" id="switch2" />
          <input type="radio" name="slider" id="switch3" />
          <div class="controls">
            <label for="switch1"></label>
            <label for="switch2"></label>
            <label for="switch3"></label>
          </div>
          <div class="slider">
            <div class="overflow_block">
              <div class="testimonial_text image_block">
                <div class="testimonial_block_text">
                  <p class="little_text">
                    Donec feugiat tellus sem, laoreet iaculis orci lobortis vel.
                    Sed sed luctus orci, at lacinia risus. Ut porttitor ante ac
                    tincidunt elementum. Curabitur ex dolor, condimentum vitae
                    nunc vel, pulvinar semper justo. Vestibulum et aliquet
                    magna, maximus dapibus enim. Vestibulum ex lectus, posuere
                    eu viverra at, mattis et enim. Nam efficitur sem et lectus
                    fringilla, at pharetra nulla luctus. Nunc cursus, augue ac
                    ultricies volutpat, neque erat congue justo, ac pretium
                    tellus eros a neque. Integer ipsum sem, consectetur a mollis
                    ac, cursus eu ipsum.
                  </p>
                  <p class="testimonial_name">
                    JOHN SMITH<span> - FOUNDER</span>
                  </p>
                </div>
                <div class="testimonial_block_text">
                  <p class="little_text">
                    Donec feugiat tellus sem, laoreet iaculis orci lobortis vel.
                    Sed sed luctus orci, at lacinia risus. Ut porttitor ante ac
                    tincidunt elementum. Curabitur ex dolor, condimentum vitae
                    nunc vel, pulvinar semper justo. Vestibulum et aliquet
                    magna, maximus dapibus enim.
                  </p>
                  <p class="testimonial_name">
                    Peter Parker<span> - Vestibulum</span>
                  </p>
                </div>
                <div class="testimonial_block_text">
                  <p class="little_text">
                    Далеко-далеко за словесными горами в стране гласных и
                    согласных живут рыбные тексты. Дорогу переписывается,
                    деревни большого, вдали, раз семантика что себя большой
                    знаках инициал речью по всей собрал маленькая ее диких.
                    Подзаголовок агентство вопрос знаках. Залетают сих запятой
                    оксмокс вопрос снова путь напоивший, буквоград своих даже
                    послушавшись его!
                  </p>
                  <p class="testimonial_name">
                    Steven Wilson<span> - accountant</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="news_events">
        <div class="container">
          <h2 class="h2">News & Events</h2>
          <div class="news_events_whole">
            <div class="news">
              <p>Latest News</p>
              <div class="news_block">
                <div class="new">
                  <div class="date">
                    <span class="number">15</span><br /><span class="month"
                      >June</span
                    ><br /><span class="year">2016</span>
                  </div>
                  <div class="text">
                    <h2 class="h2">Fugiat Quo Voluptas</h2>
                    <p class="little_text">
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse.
                    </p>
                  </div>
                </div>
                <div class="new">
                  <div class="date">
                    <span class="number">18</span><br /><span class="month"
                      >June</span
                    ><br /><span class="year">2016</span>
                  </div>
                  <div class="text">
                    <h2 class="h2">FugQui In Ea Voluptate</h2>
                    <p class="little_text">
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse.
                    </p>
                  </div>
                </div>
                <div class="new">
                  <div class="date">
                    <span class="number">20</span><br /><span class="month"
                      >June</span
                    ><br /><span class="year">2016</span>
                  </div>
                  <div class="text">
                    <h2 class="h2">Autem Vel Eum Iure</h2>
                    <p class="little_text">
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="events">
              <div class="featured_events"><p>Featured Events</p></div>
              <div class="events_all">
                <div class="event">
                  <div class="event_pics">
                    <img src="@/assets/main/events_pic1.jpg" alt="" /><img
                      src="@/assets/main/events_pic2.jpg"
                      alt=""
                    /><img src="@/assets/main/events_pic3.jpg" alt="" />
                  </div>
                  <div class="event_blocks">
                    <div class="event_description">
                      <div class="event_description_title">
                        Assumenda Est Cliche Reprehenderit
                      </div>
                      <div class="event_description_text little_text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                    <div class="event_description">
                      <div class="event_description_title">
                        Assumenda Est Cliche Reprehenderit
                      </div>
                      <div class="event_description_text little_text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                    <div class="event_description">
                      <div class="event_description_title">
                        Assumenda Est Cliche Reprehenderit
                      </div>
                      <div class="event_description_text little_text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                    <div class="event_description">
                      <div class="event_description_title">
                        Assumenda Est Cliche Reprehenderit
                      </div>
                      <div class="event_description_text little_text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="event">
                  <div class="event_pics">
                    <img src="@/assets/main/test_game1.jpg" alt="" /><img
                      src="@/assets/main/test_game2.jpg"
                      alt=""
                    /><img src="@/assets/main/test_game3.jpg" alt="" />
                  </div>
                  <div class="event_blocks">
                    <div class="event_description">
                      <div class="event_description_title">
                        Assumenda Est Cliche Reprehenderit
                      </div>
                      <div class="event_description_text little_text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                    <div class="event_description">
                      <div class="event_description_title">
                        Assumenda Est Cliche Reprehenderit
                      </div>
                      <div class="event_description_text little_text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                    <div class="event_description">
                      <div class="event_description_title">
                        Assumenda Est Cliche Reprehenderit
                      </div>
                      <div class="event_description_text little_text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                    <div class="event_description">
                      <div class="event_description_title">
                        Assumenda Est Cliche Reprehenderit
                      </div>
                      <div class="event_description_text little_text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="event">
                  <div class="event_pics">
                    <img src="@/assets/main/test_game4.jpg" alt="" /><img
                      src="@/assets/main/test_game5.jpg"
                      alt=""
                    /><img src="@/assets/main/test_game6.jpg" alt="" />
                  </div>
                  <div class="event_blocks">
                    <div class="event_description">
                      <div class="event_description_title">
                        Assumenda Est Cliche Reprehenderit
                      </div>
                      <div class="event_description_text little_text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                    <div class="event_description">
                      <div class="event_description_title">
                        Assumenda Est Cliche Reprehenderit
                      </div>
                      <div class="event_description_text little_text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                    <div class="event_description">
                      <div class="event_description_title">
                        Assumenda Est Cliche Reprehenderit
                      </div>
                      <div class="event_description_text little_text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                    <div class="event_description">
                      <div class="event_description_title">
                        Assumenda Est Cliche Reprehenderit
                      </div>
                      <div class="event_description_text little_text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="team">
        <div class="team_block container">
          <h2 class="h2">Our Team</h2>
          <div class="team_people">
            <div class="team_member">
              <img src="@/assets/main/team_1.jpg" alt="" />
              <div class="team_name">
                <h3>Mary Jane</h3>
                <p class="little_text">Vestibulum</p>
              </div>
              <div class="team_media">
                <a href="#"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#"><i class="fab fa-twitter fa-lg"></i></a>
                <a href="#"><i class="fas fa-rss fa-lg"></i></a>
                <a href="#"><i class="fab fa-vk fa-lg"></i></a>
              </div>
            </div>
            <div class="team_member">
              <img src="@/assets/main/team_2.jpg" alt="" />
              <div class="team_name">
                <h3>Peter Parker</h3>
                <p class="little_text">Vestibulum</p>
              </div>
              <div class="team_media">
                <a href="#"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#"><i class="fab fa-twitter fa-lg"></i></a>
                <a href="#"><i class="fas fa-rss fa-lg"></i></a>
                <a href="#"><i class="fab fa-vk fa-lg"></i></a>
              </div>
            </div>
            <div class="team_member">
              <img src="@/assets/main/team_3.jpg" alt="" />
              <div class="team_name">
                <h3>John Watson</h3>
                <p class="little_text">Vestibulum</p>
              </div>
              <div class="team_media">
                <a href="#"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#"><i class="fab fa-twitter fa-lg"></i></a>
                <a href="#"><i class="fas fa-rss fa-lg"></i></a>
                <a href="#"><i class="fab fa-vk fa-lg"></i></a>
              </div>
            </div>
            <div class="team_member">
              <img src="@/assets/main/team_4.jpg" alt="" />
              <div class="team_name">
                <h3>Steven Wilson</h3>
                <p class="little_text">Vestibulum</p>
              </div>
              <div class="team_media">
                <a href="#"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#"><i class="fab fa-twitter fa-lg"></i></a>
                <a href="#"><i class="fas fa-rss fa-lg"></i></a>
                <a href="#"><i class="fab fa-vk fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="subscribe">
        <div class="subscribe_block container">
          <h2 class="h2">Subscribe with Us</h2>
          <form method="post">
            <input type="text" placeholder="Email" />
            <button class="button">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
    <footer>
      <div class="container">
        <h2 class="h2">Contact Us</h2>
        <div class="footer_info">
          <div class="contact_data">
            <ul class="little_text">
              <li>Get in touch with us</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,sheets
                containing Lorem Ipsum passages sed do, At vero eos et accusamus
                et iusto odio digs qui blanditiis
              </li>
              <li>
                Leningradsky AVE 39, BLDG 79<br />
                MOSCOW 125167, Russia
              </li>
              <li>Telephone : +00 111 222 3333</li>
              <li>FAX : +1 888 888 4444</li>
              <li>Email : <span>mail@example.com</span></li>
            </ul>
          </div>
          <form action="post">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea
              type="text"
              placeholder="Message"
              class="message"
            ></textarea>
            <button class="button">SUMBIT</button>
          </form>
        </div>
        <div class="map">
          <h2 class="h2">Route Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1585.8840317013232!2d37.53824689579627!3d55.79708042561973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b549c0ac2b5af5%3A0x9ad683f7c53bef9!2z0J7QvtC-ICLQnNGN0LnQuy7RgNGDIg!5e0!3m2!1sru!2sru!4v1620652246978!5m2!1sru!2sru"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <section class="rights_background">
        <p>© 2017 Историческе Игры. Все права защищены</p>
      </section>
    </footer>
  </div>
</template>

<script>
import Gallery from "@/components/Gallery";
import Cart from "@/components/Cart";
import Filter from "@/components/Filter";

export default {
  name: "HomeView",
  components: {
    Gallery,
    Cart,
    Filter,
  },
};
</script>