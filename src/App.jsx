import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import ColorPicker from './ColorPicker.jsx' 
import ToDoList from './ToDoList.jsx'

function App() {

  const fruits = [{id:1,name:"apple",calories:95}, 
  {id:2,name:"orange",calories:45}, 
  {id:3,name:"banana",calories:105}, 
  {id:4,name:"coconut",calories:159}, 
  {id:5,name: "pineapple",calories:37}];

  const vegetables = [{id:6,name:"potatoes",calories:110}, 
  {id:7,name:"celery",calories:15}, 
  {id:8,name:"carrots",calories:25}, 
  {id:9,name:"corn",calories:63}, 
  {id:10,name: "broccoli",calories:50}];

  return (
    <>
        <Header></Header>
        <Food></Food>
        <Footer></Footer>
        <Card></Card>
        <Button></Button>
        <Student name="Aria" age={1} isStudent={true}></Student>
        <Student name="Sia" age={4} isStudent={true}></Student>
        <Student name="Abhinav" age={36} isStudent={false}></Student>
        <Student name="Shyra" age={27} isStudent={true}></Student>
        <Student></Student>
        <UserGreeting isLoggedIn={true} username="Abhinav"></UserGreeting>
        <UserGreeting isLoggedIn={false}></UserGreeting>
        <List items= {fruits} category = "Fruits"></List>
        <List items= {vegetables} category = "Vegetables"></List>
        <ProfilePicture></ProfilePicture>
        <MyComponent></MyComponent>
        <Counter></Counter>
        <ColorPicker />
        <ToDoList></ToDoList>
    </>
  );

}

export default App
