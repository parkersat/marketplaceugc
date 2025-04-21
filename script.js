document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const itemCards = document.querySelectorAll('.item-card');
    const itemOverlay = document.getElementById('itemOverlay');
    const overlayClose = document.querySelector('.overlay-close');
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        itemCards.forEach(card => {
            const itemName = card.getAttribute('data-name').toLowerCase();
            const itemTitle = card.querySelector('h3').textContent.toLowerCase();
            
            // Check if the search term is found in the item name or title
            if (itemName.includes(searchTerm) || itemTitle.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Check if no items are visible
        const visibleItems = document.querySelectorAll('.item-card[style="display: block"]');
        if (visibleItems.length === 0 && searchTerm !== '') {
            // You could add a "no results" message here if desired
            console.log('No items match the search criteria');
        }
    });
    
    // Item click functionality - open overlay
    itemCards.forEach(card => {
        card.addEventListener('click', function() {
            const itemName = card.querySelector('h3').textContent;
            const itemImage = card.querySelector('img').src;
            const creator = card.getAttribute('data-creator');
            
            // Set overlay content
            document.getElementById('overlayTitle').textContent = itemName;
            document.getElementById('overlayImage').src = itemImage;
            
            // Show/hide verified badge
            
            // Show overlay
            itemOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close overlay when clicking the X
    overlayClose.addEventListener('click', function() {
        itemOverlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    // Close overlay when clicking outside the content
    itemOverlay.addEventListener('click', function(event) {
        if (event.target === itemOverlay) {
            itemOverlay.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });
    
    // Prevent closing when clicking inside the overlay content
    document.querySelector('.overlay-content').addEventListener('click', function(event) {
        event.stopPropagation();
    });
    
    // Button functionality
});