import { STATS } from "../../utils/constants";
import { useMemo, memo} from 'react';
import { animated } from 'react-spring';

function Content({
    paragraphs,
    celebrity
}) {

    const trail = useMemo(() => {
        const styles = [];
    
        [0, 0, 0, 0, 0, 0].map((element, index) => {
            styles.push({
                animationDelay: `${index * 500}ms`,
            });
            return null;
        });
        return styles;
    }, []);
    
    const getRandomSentence = () => {
        
        let randomSentence = STATS[celebrity]?.sentences[Math.floor(Math.random() * STATS[celebrity]?.sentences.length)];
        
        return randomSentence;
    }

    const getParagraph = () => {
        let para = '';
        let minimumCharacterLength = 250;
        let firstSentence = true;
        while (para.length < minimumCharacterLength){
            if (firstSentence){
                para = para.concat(getRandomSentence());
                firstSentence = false;
            }
            else {
                para = para.concat('' + getRandomSentence());
            }
        }
        return para;
    }

    const getAllParagraphs = () => {
        if (paragraphs > 0) {
            let allParagraphs = [];
            
            while (allParagraphs.length < paragraphs) 
                {
                    allParagraphs.push(getParagraph());
                }
            
            return allParagraphs;
        }
        
    }
    
   
   
    return (
        <div className="c-content">
            <div className="o-container">
                <div className="o-row">
                    <div className="o-col-10 o-col-offset-1 o-col-8@md o-col-offset-2@md">
                        {paragraphs && (
                            <animated.div className="generated-text fadeInUp" style={trail[5]}> 
                                {
                                 getAllParagraphs().map((para, index) => (
                                    <p key={index}>{para}</p>
                                 ))

                                }
                            </animated.div>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Content);