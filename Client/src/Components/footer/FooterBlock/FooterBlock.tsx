import React, { FC } from 'react';
import { TContent } from '../../../Utils/Types/types';
import styles from './footerBlock.module.scss';
import { v4 as uuidv4 } from 'uuid';

type TBlock = {
    arr: TContent[];
    header: String;
};

const FooterBlock: FC<TBlock> = (props) => {
    return (
        <div className={styles.block}>
            <h3 className={styles.header}>{props.header}</h3>
            {props.arr.map((elem: TContent) => {
                return (
                    <a key={uuidv4()} className={styles.link}>
                        {elem.name}
                    </a>
                );
            })}
        </div>
    );
};

export default FooterBlock;
