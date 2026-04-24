import BannerSlider from './BannerSlider';
import Movies from './Movies';
import Events from './Events'

const index = () => {
  return (
    <div className="flex flex-col gap-8 py-6">
      <BannerSlider />
      <Movies />
      <Events />
    </div>
  )
}

export default index