import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {employeeActions} from '../../redux/reducers/reducdr'

class Employee extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            data: this.props.data
        }}
    // componentDidMount(){
    //     this.props.getEmp()
    // }
    buttonSubmit=()=>{
        this.props.employee();
        console.log("data===>",this.state.data);
       
    }
   
    render(){
        return(
    <div>
        <h1>Vaishali</h1>
      {/* <h1>id:{this.props.id}</h1>
       <h1>Name:{this.props.name}</h1>
       <h1>Salary:{this.props.salary}</h1> */}
        <button onClick={this.buttonSubmit}>Submit</button>
    </div>
        )
    }

}
const mapStateToProps = (employee) => {
    return {...employee};
  }

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
      {
        ...employeeActions.Creators,
      },
      dispatch,
    ),
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Employee);
