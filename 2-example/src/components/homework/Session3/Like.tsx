import { useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import React, { Component } from 'react'

type Props = {}

type State = {
    isLike: boolean,
}

class Like extends Component<Props, State> {
    state = {
        isLike: false,
    };

    handleLike = () => {
        this.setState((state) => ({
            isLike: !this.state.isLike,
        }));
    };

    render() {
        return (
            <div onClick={() => this.handleLike()}>
                {this.state.isLike ? <AiFillLike /> : <AiFillDislike />}
            </div>
        )
    }
}

export default Like;