import './MediaUpload.scss'

interface IFileUploadProps {
  value: any[] // eslint-disable-line
  onChange: (file: FileList) => void
}

const MediaUpload = ({ value, onChange }: IFileUploadProps) => {
  return (
    <label className='media-upload'>
      <span className='media-upload__title'>Upload photo or video</span>
      <div className='media-upload__input-wrapper'>
        <span className='media-upload__input-title'>
          {value?.length
            ? Array.from(value)
                ?.map((file) => file.name)
                .join(', ')
            : 'Press here to upload your files'}
        </span>
        <input
          className='media-upload__input'
          type='file'
          multiple
          accept='.png, .jpg, .jpeg, .mp4, .webm'
          onChange={(e) => {
            if (e.target.files) {
              onChange(e.target.files)
            }
          }}
        />
      </div>
    </label>
  )
}

export default MediaUpload
