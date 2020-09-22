import React from 'react'
const SearchBox=({searchChange})=>{
    return(<div className='center'><input type="text" placeholder="Search robots"
    onChange={searchChange}/>
    </div>
        
    )
}
export default SearchBox