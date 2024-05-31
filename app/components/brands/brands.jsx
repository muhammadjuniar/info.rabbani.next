import Image from "next/image";
import styles from "./brands.module.css";
import { Col, Container, Navbar, Row } from "react-bootstrap";

export default function Brands() {
  return (
    <>
      <div className={styles.brandArea}>
        <div>
          <Navbar 
            collapseOnSelect
            className={styles.bgNavigation}
          >
            <Container className="justify-content-between align-items-center">
              <Navbar.Brand style={{padding:"0px"}}>
                <Image
                  src="/brands/ico_dluha.png"
                  alt="ico_rabbani"
                  className={styles.rabbaniBrand}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </Navbar.Brand>
              <Navbar.Brand>
                <Image
                  src="/brands/ico_bani.png"
                  alt="ico_rabbani"
                  className={styles.rabbaniBrand}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </Navbar.Brand>
              <Navbar.Brand>
                <Image
                  src="/brands/ico_qf.png"
                  alt="ico_rabbani"
                  className={styles.rabbaniBrand}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </Navbar.Brand>
              <Navbar.Brand>
                <Image
                  src="/brands/ico_men.png"
                  alt="ico_rabbani"
                  className={styles.rabbaniBrand}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </Navbar.Brand>
              <Navbar.Brand>
                <Image
                  src="/brands/ico_exo.png"
                  alt="ico_rabbani"
                  className={styles.rabbaniBrand}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </Navbar.Brand>
              <Navbar.Brand>
                <Image
                  src="/brands/ico_tailor.png"
                  alt="ico_rabbani"
                  className={styles.rabbaniBrand}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
}
