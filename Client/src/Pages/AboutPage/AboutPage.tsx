import React from 'react';
import styles from './about.module.scss';
import Heart from '../../Utils/Images/heart.png';
import Car from '../../Utils/Images/car.png';
import Star from '../../Utils/Images/star.png';
import Tools from '../../Utils/Images/tools.png';

const AboutPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.blackDescription}>
                <div className={styles.descBlock}>
                    <h2 className={styles.header}>
                        A Family That Keeps On Growing
                    </h2>
                    <div className={styles.textBlock}>
                        <p className={styles.text}>
                            We always aim to please the home market, supplying
                            great computers and hardware at great prices to
                            non-corporate customers, through our large Melbourne
                            CBD showroom and our online store.
                        </p>
                        <p className={styles.text}>
                            {' '}
                            Shop management approach fosters a strong customer
                            service focus in our staff. We prefer to cultivate
                            long-term client relationships rather than achieve
                            quick sales, demonstrated in the measure of our
                            long-term success.
                        </p>
                    </div>
                </div>
                <div className={styles.image}></div>
            </div>

            <div className={styles.whiteDescription}>
                <div className={styles.image}></div>
                <div className={styles.descBlock}>
                    <div className={styles.label}>
                        <img src={Tools} className={styles.icon} alt="star" />
                    </div>
                    <h2 className={styles.header}>Delivery to All Regions</h2>
                    <div className={styles.textBlock}>
                        <p className={styles.text}>
                            We deliver our goods all across Australia. No matter
                            where you live, your order will be shipped in time
                            and delivered right to your door or to any other
                            location you have stated. The packages are handled
                            with utmost care, so the ordered products will be
                            handed to you safe and sound, just like you expect
                            them to be.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.blackDescription}>
                <div className={styles.descBlock}>
                    <div className={styles.label}>
                        <img src={Heart} className={styles.icon} alt="heart" />
                    </div>
                    <h2 className={styles.header}>You're In Safe Hands</h2>
                    <div className={styles.textBlock}>
                        <p className={styles.text}>
                            Experience a 40% boost in computing from last
                            generation. MSI Desktop equips the 10th Gen. Intel®
                            Core™ i7 processor with the upmost computing power
                            to bring you an unparalleled gaming experience.
                        </p>
                        <p className={styles.text}>
                            *Performance compared to i7-9700. Specs varies by
                            model.
                        </p>
                    </div>
                </div>
                <div className={styles.image}></div>
            </div>

            <div className={styles.whiteDescription}>
                <div className={styles.image}></div>
                <div className={styles.descBlock}>
                    <div className={styles.label}>
                        <img src={Star} className={styles.icon} alt="star" />
                    </div>
                    <h2 className={styles.header}>Delivery to All Regions</h2>
                    <div className={styles.textBlock}>
                        <p className={styles.text}>
                            We deliver our goods all across Australia. No matter
                            where you live, your order will be shipped in time
                            and delivered right to your door or to any other
                            location you have stated. The packages are handled
                            with utmost care, so the ordered products will be
                            handed to you safe and sound, just like you expect
                            them to be.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.blackDescription}>
                <div className={styles.descBlock}>
                    <div className={styles.label}>
                        <img src={Car} className={styles.icon} alt="heart" />
                    </div>
                    <h2 className={styles.header}>Delivery to All Regions</h2>
                    <div className={styles.textBlock}>
                        <p className={styles.text}>
                            We deliver our goods all across Australia. No matter
                            where you live, your order will be shipped in time
                            and delivered right to your door or to any other
                            location you have stated. The packages are handled
                            with utmost care, so the ordered products will be
                            handed to you safe and sound, just like you expect
                            them to be.
                        </p>
                    </div>
                </div>
                <div className={styles.image}></div>
            </div>

            <div className={styles.comments}> Тут комменты</div>
        </div>
    );
};

export default AboutPage;
