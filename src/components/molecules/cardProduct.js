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
              src={
                item?.product_images?.[0]?.image ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhf-td4GXegmuo582JIu6X6H8x5yxF3ehow&usqp=CAU"
              }
              class="card-img-top w-100"
              alt={item?.product_name}
              style={{
                height: "145px",
                objectPosition: "center",
                objectFit: "contain",
              }}
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
