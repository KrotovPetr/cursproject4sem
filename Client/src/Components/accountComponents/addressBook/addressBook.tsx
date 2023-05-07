import React, {useEffect} from 'react';
import styles from './addressBook.module.scss';
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import { v4 as uuidv4 } from 'uuid';
import {useFetchAllServiceQuery} from "../../../Store/ApiQuery/serviceService";

const AddressBook = () => {
    const {data} = useFetchAllServiceQuery(100);
    // useEffect(()=>{},[data])
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
                        { data && data.map((elem: any)=>
                        {
                            let coord = elem.coordinates.split(" ");
                            coord = coord.map((el: any)=>Number.parseFloat(el));
                             return <Placemark geometry={coord}
                                properties={{

                                    hintContent: 'Собственный значок метки',
                                    balloonContent: 'Это красивая метка',

                                }}
                            />
                        })
                        }
                    </Map>
                </YMaps>
            </div>
            <div className={styles.addresses}>
                {data && data.map((elem: any)=>{
                    return <div className={styles.address} key={uuidv4()}>
                        <h1 className={styles.addHeader}>{elem.name}</h1>
                        <p className={styles.addDesc}>{elem.address}</p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default AddressBook;