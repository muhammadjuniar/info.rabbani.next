import { Col } from "react-bootstrap";
import styles from "./card.module.css"
import Image from "next/image";

export default function CardComponent() {
  return (
    <>
      <Col lg={3} className="mt-5">
        <a href="<?php echo $url; ?>" target="_blank">
          <div className={styles.serviceItem}>
            <Image className={styles.bannerImg} src="" alt="" />
            <h4 className={styles.title}>Judul</h4>
            <p className={styles.paragraph}>Deskripsi</p>
          </div>
        </a>
      </Col>
    </>
  );
}
