/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/components/CardProduct.module.scss";
import Link from "next/link";

const CardProduct = ({ item }) => {
  return (
    <>
      <div className="container">
        <div className={`card ${styles.cardProduct}`}>
          <Link href={`/detail/${item?.id}`}>
            <img
              src="/images/jacket.png"
              className="card-img-top"
              alt={item?.product_name}
            />
          </Link>
          <div className="card-body">
            <Link href={`/detail/${item?.id}`}>
              <h5>{item?.product_name}</h5>
            </Link>
            <p className={styles.price}>$ {item?.price}</p>
            <p className={styles.store}>{item?.store_name}</p>
            <img src="/images/rating.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
