import classes from "./TagsInput.module.css"

const TagsInput = (props) => {
  const {state, setState} = props

  const removeTags = (indexToRemove) => {
    setState([...state?.filter((_, index) => index !== indexToRemove)])
  }

  const addTags = (e) => {
    e.preventDefault()
    if (e.target.value !== "") {
      setState([...state, e.target.value])
      e.target.value = ""
    }
  }

  return (
    <div className={classes.tags_input}>
      <ul className={classes.tags_ul}>
        {state?.map((tag, index) => (
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
        readOnly={props.readOnly}
        onKeyUp={(e) => (e.key === "Enter" ? addTags(e) : null)}
        placeholder={`Press enter to add ${props.name}`}
      />
    </div>
  )
}

export default TagsInput
