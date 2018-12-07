import './index.scss'
import styles from 'styled-components'



const BlockInfo = styles.select`
    font-size: 1em;
    width: 17em;
    margin: 1.56em auto 0;
    background-color: #fff;
    font-size: 2em;
    padding: 1.56em 1.09em .94em;
    color: #4a4a4a;
    position: relative;
    z-index: 1;

    @media (max-width: 900px) {
    width: 70%;
    min-width: 273px;
        }
    @media (max-width: 660px) {
    width: 100%;
    padding: 1.56em 0.5em .94em;
     }
`;

const BlockInfoItem = styles.div `
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    justify-content: flex-start;
    -webkit-box-pack: justify;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: justify;
    align-items: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    margin-bottom: 1em;
`;

const Img = styles.img `
    margin-right: 1.06em; 
    width: 1.56em;
`;

const Span = styles.span `
    display: block;
`;

const BlockInfoTitle = styles.div `
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
    font-size: .625em;
    line-height: 1.15;
`;


const BlockInfoPar = styles.div `
    font-size: .5em;
    line-height: 1.13;
`;


const renderInfoItems = (infoBlockConfig)=>(

    infoBlockConfig.map((item, index)=>(
        <BlockInfoItem className="block-info__item" key={index}>
            <Img src={item.icon} alt="" />
            <div className="block-info__text">
                <Span className="block-info__title"><BlockInfoTitle>{item.title}</BlockInfoTitle></Span>
                <Span className="block-info__par"><BlockInfoPar>{item.desc}</BlockInfoPar></Span>
            </div>
        </BlockInfoItem>
    ))
)


const InfoBlock = ({infoBlockConfig})=> (
    	<BlockInfo className="block-info">
			{renderInfoItems(infoBlockConfig)}
		</BlockInfo>
)

export default InfoBlock;