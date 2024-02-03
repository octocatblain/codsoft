import "./Search.css"
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai"
import { BsHouseDoor } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"

const Search = () => {
  return (
    <div className='search_bar'>
      <form>
        <div className="search_wrapper">
          <div className="search_column">
            <AiOutlineSearch className="icon start_search" />
            <input type="text" className="search_input" placeholder="Search Job Here" />
            <AiOutlineCloseCircle className="icon close_search" />
          </div>
          <div className="search_column">
            <BsHouseDoor className="icon start_search" />
            <input type="text" className="search_input" placeholder="Search By Company" />
            <AiOutlineCloseCircle className="icon close_search" />
          </div>
          <div className="search_column">
            <CiLocationOn className="icon start_search" />
            <input type="text" className="search_input" placeholder="Search By Location" />
            <AiOutlineCloseCircle className="icon close_search" />
          </div>
        </div>
        <button className="search_btn" type="submit">Search</button>
      </form>

      <div className="search_sort">

        <div className="single_sort">
          <label className="sort_label" htmlFor="relevance">Sort by:</label>
          <select className="sort_select" name="relevance" id="relevance" >
            <option className="sort_option" value="">Relevance</option>
            <option className="sort_option" value="">Inclusive</option>
            <option className="sort_option" value="">Starts with</option>
            <option className="sort_option" value="">Contains</option>
          </select>
        </div>

        <div className="single_sort">
          <label className="sort_label" htmlFor="type">Type:</label>
          <select className="sort_select" name="type" id="type" >
            <option className="sort_option" value="">Full-time</option>
            <option className="sort_option" value="">Part-time</option>
            <option className="sort_option" value="">Remote</option>
            <option className="sort_option" value="">Contract</option>
          </select>
        </div>

        <div className="single_sort">
          <label className="sort_label" htmlFor="level">Level:</label>
          <select className="sort_select" name="level" id="level" >
            <option className="sort_option" value="">Beginner</option>
            <option className="sort_option" value="">Intermediate</option>
            <option className="sort_option" value="">Experienced</option>
            <option className="sort_option" value="">Advanced</option>
          </select>
        </div>

        <button className="clear_btn" type="submit">Clear All</button>
      </div>

    </div>
  )
}

export default Search
