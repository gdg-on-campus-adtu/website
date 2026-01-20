import rShrineImg from "$lib/assets/imgs/projects/rl-shrine.webp";
import infiniteGalleryImg from "$lib/assets/imgs/projects/infinite-gallery.webp";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
  tags: string[];
  author: {
    name: string;
    url?: string;
  };
  links: {
    demo?: string;
    repo?: string;
  };
}

const colors = {
  red: "bg-[#FF0028]",
  green: "bg-[#5FA953]",
  yellow: "bg-[#F4BB19]",
  blue: "bg-[#4285F4]",
  white: "bg-white",
  gray: "bg-gray-200"
};

export const projects: ProjectItem[] = [
  {
    id: "reinforced-shrine-adventure",
    title: "The Reinforced Shrine Adventure",
    description: "This project serves as a text-based adventure game-ish environment to train solo RL agents. I prepared this as a showcase for a #BuildWithAI event organized by GDG on Campus | AdtU. But, this is not a solo effort. Contributions from GDG on Campus | AdtU team and community members have made this possible.",
    image: rShrineImg,
    color: colors.gray,
    tags: ["Python", "RL", "Game Dev", "Showcase"],
    author: {
      name: "Debarchito Nath",
      url: "https://github.com/debarchito"
    },
    links: {
      repo: "https://github.com/debarchito/reinforced-shrine-adventure"
    },
  },
  {
    id: "infinite-gallery",
    title: "Infinite Image Gallery",
    description: "An interactive infinite-scroll image grid built with React, GSAP, and Tailwind CSS, featuring a smooth drag-based navigation system, dynamic grid replication, animated captions, and a modal popup preview. Optimized for immersive visual storytelling and portfolio-style image browsing.",
    image: infiniteGalleryImg,
    color: colors.gray,
    tags: ["React", "GSAP", "Tailwind CSS", "Showcase"],
    author: {
      name: "Riki Kashyap",
      url: "https://github.com/riki-k-dev"
    },
    links: { repo: "https://github.com/riki-k-dev/infinite-img-gallery-v1/", demo: "https://infinite-img-gallery-v1.vercel.app/" },
  },
];
