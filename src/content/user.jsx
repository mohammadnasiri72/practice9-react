import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function User() {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState("1")
    const [numpage, setNumpage] = useState("5")

    useEffect(() => {
        fetch(`https://www.melivecode.com/api/users?page=${page}&per_page=${numpage}`)
            .then((res) => res.json())
            .then((data) => {
                setUsers(data.data);
            })
    }, [numpage, page])



    return (
        <>
            <div className='d-flex flex-column m-2 w-100'>
                <div className='container d-block'>
                    <div className="row justify-content-around border-bottom">
                        <div className="col-9">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button onClick={(e) => {
                                    setPage(e.target.innerHTML)
                                }} type="button" className="button btn btn-primary">1</button>
                                <button onClick={(e) => {
                                    setPage(e.target.innerHTML)
                                }} type="button" className="button btn btn-primary">2</button>
                                <button onClick={(e) => {
                                    setPage(e.target.innerHTML)
                                }} type="button" className="button btn btn-primary">3</button>
                                <button onClick={(e) => {
                                    setPage(e.target.innerHTML)
                                }} type="button" className="button btn btn-primary">4</button>
                                <button onClick={(e) => {
                                    setPage(e.target.innerHTML)
                                }} type="button" className="button btn btn-primary">5</button>
                            </div>
                        </div>
                        <div className="col-2 text-end">
                            <select
                                onChange={(e) => {
                                    setNumpage(e.target.value)
                                }}
                                className='h-100'>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="container w-100">
                    <div className="row">
                        {
                            users.map((e) => (
                                <div key={e.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="card">
                                        <Link to={`/User/${e.fname}`}>
                                            <img style={{ width: "50px" }} src={e.avatar} alt="" />
                                            <div className="card-body">
                                                <h5 className="card-title">{e.fname}</h5>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}