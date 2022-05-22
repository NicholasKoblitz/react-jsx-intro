const Person = ({name, age, hobbies}) => {
    let aboveEighteen;
    let displayName;
    if(age > 18) {
        aboveEighteen = true;
    }
    else {
        aboveEighteen = false;
    }

    if(name.length > 8) {
        displayName = name.slice(0,6);
    }
    else{ 
        displayName = name
    }
    return (
        <div>
            <h2>{displayName}</h2>
            <p>Learn more information about this person</p>
            <h3>{aboveEighteen ? "please go vote" : "you must be 18"}</h3>
            <ul>
                {hobbies.map((h,k) => <li key={k}>{h}</li>)}
            </ul>
        </div>
    )
    
    
}