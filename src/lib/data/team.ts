import organizer from "$lib/assets/imgs/team/organizer.webp";
import techLead from "$lib/assets/imgs/team/technical-lead.webp";

import eventManager from "$lib/assets/imgs/team/event-management-lead.webp";
import eventManagerCO from "$lib/assets/imgs/team/event-management-co-lead.webp";

import socialMediaLead from "$lib/assets/imgs/team/content-lead.webp";

import designer from "$lib/assets/imgs/team/design-lead.webp";
import uiuxLead from "$lib/assets/imgs/team/uiux-lead.webp";

import webDevLead from "$lib/assets/imgs/team/web-dev-lead.webp";
import webDevCO from "$lib/assets/imgs/team/web-dev-co-lead.webp";
import appDevLead from "$lib/assets/imgs/team/app-dev-lead.webp";
import gameDevLead from "$lib/assets/imgs/team/game-dev-lead.webp";

import iotLead from "$lib/assets/imgs/team/iot-lead.webp";
import cyberLead from "$lib/assets/imgs/team/cyber-lead.webp";
import aimlLead from "$lib/assets/imgs/team/aiml-lead.webp";

import advisor from "$lib/assets/imgs/team/advisor.webp";
import advisor2 from "$lib/assets/imgs/team/advisor-2.webp";

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    color: string;
    socials: {
        linkedin?: string;
        github?: string;
        twitter?: string;
    };
}

const colors = {
    red: "bg-[#FF0028]",
    green: "bg-[#5FA953]",
    yellow: "bg-[#F4BB19]",
    blue: "bg-[#4285F4]",
    gray: "bg-gray-200",
};

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Aditya Singh",
        role: "GDG on Campus Organizer",
        image: organizer,
        color: colors.gray,
        socials: {
            linkedin: "https://www.linkedin.com/in/aditya-singh-1b7243291/",
            github: "https://github.com/Aditya-10-Singh/",
            twitter: "https://x.com/itsadityasingh4/",
        },
    },
    {
        id: 2,
        name: "Lungsom Lamnios",
        role: "Technical Lead",
        image: techLead,
        color: colors.gray,
        socials: {
            linkedin: "https://www.linkedin.com/in/lungsom-lamnio-339914282/",
            github: "https://github.com/LungsomLamnio/",
            twitter: "https://x.com/lungsom_lamnio/",
        },
    },
    {
        id: 3,
        name: "Ishwarjit Singh",
        role: "Event Management Lead",
        image: eventManager,
        color: colors.gray,
        socials: {
            linkedin: "https://www.linkedin.com/in/k-ishwarjit-singh-b10a43276/",
            //   github: "https://github.com",
            //   twitter: "https://x.com",
        },
    },
    {
        id: 4,
        name: "Ashmit Chiring Phukan",
        role: "Event Management CO-lead",
        image: eventManagerCO,
        color: colors.gray,
        socials: {
            linkedin: "https://www.linkedin.com/in/ashmit-chiring-phukan-9499a1345/",
            //   github: "https://github.com",
            //   twitter: "https://x.com",
        },
    },
    {
        id: 5,
        name: "Shubhodeep Roy",
        role: "Design Lead",
        image: designer,
        color: colors.gray,
        socials: {
            linkedin: "https://www.linkedin.com/in/shubhodeep-roy-1a626327a/",
            //   github: "https://github.com",
            //   twitter: "https://x.com",
        },
    },
    {
        id: 6,
        name: "Debojyoti Paul",
        role: "UI/UX Lead",
        image: uiuxLead,
        color: colors.gray,
        socials: {
            linkedin: "https://www.linkedin.com/in/debojyoti-paul-05b68021a/",
            github: "https://github.com/Debojyoti-Paul-18",
            //   twitter: "https://x.com",
        },
    },
    {
        id: 7,
        name: "Riki Kashyap",
        role: "Web Dev Lead",
        image: webDevLead,
        color: colors.gray,
        socials: {
            linkedin: "https://linkedin.com/in/riki-kashyap",
            github: "https://github.com/riki-k-dev",
            twitter: "https://github.com/riki-k-dev",
        },
    },
    {
        id: 8,
        name: "Chongboinem Haolai",
        role: "Web Dev CO-lead",
        image: webDevCO,
        color: colors.gray,
        socials: {
            linkedin: "https://www.linkedin.com/in/chongboinem-haolai-482700329",
            github: "https://github.com/chongboinem",
            //   twitter: "https://x.com",
        },
    },
    {
        id: 9,
        name: "Sneha Malakar",
        role: "App Dev Lead",
        image: appDevLead,
        color: colors.gray,
        socials: {
            linkedin: "https://www.linkedin.com/in/sneha-malakar-0ba177316/",
            github: "https://github.com/snehacodes-2906",
            //   twitter: "https://x.com",
        },
    },
    {
        id: 10,
        name: "Bidintha Machahary",
        role: "Game Dev Lead",
        image: gameDevLead,
        color: colors.gray,
        socials: {
            linkedin: "https://www.linkedin.com/in/bidintha-machahary-37219a260/",
            //   github: "https://github.com",
            //   twitter: "https://x.com",
        },
    },
    {
        id: 11,
        name: "Himan Kalita",
        role: "Cyber Lead",
        image: cyberLead,
        color: colors.gray,
        socials: {
            linkedin: "https://www.linkedin.com/in/himankalita/",
            github: "https://github.com/himan243",
            //   twitter: "https://x.com",
        },
    },
    {
        id: 12,
        name: "Uddipta Das",
        role: "AI/ML Lead",
        image: aimlLead,
        color: colors.gray,
        socials: {
            linkedin: "https://www.linkedin.com/in/uddipta-das-691586282/",
            github: "https://github.com/Uddii4321",
            //   twitter: "https://x.com",
        },
    },
    {
        id: 13,
        name: "Ashutosh Pratap Singh",
        role: "IoT Lead",
        image: iotLead,
        color: colors.gray,
        socials: {
            linkedin: "https://www.linkedin.com/in/ashupratapsingh/",
            github: "https://github.com/ashupsingh",
            //   twitter: "https://x.com",
        },
    },
    {
        id: 14,
        name: "Sreya Basumatari",
        role: "Content, Social Media Lead",
        image: socialMediaLead,
        color: colors.gray,
        socials: {
            linkedin: "https://www.linkedin.com/in/sreya-basumatari-a86041399/",
            //   github: "https://github.com/",
            //   twitter: "https://x.com",
        },
    },
    {
        id: 15,
        name: "Debarchito Nath",
        role: "Advisor",
        image: advisor,
        color: colors.gray,
        socials: {
            linkedin: "https://www.linkedin.com/in/debarchito/",
            github: "https://github.com/debarchito",
            //   twitter: "https://x.com",
        },
    },
    {
        id: 16,
        name: "Kaustav Raj Kalita",
        role: "Advisor",
        image: advisor2,
        color: colors.gray,
        socials: {
            linkedin: "https://www.linkedin.com/in/kaustav-raj-kalita/",
            //   github: "https://github.com/",
            //   twitter: "https://x.com",
        },
    },
];