import React from 'react';
import "./practice.css"

export function Practice() {
    return (
        <div id="practiceContent" className="content">
            {/* on hover, display how many cards each studier has gone through */}
            <div title="10" id="studiers">
                Other studiers: Abby, Brandon, Corinne, David, etc
            </div>
            <div id="study">
                <button className="arrow"> ← </button>
                {/* on click, "flip" to other side */}
                <div className="flashcardWrapper">
                    <div className="flashcard">
                        flashcard text
                    </div>
                </div>
                <button className="arrow"> → </button>
            </div>
        </div>
    );
}