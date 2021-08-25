import { useState } from "react"
import classes from "./TagsInput.module.css"

const TagsInput = (props) => {
  const [tags, setTags] = useState(props.tags)
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)])
  }

  const addTags = (e) => {
    e.preventDefault()
    if (e.target.value !== "") {
      setTags([...tags, e.target.value])
      props.selectedTags([...tags, e.target.value])
      e.target.value = ""
    }
  }
  return (
    <div className={classes.tags_input}>
      <ul className={classes.tags_ul}>
        {tags.map((tag, index) => (
          <li key={index} className={classes.tag}>
            <span className={classes.tag_title}>{tag}</span>
            <span
              className={classes.tag_close_icon}
              onClick={() => removeTags(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(e) => (e.key === "Enter" ? addTags(e) : null)}
        placeholder="Press enter to add tags"
      />
    </div>
  )
}

export default TagsInput
