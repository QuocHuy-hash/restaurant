import classNames from "classnames";
import styles from "@/styles/components/Order.module.scss";

function Order() {
  return (
    <section className={styles.order} id="order">
      <h3 className="sub-heading">Đặt hàng ngay</h3>
      <h1 className="heading">Giao hàng miễn phí</h1>
      <form action="#" className={styles.form}>
        <div className={styles.order__container}>
          <div className={styles.form__item}>
            <span className={styles.label}>Tên khách hàng</span>
            <input
              className={styles.input}
              type="text"
              placeholder="enter your name"
            ></input>
          </div>
          <div className={styles.form__item}>
            <span className={styles.label}>Số điện thoại</span>
            <input
              className={styles.input}
              type="text"
              placeholder="enter your number"
            ></input>
          </div>
        </div>
        <div className={styles.order__container}>
          <div className={styles.form__item}>
            <span className={styles.label}>Đặt món</span>
            <input
              className={styles.input}
              type="text"
              placeholder="enter food name"
            ></input>
          </div>
          <div className={styles.form__item}>
            <span className={styles.label}>additional food</span>
            <input
              className={styles.input}
              type="text"
              placeholder="extra with food"
            ></input>
          </div>
        </div>
        <div className={styles.order__container}>
          <div className={styles.form__item}>
            <span className={styles.label}>Số tiền</span>
            <input
              className={styles.input}
              type="number"
              placeholder="how many orders"
            ></input>
          </div>
          <div className={styles.form__item}>
            <span className={styles.label}>Thời gian</span>
            <input
              className={styles.input}
              type="datetime-local"
              placeholder="date and time"
            ></input>
          </div>
        </div>
        <div className={styles.order__container}>
          <div className={styles.form__item}>
            <span className={styles.label}>Địa chỉ</span>
            <textarea
              className={styles.input}
              id=""
              name=""
              cols={30}
              rows={10}
              placeholder="enter your address"
            ></textarea>
          </div>
          <div className={styles.form__item}>
            <span className={styles.label}>Ghi chú cho chúng tôi</span>
            <textarea
              className={styles.input}
              id=""
              name=""
              cols={30}
              rows={10}
              placeholder="enter your message"
            ></textarea>
          </div>
        </div>
        <input
          type="submit"
          value="Đặt hàng ngay"
          className={classNames("button", styles.button)}
        />
      </form>
    </section>
  );
}

export default Order;
