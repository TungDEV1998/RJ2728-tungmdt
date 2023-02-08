import React from "react";

interface AccordionProps {
    name?: string,
    title?: string,
    content?: string
}

const Accordion: React.FC<AccordionProps> = (props: AccordionProps) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () =>  {
        setExpanded(!expanded);
    };

    const contentStyle = expanded ? { display: 'block' } : { display: 'none' };

    return (
        <div>
            <div className="accordion-header" onClick={handleExpansion}> {props.title} </div>
            <div style={contentStyle} className="content-accordion"> {props.content} </div>
        </div>
    );
};

export default Accordion;