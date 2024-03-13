function makeCard(name = "", title = "", description = "", image = "/img/guests/woman.png") {
    return `
    <div class="shadow-xl ">
        <div class="w-full h-20 bg-[#FF5237]  ">

        </div>
        <div class="flex flex-col items-center justify-center -mt-8 pb-12 lg:pb-12">
            <div class="h-16 w-16 rounded-full border-2 border-white  bg-gray-300">
                <img class="rounded-full " src="${image}">
            </div>
            <div class="flex flex-col items-center justify-center ">
                <span class="font-semibold " >${name}</span>
                <span class="text-sm text-[#666666]">${title}</span>
                <span class="text-xs text-[#666666]">${description}</span>
            </div>
        </div>
    </div>
    `;
}

const cardsContainer = document.getElementById("guestCards");

const guests = [
    ['Athira T J ', 'Data Associate', 'Reap Benefit', '/img/guests/athira.jpeg'],
    ['Akhila ', 'Co-Founder', 'Tech4Good Community', '/img/guests/akhila.jpeg'],
    ['Vidya ', 'Ex Data Scientist', 'Tech4Good Community', '/img/guests/vidya.jpeg'],
    ['K J'],
    ['Riya'],
    ['Ananya'],
    ['Sumeeti'],
    ['Laya'],
    ['G G'],
];

cardsContainer.innerHTML = guests.map((row) => makeCard(...row)).join("\n");

export {};
