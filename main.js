// hambergur menu

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const contact = document.querySelector(".nav_contact");
    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    contact.classList.toggle("hidden");
}
// function toggleMenu() {
//     const body = document.body;
//     const menuLinks = document.querySelector('.menu-links');

//     // Toggle the open class on the menu
//     const isMenuOpen = menuLinks.classList.toggle('open');

//     // Toggle the class on the body to prevent scrolling
//     if (isMenuOpen) {
//         body.classList.add('menu-open');
//     } else {
//         body.classList.remove('menu-open');
//     }
// }


// JavaScript to handle popup functionality
        document.addEventListener('DOMContentLoaded', () => {
            // Select all popup buttons
            const openPopupButtons = document.querySelectorAll('.a_2_btn_1, .a_3_btn, .a_5_btn');
            const popups = document.querySelectorAll('.a_popup-overlay');

            // Attach event listeners to open buttons
            openPopupButtons.forEach((button, index) => {
                button.addEventListener('click', (e) => {
                    e.preventDefault(); // Prevent default button behavior
                    const popup = popups[index]; // Match the corresponding popup
                    if (popup) {
                        popup.classList.remove('hidden'); // Show the popup
                        setTimeout(() => {
                            popup.classList.add('active'); // Add zoom-in animation
                        }, 10);
                    }
                });
            });

            // Attach event listeners to close buttons inside each popup
            popups.forEach((popup) => {
                const closeBtn = popup.querySelector('.close-popup-btn');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        popup.classList.remove('active'); // Remove zoom-in animation
                        setTimeout(() => {
                            popup.classList.add('hidden'); // Hide the popup
                        }, 300); // Delay matches the CSS animation duration
                    });
                }

                // Close popup when clicking outside the content
                popup.addEventListener('click', (e) => {
                    if (e.target === popup) {
                        popup.classList.remove('active');
                        setTimeout(() => {
                            popup.classList.add('hidden');
                        }, 300);
                    }
                });
            });
        });




// JavaScript to handle popup functionality for the audio reader

        const triggerPopup = document.getElementById('triggerPopup');
        const popupOverlay = document.getElementById('popupOverlay');
        const audioPopup = document.getElementById('audioPopup');
        const closePopup = document.getElementById('closePopup');

        // Open popup on button click
        triggerPopup.addEventListener('click', () => {
            popupOverlay.style.display = 'block';
            audioPopup.style.display = 'block';
        });

        // Close popup on close button click
        closePopup.addEventListener('click', () => {
            popupOverlay.style.display = 'none';
            audioPopup.style.display = 'none';
            stopAudio(); // Stop and reset the audio
        });

        // Function to stop and reset the audio
        function stopAudio() {
            audioPlayer.pause(); // Pause the audio
            audioPlayer.currentTime = 0; // Reset the playback position
        }

//Questions Frequentes

        $(document).ready(function () {
            $(".Q_btn").click(function () {
                let $filter = $(this).closest(".FAQ_question").find(".Q_p");

                // Hide all other .Q_p elements except the current one
                $(".Q_p").not($filter).slideUp("slow").removeClass("flex-toggle");

                // Toggle the current .Q_p
                if ($filter.is(":visible")) {
                    $filter.slideUp("slow", function () {
                        $filter.removeClass("flex-toggle");
                    });
                } else {
                    $filter.addClass("flex-toggle").hide().slideDown("slow");
                }
            });
        });


// blog-news

        document.addEventListener('DOMContentLoaded', function () {
            const postsAPI = 'https://blog.ubya.ai/wp-json/wp/v2/posts?_embed';

            async function fetchPosts() {
                try {
                    const response = await fetch(postsAPI);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const posts = await response.json();
                    const blogNewsDiv = document.getElementById('blog-news');

                    if (!blogNewsDiv) {
                        throw new Error("Element with ID 'blog-news' not found in the DOM.");
                    }

                    posts.slice(0, 3).forEach(post => {
                        const postDiv = document.createElement('div');
                        postDiv.classList.add('blog-post');

                        const featuredMedia = post._embedded['wp:featuredmedia'];
                        const imageUrl = featuredMedia && featuredMedia[0]?.source_url
                            ? featuredMedia[0].source_url
                            : 'https://via.placeholder.com/150';

                        const author = post._embedded.author[0]?.name || 'Unknown Author';

                        // Process categories
                        const categories = post._embedded['wp:term'][0]
                            ?.map(cat => {
                                const categoryClass = `newscrunch_category_${cat.id}`; // Use the category ID for the CSS class
                                return `<span class="${categoryClass} category-badge">${cat.name}</span>`;
                            })
                            ?.join(' ') || '<span class="category-badge">Uncategorized</span>';

                        const primaryCategory = post._embedded['wp:term'][0]?.[0]; // Use the first category for button styling
                        const categoryClassForButton = primaryCategory ? `newscrunch_category_${primaryCategory.id}` : '';

                        const publishDate = new Date(post.date).toLocaleDateString();

                        postDiv.innerHTML = `
                <p>${publishDate}</p>
                <p>${categories}</p>
                <h2>${post.title.rendered}</h2>      
                <img src="${imageUrl}" alt="${post.title.rendered}" class="featured-image" />
                <p>${post.excerpt.rendered.replace(/<[^>]*>/g, '')}</p>
                <a href="${post.link}" target="_blank" class="read-more-btn ${categoryClassForButton}">lire la suite</a>
                `;

                        blogNewsDiv.appendChild(postDiv);
                    });
                } catch (error) {
                    console.error('Error fetching posts:', error);
                }
            }

            fetchPosts();
        });

        // Highlight current navbar link
        document.addEventListener('DOMContentLoaded', () => {
            const navLinks = document.querySelectorAll('.nav-links a, .menu-links a');
            const currentUrl = window.location.href;

            navLinks.forEach(link => {
                if (currentUrl.includes(link.getAttribute('href'))) {
                    link.classList.add('active'); // Apply a CSS class to highlight the link
                } else {
                    link.classList.remove('active');
                }
            });
        });



