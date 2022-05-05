// import React from "react";
// import { ReactDOM } from "react";

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName : "john",
    lastName : "lee"
}

function Name(){

    return(
        <h1>
        Hello, {formatName(user)}!
    </h1>
    )
}

export {Name};