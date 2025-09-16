'use client';
import React from 'react'
import styles from './style.module.scss';

export default function Index({index, title, manageModal}) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project + " py-[20px] px-[5px]   md:py-[30px] md:px-[50px]  xl:py-[50px] xl:px-[100px]"}>
            <h2 className='text-[20px] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[60px]'>{title}</h2>
            <p>Design & Development</p>
        </div>
    )
}
