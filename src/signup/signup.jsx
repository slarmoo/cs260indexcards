import React from 'react';
import "./signup.css"

export function Signup() {
    return (
        <>
            <div>
                <label> email: </label>
                <input type="email" />
            </div>
            <div>
                <label> display name: </label>
                {/* These will be replaced with name suggestions from an api */}
                <select>
                    <option>
                        Option1
                    </option>
                    <option>
                        Option2
                    </option>
                </select>
            </div>
            <div>
                <label> password: </label>
                <input type="password" />
            </div>
            <div>
                <label> confirm password: </label>
                <input type="password" />
            </div>
            <div>
                <button>Confirm</button>
            </div>
        </>
    );
}