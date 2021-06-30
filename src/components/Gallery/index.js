import { useSelector } from "react-redux";
import Gallery from "react-photo-gallery";
import getIdFromPicture from "@Utils";

const CustomGallery = () => {
    const pictures = useSelector((state) => state.pictures)

    return (
        <Gallery
            photos={pictures.map((url) => {
                return {
                    src: url,
                    alt: getIdFromPicture(url),
                    width: 1,
                    height: 1
                }
            })}
        >
        </Gallery>
    )
}

export default CustomGallery;