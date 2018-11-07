import './index.scss'

const ImageBlock = ({imageSrc, altText})=>(
    <section className="block-img">
        <img src={imageSrc} alt={altText} />
	</section>
)

export default ImageBlock