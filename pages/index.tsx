import { Inter } from 'next/font/google' 
import axios from "axios"
import { server } from "../config"
import Card from '@/components/Card'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movies = res.data
  return {
    props : { movies }
  }
} 

export default function Home({movies}: any) {
  const [cari, setCari] = useState<string>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCari(e.target.value);
  };
  return (
    <main className="container mx-auto py-10 px-4 flex flex-col item-center justify-center">
      <div className="flex flex-row justify-between">
        <h1 className="text-4xl font-bold mb-8 text-white">Aflix</h1>
        <input onChange={handleInputChange} type="text" className='m-4 p-2' placeholder='cari disini..'/>
      </div>
      <div className="w-full grid grid-cols-3 gap-2">
        {movies.results?.map((i: any) => (
          <Card movie={i}/>
        ))}
      </div>
    </main>
  )
}





// 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';