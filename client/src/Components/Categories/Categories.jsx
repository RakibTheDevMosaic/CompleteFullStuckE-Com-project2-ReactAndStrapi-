import React from 'react'
import "./Categories.scss"
import {NavLink} from "react-router-dom"
import useFetch from '../../hooks/useFetch'

const Categories = () => {
    const {data} = useFetch(`/api/categories?populate=*`)
    // console.log(data)
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
            <img src={process.env.REACT_APP_API_URL + data?.[0]?.attributes?.img?.data?.attributes?.url } alt="" />
            <button>
                <NavLink className="Navlink" to={`products/${data?.[0]?.id}`}>{data?.[0]?.attributes?.title}</NavLink>
            </button>
        </div>
        <div className="row">
        <img src={process.env.REACT_APP_API_URL + data?.[1]?.attributes?.img?.data?.attributes?.url } alt="" />
            <button>
                <NavLink className="Navlink" to={`products/${data?.[1]?.id}`}>{data?.[1]?.attributes?.title}</NavLink>
            </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
        <img src={process.env.REACT_APP_API_URL + data?.[2]?.attributes?.img?.data?.attributes?.url } alt="" />
            <button>
                <NavLink className="Navlink" to={`products/${data?.[2]?.id}`}>{data?.[2]?.attributes?.title}</NavLink>
            </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row">
                <img src={process.env.REACT_APP_API_URL + data?.[3]?.attributes?.img?.data?.attributes?.url } alt="" />
            <button>
                <NavLink className="Navlink" to={`products/${data?.[3]?.id}`}>{data?.[3]?.attributes?.title}</NavLink>
            </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src={process.env.REACT_APP_API_URL + data?.[4]?.attributes?.img?.data?.attributes?.url } alt="" />
            <button>
                <NavLink className="Navlink" to={`products/${data?.[4]?.id}`}>{data?.[4]?.attributes?.title}</NavLink>
            </button>
                </div>
            </div>
        </div>
        <div className="row">
        <img src={process.env.REACT_APP_API_URL + data?.[5]?.attributes?.img?.data?.attributes?.url } alt="" />
            <button>
                <NavLink className="Navlink" to={`products/${data?.[5]?.id}`}>{data?.[5]?.attributes?.title}</NavLink>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
