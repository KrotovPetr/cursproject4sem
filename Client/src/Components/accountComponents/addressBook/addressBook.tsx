import React from 'react';
import styles from './addressBook.module.scss';
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import { v4 as uuidv4 } from 'uuid';

const AddressBook = () => {
    const address = [
        "Москва",
        "Чебаркуль",
        "Минск"
    ]
    return (
        <div className={styles.addressBook}>
            <h1 className={styles.header}>Address Book</h1>
            <hr className={styles.line}/>
            <div className={styles.map}>
                <YMaps>
                    <Map
                        width="600px"
                        height="300px"
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
            <div className={styles.addresses}>
                {address.map((elem)=>{
                    return <div className={styles.address} key={uuidv4()}>
                        <h1 className={styles.addHeader}>{elem}</h1>
                        <p className={styles.addDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores autem distinctio esse inventore ipsa maxime provident sed tempore?</p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default AddressBook;