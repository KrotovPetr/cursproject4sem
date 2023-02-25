import React, { FC } from 'react';
import styles from './footer.module.scss';
import InputFooter from './FooterInput/InputFooter';
import Button from '../Button/Button';
import FooterBlock from './FooterBlock/FooterBlock';
import data from '../../Utils/Data/fakeData';
import Telegram from '../../Utils/Images/telegram.png';
import Instagram from '../../Utils/Images/Instagram.png';
const Footer: FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.topLevel}>
                <div className={styles.words}>
                    <h2 className={styles.wordsHeader}>
                        Sign Up To Our Newsletter.
                    </h2>
                    <p className={styles.wordsMini}>
                        Be the first to hear about the latest offers.
                    </p>
                </div>
                <form className={styles.emailSendForm}>
                    <InputFooter />
                    <div className={styles.butField}>
                        <Button butContent="Subscribe" />
                    </div>
                </form>
            </div>
            <div className={styles.descriptions}>
                <FooterBlock arr={data} header="Information" />
                <FooterBlock arr={data} header="PC parts" />
                <FooterBlock arr={data} header="Desktop PCs" />
                <FooterBlock arr={data} header="Laptops" />
                <FooterBlock arr={data} header="Address" />
            </div>
            <hr className={styles.line} />
            <div className={styles.contacts}>
                <div className={styles.icons}>
                    <img className={styles.icon} src={Telegram} alt="TG link" />
                    <img
                        className={styles.icon}
                        src={Instagram}
                        alt="IG link"
                    />
                </div>
                <p className={styles.pText}>Copyright © 2023 Shop Pty. Ltd.</p>
            </div>
        </div>
    );
};

export default Footer;
