import React from 'react';
import {useParams} from 'react-router-dom';

const WordOrNumber = (props) => {

    const {userInput} = useParams();

    console.log(userInput);

    return (
        <div>
            {isNaN(userInput) ? <h1>The word is: {userInput}</h1> : <h1>The number is: {userInput}</h1>}
        </div>
    )


    /* NOTES: ternary above is shorthand for below if statement:
    if (isNaN(userInput)) {
        return (
            <h1>The word is: {userInput}</h1>
        )
    }
    return (
        <h1>The number is: {userInput}</h1>
    )
    */
}

export default WordOrNumber;