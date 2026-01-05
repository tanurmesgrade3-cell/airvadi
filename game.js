
        const games = [
            {
                title: "2D Car Racing",
                image: "https://imgs.search.brave.com/xdYl1orMgsWHCC6zv8yra5McUfDuvVAHxlT6YVNOoA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8zMDg4LzMwODg5/OTcucG5nP3NlbXQ9/YWlzX3doaXRlX2xh/YmVs",
                category: "racing",
                link: '/2Dcar/index.html',
                players: "1–4"
            },
            {
                title: "Bike Racer",
                image: "https://imgs.search.brave.com/7BzdnWo3LKJxM_dT8cmY6s43pXkx-X5QbM6cs8_sCfU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM5/MDYyNDI0Ni92ZWN0/b3IvbW90b2Nyb3Nz/LXJhY2UtcmlkZXIt/b24tbW90b3JiaWtl/LWlzb2xhdGVkLXZl/Y3Rvci1pbGx1c3Ry/YXRpb24uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVJWLWFR/NzVtRWFlaDdzbmxn/a0s2ODEzMzdabk5K/bDBCTEVxSGxDcTE0/YjQ9",
                category: "action",
                link: '/Bike game/index.html',
                players: "single player"
            },
            {
                title: "Mario Jumping Adventure",
                image: "https://imgs.search.brave.com/73ldmYWUo0aGcNk8fMgufylZCupj1umqrOlX2gG2sEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS8zWktmTVJwX1Fy/ZE4tTHpzWlRiWGRY/QkgtTFMxaXlrU2c5/aWtOcV84VDJwcGM5/Mmx0TmJGeFMtdE9S/eHcyLTZrR0E9dzI0/MC1oNDgwLXJ3",
                category: "co-op",
                link: '/Mario Game/index.html',
                players: "2"
            },
            {
                title: "Chess Master",
                image: "https://imgs.search.brave.com/O0PvuCnpRwcqhqLKnY3szcnIcT9RL4lpF_YSszD7wEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xMjQ2Mi8xMjQ2/MjIyOS5wbmc_c2Vt/dD1haXNfd2hpdGVf/bGFiZWw",
                category: "indoor-game",
                link: '/Chess/index.html',
                players: "2"
            },
            {
                title: "3d Car",
                image: "https://imgs.search.brave.com/ycBQ2klnaG5TdpC5BV8N53nGZXIW9VtovTurBnt0Obc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGVt/ZW50cy1yZXNpemVk/LmVudmF0b3VzZXJj/b250ZW50LmNvbS9l/bnZhdG8tZGFtLWFz/c2V0cy1wcm9kdWN0/aW9uL0VWQS9UUlgv/N2QvNjgvYzYvNzIv/MDIvdjFfRTEwL0Ux/MEdQU1pZLmpwZz93/PTQzMyZjZl9maXQ9/c2NhbGUtZG93biZx/PTg1JmZvcm1hdD1h/dXRvJnM9ZjBmZWVh/ZDhjNmY0Y2NlNzFh/Zjk1ZjM3MTI4MmUy/ZTkxNGJhYjFkZWNj/NDFlMDc1ZjU0MzA5/NjI4OTA0NzU3NA",
                category: "indoor-game",
                link: '/3d car/index.html',
                players: "2"
            },
        ];

        // --- Element Selection ---
        const gameGrid = document.getElementById("gameGrid");
        const searchInput = document.getElementById("searchInput");
        const categoryFilter = document.getElementById("categoryFilter");

        // Function to Populate Category Filter Dynamically
        function populateCategoryFilter() {
            // Get all unique categories
            const categories = games.map(game => game.category);
            const uniqueCategories = ["all", ...new Set(categories)]; 

            // Clear and ensure the 'All Categories' option is first
            categoryFilter.innerHTML = '';
            
            uniqueCategories.forEach(category => {
                const option = document.createElement("option");
                option.value = category;
                // Capitalize the first letter for display
                const displayText = category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ');
                option.textContent = displayText; 
                categoryFilter.appendChild(option);
            });
        }


        // Function to Display Games with Clickable Links
        function displayGames(list) {
            gameGrid.innerHTML = "";

            if (list.length === 0) {
                gameGrid.innerHTML = `<p class="no-results">Sorry, no games match your current filter or search criteria.</p>`;
                return;
            }

            list.forEach(game => {
                const { title, image, category, link, players } = game;
                

                const card = document.createElement("div");
                card.className = "game-card";

                // 2. VITAL: Wrap the entire card content in an <a> tag using the generated internal path
                card.innerHTML = `
                    <a href="${link}" title="Launch ${title}"> 
                        <img src="${image}" alt="Game thumbnail for ${title}">
                        <div class="game-card-content">
                            <h3>${title}</h3>
                            <div class="meta">Category: ${category} • Players: ${players}</div>
                        </div>
                    </a>
                `;

                gameGrid.appendChild(card);
            });
        }

        // Function to Handle Filtering Logic
        function filterGames() {
            const searchText = searchInput.value.toLowerCase().trim();
            const categoryValue = categoryFilter.value;

            const filtered = games.filter(game => {
                const titleLower = game.title.toLowerCase();
                const categoryLower = game.category.toLowerCase();
                
                // Check if the title includes the search text
                const matchesSearch = titleLower.includes(searchText);
                
                // Check if the category matches the filter (or if filter is 'all')
                const matchesCategory = categoryValue === "all" || categoryLower === categoryValue;
                
                return matchesSearch && matchesCategory;
            });

            displayGames(filtered);
        }

        // --- Event Listeners and Initial Load ---
        
        // Use 'input' event for real-time searching
        searchInput.addEventListener("input", filterGames);
        // Use 'change' event for dropdown filter
        categoryFilter.addEventListener("change", filterGames);

        // Run initialization functions when the script loads
        populateCategoryFilter();
        displayGames(games); 