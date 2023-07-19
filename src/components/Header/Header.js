import React from "react";
import classnames from 'classnames';
import { useMemo } from 'react';
import { animated } from 'react-spring';
import { STATS } from "../../utils/constants";

function Header({
    celebrity
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


    return (
        <div className= {classnames('c-hero c-hero--one u-pos-relative', celebrity)}>
            <div className='o-container u-pos-relative u-zi-10'>
                <div className='o-row u-pos-relative'>
                    <div className='c-maker'>
                        <animated.p className='c-maker__text fadeInUp' style={trail[3]}>
                            <span>Made By: </span>
                            <a>Sandra Rajoo</a>
                        </animated.p>
                    </div>
                    <div className='o-col-10 o-col-offset-1 o-col-9@lg o-col-offset-3@lg'>
                        <div className='c-hero__desc'>
                            <animated.h1 className="fadeInUp" style={trail[1]}>Celebsum</animated.h1>
                            <animated.h2 className="fadeInUp" style={trail[2]}>Lorem Ipsum Generator for the strong of heart</animated.h2>
                        </div>
                    </div>
                    <animated.div className={ classnames('c-hero__image fadeInUp', celebrity) } style={trail[2]}>
                        <img 
                            src={"%PUBLIC_URL%/" + celebrity + '.png'} 
                            className='u-width-12 js-jeff-img-1 u-zi-10'
                            alt={STATS[celebrity]?.displayName}
                        />
                    </animated.div>
                </div>
            </div>
            
        </div>
    );
}

export default Header;