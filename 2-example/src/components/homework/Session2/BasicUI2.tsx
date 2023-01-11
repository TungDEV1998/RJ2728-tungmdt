interface IProps {
    logo : string,
    text?: string,
    color?: string,
    percent?: number
}

const BasicUI2 : React.FC<IProps> = (props) => {
    const { text, color, percent, logo } = props
    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: 200}}>
                <img src={logo} alt="" />
            </div>
            <div className="progress-bar" role="progressbar" style={{width: 200}}>
                {text}
            </div>
            <div className="progress-bar" role="progressbar" style={{width: `${percent}%`, backgroundColor: color}}>
                {/* {`${percent}%`} */}
            </div>
        </div>
    );
}

export default BasicUI2;