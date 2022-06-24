import * as React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"

import 'bootstrap/scss/bootstrap.scss'

import { languageButtonImage } from './navbar.module.css'

function BasicNavbar({ websiteTitle }) {
  const {t} = useTranslation()
  const {originalPath} = useI18next();

  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top" style={{marginBottom: "0"}}>
      <Container style={{marginBottom: "0"}}>
        <Navbar.Brand href="#">{websiteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">{t("About")}</Nav.Link>
            <NavDropdown title={t("Services")} id="basic-nav-dropdown">
              <NavDropdown.Item href="#services/tuning">{t("Tuning")}</NavDropdown.Item>
              <NavDropdown.Item href="#services/regulation">{t("Regulation")}</NavDropdown.Item>
              <NavDropdown.Item href="#services/repairs">{t("Repairs")}</NavDropdown.Item>
              <NavDropdown.Item href="#services/intonation">{t("Voicing/Intonation")}</NavDropdown.Item>
              <NavDropdown.Item href="#services/assessment">{t("Assessment")}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#services/additional_services">{t("Additional Services")}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">{t("Contact")}</Nav.Link>
            <NavDropdown title={t("Change Language")} id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to={originalPath} language="de">
                  <StaticImage className={languageButtonImage}
                    alt="Button to switch Language to German"
                    src="../../images/1200px-Flag_of_Germany.svg.webp"
                  />
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={originalPath} language="en">
                  <StaticImage className={languageButtonImage}
                    alt="Button to switch Language to English"
                    src="../../images/vector-image-american-flag-accurate-american-flag-101041578.jpeg"
                  />
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;