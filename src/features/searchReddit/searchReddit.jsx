import { useDispatch, useSelector } from "react-redux";
import { searchQuery, setSearchTerm } from "./searchTermSlice";
import { fetchPostByQuery } from "./searchRedditSlice";
import { postsData } from "./searchRedditSlice";
import { useEffect } from "react";
import { useRef } from "react";
export function SearchPost() {
    const term = useRef("");
  const dispatch = useDispatch();
  const searchTerm = useSelector(searchQuery);
  
    useEffect(() => {
        dispatch(fetchPostByQuery(searchTerm));
    },[searchTerm]);

  const posts = useSelector(postsData);
    console.log(posts);
  return (
    <>
    <div>
        <input type="search" value={searchTerm} onChange={e => 
            dispatch(setSearchTerm(e.target.value))
        }/>
    </div>
    </>
  )
}
