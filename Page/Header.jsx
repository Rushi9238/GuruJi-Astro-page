import React, { useContext } from 'react'
import {CiSearch} from 'react-icons/ci'
import { dataContext } from './Contextwrapper'
const Header = () => {
    const {search ,setSearch}=useContext(dataContext)
  return (
    <>
    <header>
        <div className="header">
            <div className="container">
                <div className="innerDiv">
                    <div className="upperDiv">
                    <div className="logo">Food Recipy App</div>
                    <div className="list">
                        <ul>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                        </ul>
                    </div>
                    </div>
                    <div className="lowerDiv">
                        <div className="inputBox">
                            <input type="text" placeholder='Search Your Reacip.......' onChange={(e)=>setSearch(e.target.value)} />
                            <button><CiSearch className='searchIcon'/></button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header