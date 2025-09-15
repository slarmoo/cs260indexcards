import React from 'react';
import "./create.css"

export function Create() {
    return (
        <>
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
                <div class="flashcardWrapper">
                    <div id="flashcardFront" class="flashcard editable" contenteditable="true">
                        flashcard text front
                    </div>
                </div>
                <div class="flashcardWrapper">
                    <div id="flashcardBack" class="flashcard editable" contenteditable="true">
                        flashcard text back
                    </div>
                </div>
            </div>
            <button id="submitButton">Submit</button>
        </>
    );
}