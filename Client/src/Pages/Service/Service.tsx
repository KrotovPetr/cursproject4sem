import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from './service.module.scss';
import ServiceCard from '../../Components/serviceCard/ServiceCard';
import { v4 as uuidv4 } from 'uuid';
import Tools from '../../Utils/Images/tools.png';

const Service = () => {
    const addressArr = ['Сервис', 'Сервис', 'Сервис', 'Сервис'];
    return (
        <div className={styles.service}>
            <div className={styles.serviceContentContainer}>
                <div className={styles.infoBlock}>
                    <div className={styles.blackDescription}>
                        <div className={styles.descBlock}>
                            <h2 className={styles.header}>
                                A Family That Keeps On Growing
                            </h2>
                            <div className={styles.textBlock}>
                                <p className={styles.text}>
                                    We always aim to please the home market,
                                    supplying great computers and hardware at
                                    great prices to non-corporate customers,
                                    through our large Melbourne CBD showroom and
                                    our online store.
                                </p>
                                <p className={styles.text}>
                                    Shop management approach fosters a strong
                                    customer service focus in our staff. We
                                    prefer to cultivate long-term client
                                    relationships rather than achieve quick
                                    sales, demonstrated in the measure of our
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
                                <img
                                    src={Tools}
                                    className={styles.icon}
                                    alt="star"
                                />
                            </div>
                            <h2 className={styles.header}>
                                Delivery to All Regions
                            </h2>
                            <div className={styles.textBlock}>
                                <p className={styles.text}>
                                    We deliver our goods all across Australia.
                                    No matter where you live, your order will be
                                    shipped in time and delivered right to your
                                    door or to any other location you have
                                    stated. The packages are handled with utmost
                                    care, so the ordered products will be handed
                                    to you safe and sound, just like you expect
                                    them to be.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.blackDescriptionServices}>
                        <h1 className={styles.descBlock}>Services</h1>
                        <div className={styles.serviceList}>
                            {addressArr.map((address: any) => {
                                return (
                                    <ServiceCard
                                        data={address}
                                        key={uuidv4()}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>

                <YMaps>
                    <Map
                        width="1400px"
                        height="500px"
                        defaultState={{
                            center: [55.75, 37.57],
                            zoom: 9,
                            controls: ['zoomControl', 'fullscreenControl'],
                        }}
                        modules={[
                            'control.ZoomControl',
                            'control.FullscreenControl',
                        ]}
                    >
                        <Placemark
                            defaultGeometry={[55.751574, 37.573856]}
                            properties={{
                                hintContent: 'Собственный значок метки',
                                balloonContent: 'Это красивая метка',
                            }}
                        />
                        <Placemark defaultGeometry={[54.751574, 36.573856]} />
                    </Map>
                </YMaps>
            </div>
        </div>
    );
};

export default Service;
