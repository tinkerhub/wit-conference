function makeCard({name, title = "", organization = ""}) {
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
    {name: "Shreya", profile: "https://www.linkedin.com/in/shreya-krishnan-3190098/"},
    {name: "Janhvi Patil", profile: "https://www.janhvipatil.me/"},
    {name: "Saumya", profile: "https://www.linkedin.com/in/soumyasebastian/"},
    {name: "Gopika KJ", profile: "https://www.linkedin.com/in/kj-gopika/"},
    {name: "Akhila", profile: "https://www.linkedin.com/in/akhilasomanath/"},
    {name: "Athira", profile: "https://www.linkedin.com/in/athiratj/"},
    {name: "Vidya", profile: "https://www.linkedin.com/in/vidyasridhar15/"},
    {name: "Sumi", profile: "https://www.linkedin.com/in/sumi-thomas-63a05a5/"},
    {name: "Ananaya", profile: "https://www.linkedin.com/in/ananya-r/"},
    {name: "Laya", profile: "https://www.linkedin.com/in/layaannalalan/"},
    {name: "Ganesh Gopal", profile: "http://www.icaap.coop/icanews/meet-ganesh-gopal-ica-ap’s-new-programme-officer"},
    {name: "Nidhi Sudhan", profile: "https://www.linkedin.com/in/nidhi-sudhan/"},
    {name: "Reema", profile: "https://www.linkedin.com/in/reemashaji/"},
    {name: "Varsha", profile: "https://www.linkedin.com/in/varsha-shaheen/"},
    {name: "Kurian", profile: "https://www.linkedin.com/in/kurian-/"},
    {name: "Seethal Anil", profile: "https://www.linkedin.com/in/seethal-anil-636124222/"},
    {name: "Cerin", profile: "https://www.linkedin.com/in/cerinsarasanthosh/"},
    {name: "Aksa", profile: "https://www.linkedin.com/in/aksa-rose/"},
];

if (cardsContainer)
    cardsContainer.innerHTML = Guests.map((row) => makeCard(row)).join("\n");
