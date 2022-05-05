function Greet(props) {
    if(props.name){
        return (`Welcome ${props.name}`)
    }
    else{
        return (`Welcome Stranger`)
    }
}


export {Greet};