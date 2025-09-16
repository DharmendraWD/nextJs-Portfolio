import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title + " py-[70px] px-[5px]   md:py-[90px] md:px-[10px]  xl:py-[100px] xl:px-[100px]"}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/background.jpg`}
                            />
                        </div>
                        <h2>Let's work</h2>
                    </span>
                    <h2>together</h2>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded  backgroundColor={"#334BD3"} className={styles.button + " w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[180px] xl:h-[180px]"}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                <div className={styles.nav + " flex justify-center flex-col lg:flex-row"}>
                        <Rounded>
                            <p>dharmendrathakur.dev@gmail.com</p>
                        </Rounded>
                        <Rounded>
                            <p>+977-9866114605</p>
                        </Rounded>
                </div>
                <div className={styles.info + " flex flex-col justify-center md:flex-row lg:flex-row"}>
                       <div>
                        <span>
                            <h3>socials</h3>
                            <Magnetic>
                                <a href="https://www.linkedin.com/in/dharmendra-thakur-ba05a5378/" target="_blank" rel="noopener noreferrer">
                                    <p>LinkedIn</p>
                                </a>
                            </Magnetic>
                        </span>
              
                        <Magnetic>
                             <a href="https://www.upwork.com/freelancers/~010c382fc0726fb09b?mp_source=share" target="_blank" rel="noopener noreferrer">
                                    <p>Upwork</p>
                                </a>
                        </Magnetic>
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            <Magnetic>
                                <a href="https://github.com/DharmendraWD/" target="_blank" rel="noopener noreferrer">
                                    <p>Github</p>
                                </a>
                            </Magnetic>
                        </span>
              
                        <Magnetic>
                             <a href="https://thinktankinfotech.com/" target="_blank" rel="noopener noreferrer">
                                    <p>Our Company</p>
                                </a>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
