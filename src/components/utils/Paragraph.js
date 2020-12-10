import React from 'react'

const Paragraph = ({css, text}) => {
    return(
        <p className={css}>{text}</p>
    )
}

export default Paragraph;