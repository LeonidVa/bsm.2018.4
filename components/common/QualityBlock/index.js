import React from 'react'
import {
  BlockQuality,
  QualityList,
  QualityListInner,
  QualityListItem,
  QualityListTitleBlock,
  BlockQualityQualityListTitle
} from './style.js'

const QualityBlock = ({
  Class,
  image,
  title,
  text
}) => (
  <BlockQuality>
    <QualityList>
      <QualityListItem className={Class}>
        <QualityListInner>
          <QualityListTitleBlock>
            <img src={image} alt="" />
            <BlockQualityQualityListTitle>{title}</BlockQualityQualityListTitle>
          </QualityListTitleBlock>
          <p>
            {text}
          </p>
        </QualityListInner>
      </QualityListItem>
    </QualityList>
  </BlockQuality>
)

export default QualityBlock;