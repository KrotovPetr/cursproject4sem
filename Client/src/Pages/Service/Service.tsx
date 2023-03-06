import React from 'react';
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";
import styles from './service.module.scss';
import ServiceCard from "./ServiceCard/ServiceCard";
import { v4 as uuidv4 } from 'uuid';

const Service = () => {
    const addressArr = ["Сервис","Сервис","Сервис","Сервис","Сервис","Сервис","Сервис","Сервис","Сервис","Сервис"]
    return (
        <div className={styles.service}>
            <div className={styles.serviceContentContainer}>
                <YMaps>
                    <Map width='1400px' height="500px" defaultState={ { center: [55.75, 37.57], zoom: 9, controls: ["zoomControl", "fullscreenControl"] }} modules={["control.ZoomControl", "control.FullscreenControl"]}>
                        <Placemark defaultGeometry={[55.751574, 37.573856]} properties={{
                            hintContent: 'Собственный значок метки',
                            balloonContent: 'Это красивая метка'
                        }}
                        />
                        <Placemark defaultGeometry={[54.751574, 36.573856]} />
                    </Map>
                </YMaps>
                <div className={styles.serviceList}>
                    {addressArr.map((address:any)=>{return <ServiceCard data={address} key={uuidv4()}/>})
                    }
                </div>

            </div>
        </div>
    );
};

export default Service;