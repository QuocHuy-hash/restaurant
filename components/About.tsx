import styles from "@/styles/components/About.module.scss";

function About() {
  return (
    <section className={styles.about} id="about">
      <h3 className="sub-heading">về chúng tôi</h3>
      <h1 className="heading">tại sao chọn chúng tôi?</h1>

      <div className={styles.about__row}>
        <div className={styles.about__image}>
          <img src="images/about-img.png" alt="" />
        </div>

        <div className={styles.about__content}>
          <h3 className={styles.about__title}>món ăn ngon nhất cả nước</h3>
          <p className={styles.about__description}>
            Chúng tôi tự hào mang đến cho quý khách những trải nghiệm ẩm thực tuyệt vời nhất. 
            Với đội ngũ đầu bếp chuyên nghiệp và nguyên liệu tươi ngon, chúng tôi cam kết 
            mang đến những món ăn chất lượng cao nhất.
          </p>
          <p className={styles.about__description}>
            The customer is very important, the customer will be followed by the
            customer. Pure football land Aenean vulputate members no eu maximus.
            In financing, it is but the sad sauce, before from the occasional
            ligula, is not for a long time it was like ex.
          </p>
          <div className={styles.about__container}>
            <div className={styles.about__icon}>
              <i className="fas fa fa-shipping-fast"></i>
              <span>giao hàng miễn phí</span>
            </div>
            <div className={styles.about__icon}>
              <i className="fas fa fa-dollar-sign"></i>
              <span>thanh toán dễ dàng</span>
            </div>
            <div className={styles.about__icon}>
              <i className="fas fa fa-headset"></i>
              <span>phục vụ 07h00 sáng đến 22h00</span>
            </div>
          </div>
          <a href="#" className="button">
            tìm hiểu thêm
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
