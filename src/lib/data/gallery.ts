import img1 from '$lib/assets/imgs/gallery/1.webp';
import img2 from '$lib/assets/imgs/gallery/2.webp';
import img3 from '$lib/assets/imgs/gallery/3.webp';
import img4 from '$lib/assets/imgs/gallery/4.webp';
import img5 from '$lib/assets/imgs/gallery/5.webp';
import img6 from '$lib/assets/imgs/gallery/6.webp';
import img7 from '$lib/assets/imgs/gallery/7.webp';
import img8 from '$lib/assets/imgs/gallery/8.webp';
import img9 from '$lib/assets/imgs/gallery/9.webp';
import img10 from '$lib/assets/imgs/gallery/10.webp';
import img11 from '$lib/assets/imgs/gallery/11.webp';
import img12 from '$lib/assets/imgs/gallery/12.webp';

export interface GalleryItem {
    id: number;
    src: string;
    // title: string;
    // description: string;
}

export const galleryItems: GalleryItem[] = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img7 },
    { id: 8, src: img8 },
    { id: 9, src: img9 },
    { id: 10, src: img10 },
    { id: 11, src: img11 },
    { id: 12, src: img12 },
];
