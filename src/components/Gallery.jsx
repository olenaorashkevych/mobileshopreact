import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Gallery() {
    return (
        <div className="gallery">
            <div className="container-fill">

                <h2 className="gallery__title title-square">
                    <span className="title-square__small">Перегляньте наш:</span>
                    <span className="title-square__main">Instagram</span>
                </h2>

                <div className="gallery__items">
                    <div className="gallery__item">
                        <a href="#" className="gallery__item-hover-box">
                            <span className="gallery__item-hash-tag link-hover">#instagram-link</span>
                        </a>

                        <LazyLoadImage
                            alt="Social media image"
                            className="gallery__item-img"
                            src="https://picsum.photos/id/123/270/270"
                            height="270"
                            width="270" />
                    </div>
                    <div className="gallery__item">
                        <a href="#" className="gallery__item-hover-box">
                            <span className="gallery__item-hash-tag link-hover">#instagram-link</span>
                        </a>

                        <LazyLoadImage
                            alt="Social media image"
                            className="gallery__item-img"
                            src="https://picsum.photos/id/124/270/270"
                            height="270"
                            width="270" />
                    </div>
                    <div className="gallery__item">
                        <a href="#" className="gallery__item-hover-box">
                            <span className="gallery__item-hash-tag link-hover">#instagram-link</span>
                        </a>

                        <LazyLoadImage
                            alt="Social media image"
                            className="gallery__item-img"
                            src="https://picsum.photos/id/125/270/270"
                            height="270"
                            width="270" />
                    </div>
                    <div className="gallery__item">
                        <a href="#" className="gallery__item-hover-box">
                            <span className="gallery__item-hash-tag link-hover">#instagram-link</span>
                        </a>

                        <LazyLoadImage
                            alt="Social media image"
                            className="gallery__item-img"
                            src="https://picsum.photos/id/126/270/270"
                            height="270"
                            width="270" />
                    </div>
                    <div className="gallery__item">
                        <a href="#" className="gallery__item-hover-box">
                            <span className="gallery__item-hash-tag link-hover">#instagram-link</span>
                        </a>

                        <LazyLoadImage
                            alt="Social media image"
                            className="gallery__item-img"
                            src="https://picsum.photos/id/127/270/270"
                            height="270"
                            width="270" />
                    </div>
                </div>

            </div>
        </div>
    )
}
