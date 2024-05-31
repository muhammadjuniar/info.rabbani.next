import { Col, Container, Row } from "react-bootstrap";
import styles from "./content.module.css";
import Image from "next/image";
import CardComponent from "./card/card";
import MarketShare from "./marketShare/marketShare";
import Contact from "./contact/contact";

export default function Content() {
  return (
    <>
      <div className={styles.services}>
        <Container>
          <Container>
            <Row>
              <Col lg={12} className="text-center mt-4">
                <div className={styles.titles}>
                  <h4 className={styles.titleNormal}>Rabbani HIVE</h4>
                  <h4 className={styles.titleBold}>
                    Tempat untuk semua kebutuhanmu
                  </h4>
                </div>
              </Col>
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </Row>
          </Container>
        </Container>
        <Container>
          <MarketShare />
        </Container>
        <Container>
          <Contact />
        </Container>
      </div>
    </>
  );
}
