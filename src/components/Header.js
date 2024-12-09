import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSideBar, toggleSideBar } from "../utils/appSlice";
import { suggest } from "../hooks/suggest";
import { addSugestion } from "../utils/cacheSliceSuggestion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const cache = useSelector((store) => store.suggestions);

  const [searchText, setSearchText] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const toggleSideMenuBar = () => {
    dispatch(toggleSideBar());
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      const cachedValues = searchText
        ? Object.values(cache).filter((ele) => ele.includes(searchText))
        : [];
      if (cachedValues.length > 0) {
        console.log("cache");
        setSuggestions(cachedValues);
      } else {
        suggest(searchText).then((res) => {
          setSuggestions(res);
          dispatch(addSugestion(res));
        });
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const handleSearch = () => {};
  return (
    <div className="grid grid-flow-col m-4 h-10">
      <div className="flex col-span-1 w-30 m-2">
        <img
          className="h-10"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="collapse-icon-img"
          onClick={() => toggleSideMenuBar()}
        />
        <Link
          to="/"
          className="h-10"
          onClick={() => {
            dispatch(addSideBar());
            setSearchText("");
          }}>
          <img
            className="w-[100%] h-10"
            src="https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg"
            alt="logo-img"
          />
        </Link>
      </div>
      <div className="col-span-10">
        <div className="flex justify-center m-3">
          <input
            type="text"
            className="w-2/4 p-0 border border-slate-300 pl-2 rounded-l-xl"
            placeholder="Search..."
            value={searchText}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <Link to={"/search?key=" + searchText}>
            <button
              disabled={!searchText}
              className="p-0 border border-slate-300 rounded-r-xl"
              onClick={() => handleSearch()}>
              🔍
            </button>
          </Link>
        </div>
        <div className="absolute mx-[18%] -mt-[1%] z-10 rounded-xl w-full">
          {showSuggestion &&
            Object.values(suggestions).map((ele) => (
              <div
                key={ele}
                className=" bg-white hover:bg-slate-300 hover:opacity-90 hover:shadow-2xl p-1 w-[500px]"
                onMouseDown={() => {
                  setSearchText(ele);
                  setShowSuggestion(false);
                }}>
                🔍 {ele}
              </div>
            ))}
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-10 m-2"
          src="https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
          alt="profile-img"
        />
      </div>
    </div>
  );
};

export default Header;
