export {}

const seemoreButton = document.getElementById('seemore-btn');

// Add event listener to the button
seemoreButton.addEventListener('click', function() {
    
    document.getElementById('seeless-btn').classList.remove('hidden');
    document.getElementById('seemore-btn').classList.add('hidden');
    const remainingVolunteers = totalVolunteers - volunteerCardsToShow;
    volunteerCardsToShow = Math.min(volunteerCardsToShow + remainingVolunteers, totalVolunteers);
    showVolunteerCards();
});


const seelessButton = document.getElementById('seeless-btn');

// Add event listener to the button
seelessButton.addEventListener('click', function() {
    document.getElementById('seeless-btn').classList.add('hidden');
    document.getElementById('seemore-btn').classList.remove('hidden');
    volunteerCardsToShow = 4; // Show only the first four volunteer data
    showVolunteerCards();
});

let volunteerCardsToShow = 4; // Number of initial volunteer cards to show
const volunteersData = [
  { name: "Alex first", role: "Volunteer", imageSrc: "/img/volunteers/alex.jpg" },
  { name: "Alex Mathai", role: "Volunteer", imageSrc: "/img/volunteers/volunteer-fake-img.jpg" },
  { name: "Alex Mathai", role: "Volunteer", imageSrc: "/img/volunteers/volunteer-fake-img.jpg" },
  { name: "Alex Mathai", role: "Volunteer", imageSrc: "/img/volunteers/volunteer-fake-img.jpg" },
  { name: "Alex Mathai", role: "Volunteer", imageSrc: "/img/volunteers/volunteer-fake-img.jpg" },
  { name: "Alex Mathai", role: "Volunteer", imageSrc: "/img/volunteers/volunteer-fake-img.jpg" },
  { name: "arshad", role: "Volunteer", imageSrc: "/img/volunteers/volunteer-fake-img.jpg" },
  { name: "Alex Mathai", role: "Volunteer", imageSrc: "/img/volunteers/volunteer-fake-img.jpg" },
  { name: "Alex Mathai", role: "Volunteer", imageSrc: "/img/volunteers/volunteer-fake-img.jpg" },
  { name: "Alex Mathai", role: "Volunteer", imageSrc: "/img/volunteers/volunteer-fake-img.jpg" },
  { name: "Alex Mathai", role: "Volunteer", imageSrc: "/img/volunteers/volunteer-fake-img.jpg" },
  { name: "Alex last", role: "Volunteer", imageSrc: "/img/volunteers/volunteer-fake-img.jpg" },
  // Add more volunteer objects as needed
];

// Set totalVolunteers to the length of volunteersData array
const totalVolunteers = volunteersData.length;


// Function to display volunteer cards based on the number to show
function showVolunteerCards() {
    const container = document.getElementById('volunteer-card-container');
    container.innerHTML = ''; // Clear existing cards
    for (let i = 0; i < volunteerCardsToShow && i < totalVolunteers; i++) {
        const volunteer = volunteersData[i];
        container.innerHTML += `
            <!-- Repeat the card structure for each volunteer -->
            <div class="bg-white hover:scale-105 rounded-lg px-2 w-full h-44 md:h-40 flex justify-end transition-transform duration-300 ease-in-out transform">
                <div class="bg-red-300 w-10/12 h-3/5 md:h-4/6 lg:h-2/3 mt-10 rounded-2xl flex gap-6">
                    <img src="${volunteer.imageSrc}" class="h-full rounded-full aspect-square -ms-14 md:-ms-10 shadow-xl object-cover" alt="">
                    <div class="py-5">
                        <p class="text-xl md:text-md font-bold">${volunteer.name}</p>
                        <p class="font-semibold">${volunteer.role}</p>
                    </div>
                </div>
            </div>
            <!-- End of card -->
        `;
    }
}

// Initial display of volunteer cards
showVolunteerCards();

