import {React,useState,useEffect} from 'react';
import Data from'../Component/Data.js';
import {Image, Button, Card, Container, Form} from 'react-bootstrap';
import image from "../Image/image.png";
import Addform from './Addform.js';
import {useSelector,useDispatch} from 'react-redux'
import {GetData,clearData} from '../Redux/Action'



function Main(){
	//const [people1,setPeople] = useState([]);
	const dispatch = useDispatch()
	

	const dataFetch = async() =>{ 
		const response = await fetch('https://birthday-reminder-app-ty3n.onrender.com/api/user/')
		const resData = await response.json()
		console.log(resData)
		//setPeople(resData)
		dispatch(GetData(resData))
	}
	useEffect(() =>{
		dataFetch()
	},[])

const people = useSelector(state => state.data)
console.log(people)




/*Find out todays Birthday */

function Today(people){

let currentDate = new Date().getDate();
let currentMonth = new Date().getMonth();
let currentYear = new Date().getYear()
let filter = people.filter((data) =>{
let date = new Date(data.dateofBirth).getDate();	
let month = new Date(data.dateofBirth).getMonth();
let year = new Date(data.dateofBirth).getYear()
if (currentYear <= year) return false; 
return currentDate === date && currentMonth === month
})
return filter;
}


/* Find out upcoming birthday */

function Upcoming(person, toMonth){

	let currentMonth = new Date().getMonth();
	let currentDate = new Date().getDate();
	let currentYear = new Date().getYear()

let filter = person.filter((data) => {
	let month = new Date(data.dateofBirth).getMonth();
	let  date = new Date(data.dateofBirth).getDate();
	let year = new Date(data.dateofBirth).getYear()

	/* Removed todays date birthday from upcoming list */
if (currentDate === date ||  currentYear <= year) return false; 
	return  month >=  currentMonth && month <= currentMonth + toMonth;
	
})
 return filter;


}

const Calculateage = (Age)  => {
	let currentYear = new Date().getYear();
	let personYear = new Date(Age).getYear();
	let age = currentYear - personYear;
	return age;

}

return(
 <>


<Container fluid className = "text-center">
<h1>Birthday Remainder</h1>
<Addform/>
{ 
Today(people).map((name) =>
<>
<h1>Todays Birthday</h1>
<Card className = "d-block mx-auto shadow-lg w-25 mb-3 bg-white rounded"  key = {name._id}>
<Card.Body style={{backgroundColor: "pink"}}>
{/* <Card.Img src ={name.image} className="fluid" /> */}
<Card.Title>{name.name}</Card.Title>
<Card.Text> Date Of Birth - {name.dateofBirth}</Card.Text>
<Card.Text>Old -  {Calculateage(name.dateofBirth)} Yrs</Card.Text>
</Card.Body>
</Card>
</>
)
}



{Upcoming(people, 2).map((name) =>
<>
<h1> Upcoming 2 Month's Birthday</h1>
<Card  className = "d-block mx-auto shadow-lg  rounded" style={{width:"18rem"}} key = {name._id}>
	<Card.Body style={{backgroundColor: "pink"}}>
	{/* <Card.Img src ={name.image} className="fluid"/> */}
	<Card.Title>{name.name}</Card.Title>
	<Card.Text>Date Of Birth - {name.dateofBirth}</Card.Text>
	<Card.Text> Old - {Calculateage(name.dateofBirth)}Yrs </Card.Text>
	</Card.Body>
</Card>
</>
)}

<Button variant = "danger" onClick = {()=> dispatch(clearData(people))}>Clear All</Button>
</Container>


</>
)
}
export default Main;


