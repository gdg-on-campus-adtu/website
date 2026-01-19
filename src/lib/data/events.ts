import kickoffImg from "$lib/assets/imgs/evnts/gdg-kickoff-evnt.webp";
import iotImg from "$lib/assets/imgs/evnts/iot-evnt.webp";
import uiuxImg from "$lib/assets/imgs/evnts/ui-ux-evnt.webp";
import aimlImg from "$lib/assets/imgs/evnts/aiml-evnt.webp";
import cloudStudyJamImg from "$lib/assets/imgs/evnts/cloudStudyJam-evnt.webp";
import genaifestImg from "$lib/assets/imgs/evnts/genaifest-evnt.webp";
import techBreakImg from "$lib/assets/imgs/evnts/techBreak-evnt.webp";
import buildWithAIImg from "$lib/assets/imgs/evnts/buildWithAI-evnt.webp";
import hacktoberfestImg from "$lib/assets/imgs/evnts/hacktober-evnt.webp";
import genaiStudyJamImg from "$lib/assets/imgs/evnts/genaiStudyJam-evnt.webp";

interface EventItem {
    color: string;
    image: string;
    title: string;
    date: string;
    type: string;
    linkText?: string;
    link: string;
    description: string;
}

const colors = {
    red: "bg-[#FF0028]",
    green: "bg-[#5FA953]",
    yellow: "bg-[#F4BB19]",
    blue: "bg-[#4285F4]",
    gray: "bg-gray-200",
};

export const upcomingEvents: EventItem[] = [
/*     {
        color: colors.gray,
        image: aimlImg,
        title: "Introduction to AI & Machine Learning",
        date: "Jan 18, 2026",
        type: "Online Meet",
        linkText: "RSVP Now",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-introduction-to-ai-amp-ml/",
        description:
            "An introductory info session on Artificial Intelligence & Machine Learning, conducted by GDG On Campus | Assam down town University, covering fundamentals, real-world applications, and how beginners can start their AI/ML journey.",
    }, */
];

export const pastEvents: EventItem[] = [
    {
        color: colors.blue,
        image: aimlImg,
        title: "Introduction to AI & Machine Learning",
        date: "Jan 18, 2026",
        type: "Online Meet",
        linkText: "RSVP Now",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-introduction-to-ai-amp-ml/",
        description:
            "An introductory info session on Artificial Intelligence & Machine Learning, conducted by GDG On Campus | Assam down town University, covering fundamentals, real-world applications, and how beginners can start their AI/ML journey.",
    },
    {
        color: colors.red,
        image: uiuxImg,
        title: "Introduction to Design & UI/UX",
        date: "Nov 28, 2025",
        type: "Info Session",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-introduction-to-design-amp-uiux/",
        description:
            "Kickstart your design journey! Learn the fundamentals of UI/UX design, including user research, wireframing, and visual design principles. This session is perfect for beginners looking to understand how intuitive and engaging digital experiences are crafted.",
    },
    {
        color: colors.green,
        image: iotImg,
        title: "Introduction to IoT",
        date: "Nov 22, 2025",
        type: "Info Session",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-introduction-to-iot/",
        description:
            "Step into the world of smart technology! Get an introduction to the Internet of Things, exploring how devices connect, communicate, and automate the real world. Ideal for beginners curious about sensors, smart systems, and real-world IoT applications.",
    },
    {
        color: colors.yellow,
        image: kickoffImg,
        title: "GDG Kickoff & Git Workshop",
        date: "Nov 06, 2025",
        type: "Workshop / Study Group",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-gdg-kickoff-event-amp-git-collaboration-workshop/",
        description:
            "A new chapter of innovation! Featuring technical deep dives on Git & Open Source by Advisor Debarchito Nath, and Cyber Security insights by Lead Himan Kalita.",
    },
    {
        color: colors.blue,
        image: cloudStudyJamImg,
        title: "Cloud Study Jam",
        date: "Oct 9, 2025",
        type: "Info Session",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-intro-session-google-cloud-study-jams/",
        description:
            "An online session on “Starting out with Google Cloud Study Jams” and kickstart your journey. Learn how to register, access the platform explore learning paths, earn badges, and complete your Study Jams successfully. Perfect for beginners ready to get started and make the most of this opportunity.",
    },
    {
        color: colors.red,
        image: genaifestImg,
        title: "Build with AI",
        date: "Feb 13, 2025",
        type: "Speaker Session / Tech Talk",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-the-genaifest-2025/",
        description:
            "Session on The Solution Challenge 2025, upcoming GDG events and plans and distribution of certificates and goodies for GenAI Study Jams 2024.",
    },
    {
        color: colors.green,
        image: techBreakImg,
        title: "Tech Winter Break",
        date: "Dec 21, 2024",
        type: "Info Session",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-tech-winter-break-gdg-on-campus-assam-down-town-university/",
        description:
            "An insightful session on web development, where we go beyond the basics to explore its real-world applications and opportunities. Discover how to start your journey, participate in hackathons, contribute to open-source projects like GSoC, and build a standout GitHub profile.",
    },
    {
        color: colors.yellow,
        image: buildWithAIImg,
        title: "Build with AI",
        date: "Nov 7, 2024",
        type: "Workshop / Study Group",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-build-with-ai/",
        description:
            "Exciting one-of-a-kind event where we unveil an indie game made by the team and then see the RL magic live!",
    },
    {
        color: colors.blue,
        image: hacktoberfestImg,
        title: "Hacktoberfest",
        date: "Oct 3, 2024",
        type: "Speaker Session / Tech Talk",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-build-with-ai/",
        description:
            "This quick session will be about the ongoing Hacktoberfest 2024! A month-long celebration of all things open source and perhaps the best opportunity to learn more and contribute to open-source!",
    },
    {
        color: colors.red,
        image: genaiStudyJamImg,
        title: "GenAI Study Jam",
        date: "17 Sep, 2024",
        type: "Info Session",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-build-with-ai/",
        description:
            "A short session about GDG On Campus and the upcoming GenAI Study Jams.",
    },
];
