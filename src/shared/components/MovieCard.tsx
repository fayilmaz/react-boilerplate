import React from 'react'
import { ItemType } from 'src/App'
import Star from './Star'

interface MovieCardProps {
  movie: ItemType
}

const MovieCard: React.FC<MovieCardProps> = (props) => {
  const {
    movie: { fullTitle, image, rank, crew, imDbRating },
  } = props
  return (
    <div className="flex w-10/12 flex-row bg-gray-100 py-8 mt-2 text-black">
      {/* Rank & Poster */}
      <div className="text-xl m-auto ml-14">{rank}</div>
      <div className="flex-2 ml-10">
        <img className="h-36 rounded-md" src={image} alt="sad" />
      </div>
      {/* Title */}
      <div className="flex-1 m-auto">
        <div className=" text-2xl">{fullTitle}</div>
        <div className="text-s">{crew}</div>
      </div>
      {/* Rate */}
      <div className="flex-2 mr-10 text-xl m-auto ml-14">
        <span className="inline-block align-middle mr-1">
          <Star />
        </span>
        <p className="inline-block align-middle text-2xl text">{imDbRating}</p>
      </div>
    </div>
  )
}

export default MovieCard
