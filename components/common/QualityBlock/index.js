import React from 'react'
import {
  BlockQuality,
  QualityList,
  QualityListInner,
  QualityListItem,
  QualityListTitleBlock,
  BlockQualityQualityListTitle,
  TitleLink,
  TitleDiv,
  TitleBlock
} from './style.js'
import Link from 'next/link';

const QualityBlock = ({
  Class,
  image,
  title,
  text,
  path,
  imageBlock
}) => (
  <BlockQuality className={Class}>
    <QualityList >
      <QualityListItem >
        <QualityListInner>
          <QualityListTitleBlock>
            <TitleBlock>
            {imageBlock}
            <TitleDiv><Link href={path}><TitleLink><BlockQualityQualityListTitle>{title}</BlockQualityQualityListTitle></TitleLink></Link></TitleDiv>
            </TitleBlock>
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