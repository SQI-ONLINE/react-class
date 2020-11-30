import React, {useRef, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

function FormClass(){
    let [name, setName] = useState("")
    let [age, setAge] = useState("")

    let history = useHistory();
    let [person, setPerson] = useState({name: "", age: ""});

    let inputContainer = useRef(null);

    let [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let newUser = {name: person.name, age:person.age};
        setUsers([...users, newUser])

        // setUsers((oldUsers)=>{
        //     return [...oldUsers, newUser]
        // })
        console.log(users);
    }
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        // console.log(name, value);

        setPerson({...person, [name]: value});
    }

    const testRef = () => {
        alert(inputContainer.current.value);
    }

    const viewUser = (name) => {

        history.push(`/user/${name}`)
        history.go(-1);
    }
    // const handleAge = (e) => {
    //     setAge(e.target.value)
    // }
    return (
        <>
            <p className="display-4 text-center">FORM CLASS</p>
            <div className="container">
                <div className="row">
                    <div className="col-4 p-5 text-center mx-auto bg-light">
                        <form onSubmit={handleSubmit}>
                            <input 
                                className="form-control mb-2" 
                                name="name"
                                value={person.name}
                                placeholder="Type your name"
                                onChange={handleChange}
                            />
                            <input 
                                className="form-control" 
                                name="age"
                                value={person.age}
                                placeholder="Type your age"
                                onChange={handleChange}
                            />
                            <br/>
                            <button type="submit" className="btn btn-danger">Save User</button>
                        </form>

                    </div>
                    <div className="col-6">
                    <div className="text-left">
                        {users.map((user, index)=>{
                            return <p key={index} className="p-2 bg-light font-weight-bold">
                                {user.name} - {user.age} <button className="btn btn-sm ml-3 btn-danger" onClick={()=>viewUser(user.name)}>View</button> 
                                </p>
                        })}
                    </div>
                    </div>
                </div>
                {/* <div className="row">
                    <input className="formControl" ref={inputContainer} />
                    <button onClick={testRef}>Test Ref</button>
                </div> */}
            </div>
        </>
    )
}

export default FormClass;