import { customStyle } from ".";

function Test(props) {
    return <h1>Hello, {props.name} </h1>
}

function Test1(){
    return (
        <div style={customStyle}>
            <Test name="Prashant" />
            <Test name="Virender" />
            <Test name="Anshul" />
        </div>
    )
}

export {Test1};