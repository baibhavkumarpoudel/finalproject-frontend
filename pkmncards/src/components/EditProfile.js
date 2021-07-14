import React from "react";

const EditProfile = (props) => {
    return (
        <div>
            <h1 className="header">Edit your Profile </h1>
            <form className="editing"  onSubmit={props.handleSubmit}>
                
                <label htmlFor="name">Name: </label>
                <input onChange={props.handleChange} type="text" name="name" placeholder="name" /><br></br><br></br>
                <label htmlFor="username">Username: </label>
                <input onChange={props.handleChange} type="text" name="username" placeholder="username" /><br></br><br></br>
                <label htmlFor="password">Password: </label>
                <input onChange={props.handleChange} type="password" name="password" placeholder="password" /><br></br><br></br>
                <label htmlFor="img">img: </label>
                <input onChange={props.handleChange} type="text" name="img" placeholder="img" /><br></br><br></br>
                <label htmlFor="bio">Bio: </label>
                <input onChange={props.handleChange} type="text" name="bio" placeholder="bio" /><br></br><br></br>
                
                <input className="button" type="submit" value="Edit your User!" /><br></br><br></br>

            </form>
            <button className="button" onClick={props.handleDelete}>Delete Your Profile :(</button>

        </div>
    )
}

export default EditProfile