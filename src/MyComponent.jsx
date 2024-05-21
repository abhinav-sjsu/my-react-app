import React, {useState, useEffect} from 'react';

function MyComponent() {
    const [name,setName] = useState("Guest");
    const [quantity,setQuantity] = useState(1);
    const [comment,setComment] = useState("");
    const [payment,setPayment] = useState("");
    const [shipping, setShipping] = useState("");
    const [age,setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const [count,setCount] = useState(0);
    const [car,setCar] = useState({year:2024 , make:"Mazda", model:"CX9"});
    const [foods,setFoods] = useState(["Apple","Orange","Banana"]);
    const [cars,setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake,setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
    const [count2,setCount2] = useState(0);
    const [color,setColor] = useState("green");
    const [width, setWidth] = useState(window.innerWidth);
    const [heigth, setHeigth] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${heigth}`;
    }, [width,heigth]);

    
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
        return () => {

        }

    },[count,color]);

    function handleAddCar() {
        const newCar = {year:carYear, 
                        make: carMake, 
                        model:carModel};

        setCars(c => [...c,newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((_,i) => i !== index));
    }

    function handleYearChange2(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange2(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange2(event) {
        setCarModel(event.target.value);
    }

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(f => [...f,newFood]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i) => i !== index ));
    }

    function handleYearChange(event){
        setCar(c => ({...c, year:event.target.value}));
    }

    function handleMakeChange(event){
        setCar(c => ({...c, make:event.target.value}));
    }

    function handleModelChange(event){
        setCar(c => ({...c, model:event.target.value}));
    }

    function increment(){
        // Updater function is passed as an argument to setState() usually. Allow for safe updates based on the previous state.
        // Used with multiple state updates and asynchronous functions.
        // Updater function takes the PENDING state to calculate NEXT state. React puts your updater function in a queue.
        // During the next render, it will call them in the same order.
        setCount(count => count+1);
    };

    function decrement(){
        setCount(count => count - 1);
    };

    function reset(){
        setCount(0);
    };

    const updateName = () => {
        setName("Abhinav");
    };

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(){
        setPayment(event.target.value);
    }

    function handleShippingChange(){
        setShipping(event.target.value);
    }

    function addCount(){
        setCount(c => c+1);
    }

    function subtractCount() {
        setCount(c => c-1);
    }

    function changeColor() {
        setColor( c => c === "green" ? "red" : "green");
    }

    const incrementAge = () => {
        setAge(age+1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return( <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>

                <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleEmployedStatus}>Toggle status</button>

                <input value={name} onChange={handleNameChange}></input>
                <p>Name: {name}</p>

                <input value={quantity} onChange={handleQuantityChange} type="number"></input>
                <p>Quantity: {quantity}</p>

                <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
                <p>Comment: {comment}</p>

                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
                <p>Payment: {payment}</p>

                <label>
                    <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
                    Pick up
                </label>
                <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>

                <p>Count: {count}</p>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increment</button>

                <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
                <input type="number" value={car.year} onChange={handleYearChange}></input><br></br>
                <input type="text" value={car.make} onChange={handleMakeChange}></input><br></br>
                <input type="text" value={car.model} onChange={handleModelChange}></input><br></br>
                <h2>List of Food</h2>
                <ul>
                    {foods.map((food,index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
                </ul>
                <input type="text" id="foodInput" placeholder="Enter food name"></input>
                <button onClick={handleAddFood}>Add Food</button>
                <h2>List of Car Objects</h2>
                <ul>
                    {cars.map((car,index) => 
                        <li key={index} onClick={() => handleRemoveCar(index)}>
                            {car.year} {car.make} {car.model}
                        </li>)}
                </ul>
                <input type="number" value={carYear} onChange={handleYearChange2}></input><br/>
                <input type="text" value={carMake} onChange={handleMakeChange2} placeholder="Enter car make"></input><br/>
                <input type="text" value={carModel} onChange={handleModelChange2} placeholder="Enter car model"></input><br/>
                <button onClick={handleAddCar}>Add Car</button>
                <p style={{color: color}}> Count: {count}</p>
                <button onClick={addCount}>Add</button>
                <button onClick={subtractCount}>Subtract</button><br/>
                <button onClick= {changeColor}>Change Color</button>

            </div>
    );
}

export default MyComponent