
const LearnProps = (props) => {
    
    console.log("who am i",props, typeof(props));
     return(
         <div>
            <h1>my name is {props.name}</h1>
            <h2>I am a {props.position}</h2>
            <h3>I am a {props.role}</h3>
            {props.children}
            <hr />
         </div>
     )
}
export default LearnProps;