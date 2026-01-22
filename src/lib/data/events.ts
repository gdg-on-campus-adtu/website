import aiml26 from "$lib/assets/imgs/evnts/aiml-26.webp";
import buildWithAI24 from "$lib/assets/imgs/evnts/buildWithAI-24.webp";
import cloud24 from "$lib/assets/imgs/evnts/cloud-24.webp";
import cloudStudyJam23 from "$lib/assets/imgs/evnts/cloud-studyJam-23.webp";
import cloudStudyJam24 from "$lib/assets/imgs/evnts/cloud-studyJam-24.webp";
import cloudfest24 from "$lib/assets/imgs/evnts/cloudfest-24.webp";
import cyber24 from "$lib/assets/imgs/evnts/cyber-24.webp";
import gdgKickoff25 from "$lib/assets/imgs/evnts/gdgKickoff-25.webp";
import gdgStart23 from "$lib/assets/imgs/evnts/gdgStart-23.webp";
import genaiStudyJam24 from "$lib/assets/imgs/evnts/genai-studyJam-24.webp";
import genaifest25 from "$lib/assets/imgs/evnts/genaifest-25.webp";
import github23 from "$lib/assets/imgs/evnts/github-23.webp";
import hacktoberfest24 from "$lib/assets/imgs/evnts/hacktoberfest-24.webp";
import innovathon24 from "$lib/assets/imgs/evnts/innovathon-24.webp";
import iot25 from "$lib/assets/imgs/evnts/iot-25.webp";
import solutionChallenge23 from "$lib/assets/imgs/evnts/solutionChallenge-23.webp";
import techBreak24 from "$lib/assets/imgs/evnts/techBreak-24.webp";
import uiux24 from "$lib/assets/imgs/evnts/uiux-24.webp";
import uiux25 from "$lib/assets/imgs/evnts/uiux-25.webp";
import web24 from "$lib/assets/imgs/evnts/web-24.webp";

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
            image: buildWithAI24,
            title: "Introduction to AI & Machine Learning",
            date: "Jan 18, 2026",
            type: "Online Meet",
            linkText: "RSVP Now",
            link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-introduction-to-ai-amp-ml/",
            description:
                "An introductory info session on Artificial Intelligence & Machine Learning, conducted by GDG On Campus | Assam down town University, covering fundamentals, real-world applications, and how beginners can start their AI/ML journey.",
        }, */
];

// Add new events at the end of the array

export const pastEvents: EventItem[] = [
    {
        color: colors.yellow,
        image: gdgStart23,
        title: "Inauguration of GDG On Campus | Assam down town University",
        date: "22 Sep, 2023",
        type: "Inauguration",
        link: "https://www.linkedin.com/posts/gdg-on-campus-adtu_we-are-thrilled-to-announce-the-grand-inauguration-activity-7110634908032675840-YHSX/",
        description:
            "We are thrilled to announce the grand inauguration of GDG On Campus | Assam down town University. Join us for a day of celebration and excitement as we welcome our new members and celebrate the launch of our community.",
    },
    {
        color: colors.green,
        image: cloudStudyJam23,
        title: "Cloud Study Jam Introduction",
        date: "27 Jan, 2024",
        type: "Info Session",
        link: "https://www.linkedin.com/posts/gdg-on-campus-adtu_exciting-news-first-ever-offline-gdsc-activity-7111545296760823809-jEk0/",
        description:
            "Google Cloud Study Jam Kickoff: We're diving into the world of cloud computing! Starting next month, we'll embark on an exciting journey to learn the fundamentals of cloud technology. Whether you're a beginner or looking to enhance your cloud skills, this program is tailored just for you.",
    },
    {
        color: colors.red,
        image: github23,
        title: "Git & GitHub Workshop",
        date: "14 Oct, 2023",
        type: "Workshop / Study Group",
        link: "https://www.linkedin.com/posts/gdg-on-campus-adtu_gdsc-google-googlesolutionchallenge-activity-7143300257257353217-XMKl/",
        description:
            "Join us on Saturday, October 14th, 2023, at 10:30 AM in Room 207 for an empowering workshop on Git and GitHub!",
    },
    {
        color: colors.blue,
        image: solutionChallenge23,
        title: "Solution Challenge 2023",
        date: "24 Dec, 2023",
        type: "Info Session",
        link: "https://www.linkedin.com/posts/gdg-on-campus-adtu_gdsc-google-googlesolutionchallenge-activity-7143300257257353217-XMKl/",
        description:
            "Join us for this info session and know more about Solution Challenge 2023!",
    },
    {
        color: colors.yellow,
        image: web24,
        title: "Web Development Event",
        date: "12 Jan, 2024",
        type: "Online Meet",
        link: "https://www.linkedin.com/posts/gdg-on-campus-adtu_first-web-dev-session-of-the-year-ignite-activity-7150781534168334338-jaFh/",
        description:
            "First Web Dev Session of the Year! Ignite your passion in a domain that sparks student curiosity.",
    },
    {
        color: colors.green,
        image: cyber24,
        title: "Cyber Security Event",
        date: "18 Jan, 2024",
        type: "Online Meet",
        link: "https://www.linkedin.com/posts/gdg-on-campus-adtu_secure-your-future-dive-into-cybersecurity-activity-7153055140663480321-mFSh/",
        description:
            "Do you dream of building defences against cyber threats and safeguarding the online world? Then join us for this info session and ignite your spark in cybersecurity!",
    },
    {
        color: colors.red,
        image: cloud24,
        title: "Cloud Computing Event",
        date: "27 Jan, 2024",
        type: "Online Meet",
        link: "https://www.linkedin.com/posts/gdg-on-campus-adtu_ready-to-take-your-digital-game-to-the-activity-7156134366207741961-qnCf/",
        description:
            "Ready to take your digital game to the next level? The clouds are beckoning, and we're inviting you to an Info Session on Cloud Computing that'll blast you off into a world of endless possibilities!",
    },
    {
        color: colors.blue,
        image: uiux24,
        title: "UI/UX & Documentation",
        date: "30 Jan, 2024",
        type: "Online Meet",
        link: "https://www.linkedin.com/posts/gdg-on-campus-adtu_dear-gdsc-enthusiasts-do-you-want-to-activity-7157249714793369600-oLw0/",
        description:
            "We are excited to invite you to our upcoming event - the 'UI/ UX & Documentation Google info session' by GDSC(AdtU). This event offers an immersive dive into the world of UI/UX design and documentation, and we can't wait for you to join us for this exciting journey!",
    },
    {
        color: colors.yellow,
        image: cloudfest24,
        title: "Cloud Fest 2024",
        date: "19 Mar, 2024",
        type: "Speaker Session / Tech Talk",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7179332902424338433/",
        description:
            "In this exciting gdsc's event, we'll guide you through a dynamic agenda designed to ignite your passion for technology and cloud computing.",
    },
    {
        color: colors.green,
        image: innovathon24,
        title: "Innovathon 2024",
        date: "4 Apr, 2024",
        type: "Hackathon",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7179332902424338433/",
        description:
            "Join us for Innovathon, the ultimate hackathon experience, part of Envision: the 1st edition of Entrepreneurship Summit organized by Assam down town University.",
    },
    {
        color: colors.red,
        image: genaiStudyJam24,
        title: "GenAI Study Jam",
        date: "17 Sep, 2024",
        type: "Info Session",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-build-with-ai/",
        description:
            "A short session about GDG On Campus and the upcoming GenAI Study Jams.",
    },
    {
        color: colors.blue,
        image: hacktoberfest24,
        title: "Hacktoberfest",
        date: "Oct 3, 2024",
        type: "Info Session",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-build-with-ai/",
        description:
            "This quick session will be about the ongoing Hacktoberfest 2024! A month-long celebration of all things open source and perhaps the best opportunity to learn more and contribute to open-source!",
    },
    {
        color: colors.yellow,
        image: buildWithAI24,
        title: "Build with AI",
        date: "Nov 7, 2024",
        type: "Workshop / Study Group",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-build-with-ai/",
        description:
            "Exciting one-of-a-kind event where we unveil an indie game made by the team and then see the RL magic live!",
    },
    {
        color: colors.green,
        image: techBreak24,
        title: "Tech Winter Break",
        date: "Dec 21, 2024",
        type: "Info Session",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-tech-winter-break-gdg-on-campus-assam-down-town-university/",
        description:
            "An insightful session on web development, where we go beyond the basics to explore its real-world applications and opportunities. Discover how to start your journey, participate in hackathons, contribute to open-source projects like GSoC, and build a standout GitHub profile.",
    },
    {
        color: colors.red,
        image: genaifest25,
        title: "Build with AI",
        date: "Feb 13, 2025",
        type: "Speaker Session / Tech Talk",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-the-genaifest-2025/",
        description:
            "Session on The Solution Challenge 2025, upcoming GDG events and plans and distribution of certificates and goodies for GenAI Study Jams 2024.",
    },
    {
        color: colors.blue,
        image: cloudStudyJam24,
        title: "Cloud Study Jam",
        date: "Oct 9, 2025",
        type: "Info Session",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-intro-session-google-cloud-study-jams/",
        description:
            "An online session on “Starting out with Google Cloud Study Jams” and kickstart your journey. Learn how to register, access the platform explore learning paths, earn badges, and complete your Study Jams successfully. Perfect for beginners ready to get started and make the most of this opportunity.",
    },
    {
        color: colors.yellow,
        image: gdgKickoff25,
        title: "GDG Kickoff & Git Workshop",
        date: "Nov 06, 2025",
        type: "Workshop / Study Group",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-gdg-kickoff-event-amp-git-collaboration-workshop/",
        description:
            "A new chapter of innovation! Featuring technical deep dives on Git & Open Source by Advisor Debarchito Nath, and Cyber Security insights by Lead Himan Kalita.",
    },
    {
        color: colors.green,
        image: iot25,
        title: "Introduction to IoT",
        date: "Nov 22, 2025",
        type: "Online Meet",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-introduction-to-iot/",
        description:
            "Step into the world of smart technology! Get an introduction to the Internet of Things, exploring how devices connect, communicate, and automate the real world. Ideal for beginners curious about sensors, smart systems, and real-world IoT applications.",
    },
    {
        color: colors.red,
        image: uiux25,
        title: "Introduction to Design & UI/UX",
        date: "Nov 28, 2025",
        type: "Online Meet",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-introduction-to-design-amp-uiux/",
        description:
            "Kickstart your design journey! Learn the fundamentals of UI/UX design, including user research, wireframing, and visual design principles. This session is perfect for beginners looking to understand how intuitive and engaging digital experiences are crafted.",
    },
    {
        color: colors.blue,
        image: aiml26,
        title: "Introduction to AI & Machine Learning",
        date: "Jan 18, 2026",
        type: "Online Meet",
        linkText: "RSVP Now",
        link: "https://gdg.community.dev/events/details/google-gdg-on-campus-assam-down-town-university-guwahati-india-presents-introduction-to-ai-amp-ml/",
        description:
            "An introductory info session on Artificial Intelligence & Machine Learning, conducted by GDG On Campus | Assam down town University, covering fundamentals, real-world applications, and how beginners can start their AI/ML journey.",
    },
];
