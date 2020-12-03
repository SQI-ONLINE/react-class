import React, { useState } from 'react';

const ReducerClass = () => {


	let [userArr, setUserArr] = useState([]);
	let [name, setName] = useState();
	lett [InputDeviceInfo, setInfo] = useState("")

	const handleChange = (e) =>{
		setName(e.target.value)
	}

	const handleSubmit = (e) =>{
		e.preventDefault();
		setUserArr([...userArr, name])
		setInfo("Added")
	}

	return(
		<>
			<p className="text-center display-4">Reducer Class</p>
			<div className="container">
				<div className="row">
					<div className="col-10 rounded mx-auto col-md-4">
						<form  onSubmit={handleSubmit}>
							<input onChange={handleChange} className="mb-3 form-control" value={name}/>
							<button type="submit" className="btn-primary btn btn-block fa fa-plus"></button>
						</form>
					</div>
					<div className="p-3 shadow rounded col-10 col-md-4">
						{
							userArr.map((each, i)=>(
								<div className="mb-2">{each}</div>
							))
						}
					</div>
				</div>
			</div>
		</>
	)
};


export default ReducerClass