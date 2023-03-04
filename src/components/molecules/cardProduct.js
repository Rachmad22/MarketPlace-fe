import styles from "@/styles/components/CardProduct.module.scss";
import jacket from "public/images/jacket.png";
// import rating from "public/images/rating.svg";
import Link from "next/link";

const CardProduct = ({ item }) => {
  return (
    <>
      <div class="container">
        <div class={`card ${styles.cardProduct}`}>
          <Link href={`/detail/${item?.id}`}>
            <img
              src={item?.product_images}
              class="card-img-top"
              alt={item?.product_name}
            />
          </Link>
          <div class="card-body">
            <Link href={`/detail/${item?.id}`}>
              <h5>{item?.product_name}</h5>
            </Link>
            <p class={styles.price}>$ {item?.price}</p>
            <p class={styles.store}>{item?.store_name}</p>
            {/* <img src={rating.src} alt="rating" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
