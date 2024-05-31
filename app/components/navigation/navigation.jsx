import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import styles from "./navigation.module.css";
import Image from "next/image";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" fixed="top" className={styles.bgNavigation}>
        <Container className="justify-content-space-between align-items-center">
          <Navbar.Brand className={styles.rabbaniBrand} href="#home">
            <Image
              src="/ico_rabbani.png"
              alt="ico_rabbani"
              className={styles.rabbaniBrand}
              width={0}
              height={0}
              sizes="100vw"
            />
          </Navbar.Brand>
          <Navbar.Brand>
            <Image
              src="/ico_hive.png"
              alt="ico_hive"
              className={styles.hiveBrand}
              width={0}
              height={0}
              sizes="100vw"
            />
          </Navbar.Brand>

          <Navbar.Brand href="#home">
            <Image
              className={styles.icoSocmed}
              src="/ico_tiktok.png"
              alt="ico_tiktok"
              width={0}
              height={0}
              sizes="100vw"
            />
            <Image
              className={styles.icoSocmed}
              src="/ico_ig.png"
              alt="ico_ig"
              width={0}
              height={0}
              sizes="100vw"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
