import React,{ Component } from 'react';
import { Route, Redirect,withRouter } from 'react-router-dom';
import './login.css';
import LoginHeader from './topheader';
import { Button,Modal,Checkbox } from 'react-bootstrap';
// import * as UTIL from './../../utils/util';
// import * as VALIDATION from './../../utils/validation';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userSignUp} from './../../api/Api';
// import * as VALIDATION from './../util/validation';

class Login extends Component {
	constructor(props) {
		super(props);
		this.userDetails = {
			first_name: "",
			last_name: "",
			email: "",
			password: ""
		};
	}
	render() {
		return(
			<div>
			<div className="topheader-style">
					<LoginHeader/>
			</div>
				<div className="home-login">
					<div className="form-login">
						<form className="form-group2">
    						<table className="login-table">
                  <tr className="first-line">Be great at what you do</tr>

                  <tr className="second-line">Get started - its free.</tr>
                  <br></br>
                    <tr><label className="login-label"> First Name </label><br></br></tr>
    						      <tr>
    						      		<td><input type="text" className="txt-field-lg"
                          onChange={(userinput) => {
                              this.userDetails.first_name=userinput.target.value}}/>
                          </td>
    						      </tr>
                      <tr><label className="login-label"> Last Name </label><br></br></tr>
                      <tr>
                        <td> <input type="text" className="txt-field-lg"
                        onChange={(userinput) => {
                            this.userDetails.last_name=userinput.target.value}}/>
                        </td>
                      </tr>
                      <tr><label className="email-label"> Email</label><br></br></tr>
    						      <tr> <td><input type="text" className="txt-field-lg"  onChange={(userinput) => {
                          this.userDetails.email=userinput.target.value}}/>
                      </td> </tr>
                      <tr><label className="pwd-label"> Password (6 or more characters) </label><br></br></tr>
    						      <tr > <td><input type="password" className="txt-field-lg"
                      onChange={(userinput) => {
                          this.userDetails.password=userinput.target.value}}/>
                      </td></tr>
                      <p className="footer">By clicking Join now, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</p>
    						      <button type="button" onClick={() =>this.props.userSignUp(this.userDetails)} className="btn btn-primary join">Applicant Join</button>
											<button type="button" onClick={() =>this.props.userSignUp(this.userDetails)} className="btn btn-primary join">Recruiter Join</button>
    							</table>
						   </form>
					   </div>
					</div>
			</div>
			);
	}
}

function matchDispatchToProps(dispatch){
    console.log("Dispatch",dispatch);
    return bindActionCreators({userSignUp: userSignUp}, dispatch);
}
export default connect(null, matchDispatchToProps)(Login);
