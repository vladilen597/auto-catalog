import { useState } from 'react'
import './CustomSlider.scss'

interface ICustomSliderProps {
  media: any // eslint-disable-line
}

const CustomSlider = ({ media }: ICustomSliderProps) => {
  const [activeSlide, setActiveSlide] = useState(0)

  const onSlideForward = () => {
    if (media[activeSlide + 1]) {
      setActiveSlide((prevState) => prevState + 1)
    } else {
      setActiveSlide(0)
    }
  }

  const onSlideBack = () => {
    if (media[activeSlide - 1]) {
      setActiveSlide((prevState) => prevState - 1)
    } else {
      setActiveSlide(media.length - 1)
    }
  }

  const sortByVideo = (
    a: { id: number; full_url: string; type: string },
    b: { id: number; full_url: string; type: string }
  ) => {
    if (a.type === 'video') {
      return -1
    }
    if (b.type === 'video') {
      return 1
    }
    return 0
  }

  return (
    <div className='custom-slider'>
      <button className='custom-slider__button' onClick={onSlideBack}>
        {'<'}
      </button>
      <ul className='custom-slider__wrapper'>
        {media
          .sort(sortByVideo)
          .map(
            (
              slide: { id: number; full_url: string; type: string },
              index: number
            ) => (
              <li
                key={slide.id}
                className={`custom-slider__slide ${
                  index === activeSlide ? 'custom-slider__slide--active' : ''
                }`}
              >
                {slide.type === 'image' ? (
                  <img className='custom-slider__image' src={slide.full_url} />
                ) : (
                  <video
                    className='custom-slider__image'
                    src={slide.full_url}
                    controls
                    muted
                  />
                )}
              </li>
            )
          )}
      </ul>
      <button className='custom-slider__button' onClick={onSlideForward}>
        {'>'}
      </button>
    </div>
  )
}

export default CustomSlider
