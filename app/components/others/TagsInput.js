import useLineClamp from "@hooks/useLineClamp"
import classes from "./TagsInput.module.css"

const TagsInput = (props) => {
  const { state, setState, align } = props

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
      <input
        type="text"
        readOnly={props.readOnly}
        onKeyUp={(e) => (e.key === "Enter" ? addTags(e) : null)}
        placeholder={`Press enter to add ${props.name}`}
      />
      <ul
        className={classes.tags_ul}
        style={{ display: align === "vertical" ? "" : "flex" }}
      >
        {state?.map((tag, index) => (
          <li key={index} className={classes.tag}>
            <span className={classes.tag_title}>{useLineClamp(tag)}</span>
            <span
              className={classes.tag_close_icon}
              onClick={() => removeTags(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagsInput
