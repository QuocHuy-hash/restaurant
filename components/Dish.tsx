import Image from "next/image";
import Stars from "./StarRating";
import classNames from "classnames";
import styles from "@/styles/components/Dish.module.scss";

interface DishProps {
  title: string;
  img: string;
  rating: number;
  detailed: boolean;
  favorited: boolean;
  price: number;
  description?: string;
}
function Dish({
  title,
  img,
  rating,
  price,
  description,
  favorited,
  detailed,
}: DishProps) {
  return (
    <div className={styles.dish}>
      {favorited ? (
        <a
          href="#"
          className={classNames("fas", "fa-heart", styles.dish__favorite)}
        ></a>
      ) : null}
      {detailed ? (
        <a
          href="#"
          className={classNames("fas", "fa-eye", styles.dish__detail)}
        ></a>
      ) : null}
      <div className={styles.dish__image}>
        <Image 
          src={`/${img}`} 
          alt={title}
          width={200}
          height={180}
          priority
        />
      </div>
      <h3 className={styles.dish__title}>{title}</h3>
      {description ? (
        <p className={styles.dish__description}>{description}</p>
      ) : null}
      <Stars value={rating} />
      <span className={styles.dish__price}>{`${price} VND`}</span>
      <a href="#" className="button">
        Đặt hàng
      </a>
    </div>
  );
}

export default Dish;
