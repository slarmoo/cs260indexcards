import React from 'react';
import "./create.css"

export function Create() {
    return (
        <div id="createContent" className="content">
            <div id="createContentHeader">
                <label>Your index cards: </label>
                <select>
                    <option>
                        flashcard
                    </option>
                    <option>
                        index card
                    </option>
                    <option>
                        Add new card
                    </option>
                </select>
            </div>
            <div id="flashcardContainer">
                <div className="flashcardWrapper">
                    <div id="flashcardFront" className="flashcard editable" contenteditable="true">
                        flashcard text front
                    </div>
                </div>
                <div className="flashcardWrapper">
                    <div id="flashcardBack" className="flashcard editable" contenteditable="true">
                        flashcard text back
                    </div>
                </div>
            </div>
            <button id="submitButton">Submit</button>
        </div>
    );
}