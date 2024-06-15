import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useAlbum from '../hooks/useAlbum'
import AlbumForm from './AlbumForm'

function AlbumDetail() {
  const {id} = useParams()
  const album = useAlbum(id)

  const navigate = useNavigate()

  function removeAlbum() {
    const request = fetch(`${process.env.REACT_APP_API_URL}/album/${id}`, {
      method: 'DELETE',
    })

    request.then((response) => {
      if (!response.ok) {
        console.error(response.statusText)
        return
      }
      navigate("/")
    })
  }

  function updateAlbum(data) {
    const request = fetch(`${process.env.REACT_APP_API_URL}/album/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    request.then((response) => {
      if (!response.ok) {
        console.error(response.statusText)
        return
      }
      navigate("/")
    })
  }

  if (!album) return <p>Loading...</p>
  return (
    <div>
        <h1>AlbumDetail</h1>
          <p>Details over een album</p>
      <AlbumForm onSubmit={updateAlbum}  onRemove={removeAlbum} album={album} />
          <Link to="/">Terug naar overzicht</Link>
    </div>
  )
}

export default AlbumDetail