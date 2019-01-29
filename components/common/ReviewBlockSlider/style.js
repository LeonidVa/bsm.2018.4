import styled from 'styled-components'

export const BlockSliderReviewsItem = styled.div`
padding: .38em;
`; 

export const ReviewBlock = styled.p`
font-weight: ${props => props.bottomreview ? "700" :  ""};
font-size: .5em;
color: #4a4a4a;
line-height: 1.5;
margin-bottom: .31em;
&-bottom {
  font-weight: 700;
}
`;

export const ReviwsAuthor = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding-top: 0.5rem;
`;

export const ImgBlock = styled.img`
margin: 0;
font-size: 1em;
width: 1.72em;
height: 1.72em;
`;

export const ReviewsAuthorData = styled.div`
padding-left: 0.5rem;
`;

export const ReviewsName = styled.span`
display: block;
font-size: .59em;
color: #191919;
line-height: normal;
`;

export const ReviewsJob = styled.span`
display: block;
font-size: .5em;
color: #c0c0c0;
line-height: normal;
&.job-orange {
  color: #f4511e;
}
`;

export const BlockSliderSlideReview = styled.div`
font-size: 1em;
margin: 0 auto;
padding: 0 .5em;
display: flex;
justify-content: space-around;
align-items: flex-start;
max-width: 100% !important;
`;

export const BlockSliderReview = styled.section `
margin: 1.56em auto 0;
font-size: 2em;
@media (max-width: 900px) {
  width: 100%;
  max-width: 100%;
  justify-content: space-around;
  margin: 0.5em auto;
}

`;

export const BlockSliderReviwsBlock = styled.div`
padding: .78em;
background-color: #ffffff;
width: 9.59em;
@media (min-width: 661px) and (max-width: 720px) {
  width: 8.5em;
  padding: .4em;
}
`;