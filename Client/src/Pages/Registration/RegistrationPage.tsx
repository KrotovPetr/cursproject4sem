import React, { FC, useState } from 'react';
import styles from './regPage.module.scss';
import Button from '../../Components/Button/Button';
import Checkbox from '../../Components/Checkbox/Checkbox';
import RegForm from '../../Components/Forms/RegForm/RegInputs/RegForm';
import PassInputs from '../../Components/Forms/RegForm/Password/PassInputs';

const RegistrationPage: FC = () => {
    const [stage, setStage] = useState<number>(0);
    return (
        <div className={styles.regPage}>
            <form className={styles.regForm} onSubmit={(): void => {}}>
                <div className={styles.breadCrumbs}>Тут крошки</div>
                <h2 className={styles.header}>Registration</h2>
                <div className={styles.infoBlocks}>
                    <div className={styles.block}>
                        <h4 className={styles.hText}>Create new account</h4>
                        {stage === 0 ? <RegForm /> : <PassInputs />}
                    </div>
                    <div className={styles.block}>
                        <h4 className={styles.hText}>New Customer?</h4>
                        <p className={styles.planeText}>
                            Creating an account has many benefits
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.planeText}>
                                {' '}
                                Check out faster
                            </li>
                            <li className={styles.planeText}>
                                {' '}
                                Keep more than one address
                            </li>
                            <li className={styles.planeText}>
                                Track orders and more
                            </li>
                        </ul>
                        <div
                            className={styles.regButton}
                            onClick={(): void => {
                                setStage(stage + 1);
                            }}
                        >
                            <Button
                                butContent={
                                    stage === 0 ? 'Next' : 'Create an account'
                                }
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegistrationPage;
