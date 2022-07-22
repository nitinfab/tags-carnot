import React from "react";
import { MdClose } from "react-icons/md"
import "./Tags.css"

const TagsInput = (props) => {
    const [error, setError] = React.useState("");
    const [tags, setTags] = React.useState([]);

    //checkValid function
    const checkValid = (e) => {
        if(e.key === "Enter" && e.target.value !== "" && tags.length < props.maxTagCount){
            return true;
        }
        else if(tags.length >= props.maxTagCount){
            setError("You can't add more tags");
        }
        else if(e.target.value == "" && e.key === "Enter"){
            setError("The tag should be one character long!");
        }
    } 

    // Add tags by using the Enter key
    const addTags =  event => {
        if (checkValid(event)) {
            setTags([...tags, event.target.value]);
            props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };

    //Remove tags by the Backspace key
    const deleteTags = (event) => {
        if (event.key === "Backspace" && tags.length && event.target.value == 0){
            const tagsCopy = [...tags];
            tagsCopy.pop();
            event.preventDefault();
            setTags(tagsCopy);
            setError("");
        }
        if(tags.length < 1 && event.key === "Backspace"){
            setError("Since there is no tags you can't able to delete any tags");
        }
    }

    //Remove tags by clicking the cross sign
    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };

    //To update the error after user chnages something
    const handleError = () => {
        setError("");
    }

    return (
        <>
        <h1 className="carnot">Hello, Carnot Technologies !</h1>
        <div className="tags-input">
            {tags.map((tag, index) => (
                <ul>
                <li key={index}>
                    <span>{tag}</span>
                    <i
                        className="material-icons"
                        onClick={() => removeTags(index)} 
                    >
                        <MdClose />
                    </i>
                </li>
                </ul>
            ))}
            
            <input
                type="text"
                onKeyUp={event => addTags(event)}
                onKeyDown={event => deleteTags(event)}
                onChange={handleError}
                placeholder="Press enter to add tags"
            />
        </div>
        
        <div className="error">
            {error}
        </div>
        </>
    );
};
export default TagsInput;