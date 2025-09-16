import styles from './style.module.scss';
import Magnetic from '../../../../common/Magnetic';


export default function index() {
  return (
    <div className={styles.footer}>
     
                             <div>
                       
                            <h3>socials</h3>
                            <div className='flex gap-2 justify-center'>
                              <Magnetic>
                                <a href="https://www.linkedin.com/in/dharmendra-thakur-ba05a5378/" target="_blank" rel="noopener noreferrer">
                                    <p>LinkedIn</p>
                                </a>
                            </Magnetic>
                       
              
                        <Magnetic>
                             <a href="https://www.upwork.com/freelancers/~010c382fc0726fb09b?mp_source=share" target="_blank" rel="noopener noreferrer">
                                    <p>Upwork</p>
                                </a>
                        </Magnetic>
                          <Magnetic>
                                       <a href="https://github.com/DharmendraWD/" target="_blank" rel="noopener noreferrer">
                                           <p>Github</p>
                                       </a>
                                   </Magnetic>
                               <Magnetic>
                                    <a href="https://thinktankinfotech.com/" target="_blank" rel="noopener noreferrer">
                                           <p>Our Company</p>
                                       </a>
                               </Magnetic>
                            </div>
                    </div>
    </div>
  )
}
