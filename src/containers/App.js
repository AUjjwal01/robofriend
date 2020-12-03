import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from'../components/ErrorBoundry';
 


class App extends Component{
    constructor(){ 
        super()
        this.state={
            robots:[],
            searchField:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users =>
            this.setState({robots:users}));
    }
onSearch=(event)=>{
    this.setState({searchField:event.target.value})

}

  render()
  { const {robots,searchField} =this.state;
    const filterRobots=robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    if(robots.length===0){
        return<h2>Oops you are not connected to the internet.
         <img src=""></h2>
    }
     
      
      
        return (
            <div>
                <h1 className='center'>ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearch}/>
                
                <Scroll>
                    <ErrorBoundry><CardList robots={filterRobots} /></ErrorBoundry>
                    
                    </Scroll>  
            </div>
          )
      
    
}
       
}
export default App
