import React from 'react'
import {
  BlockQuality,
  QualityList,
  QualityListInner,
  QualityListItem,
  QualityListTitleBlock,
  BlockQualityQualityListTitle,
  TitleLink
} from './style.js'
import Link from 'next/link';

const QualityBlock = ({
  Class,
  title,
  text,
  path,
  imageBlock
}) => (
  <BlockQuality className={Class}>
    <QualityList>
      <QualityListItem>
        <QualityListInner>
          <QualityListTitleBlock>
            <React.Fragment>
            {imageBlock}
            <Link href={path}><TitleLink><BlockQualityQualityListTitle>{title}</BlockQualityQualityListTitle></TitleLink></Link>
            </React.Fragment>
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