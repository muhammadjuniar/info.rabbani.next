import Image from "next/image";
import styles from "./marketShare.module.css";
import { Col, Container, Row } from "react-bootstrap";

export default function MarketShare() {
  return (
    <>
      <div className={styles.marketArea}>
        <Container>
          <Row>
            <Col lg={12}>
              <Row className="justify-content-md-center mt-4 mb-4">
                <Col lg={12}>
                  <div className="text-center">
                    <h4 className={styles.titleBold}>Rabbani Marketplace</h4>
                  </div>
                </Col>
                <Col lg={12}>
                  <Row className="d-flex justify-content-center">
                    <Col>
                      <a
                        href="<?php echo $linkSite ?>"
                        className="d-flex justify-content-center"
                        target="_blank"
                      >
                        <Image className={styles.logo} src="" alt="Shopee" />
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col lg={12}>
              <Row className="justify-content-md-center">
                <Col lg={12}>
                  <div className="text-center">
                    <h4 className={styles.titleBold}>Bani Batuta Marketplace</h4>
                  </div>
                </Col>
                <Col lg={12}>
                  <Row className="d-flex justify-content-center">
                    <Col>
                      <a
                        href="<?php echo $linkSite ?>"
                        className="d-flex justify-content-center"
                        target="_blank"
                      >
                        <Image className={styles.logo} src="" alt="Shopee" />
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
