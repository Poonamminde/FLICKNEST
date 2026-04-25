import Filter from './Filter'
import List from './List'

const index = () => {
  return (
    <div className="grid grid-cols-4 gap-4 bg-gray-100 min-h-screen p-4 md:p-8">
        <div className='col-span-1'><Filter /></div>
        <div className='col-span-3'><List /></div>
    </div>
  )
}

export default index