import React from "react";
import Carousel from "react-elastic-carousel";

class ProjectCarousel extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.name !== prevProps.name) {
            this.carousel.goTo(0)
        }
    }

    render() {
        const images = this.props.images;
        return (
            typeof images !== "undefined" ?

                <div>
                    <Carousel itemsToShow={1} ref={ref => (this.carousel = ref)}>
                        {
                            images.map((image, index) => {
                                return <img key={index}
                                    className="card-img-top carousel-image"
                                    src={image}
                                    alt="X" />

                            })
                        }

                    </Carousel>
                </div> : ""
        );
    }
}

/*
const ProjectCarousel = (props) => {
    console.log(props.images);
    return (
        typeof props.images !== "undefined" ?
     
        <div>
            <Carousel itemsToShow={1} initialActiveIndex={1}>
                {
                    props.images.map((image, index) => {
                        return <img key={index}
                            className="carousel-image"
                            src={image}
                            alt="..." />

                    })
                }

            </Carousel>
        </div> : ""
    );
}
*/

export default ProjectCarousel;