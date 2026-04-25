import { LANGUAGES, MOVIES } from '../../constants'

const List = () => {
  return (
    <div className='space-y-4'>
        <h2 className='font-semibold text-lg'>All Movies</h2>
        <div className='flex flex-wrap gap-2 mt-2'>
        {LANGUAGES.map((language) => (
            <span key={language} className='bg-white text-red-700 px-3 py-2 rounded-full text-xs'>
                {language}
            </span>
        ))}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4'>
            {MOVIES.map((movie) => (
                <div key={movie.id} className='mb-4'>
                    <img src={movie.poster} alt={movie.title} className='w-full h-90 object-cover rounded-lg' />
                    <h3 className='font-bold text-lg'>{movie.title}</h3>
                    <div className="overflow-hidden">
                    {movie.tags.map((tag, index) => (
                        <span key={index} className='text-gray-500 text-sm mr-2'>{tag} {index !== movie.tags.length - 1 && '|'}</span> 
                    ))}
                    </div>
                    <p>⭐ {movie.rating}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default List