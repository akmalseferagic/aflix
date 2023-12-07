import { useState } from "react";
import Modal from "./ModalDetail";
import Image from "next/image";

interface CardProps {
    title?: string
    overview?: string
    poster_path?: string
    original_language?: string
    popularity?: number
    release_date?: string

}

const Card = ({movie}: CardProps & any) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModalToggle = () => {
        console.log('asjbdksjab')
        setIsOpen(!isOpen);
    };
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    
    <div className="bg-white flex flex-col content-between shadow rounded p-4">

    {/* ini modal */}
    <Modal isOpen={isOpen} onClose={handleModalToggle}>
    <div>
        <Image width={700} height={800} src={imageUrl} className="w-full h-64 rounded mb-4" alt=''/>
        <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
                <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
                <span className="bg-orange-400 text-sm p-2 mr-2">{movie.popularity}</span>
            </div>
            <div>
                <span className="bg-green-400 text-sm p-2 mr-2">{movie.original_language}</span>
                <span className="bg-yellow-400 text-sm p-2">Release Date : {movie.release_date}</span>
            </div>
        </div>
        <p className="text-sm text-gray-500">{movie.overview}</p> 
        
        {/* <p className="text-sm text-gray-500 bg-yellow-400"></p> */}
        
    </div>
    </Modal>

    <div>
        <img src={movie.poster_path} className="w-full h-64 rounded mb-4" alt=''/>
        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
        <p className="text-sm text-gray-500">{movie.overview}</p>
    </div>

    <div className="flex justify-end mr-3 mt-4 rounded-2xl">
            <button onClick={handleModalToggle} className="bg-yellow-400 p-4 text-black">
                Detail
            </button>
        </div>
    </div>
  )
}

export default Card