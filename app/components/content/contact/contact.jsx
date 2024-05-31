import Image from "next/image";
import styles from "./contact.module.css";
import stylesServ from "../card/card.module.css";
import { Col, Container, Row } from "react-bootstrap";
import CardComponent from "../card/card";

export default function Contact() {
  return (
    <>
      <div className={styles.contactArea}>
        <Container>
          <Row className="justify-content-md-center mt-4 mb-4">
            <Col lg={12}>
              <div className="text-center">
                <h4 className={styles.titleBold}>Hubungi Rabbani Disini</h4>
              </div>
            </Col>
            <Col lg={12} className="mb-5">
              <Row className="d-flex justify-content-center">
                <Col lg={12}>
                  <Row className="justify-content-center align-items-center">
                    <Col lg={7}>
                      <Row>
                        <Col lg={6} className="mt-5">
                          {/* <?php if($image != "career.png"){ ?>
                                        <a href="https://wa.me/<?php echo $number; ?>?text=Assalamu'alaikum" target="_blank">
                                        <?php }else{ ?>
                                        <a href="mailto:talentacquisition@rabbani.co.id" target="_blank">
                                        <?php } ?> */}

                          <a href="<?php echo $url; ?>" target="_blank">
                            <div className={stylesServ.serviceItem}>
                              <Image
                                className={stylesServ.bannerImg}
                                src=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt=""
                              />
                              <h4 className={stylesServ.title}>Judul</h4>
                              <p className={stylesServ.paragraph}>Deskripsi</p>
                            </div>
                          </a>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={5}>
                      <Image
                        className={styles.img}
                        src="/contact/ico_tangan.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt=""
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col lg={12} className="mt-5">
              <Row className="justify-content-center align-items-center">
                <Col lg={4}>
                  <Image
                  className={styles.img}
                    src="/contact/img_rafatrbadge.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                  />
                </Col>
                <Col lg={8}>
                  <a href="https://rafatr.rabbani.id/" target="_blank">
                    <div className={stylesServ.serviceItem}>
                      <Image
                        className={stylesServ.bannerImg}
                        src="/contact/rafatr.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt=""
                      />
                      <h4 className={`${stylesServ.title} mt-4`}>RAFATR, Rabbani Fast Track</h4>
                      <p className={stylesServ.paragraph}>
                        Service terbaru Rabbani untuk solusi produk yang tidak
                        ada ketika mencari di store, cepat cukup chat admin
                        tanpa antrian dan biaya tambahan, semuanya bisa selesai
                        dalam genggaman. Chat Sekarang!
                      </p>
                    </div>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
