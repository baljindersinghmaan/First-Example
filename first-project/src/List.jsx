import PropTypes from 'prop-types'

function List(){

    const fruits = [ {name: "Bannna", cal: 23},{name: "Apple", cal:45},{name:"coconut", cal:38}]

    //fruits.sort((a, b) => a.name.localeCompare(b.name));

    fruits.sort((a, b) => b.name.localeCompare(a.name));

    const lowCal = fruits.filter(fruit => fruit.cal < 30)

    const fruitsItem = fruits.map(fruit => <li key={fruit.name}>{fruit.name}
    :&nbsp; <b>{fruit.cal}</b></li>)

    return(<ul>{fruitsItem}</ul>);

}
List.PropTypes = {
    // this is way of setting prop types of object
    // fruits: PropTypes.arrayOf(PropTypes.shape({name: PropTypes.string, cal: PropTypes.number}))
}

export default List