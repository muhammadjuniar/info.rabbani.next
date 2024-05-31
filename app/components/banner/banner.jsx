import Image from "next/image";
import styles from "./banner.module.css";
import { Col, Container, Row } from "react-bootstrap";

export default function MainBanner() {
  return (
    <>
      <div className={styles.mainBanner}>
        <Container>
          <Row>
            <Col lg={12}>
              <Row>
                <Col lg={6}>
                  <div className={styles.rightImage}>
                    <Image
                      className={styles.img}
                      src="/ico_jpg.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </Col>
                <Col lg={1}></Col>
                <Col lg={5} className="align-self-center">
                  <div className={styles.leftContent}>
                    <Row>
                      <Col lg={12} text="white">
                        <h2 className={styles.textHeader}>
                          Hemat waktu untuk mencari semua kebutuhan kamu di
                          rabbani
                        </h2>
                      </Col>
                      <Col lg={12} className={styles.centeredButton}>
                        <div className={`${styles.whiteButton} ${styles.firstButton}`}>
                          <a href="#content">Eksplor sekarang</a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
