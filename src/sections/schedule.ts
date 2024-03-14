const toEntry = (title: string, venue: string, capacity: number) => ({ title, venue, capacity });
export const Schedule = {
    "Day 1, March 22": {
        "10:00 AM - 11:00 AM": [
            toEntry("Opening Ceremony", "Venue 1, Main Conference", 200)
        ],
        "11:15 AM - 12:00 PM": [
            toEntry("Building Your Career in product startups", "Venue 1, Main Conference", 200),
            toEntry("How communities play a role in increasing women in tech", "Venue 2, Amphitheater", 100),
            toEntry("Game", "Venue 3, Career Hub", 36),
            toEntry("1-1 Mentoring", "Venue 4, Innovation Lab", 8),
            toEntry("Flash / Lightning Talks", "Area in front of Venue 1", NaN)
        ],
        "12:00 PM - 12:45 PM": [
            toEntry("Women Maker / Micro SAAS", "Venue 1, Main Conference", 200),
            toEntry("Gender Gap in workforce in Kerala, Panel", "Venue 2, Amphitheater", 100),
            toEntry("Possibility Board", "Venue 3, Career Hub", 36),
        ],
        "01:00 PM - 2:00 PM": [
            toEntry("Lunch Break & Networking", "Every where except Lobby", 344),
            toEntry("1-1 Mentoring", "Lobby", NaN)
        ],
        "02:00 PM - 03:00 PM": [
            toEntry("Engineers Solving Social Problems, Akhila", "Venue 2, Amphitheater", 100),
            toEntry("Game", "Venue 3, Career Hub", 36),
        ],
        "3:00 PM - 4:00 PM": [
            toEntry("Tech Leadership - Sumeeti, Tessy and Chetana", "Venue 1, Main Conference", 200),
            toEntry("Tech Entrepreneurship, KSUM / Running a Product Company", "Venue 2, Amphitheater", 100),
            toEntry("Flash Talks", "Venue 3, Career Hub", 36),
        ],
        "04:30 PM - 05:00 PM": [
            toEntry("Closing Ceremony - Recognition and Awards", "Venue 2, Amphitheater", 100),
            toEntry("Technical Track Placeholder", "Venue 3, Career Hub", 36),
        ]
    },
    "Day 2, March 23": [
        // {
        //     title: "Opening Ceremony",
        //     speaker: "John Doe",
        //     time: "10:00 AM"
        // },
        // {
        //     title: "Keynote",
        //     speaker: "Jane Doe",
        //     time: "11:00 AM"
        // },
        // {
        //     title: "Lunch",
        //     speaker: "N/A",
        //     time: "12:00 PM"
        // },
        // {
        //     title: "Workshop",
        //     speaker: "John Doe",
        //     time: "1:00 PM"
        // },
        // {
        //     title: "Networking",
        //     speaker: "N/A",
        //     time: "2:00 PM"
        // },
        // {
        //     title: "Closing Ceremony",
        //     speaker: "Jane Doe",
        //     time: "3:00 PM"
        // }
    ]
}

function makeEvent(event: { title: string; speaker: string; time: string }, index: any) {
    return `
    <div class="w-48 h-52 flex flex-col bg-[#E4DEFF] hover:bg-[#5B36F7] text-[#5B36F7] hover:text-white py-2 px-4">
        <p class="text-3xl font-light ">${index}</p>
        <p class=" font-light text-sm mt-2 mb-6">${event.title}</p>
        <div class="flex-grow"></div>
        <p class=" font-semibold">${event.speaker}</p>
        <div class="flex gap-2 py-1 items-center">
            <span class="material-symbols-outlined  text-base">schedule</span>
            <p class=" font-semibold text-xs">${event.time}</p>
        </div>
    </div>
    `
}

function makeDay(day: string) {
    return `
    <p class="text-2xl font-bold py-10">${day}</p>
        <!-- card-container -->
        <div class="grid grid-cols-2 md:grid-cols-7  gap-3">
            ${Schedule[day].map((event, i) => makeEvent(event, i + 1)).join('')}
        </div>
    </p>
    `
}

const scheduleContainer = document.getElementById("scheduleContainer");

if (scheduleContainer)
    scheduleContainer.innerHTML = Object.keys(Schedule).map(day => makeDay(day)).join('');
