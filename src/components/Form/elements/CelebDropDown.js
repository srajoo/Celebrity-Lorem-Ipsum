import {useState, useCallback, useRef} from 'react';
import {useClickAway} from 'react-use';
import {useTransition, animated} from 'react-spring';
import classnames from 'classnames';
import { STATS, CELEBRITIES } from '../../../utils/constants';
import { Tooltip } from  '@mui/material';

const CelebDropDown = ({
    celebrity,
    setCelebrity
}) => { 
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef();

    useClickAway(dropdownRef, () => {
        setShowDropdown(false);
    });

    const transitions = useTransition(showDropdown, {
        from: {
          opacity: 0,
          transform: 'translate3d(0, 2px, 0)',
          zIndex: 999,
        },
        enter: {
          opacity: 1,
          transform: 'translate3d(0, 0px, 0)',
          zIndex: 999,
        },
        leave: {
          opacity: 0,
          transform: 'translate3d(0, 2px, 0)',
          zIndex: 999,
        },
        config: {
          mass: 1,
          tension: 210,
          friction: 20,
        },
    });

    const handleClick = useCallback(
        (celeb) => {
            setShowDropdown(false);
            setCelebrity(celeb);
        }
    );

    return (
        <div className='celebDropDown' ref={dropdownRef}>
            <Tooltip title="Click me to change celebrity">
                <h5
                    className={classnames(celebrity, {
                        expanded: showDropdown,
                    })}
                    onClick={setShowDropdown.bind(this, !showDropdown)}
                >
                    { STATS[celebrity]?.displayName }
                </h5>
            </Tooltip>
           
            {transitions(
                (style, item) => item && (
                    <animated.div className="dropdown">
                        {
                            CELEBRITIES.filter(
                                (celeb) => celeb !== celebrity
                            ).map((celeb) => (
                                <h5
                                    key={celeb}
                                    className='item'
                                    onClick={handleClick.bind(this, celeb)}
                                >
                                    { STATS[celeb]?.displayName}
                                </h5>
                            ))
                        }
                    </animated.div>
                )
            )}
            {showDropdown && <div className="backdrop"></div>}
        </div>
    );
}

export default CelebDropDown;