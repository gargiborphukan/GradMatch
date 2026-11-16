"use client"; //marks this file as a client component

//reat hooks is imported which lets a componet remenber values between function calls and re-render the component when the state changes
//renders and updates the screen when the state changes
import {useState}  from "react";



export default function ApplicationFunctions() {

    //application contains the current values of the application form fields and the status of the application
    //setApplicationStatus is a function that updates the application state when the user types in the form fields
    const [applicationStatus, setApplicationStatus] = useState({
        textCompany: "",  //initial value of the company field is an empty string
        textPosition: "", //initial value of the position field is an empty string
        textApplicationdate: "", //initial value of the application date field is an empty string
        textStatus: "Saved" //initial value of the status field is "Saved"
    });
        
//stroing the submiited application.here null means there is no
//submitted application to display yet
    const [submittedApplications, setSubmittedApplications] = useState(null);

 //stores the error message to display when the user submits an application with empty fields   
    const [erroerMessage, setErrorMessage] = useState("");

 
 //runs when one of the form fields is changed. It updates the application state with the new value of the changed field
 const onValueChange = (event) => {   //evenr contains the field that was changed and its new value   
    setApplicationStatus({  //setApplicationStatus is called to update the application state
        ...applicationStatus, //spread operator copies the current values of the application state
        [event.target.name]: event.target.value //updates the value of the changed field with its new value
    });
 };

 //when the form starts
 //eb=vent for submit data and preventing the browsers normal form submission ans page relaod
 const onSubmitData = (event) =>{
    event.preventDefault();

    //removing leading and trailing spaces from company name{used AI to fix}
    const company = applicationStatus.txtCompany.trim();

    //removing leading and trailing spaces from the company name{used AI}
    const position = applicationStatus.textPosition.trim();

    //checking for blank values
    if(company === "" || position === ""){
        setErrorMessage(
            "Please enter a company name and position"
        );
    }
 }
}