import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddArticle = () => {
  const dispatch = useDispatch();
  const [article, setArticle] = useState({});

  const handleArticleData = (e) => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value,
    });
  };
  const addNewArticle = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_ARTICLE", article });
  };

  return (
    <form onSubmit={addNewArticle} className="add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        onChange={handleArticleData}
      />
      <button>Add article</button>
    </form>
  );
};
export default AddArticle;
