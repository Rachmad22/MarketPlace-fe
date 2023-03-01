import styles from "@/styles/components/CardProduct.module.scss";
import jacket from "public/images/jacket.png";
import rating from "public/images/rating.svg";

const CardProduct = () => {
  return (
    <>
      <div class="container">
        <div class={`card ${styles.cardProduct}`}>
          <img src={jacket.src} class="card-img-top" alt="Jacket" />
          <div class="card-body">
            <h5>Men&apos;s formal suit - Black & White</h5>
            <p class={styles.price}>$ 40.0</p>
            <p class={styles.store}>Zalora Cloth</p>
            <img src={rating.src} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
