import React from "react";

function QuoteCard(props) {

    return (
        <blockquote>
            "{props.quoteText}"
            <footer>
                - {props.characterName}
                {props.isQuoteEpic && <span style={{ marginLeft: '10px' }}>🌟</span>}
            </footer>
        </blockquote>
    )
}

export default QuoteCard;