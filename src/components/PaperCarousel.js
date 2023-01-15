import React from "react";
import AliceCarousel from "react-alice-carousel";
import caratLeft from "../assets/carat-left.png";
import caratRight from "../assets/carat-right.png";

const PreviousButton = () => {
  return (
    <div className="carousel-button previous">
      <img src={caratLeft} alt="previous" className="carousel-button-image" />
    </div>
  )
}

const NextButton = () => {
  return (
    <div className="carousel-button next">
      <img src={caratRight} alt="next" className="carousel-button-image" />
    </div>
  )
}

export const PaperCarousel = ({ papers }) => {
    console.log(process.env)
  const paperComponents = papers.map((paper, index) => {
      // const paperThumbnailUrl = 

      const paperThumbnail = process.env.PUBLIC_URL + '/paper-thumbnails/' + paper.thumbnailName
    return (
      <div className="paper" key={`paper-${index}`}>
        <img src={paperThumbnail} alt="paper thumbnail" className="paper-thumbnail" />
        <p className="paper-title">{paper.title}</p>
        <p className="paper-authors">{paper.authors}</p>
      </div>
    )
  });

  return (
    <div className="paper-carousel">
      <AliceCarousel
        items={paperComponents}
        disableDotsControls={true}
        mouseTracking={true}
        infinite={true}
        renderPrevButton={() => {
          return (<PreviousButton />)
        }}
        renderNextButton={() => {
          return (<NextButton />)
        }}
        responsive={{
          0: {
            items: 3
          },
          1280: {
            items: 3
          }
        }} />
    </div>
  )

}
