import React, { useEffect, useState } from "react";
// import {}
import { useForm } from "react-hook-form";
import Skill from "./Skill";
import './Skills.css'

const SF2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   constants
  let  [header, setHeader] = useState(
    "Try it free 7 days then ₹180/mo. thereafter"
  );
  const [skills,setSkills] = useState([])
  const [active, setActive] = useState(true)
   const [isSub, setSub] = useState(true) 

  //   submitted fncn
  const submitted = (formData) => {
    setSub(isSub => false)

    if(formData.name && formData.mail && formData.password && skills.length ){
      setHeader('You have successfully subscribed your plan')
      
      console.log(active)
      
      return true
    }
    return false
  };
// handel into 


  //  handleChange
  const handleChange = (e) => {
   const nsk = e.target.value;
   const arr = skills.filter(item=>item==nsk)
   if(arr.length == 0){
    setSkills([...skills,nsk])
   }
   
  };
  useEffect(()=>{
    setActive(skills.length > 0 && isSub)
  })
  return (
    <div className="form">
      <form onSubmit={handleSubmit(submitted)}>
        <div className="header">{header}</div>
        <div className="formDiv">
        <input type="text" placeholder="your name" {...register("name")} />
        <input type="email" placeholder="your e mail" {...register("mail")} />
        <input type="password" placeholder="ypor password" {...register("password")} />
        <select
          id="formSelect"
          name="skills"
        //   className={styles.formSelect}
          onChange={handleChange}
        >
          <option value="">Choose Skills</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JS">JS</option>
        </select>
        <div className="skillList"> {skills.map(itm => <Skill cont = {itm} />)} </div>
        </div>

        {/* <button type="submit">CLAIM YOUR FREE TRAIL </button> */}
      
        {active? <button type="submit" style={{backgroundColor:"green"}} className="button">CLAIM YOUR FREE TRAIL </button>: <button type="submit" className="button">CLAIM YOUR FREE TRAIL </button>}
        <p> By cilcking you agree to the <b style={{color:"red"}} > terms and Services</b> </p>
    
      </form>
    </div>
  );
  ;
};

export default SF2;
