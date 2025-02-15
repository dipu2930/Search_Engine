// script.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('searchForm'); // Get the search form
    const resultsContainer = document.getElementById('results'); // Get the results container
    const searchInput = document.getElementById('searchInput'); // Get the search input field

    // Listen for the form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        const query = searchInput.value.trim(); // Get and trim the input value
        if (query === '') {
            alert('Please enter a search term.'); // Alert if the input is empty
            return; // Exit the function
        }

        displayResults(query); // Call function to display results
    });

    // Listen for input changes for live search
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.trim(); // Get the input value
        displayResults(query); // Call displayResults for live search
    });

    // Function to display search results
    function displayResults(query) {
        // Clear previous results
        resultsContainer.innerHTML = '';

        // Sample data for demonstration
        const data = {
            "Python": "A programming language that lets you work quickly and integrate systems more effectively.",
            "Flask": "A micro web framework written in Python.",
            "HTML": "The standard markup language for creating web pages.",
            "CSS": "A style sheet language used for describing the presentation of a document written in HTML.",
            "JavaScript": "A programming language commonly used in web development.",
            "World War II": "A global conflict that lasted from 1939 to 1945, involving most of the world's nations.",
            "Photosynthesis": "A process used by plants and other organisms to convert light energy into chemical energy.",
            "Einstein's Theory of Relativity": "A theory developed by Albert Einstein that describes the relationship between space and time.",
            "Renaissance Art": "A period of European art that spanned the 14th to the 17th century, known for its focus on realism and humanism.",
            "Climate Change": "Long-term shifts in temperature and weather patterns, primarily due to human activities.",
            "The Solar System": "The gravitationally bound system comprising the Sun and the objects that orbit it, including eight planets.",
            "Democracy": "A system of government where the citizens exercise power by voting.",
            "Artificial Intelligence": "The simulation of human intelligence in machines that are programmed to think and learn.",
            "The Industrial Revolution": "The transition to new manufacturing processes in Europe and the United States, from the 18th to the 19th centuries.",
            "Global Warming": "The gradual increase in the Earth's temperature due to human activities like fossil fuel burning.",
            "The Human Brain": "An organ that serves as the center of the nervous system in humans, controlling thought, memory, emotion, and more.",
            "Mona Lisa": "A portrait painting by Leonardo da Vinci, considered one of the most famous artworks in the world.",
            "The Great Wall of China": "A series of fortifications built along the northern borders of China, mainly to protect against invasions.",
            "Renewable Energy": "Energy generated from natural resources such as sunlight, wind, rain, tides, and geothermal heat.",
            "The American Civil Rights Movement": "A social movement in the 1950s and 1960s that aimed to end racial discrimination against African Americans.",
            "The Moon Landing": "The event in 1969 when NASA's Apollo 11 mission successfully landed the first humans on the Moon.",
            "Oceanography": "The study of oceans, including marine organisms, ecosystem dynamics, ocean currents, and waves.",
            "Globalization": "The process of interaction and integration among people, companies, and governments worldwide.",
            "Fossil Fuels": "Natural fuels like coal, oil, and gas, which are formed from the remains of ancient plants and animals.",
            "Human Evolution": "The lengthy process of change by which people originated from apelike ancestors.",
            "Nutrition and Health": "The study of how food and drink affect health, including topics like vitamins, minerals, and balanced diets.",
            "Greek Mythology": "A body of myths and teachings that belong to the ancient Greeks, concerning their gods and heroes.",
            "Quantum Computing": "A type of computation that uses quantum bits (qubits) to perform operations significantly faster than classical computers for certain tasks.",
            "Blockchain": "A decentralized digital ledger technology that records transactions across many computers securely and transparently.",
            "The Internet of Things (IoT)": "The interconnected network of devices that communicate and exchange data with each other over the internet.",
            "Renewable Energy Sources": "Energy that comes from resources that are naturally replenished, such as solar, wind, and hydro power.",
            "Artificial Neural Networks": "Computing systems inspired by the biological neural networks that constitute animal brains, used in machine learning applications.",
            "Genetic Engineering": "The direct manipulation of an organism's genes using biotechnology, which can include gene editing and cloning.",
            "Virtual Reality": "A simulated experience that can be similar to or completely different from the real world, often using VR headsets.",
            "Astrobiology": "The study of the origin, evolution, distribution, and future of life in the universe, including the search for extraterrestrial life.",
            "Cybersecurity": "The practice of protecting systems, networks, and programs from digital attacks, theft, and damage.",
            "Climate Change Mitigation": "Efforts and strategies to reduce greenhouse gas emissions and prevent global warming."
        
        };

        // If the query is empty, exit the function
        if (query === '') {
            return; // Exit the function
        }

        // Search through the sample data
        for (const key in data) {
            if (data.hasOwnProperty(key) && key.toLowerCase().includes(query.toLowerCase())) {
                // Create a new list item for each match
                const li = document.createElement('li');
                li.className = 'list-group-item'; // Assign class for styling
                li.innerHTML = `<strong>${key}</strong>: ${data[key]}`; // Set the content

                resultsContainer.appendChild(li); // Add to the results container

                // Add the 'visible' class for animation (if CSS transition is applied)
                requestAnimationFrame(() => {
                    li.classList.add('visible'); // Trigger fade-in effect
                });
            }
        }

        // If no results were found, display a message
        if (resultsContainer.innerHTML === '') {
            resultsContainer.innerHTML = `<li class="list-group-item">No results found for "${query}"</li>`;
        }
    }
});




