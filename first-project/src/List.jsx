function List(){

    const fruits = ["Apple", "Bannna","coconut"]

    const fruitsItem = fruits.map(fruit => <li>{fruit}</li>)

    return(<ul>{fruitsItem}</ul>);

}

export default List