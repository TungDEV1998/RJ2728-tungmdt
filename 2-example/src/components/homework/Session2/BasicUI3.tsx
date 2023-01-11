interface IProps {
    logo?: string,
    title?: string,
    color?: string,
    follow?: number,
    following ?: string
}

const BasicUI3: React.FC<IProps> = (props) => {
    const { title, color, follow, logo, following } = props
    return (
        <div className="card" style={{width: 180, backgroundColor: color, display: "flex" }}>
            <img src={logo} className="card-img-top" alt="..." style={{width: 50, height: 50}}/>
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <p>{follow}{following}</p>
                </div>
        </div>
    );
}
export default BasicUI3