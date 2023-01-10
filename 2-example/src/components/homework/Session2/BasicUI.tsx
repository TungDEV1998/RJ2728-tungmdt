interface IProps {
    text?: string,
    color1?: string,
    color2?: string,
    percent?: number
}

const BasicUI: React.FC<IProps> = (props) => {
    const { text, color1, color2, percent } = props
    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: 200, backgroundColor: color1}}>
                {text}
            </div>
            <div className="progress-bar" role="progressbar" style={{width: `${percent}%`, backgroundColor: color2}}>
                {`${percent}%`}
            </div>
        </div>
    );
}

export default BasicUI;