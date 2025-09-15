import React from 'react';
import "./practice.css"

export function Practice() {
    return (
        <>
            {/* on hover, display how many cards each studier has gone through */}
            <div title="10" id="studiers">
                Other studiers: Abby, Brandon, Corinne, David, etc
            </div>
            <div id="study">
                <button class="arrow"> ← </button>
                {/* on click, "flip" to other side */}
                <div class="flashcardWrapper">
                    <div class="flashcard">
                        flashcard text
                    </div>
                </div>
                <button class="arrow"> → </button>
            </div>
        </>
    );
}