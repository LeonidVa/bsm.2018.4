import './index.scss'

const ImageBlock = ({imageSrc})=>(
    <section className="block-img">
        <img src={imageSrc} alt="" />
	</section>
)

export default ImageBlock