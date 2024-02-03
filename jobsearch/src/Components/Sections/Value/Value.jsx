import "./Value.css"
import { BsDroplet } from "react-icons/bs"
import { BiNotepad, BiShieldAlt2 } from "react-icons/bi"

const values = [
  {
    valueId: 1,
    valueImg: <BsDroplet />,
    valueName: "Simplicity",
    valueDescription: "Laboriosam aut consequuntur quae minima quasi fugiat cum suscipit in ab praesentium fugit porro voluptatum veniam quos facilis maxime pariatur, nostrum asperiores."
  },
  {
    valueId: 2,
    valueImg: <BiNotepad />,
    valueName: "Transparency",
    valueDescription: "Laboriosam aut consequuntur quae minima quasi fugiat cum suscipit in ab praesentium fugit porro voluptatum veniam quos facilis maxime pariatur, nostrum asperiores."
  },
  {
    valueId: 3,
    valueImg: <BiShieldAlt2 />,
    valueName: "Objectivity",
    valueDescription: "Laboriosam aut consequuntur quae minima quasi fugiat cum suscipit in ab praesentium fugit porro voluptatum veniam quos facilis maxime pariatur, nostrum asperiores."
  },
]
const Value = () => {
  return (
    <div className='value_section'>
      <h2 className="subtitle">The values that hold us true <br />and accountable</h2>
      <div className="value_wrapper">

        {
          values.map((item) => (
            <div className="value_card" key={item.valueId}>
              <div className="value_header">
                <div className="value_image"> {item.valueImg}</div>
                <h3 className="value">{item.valueName}</h3>
              </div>
              <p className="value_description">{item.valueDescription}</p>
            </div>
          ))
        }
      </div>

      <div className="cta_content">
        <p className="cta_text">Ready to switch a career? <br/>
        <span>Let's get started!</span> </p>
        <button type="button" className="cta_btn">Get Started</button>
      </div>
    </div>
  )
}

export default Value
