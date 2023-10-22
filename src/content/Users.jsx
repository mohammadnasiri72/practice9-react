import { Link, useParams } from "react-router-dom";
import { useEffect, useState} from 'react'

export default function Users(){

    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch(`https://www.melivecode.com/api/users`)
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            })
        }, [])
        
        
        
        

    const url = useParams()
    return(
        <>
        <div className="d-flex flex-column align-items-center border">
            
            {
                users.map(e => (
                  <div key={e.id} className="d-flex flex-column align-items-center">
                    <img style={{display : url.username === e.fname ? "block" : "none" }} className="img-users" src={url.username === e.fname ? e.avatar : ""} alt="" />
                    <span style={{display : url.username === e.fname ? "block" : "none" }}> fname : {url.username}</span>
                    <span style={{display : url.username === e.fname ? "block" : "none" }}> lname : {url.username === e.fname ? e.lname : ""}</span>
                    <span style={{display : url.username === e.fname ? "block" : "none" }}> username : <Link>{url.username === e.fname ? e.username : ""}</Link></span>
                  </div>
                ))
            }
            
          
        </div>
        </>
    )
}