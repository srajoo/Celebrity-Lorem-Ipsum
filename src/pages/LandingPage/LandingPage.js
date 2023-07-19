import React, {useState}  from "react";
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";
import Content from "../../components/Content/Content";

function LandingPage() {

    const [paragraphs, setParagraphs] = useState(1);
    const [celebrity, setCelebrity] = useState("Ryan");
    
    return (
        <div>
            <Header {...{celebrity}} /> 
            <Form 
            {...{
                celebrity,
                setCelebrity,
                paragraphs,
                setParagraphs
            }} 
            />
            <Content {...{paragraphs, celebrity}} />
        </div>
       
    );
}

export default LandingPage;