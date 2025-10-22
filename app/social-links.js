import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faFacebookF, faThreads, faPinterestP, faLinkedinIn, faYoutube, faWhatsapp, faSnapchatGhost,  } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
    {
        name: "Online Store",
        path: "https://www.syphyr.co/",
        icon: <FontAwesomeIcon icon={faGlobe} size="xl" />
        // icon: 
    },
    {
        name: "Instagram",
        path: "https://www.instagram.com/syphyr_official/",
        icon: <FontAwesomeIcon icon={faInstagram} size="xl" />
    },
    {
        name: "X",
        path: "https://x.com/syphyr_official",
        icon: <FontAwesomeIcon icon={faXTwitter} size="xl" />
    },
    {
        name: "Facebook",
        path: "https://www.facebook.com/profile.php?id=61582320014018",
        icon: <FontAwesomeIcon icon={faFacebookF} size="xl" />
    },
    {
        name: "Thread",
        path: "",
        icon: <FontAwesomeIcon icon={faThreads} size="xl" />
    },
    {
        name: "Pinterest",
        path: "https://in.pinterest.com/syphyr_official",
        icon: <FontAwesomeIcon icon={faPinterestP} size="xl" />
    },
    {
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/team-syphyr-3459b538b/",
        icon: <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
    },
    {
        name: "Youtube",
        path: "https://www.youtube.com/@syphyr_official",
        icon: <FontAwesomeIcon icon={faYoutube} size="xl" />
    },
    {
        name: "WhatsApp Community",
        path: "",
        icon: <FontAwesomeIcon icon={faWhatsapp} size="xl" />
    },
    {
        name: "Snap Chat",
        path: "https://www.snapchat.com/add/syphyr_official/",
        icon: <FontAwesomeIcon icon={faSnapchatGhost} size="xl" />
    }
]

export default socialLinks;