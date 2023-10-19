import React, {useState} from 'react'


export default function TextForm(prop) {

    const handleonchange = (event) =>{
        console.log("on change");
        setText(event.target.value)
    }
    
    const [text, setText] = useState('')

    return (       
        <>
            <div className='container'>
                <h4 style={{fontWeight: 'bold',textAlign:'center',marginTop: '2%'}}>{prop.heading}</h4>
                <div className="mb-3">
                    <textarea className="form-control" value = {text} onChange={handleonchange} id="mybox" rows="9"></textarea>
                </div>
            </div>            
            <div className="container my-2">
                <h4>Your Word Count Is :</h4>
                <p>{text.split(" ").filter((element)=>{
                    return element.length!==0
                }).length} words and {text.length } characters</p>
            </div>
        </>
    )
}
