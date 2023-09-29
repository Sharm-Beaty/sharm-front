import { Fragment } from "react";
import "./MobileFooter.scss";
import { Accordion } from "../../Accordion";
import { mobileData, footerData } from "../footerData";
import { ReadMore } from "../../ReadMore";
import { Line } from "../../UI/Line/Line";
import { ActiveLink } from "../../UI/ActiveLink/ActivLink";
import { CiFacebook, CiInstagram, CiPhone, CiTwitter } from "@/assets/icons";

export const MobileFooter = () => {
  return (
    <div className='mobile-only footer-mobile-container'>
      <div className='footer-mobile-information'>
        {footerData.slice(0, 2).map(({ id, mobileTitle, names }) => (
          <Fragment key={id}>
            <Accordion
              footer
              title={mobileTitle}
              content={names.map(({ id, name, path }) => (
                <li
                  key={id}
                  className='footer-navigation-menu-item'
                >
                  <ActiveLink rout={path}>{name}</ActiveLink>
                </li>
              ))}
            />
            <Line isAbsolute />
          </Fragment>
        ))}
        <a
          href='tel:0800505113'
          className='footer-pnohe active-link'
        >
          <CiPhone
            color='#363636'
            size={25}
          />
          <span>[0800 50 51 13]</span>
        </a>
        <Line isAbsolute />
        <ul className='footer-social-list'>
          <li className='footer-social-item'>
            <a
              className='footer-social-link'
              href='/'
              target='_blank'
            >
              <CiTwitter
                size={25}
                color='#363636'
              />
            </a>
          </li>
          <li className='footer-social-item'>
            <a
              className='footer-social-link'
              href='/'
              target='_blank'
            >
              <CiInstagram
                size={25}
                color='#363636'
              />
            </a>
          </li>
          <li className='footer-social-item'>
            <a
              className='footer-social-link'
              href='/'
              target='_blank'
            >
              <CiFacebook
                size={25}
                color='#363636'
              />
            </a>
          </li>
        </ul>
      </div>
      <Line isAbsolute />
      <div className='footer-mobile-about'>
        <ReadMore content={mobileData.siteDescription} />
      </div>
    </div>
  );
};
