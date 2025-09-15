import React from 'react';
import "./login.css"

export function Login() {
    return (
        <>
            <div>
                <label> email: </label>
                <input type="email" />
            </div>
            <div>
                <label> password: </label>
                <input type="password" />
            </div>
            <div>
                <button>Confirm</button>
            </div>
            {/* Photo by <a href="/photographer/abeall-34118">abeall</a> on <a href="/">Freeimages.com</a> */}
            <img id="indexCardImage" src="./images/indexcards.png" alt="A photo of index cards" />
        </>
    );
}