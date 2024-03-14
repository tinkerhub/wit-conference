function makeCard({name , title = "" , organization = ""}) {
    return `
    <div class="shadow-xl ">
        <div class="w-full h-20 bg-[#FF5237]  ">

        </div>
        <div class="flex flex-col items-center justify-center -mt-8 pb-12 lg:pb-12">
            <div class="h-16 w-16 rounded-full border-2 border-white  bg-gray-300">
                <img class="rounded-full " src="/img/guests/woman.png" alt="dp">
            </div>
            <div class="flex flex-col items-center justify-center ">
                <span class="font-semibold " >${name}</span>
                <span class="text-sm text-[#666666]">${title}</span>
                <span class="text-xs text-[#666666]">${organization}</span>
            </div>
        </div>
    </div>
    `;
}

const cardsContainer = document.getElementById("guestCards");

export const Guests = [
        {name: 'Athira T J ', title: 'Data Associate', organization: 'Reap Benefit'},
        {name: 'Akhila ', title: 'Co-Founder',  organization: 'Tech4Good Community'},
        {name: 'Vidya ', title: 'Ex Data Scientist', organization: 'Tech4Good Community'},
        {name: 'Riya'},
        {name: 'Ananya'},
        {name: 'Sumeeti'},
        {name: 'Laya'},
];

if (cardsContainer)
    cardsContainer.innerHTML = Guests.map((row) => makeCard(row)).join("\n");
