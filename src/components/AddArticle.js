import React, { useState } from "react"

const AddArticle = ({ saveArticle }) => {
  const [article, setArticle] = useState()

  const handleArticleData = e => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value,
    })
  }
  const addNewArticle = e => {
    e.preventDefault()
    saveArticle(article)
  }

  return (
    <div className="container card bg-light mb-4">
      <form onSubmit={addNewArticle} className="card-body">
        <div className="mb-3">
          <label for="title" class="form-label">Título</label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Título"
            onChange={handleArticleData}
          />
        </div>
        <div className="mb-3">
          <label for="body" class="form-label">Corpo</label>
          <input
            type="text"
            id="body"
            className="form-control"
            placeholder="Corpo"
            onChange={handleArticleData}
          />
        </div>
        <button className="btn btn-success" type="submit">Adicionar artigo</button>
      </form>
    </div>
  )
}
export default AddArticle