import React from 'react'
import { ItemType } from 'src/App'
import MovieCard from 'src/shared/components/MovieCard'

interface HomeProps {
  items: ItemType | any
}

const Home: React.FC<HomeProps> = (props) => {
  const { items } = props
  return (
    <>
      <div className="bg-yellow-400 m-5 px-96 rounded-md flex w-10/12 ">
        <h4 className="p-10 text-5xl">Top 250 Movies</h4>
      </div>
      <div className="flex w-10/12 bg-green-300 py-3 mb-3 text-2xl">
        <span className="flex-2 ml-10">Rank</span>
        <span className="flex-1 ml-100">Title</span>
        <span className="flex-2 mr-10">Rate</span>
      </div>
      {items?.map((item: ItemType) => {
        return <MovieCard key={item.id} movie={item} />
      })}
    </>
  )
}

export default Home
