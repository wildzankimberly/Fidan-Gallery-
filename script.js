/* ==========================================================
   FIDAN GALLERY - SCRIPT.JS
   ========================================================== */

// 1. DATA MASTERPIECES (12 CLASSICAL ARTWORKS)
const artworks = [
    {
        id: 1,
        title: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: "c. 1503–1519",
        category: "Renaissance",
        media: "Oil on poplar panel",
        museum: "Louvre Museum, Paris",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg/800px-Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg",
        description: "The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as 'the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world.'",
        funFact: "Leonardo da Vinci took the Mona Lisa with him when he moved to France in 1516 and never parted with it until he died."
    },
    {
        id: 2,
        title: "The Starry Night",
        artist: "Vincent van Gogh",
        year: "1889",
        category: "Post-Impressionism",
        media: "Oil on canvas",
        museum: "Museum of Modern Art, New York City",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        description: "The Starry Night is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the added idealized village.",
        funFact: "Van Gogh painted this masterpiece during daylight hours from memory inside his asylum room, recalling the view rather than painting it live."
    },
    {
        id: 3,
        title: "The Persistence of Memory",
        artist: "Salvador Dalí",
        year: "1931",
        category: "Surrealism",
        media: "Oil on canvas",
        museum: "Museum of Modern Art, New York City",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/The_Persistence_of_Memory_%281931%29_by_Salvador_Dal%C3%AD.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/The_Persistence_of_Memory_%281931%29_by_Salvador_Dal%C3%AD.jpg/800px-The_Persistence_of_Memory_%281931%29_by_Salvador_Dal%C3%AD.jpg",
        description: "The Persistence of Memory is a 1931 painting by artist Salvador Dalí, and one of his most recognizable works. Surrealist in nature, the painting introduces the iconic image of soft, melting pocket watches.",
        funFact: "Dalí stated that the soft watches were inspired by the surreal perception of melting Camembert cheese in the sun."
    },
    {
        id: 4,
        title: "Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        year: "c. 1665",
        category: "Baroque",
        media: "Oil on canvas",
        museum: "Mauritshuis, The Hague",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/800px-Meisje_met_de_parel.jpg",
        description: "Girl with a Pearl Earring is an oil painting by Dutch Golden Age painter Johannes Vermeer, dated c. 1665. Going by various names over the centuries, it became known by its present title towards the end of the 20th century.",
        funFact: "The pearl in the painting is disproportionately large and does not have a visible hook or clasp, leading art historians to debate whether it is real or a pearlescent glass illusion."
    },
    {
        id: 5,
        title: "The Birth of Venus",
        artist: "Sandro Botticelli",
        year: "c. 1485–1486",
        category: "Renaissance",
        media: "Tempera on panel",
        museum: "Uffizi Gallery, Florence",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/800px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
        description: "The Birth of Venus is a painting by the Italian artist Sandro Botticelli, commissioned by Lorenzo di Pierfrancesco de' Medici. It depicts the goddess Venus arriving at the shore after her birth, when she had emerged from the sea fully grown.",
        funFact: "This was one of the first major paintings in Renaissance Italy to depict a full-length mythological female nude on canvas rather than a religious portrait."
    },
    {
        id: 6,
        title: "The Last Supper",
        artist: "Leonardo da Vinci",
        year: "c. 1495–1498",
        category: "Renaissance",
        media: "Tempera on gesso, pitch and mastic",
        museum: "Santa Maria delle Grazie, Milan",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/%C3%9Altima_Cena_da_Vinci_5.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_da_Vinci_5.jpg/800px-%C3%9Altima_Cena_da_Vinci_5.jpg",
        description: "The Last Supper is a late 15th-century mural painting by Leonardo da Vinci in the refectory of the Convent of Santa Maria delle Grazie in Milan. It is one of the world's most recognizable cultural paintings.",
        funFact: "Instead of using traditional fresco technique, Leonardo experimented with an oil/tempera mix on dry wall, which caused the painting to begin deteriorating within only a few decades."
    },
    {
        id: 7,
        title: "The Great Wave off Kanagawa",
        artist: "Katsushika Hokusai",
        year: "c. 1829–1833",
        category: "Modern Art",
        media: "Woodblock print",
        museum: "Metropolitan Museum of Art, New York",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/The_Great_Wave_off_Kanagawa.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Great_Wave_off_Kanagawa.jpg/800px-The_Great_Wave_off_Kanagawa.jpg",
        description: "The Great Wave off Kanagawa is a woodblock print by the Japanese ukiyo-e artist Hokusai. Published sometime between 1829 and 1833, it is Hokusai's most famous work and one of the most recognizable works of Japanese art in the world.",
        funFact: "Despite its dramatic depiction of a giant tsunami-like wave threatening boats, Mount Fuji in the background appears calm and stable."
    },
    {
        id: 8,
        title: "American Gothic",
        artist: "Grant Wood",
        year: "1930",
        category: "Modern Art",
        media: "Oil on beaverboard",
        museum: "Art Institute of Chicago",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/800px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
        description: "American Gothic is a 1930 painting by Grant Wood in the collection of the Art Institute of Chicago. Wood was inspired by a cottage designed in the Gothic Revival style with an arched window.",
        funFact: "The models for the painting were Wood's sister, Nan Wood Graham, and his dentist, Dr. Byron McKeeby."
    },
    {
        id: 9,
        title: "The Night Watch",
        artist: "Rembrandt van Rijn",
        year: "1642",
        category: "Baroque",
        media: "Oil on canvas",
        museum: "Rijksmuseum, Amsterdam",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/The_Night_Watch_-_Rembrandt_-_WGA19251.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_Rembrandt_-_WGA19251.jpg/800px-The_Night_Watch_-_Rembrandt_-_WGA19251.jpg",
        description: "Militia Company of District II under the Captain Frans Banning Cocq, commonly known as The Night Watch, is a 1642 painting by Rembrandt van Rijn. It is one of the most famous Dutch Golden Age paintings.",
        funFact: "The painting is actually not a night scene; it darkened heavily over centuries due to layers of discolored varnish and soot, leading to its misleading title."
    },
    {
        id: 10,
        title: "The Scream",
        artist: "Edvard Munch",
        year: "1893",
        category: "Expressionism",
        media: "Oil, tempera, and pastel on cardboard",
        museum: "National Gallery, Oslo",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch,_1893,_The_Scream,_oil,_tempera_and_pastel_on_cardboard,_91_x_73_cm,_National_Gallery_of_Norway.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch,_1893,_The_Scream,_oil,_tempera_and_pastel_on_cardboard,_91_x_73_cm,_National_Gallery_of_Norway.jpg/800px-Edvard_Munch,_1893,_The_Scream,_oil,_tempera_and_pastel_on_cardboard,_91_x_73_cm,_National_Gallery_of_Norway.jpg",
        description: "The Scream is the popular name given to a composition created by Norwegian Expressionist artist Edvard Munch in 1893. The agonizing face in the painting has become one of the most iconic images of art.",
        funFact: "Munch wrote in his diary that the inspiration came while walking at sunset when the sky suddenly turned blood red and he felt an 'infinite scream passing through nature'."
    },
    {
        id: 11,
        title: "The Creation of Adam",
        artist: "Michelangelo",
        year: "c. 1508–1512",
        category: "Renaissance",
        media: "Fresco",
        museum: "Sistine Chapel, Vatican City",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/800px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
        description: "The Creation of Adam is a fresco painting by Italian artist Michelangelo, which forms part of the Sistine Chapel's ceiling. It illustrates the Biblical creation narrative from the Book of Genesis in which God breathes life into Adam.",
        funFact: "Michelangelo painted this monumental masterpiece while lying on his back on wooden scaffolding suspended high above the chapel floor."
    },
    {
        id: 12,
        title: "Water Lilies",
        artist: "Claude Monet",
        year: "c. 1914–1926",
        category: "Impressionism",
        media: "Oil on canvas",
        museum: "Musée de l'Orangerie, Paris",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Claude_Monet_-_Nymph%C3%A9as_-_Google_Art_Project.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Nymph%C3%A9as_-_Google_Art_Project.jpg/800px-Claude_Monet_-_Nymph%C3%A9as_-_Google_Art_Project.jpg",
        description: "Water Lilies (or Nymphéas) is a series of approximately 250 oil paintings by French Impressionist Claude Monet. The paintings depict his flower garden at his home in Giverny.",
        funFact: "Monet painted many of these works later in life while suffering from severe cataracts, which heavily influenced the reddish and blurred tones in his final pieces."
    }
];

// 2. DATA ARTISTS (6 LEGENDARY ARTISTS)
const artists = [
    {
        name: "Leonardo da Vinci",
        period: "1452 – 1519",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Leonardo_self.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self.jpg/400px-Leonardo_self.jpg",
        bio: "An Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect. Widely considered one of the greatest painters in history."
    },
    {
        name: "Vincent van Gogh",
        period: "1853 – 1890",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28404050%29.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28404050%29.jpg/400px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28404050%29.jpg",
        bio: "A Dutch Post-Impressionist painter who posthumously became one of the most famous and influential figures in Western art history, renowned for his bold colors and emotional brushwork."
    },
    {
        name: "Claude Monet",
        period: "1840 – 1926",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Claude_Monet_1899_Nadar.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar.jpg/400px-Claude_Monet_1899_Nadar.jpg",
        bio: "A founder of French Impressionist painting and the most consistent and prolific practitioner of the movement's philosophy of expressing one's perceptions before nature."
    },
    {
        name: "Rembrandt van Rijn",
        period: "1606 – 1669",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Rembrandt_van_Rijn_-_Self-Portrait_%281659%29.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rembrandt_van_Rijn_-_Self-Portrait_%281659%29.jpg/400px-Rembrandt_van_Rijn_-_Self-Portrait_%281659%29.jpg",
        bio: "A Dutch Golden Age painter, printmaker and draughtsman. Generally considered one of the greatest visual artists in the history of art and the most important in Dutch art history."
    },
    {
        name: "Michelangelo",
        period: "1475 – 1564",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Daniele_da_Volterra_%28attributed_to%29_-_Portrait_of_Michelangelo Buonarroti_-_Google_Art_Project.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Daniele_da_Volterra_%28attributed_to%29_-_Portrait_of_Michelangelo_Buonarroti_-_Google_Art_Project.jpg/400px-Daniele_da_Volterra_%28attributed_to%29_-_Portrait_of_Michelangelo_Buonarroti_-_Google_Art_Project.jpg",
        bio: "An Italian sculptor, painter, architect and poet of the High Renaissance born in the Republic of Florence, who exerted an unparalleled influence on the development of Western art."
    },
    {
        name: "Pablo Picasso",
        period: "1881 – 1973",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Pablo_Picasso_1962.jpg",
        fallbackImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Pablo_Picasso_1962.jpg/400px-Pablo_Picasso_1962.jpg",
        bio: "A Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France. Regarded as one of the most influential artists of the 20th century."
    }
];

// 3. DOM ELEMENTS
const loader = document.getElementById('loader');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const searchToggle = document.getElementById('search-toggle');
const searchOverlay = document.getElementById('search-overlay');
const searchClose = document.getElementById('search-close');
const globalSearch = document.getElementById('global-search');
const gallerySearch = document.getElementById('gallery-search');
const galleryGrid = document.getElementById('gallery-grid');
const artistsGrid = document.getElementById('artists-grid');
const noResults = document.getElementById('no-results');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('artwork-modal');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');
const backToTop = document.getElementById('back-to-top');
const currentYearSpan = document.getElementById('current-year');

// 4. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    // Hide loader
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 600);

    // Set current year in footer
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Render Artworks and Artists
    renderArtworks(artworks);
    renderArtists(artists);

    // Event Listeners
    setupEventListeners();
});

// 5. RENDER FUNCTIONS WITH ROBUST ERROR HANDLING & FALLBACKS
function renderArtworks(data) {
    galleryGrid.innerHTML = '';
    
    if (data.length === 0) {
        noResults.classList.remove('hidden');
        return;
    } else {
        noResults.classList.add('hidden');
    }

    data.forEach((art, index) => {
        const card = document.createElement('div');
        card.className = 'artwork-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <div class="artwork-img-wrapper">
                <img src="${art.image}" 
                     alt="${art.title} by ${art.artist}" 
                     loading="lazy" 
                     onerror="this.onerror=null; this.src='${art.fallbackImage}';">
                <div class="artwork-overlay">
                    <button class="btn btn-primary view-artwork-btn" data-id="${art.id}">View Artwork</button>
                </div>
            </div>
            <div class="artwork-info">
                <div class="artwork-meta">
                    <span>${art.category}</span>
                    <span>${art.year}</span>
                </div>
                <h3 class="artwork-title">${art.title}</h3>
                <p class="artwork-artist">${art.artist}</p>
                <p class="artwork-desc">${art.description}</p>
                <button class="view-btn view-artwork-btn" data-id="${art.id}">
                    <span>View Artwork</span> <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        galleryGrid.appendChild(card);
    });

    // Attach click listeners to view buttons
    document.querySelectorAll('.view-artwork-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            openModal(id);
        });
    });
}

function renderArtists(data) {
    artistsGrid.innerHTML = '';
    data.forEach(artist => {
        const card = document.createElement('div');
        card.className = 'artist-card';
        card.innerHTML = `
            <div class="artist-img-wrapper">
                <img src="${artist.image}" 
                     alt="${artist.name}" 
                     loading="lazy" 
                     onerror="this.onerror=null; this.src='${artist.fallbackImage}';">
            </div>
            <h3 class="artist-name">${artist.name}</h3>
            <span class="artist-period">${artist.period}</span>
            <p class="artist-bio">${artist.bio}</p>
        `;
        artistsGrid.appendChild(card);
    });
}

// 6. EVENT LISTENERS & UI INTERACTIONS
function setupEventListeners() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            backToTop.classList.add('active');
        } else {
            navbar.classList.remove('scrolled');
            backToTop.classList.remove('active');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Search overlay toggle
    searchToggle.addEventListener('click', () => {
        searchOverlay.classList.toggle('active');
        if (searchOverlay.classList.contains('active')) {
            globalSearch.focus();
        }
    });

    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });

    // Global search input
    globalSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        filterAndSearchArtworks(query, 'all');
        if (query.trim() !== '') {
            document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Gallery search input
    gallerySearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const activeCategory = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        filterAndSearchArtworks(query, activeCategory);
    });

    // Category filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const category = e.target.getAttribute('data-filter');
            const query = gallerySearch.value.toLowerCase();
            filterAndSearchArtworks(query, category);
        });
    });

    // Modal close events
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            searchOverlay.classList.remove('active');
        }
    });

    // Back to top
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 7. FILTER & SEARCH LOGIC
function filterAndSearchArtworks(query, category) {
    const filtered = artworks.filter(art => {
        const matchesQuery = art.title.toLowerCase().includes(query) ||
                             art.artist.toLowerCase().includes(query) ||
                             art.category.toLowerCase().includes(query) ||
                             art.year.toLowerCase().includes(query);
        
        const matchesCategory = category === 'all' || art.category.toLowerCase() === category.toLowerCase();

        return matchesQuery && matchesCategory;
    });

    renderArtworks(filtered);
}

// Global helper for footer category clicks
window.filterByCategory = function(categoryName) {
    filterBtns.forEach(btn => {
        if (btn.getAttribute('data-filter').toLowerCase() === categoryName.toLowerCase()) {
            btn.click();
        }
    });
};

// 8. MODAL DETAILS
function openModal(id) {
    const art = artworks.find(item => item.id === id);
    if (!art) return;

    modalBody.innerHTML = `
        <div class="modal-img-container">
            <img src="${art.image}" 
                 alt="${art.title}" 
                 onerror="this.onerror=null; this.src='${art.fallbackImage}';">
        </div>
        <div class="modal-details">
            <h2>${art.title}</h2>
            <p class="modal-artist-name">By ${art.artist}</p>
            
            <div class="modal-info-grid">
                <div class="modal-info-item">
                    <span>Year Created</span>
                    <strong>${art.year}</strong>
                </div>
                <div class="modal-info-item">
                    <span>Art Movement</span>
                    <strong>${art.category}</strong>
                </div>
                <div class="modal-info-item">
                    <span>Medium</span>
                    <strong>${art.media}</strong>
                </div>
                <div class="modal-info-item">
                    <span>Museum / Location</span>
                    <strong>${art.museum}</strong>
                </div>
            </div>

            <div class="modal-desc-box">
                <h4>Historical Overview</h4>
                <p>${art.description}</p>
                
                <h4>Curator's Note & Fun Fact</h4>
                <p>${art.funFact}</p>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}
