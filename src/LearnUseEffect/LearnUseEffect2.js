import React, {useEffect, useState} from "react";

const LearnUseEffect2 = () => {
    const [type, setType] = useState("posts");
    const [data, setData] = useState(0);
    const [loading, setLoading] = useState("");

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
           .then(response => response.json())
           .then(json => setLoading(json))
    },[type]);

    return(
        <div>
        <div>
            <h1>{data}</h1>
            <button onClick={()=>setData(data+1)}>Update</button>
            <button onClick={()=>setType('posts')}>posts</button>
            <button onClick={()=>setType('users')}>users</button>
            <button onClick={()=>setType('comments')}>comments</button>
        </div>
        <h1> {type}</h1>
        {loading.map(item =>{
            return <pre>{JSON.stringify(item)}</pre>
        })}
    </div>
        
    )
}
export default LearnUseEffect2;
