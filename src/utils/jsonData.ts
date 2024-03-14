import {Guests} from "../sections/guests";
import {Schedule} from "../sections/schedule";

export const data = {
    about: 'Join us for an inspiring day filled with learning, networking, and celebration. Registration is now open for March 23rd but will be subject to a shortlisting process to ensure a deeply engaging and personalized experience for all attendees.'.replaceAll(" ", "\n"),
    registration: {
        link: "https://airtable.com/app5Zrc5Yh9ThtD60/shrLIICJd6IC1RkKE",
        note: "Shortlisted attendees will be notified via email with further details.".replaceAll(" ", "\n")
    },
    why: {
        context: 'The Women Makers Celebration is not just a conference; it\'s a platform for creating an inclusive and diverse tech industry in Kerala and beyond. Our mission is to'.replaceAll(" ", "\n"),
        missions: [
            'Inspire with stories from the successful Tink-Her-Hack initiative and other remarkable women in tech.'.replaceAll(" ", "\n"),
            'Educate through hands-on workshops and sessions led by industry experts.'.replaceAll(" ", "\n"),
            'Connect attendees with mentors, peers, and potential employers, fostering a vibrant community of women makers.'.replaceAll(" ", "\n")
        ]
    },
    Guests,
    Schedule,
    contactUs: {
        email: "hi@tinkerhub.org",
    }
}
