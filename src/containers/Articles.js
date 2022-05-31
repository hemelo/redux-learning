import React from "react"
import Article from "../components/Article"
import AddArticle from "../components/AddArticle"
import { connect } from "react-redux"
import * as actionTypes from "../store/actionTypes"

const initialState = {
  articles: [
    { id: 1, title: "Post 1", body: "Postagem de número 1" },
    { id: 2, title: "Post 2", body: "Postagem de número 2" },
  ],
}

export const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle = {
        id: Math.random(), 
        title: action.article.title,
        body: action.article.body,
      }
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      }
  }
  return state
}

const Articles = ({ articles, saveArticle }) => {
  return (
    <div className="container d-flex flex-column mt-4 justify-content-center">
      <AddArticle saveArticle={saveArticle} />
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveArticle: article =>
      dispatch({ type: actionTypes.ADD_ARTICLE, article }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)