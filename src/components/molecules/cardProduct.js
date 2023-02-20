import styles from "@/styles/components/CardProduct.module.scss";
import jacket from "public/images/jacket.png";
import rating from "public/images/rating.svg";
import Link from "next/link";

const CardProduct = ({ item }) => {
  return (
    <>
      <div class="container">
        <div class={`card ${styles.cardProduct}`}>
          <Link href={`/detail/${item?.product_id}`}>
            <img
              src={jacket.src}
              class="card-img-top"
              alt={item?.product_name}
            />
          </Link>
          <div class="card-body">
            <Link href={`/detail/${item?.product_id}`}>
              <h5>{item?.product_name}</h5>
            </Link>
            <p class={styles.price}>$ {item?.price}</p>
            <p class={styles.store}>Zalora Cloth</p>
            <img src={rating.src} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
