import styles from './Button.module.css'


function Button(){

    let count = 0;

    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     } else {
    //         console.log(`${name} stop clicking me!`);
    //     }
    // };

    const handleClick = (e) => e.target.textContent = "OOUCH!";

    const handleClick2 = (name) => console.log(`${name} stop clicking me`);


    //return(<button onClick = { () => handleClick("Bro")} className={styles.button}>Click Me</button>);
    //return(<button onClick = { (e)  => handleClick(e)}>Click Me</button>);
    return(<button onDoubleClick = { (e)  => handleClick(e)}>Click Me</button>);
}

export default Button