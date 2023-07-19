import React from 'react';
import CustomSlider from './elements/CustomSlider';
import CelebDropDown from './elements/CelebDropDown';
import classnames from 'classnames';
import { useMemo } from 'react';
import { animated } from 'react-spring';

function Form({
    celebrity,
    setCelebrity,
    paragraphs,
    setParagraphs
}) {

    const trail = useMemo(() => {
        const styles = [];
    
        [0, 0, 0, 0, 0].map((element, index) => {
            styles.push({
                animationDelay: `${index * 500}ms`,
            });
            return null;
        });
        return styles;
    }, []);

    return(
        <div className='c-form'>
            <div className='o-container'>
                <div className='o-row'>
                    <div className='o-col-7@lg o-col-offset-4@lg'>
                            <animated.div className='o-flexy@lg o-flexy--top c-form__bar fadeInUp' style={trail[4]}>
                                <div className='o-flexy__block c-form__block tx-center' >
                                    <div className='o-inline'>
                                        <div className='o-inline__item u-mrg-r-1'>
                                            <div className='c-input-static c-input-static--lg'>
                                                Give me
                                            </div>
                                        </div>
                                        
                                        <div className='o-inline__item u-mrg-r-1'>
                                            <div className='c-input-static c-input-static--lg'>
                                                <CustomSlider {...{celebrity, paragraphs, setParagraphs}} name="paragraphs" />
                                            </div>
                                        </div>

                                        <div className='o-inline__item u-mrg-r-1'>
                                            <div className='c-input-static c-input-static--lg'>
                                                paragraphs of that
                                            </div>
                                        </div>

                                        <div className='o-inline__item u-mrg-r-1'>
                                            <div className='c-input-static c-input-static--lg'>
                                                <CelebDropDown {...{celebrity, setCelebrity}} name="celebrity" />
                                            </div>
                                        </div>

                                        
                                    </div>
                                </div>
                                
                            </animated.div>

                              
                            


                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;