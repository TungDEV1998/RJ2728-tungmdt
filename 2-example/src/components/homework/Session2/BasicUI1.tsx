// interface IProps {
//     text?: string,
//     color1?: string,
//     color2?: string,
//     percent?: number
// }

// const BasicUI1: React.FC<IProps> = (props) => {
//     const { text, color1, color2, percent } = props
//     return (
//         <div className="progress border">
//             <div className="progress-bar" role="progressbar" style={{width: 200, backgroundColor: color1}}>
//                 {text}
//             </div>
//             <div className="progress-bar" role="progressbar" style={{width: `${percent}%`, backgroundColor: color2}}>
//                 {`${percent}%`}
//             </div>
//         </div>
//     );
// }

// export default BasicUI1;
import * as React from 'react';

export interface IAppProps {
    text?: string,
    color1?: string,
    color2?: string,
    percent?: number
}


export default class App extends React.Component<IAppProps> {
    public render() {
        return (
            <div className="progress border">
                <div className="progress-bar" role="progressbar" style={{ width: 200, backgroundColor: this.props.color1 }}>
                    {this.props.text}
                </div>
                <div className="progress-bar" role="progressbar" style={{ width: `${this.props.percent}%`, backgroundColor: this.props.color2 }}>
                    {`${this.props.percent}%`}
                </div>
            </div>
        );
    }
}
