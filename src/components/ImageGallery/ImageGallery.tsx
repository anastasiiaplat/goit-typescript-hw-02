
import ImageCard from "../ImageCard/ImageCard"
import { Photo } from '../../types'
import { FC, LegacyRef } from "react";

interface ImageGalleryProps {
  photos: Photo[];
  openModal: (photo: Photo) => void;
  lastImageRef: LegacyRef<HTMLLIElement> | null;
}
const ImageGallery:FC<ImageGalleryProps> = ({ photos, openModal,lastImageRef }) => {
     return (
        <ul>
            {photos.map((photo, index) => {
                const isLastImage:boolean = index === photos.length - 1;
                return (
          <li key={photo.id} ref={isLastImage ? lastImageRef : null}>
          <ImageCard photo={photo} openModal={openModal} />
          </li>
        );
            })}

        </ul>

    )

}

export default ImageGallery