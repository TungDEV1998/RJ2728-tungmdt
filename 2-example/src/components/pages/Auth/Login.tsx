import React, { useState } from 'react'

interface IProps {
    setIsLogin: (value: boolean) => void;
}

const Login: React.FC<IProps> = (props) => {
    const [userName, setUserName] = useState<string>();
    const [userPassword, setUserPassword] = useState<string>();
    const {setIsLogin} = props;
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("handleLogin", userName, userPassword);
        if(userName === 'aptech' && userPassword === 'aptech'){
            console.log('success');
            setIsLogin(true);
        } else {
            alert('sai roi cu')
        }
     };

    const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };
    const handleChangeUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(e.target.value);
    };



    return (
        <>
            <form onSubmit={handleLogin}>
                <input type="text"
                    defaultValue={userName}
                    onChange={handleChangeUserName} />
                <input type="password"
                    defaultValue={userPassword}
                    onChange={handleChangeUserPassword} />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login