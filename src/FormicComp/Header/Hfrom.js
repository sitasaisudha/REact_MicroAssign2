import React, { useState, useEffect } from 'react';
// import Select from 'react-select'
import Skill from './Skill';
const Hfrom = () => {
    const [formData , setFormData] = useState({
        name :"",
        password :"",
        email:""
       
    })
    const [MsgText,setMsgText] = useState("Try this for 7 days")
    // const [isDisabled,setisDisabled] = useState(false)
    
    const [active, setActive] = useState(false);
    
    const [skill,setskill] = useState([])
    const handleSkill=(e)=>{
        // setskill([...skill,e.target.value])
        const arr = skill.filter(item => item == e.target.value)
        if(arr.length == 0){
            setskill([...skill,e.target.value])
        }

    }
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const isFormSubmit = () => {
        if (
          formData.name &&
          formData.email &&
        formData.password &&
          skill.length > 0
      ) {
          return true;
        } else {
        //   if (skill.length == 0) {
        //     document
        //       .getElementById("formSelect")
        //       .setCustomValidity("Please select an item in the list");
        //     document.getElementById("formSelect").reportValidity();
        //   }
          return false;
        }
      };

    const claimTrial = (event) => {
        event.preventDefault();
        if (!isFormSubmit()) {
          return;
        }
        setMsgText("You have successfully subscribed to our plan");
        setFormData({ name: "", email: "", password: "" });
        setskill([]);
        setActive(false);
      };

      useEffect(() => {
        setActive(skill.length > 0 && isFormSubmit());
      }, [skill, formData]);
    return (
        <div>
            <div className='trailMsg'> try it for free  </div>
            <form onSubmit={claimTrial} className='forum'>  
                <input type='text' />
                <input type='email' />
                <input type='password' />
                <select  onChange={()=>handleSkill}>
                     <option value="">Choose Skills</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JS">JS</option>
                </select>
                {skill.map(itm =>{
                        return(< Skill/>)
                } )}
                {active ?(<button className='form-button-active' >CLAIM YOUR FREE TRAIL</button>):(<button className='form-button'>CLAIM YOUR FREE TRAIL </button>)}
                 </form>

        </div>
    );
};

export default Hfrom;