interface IProps {
    logo?: string,
    title?: string,
    color?: string,
    follow?: number,
    following?: string
}
const BasicUI4: React.FC<IProps> = (props) => {
    const { title, color, follow, logo, following } = props
    return (
        <></>
    );
}

export default BasicUI4