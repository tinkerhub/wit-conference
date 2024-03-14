export const Schedule = {
    "Day 1 : March 22": [
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
    ],
    "Day 2 : March 23": [
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
