import React, { Component } from 'react'
import { RiStarFill, RiStarLine, RiStarHalfLine } from "react-icons/ri";
import { useState } from "react";

type Props = {}

type State = {
    numStar: number,
}
const MAX_NUMBER = 5;
export default class Rating extends Component<Props, State> {
    state = {
        numStar: 0
    };

    handleRate = (star: number) => {
        this.setState(() => ({
            numStar: star
        }))
    };

    render() {
        return (
            <div>
                {[...Array(MAX_NUMBER)].map((item, index) => (
                    <span key={index} onClick={() => this.handleRate(index + 1)}>{index < this.state.numStar ? <RiStarFill /> : <RiStarLine />}</span>
                ))}
                

            </div>

        )
    }
}

