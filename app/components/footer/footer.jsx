import Image from "next/image";
import styles from "./footer.module.css";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <div
        className={`${styles.services} ${styles.newSection}`}
        style={{ height: "10px !important" }}
      >
        <div
          className="titles text-center"
          style={{ marginBottom: "0 !important" }}
        >
          <h4 className={styles.titleBottom}>Rabbani #gakpakelama</h4>
        </div>
      </div>
      <div className={styles.footer}>
        <Container>
          <Row className="w-100">
            <Col lg={6}>
              <Row className={styles.footerWidget}>
                <Col lg={12} className={styles.hive}>
                  <a href="#top">
                    <Image className={styles.img} src="/footer/ico_hive.png" width={0} height={0} sizes="100vw" alt="" />
                  </a>
                </Col>
                <Col lg={12} className={styles.hive}>
                  <p className={styles.text}>RABBANI HIVE 2023</p>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <div className={styles.footerWidget}>
                <a target="_blank" href="https://rabbani.id">
                  <p className={styles.socialText}>
                    <Image className={`${styles.icoSocial} ${styles.img}`} src="/footer/ico_web.png" width={0} height={0} sizes="100vw" alt="" />
                    rabbani.id
                  </p>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/rabbaniprofesorkerudung"
                >
                  <p className={styles.socialText}>
                    <Image className={`${styles.icoSocial}`} src="/footer/ico_ig.png" width={0} height={0} sizes="100vw" alt="" />
                    rabbaniprofesorkerudung
                  </p>
                </a>
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@rabbani.official"
                >
                  <p className={styles.socialText}>
                    <Image className={`${styles.icoSocial}`} src="/footer/ico_tiktok.png" width={0} height={0} sizes="100vw" alt="" />
                    rabbani.official
                  </p>
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@rabbanitvofficial"
                >
                  <p className={styles.socialText}>
                    <Image className={`${styles.icoSocial}`} src="/footer/ico_youtube.png" width={0} height={0} sizes="100vw" alt="" />
                    rabbaniTV
                  </p>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
