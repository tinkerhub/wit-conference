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
    {name: "Shreya", profile: "https://www.linkedin.com/in/shreya-krishnan-3190098/", title: "Managing Director - India, AnitaB.org", organization: "AnitaB.org"},
    {name: "Sweta Shaw", profile: "https://twitter.com/swetashaw_", title: "Engineer, Web3 Mentor", organization: "Questbook"},
    {name: "Janhvi Patil", profile: "https://www.janhvipatil.me/", title: "Co-Founder and Product Engineer", organization: "The Commit Company"},
    {name: "Saumya", profile: "https://www.linkedin.com/in/soumyasebastian/", title: "Product Engineer", organization: "entri.app"},
    {name: "Gopika KJ", profile: "https://www.linkedin.com/in/kj-gopika/", title: "Senior Product Manager", organization: "Klub"},
    {name: "Felix Jose Mon", profile: "https://www.linkedin.com/in/felixjosemon/", title: "Founder", organization: "AppsFinal, AB Final"},
    {name: "Akhila", profile: "https://www.linkedin.com/in/akhilasomanath/", title: "Co-Founder, Chief Innovations Officer", organization: "Tech4Good Community"},
    {name: "Athira", profile: "https://www.linkedin.com/in/athiratj/", title: "Data Associate", organization: "Reap Benefit"},
    {name: "Vidya", profile: "https://www.linkedin.com/in/vidyasridhar15/", title: "Associate, Impact & Strategy communications", organization: "Tech4Good Community"},
    {name: "Sumi", profile: "https://www.linkedin.com/in/sumi-thomas-63a05a5/", title: "Aikyam Fellow", organization: "aikyam"},
    {name: "Ananya R", profile: "https://www.linkedin.com/in/ananya-r/", title: "Global Community Manager", organization: "She Loves Tech"},
    {name: "Shiva Raghavi", profile: "https://www.linkedin.com/in/siva-raghavi-2406a1105/", title: "Manager Programs", organization: "NDBI India"},
    {name: "Eashita Maheswary", profile: "https://www.linkedin.com/in/eashitam/", title: null, organization: null},
    {name: "Annie", profile: "https://www.linkedin.com/in/annie-vijaya-04255112/", title: "CEO", organization: "ACIC CBIT Foundation"},
    {name: "Teena", profile: null,title: null,organization: null},
    {name: "Anupama USA", profile: "https://www.linkedin.com/in/anupama-babu-3b7255165/", title: "Senior Devops Engineer", organization: "MuleSoft"},
    {name: "Laya", profile: "https://www.linkedin.com/in/layaannalalan/", title: "Talent Acquisition EMEA & APAC ", organization: "Amazon"},
    {name: "Farha Kareem", profile: "https://www.linkedin.com/in/farhakareem?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", title: "Senior Product and Success Manager", organization: "Store Watchers"},
    {name: "Rishika Raveendran", profile: "https://www.linkedin.com/in/rishika-raveendran?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", title: "Software Engineer", organization: "Sedai"},
    {name: "Sandra PP", profile: "https://www.linkedin.com/in/sandra-p-p?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", title: "SDE", organization: "JP Morgan Chase"},
    {name: "Ganesh Gopal", profile: "http://www.icaap.coop/icanews/meet-ganesh-gopal-ica-ap’s-new-programme-officer", title: "Programme Officer", organization: "ICA Asia and Pacific"},
    {name: "Nidhi Sudhan", profile: "https://www.linkedin.com/in/nidhi-sudhan/", title: "Co-Founder", organization: "Citizen Digital Foundation"},
    {name: "Reema", profile: "https://www.linkedin.com/in/reemashaji/", title: "Program Manager", organization: "TinkerHub"},
    {name: "Varsha", profile: "https://www.linkedin.com/in/varsha-shaheen/", title: "Women in Tech Fellow", organization: "TinkerHub"},
    {name: "Kurian", profile: "https://www.linkedin.com/in/kurian-/", title: "COO", organization: "TinkerHub"},
    {name: "Participant", profile: "https://www.linkedin.com/in/seethal-anil-636124222/", title: "Student ", organization: "Muthoot"},
    {name: "Cerin", profile: "https://www.linkedin.com/in/cerinsarasanthosh/", title: "Software Developer", organization: "IBM"},
    {name: "Aksa", profile: "https://www.linkedin.com/in/aksa-rose/", title: "SHN Coordinator ", organization: "TinkerHub"}
];

if (cardsContainer)
    cardsContainer.innerHTML = Guests.map((row) => makeCard(row)).join("\n");
