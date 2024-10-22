
function Button(){

    const handleClick = () => console.log("ouch");

    const handleClick2 = (name) => console.log(`${name} `)

    const styles = {
        backgroundColor: "rgb(0, 242, 255)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
    }

    return(<button onClick={()=> handleClick2("bro")} style={styles}>Click me</button>);
}

export default Button