function UserGreetings(props){

    if(props.isLoggedIn){
        return(<h1>Welcome {props.name}</h1>);
    } else {
        return (<h1>Please Log in</h1>);
    }
}
export default UserGreetings