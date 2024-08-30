document.addEventListener('DOMContentLoaded', function() {
    // Function to close all dropdowns
    function closeAllDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }

    


    // Handle dropdown toggles in the main navbar
    const dropdownToggles = document.querySelectorAll('.navbar .dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const parentLi = this.parentElement;
            if (parentLi.classList.contains('active')) {
                // If the dropdown is already active, just close it
                parentLi.classList.remove('active');
            } else {
                // Close all dropdowns and then open the clicked one
                closeAllDropdowns();
                parentLi.classList.add('active');
            }
        });
    });

    // Handle dropdown toggles in the sidebar
    const sidebarDropdownToggles = document.querySelectorAll('.sidebar .dropdown-toggle');
    sidebarDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const parentLi = this.parentElement;
            if (parentLi.classList.contains('active')) {
                // If the dropdown is already active, just close it
                parentLi.classList.remove('active');
            } else {
                // Close all dropdowns and then open the clicked one
                closeAllDropdowns();
                parentLi.classList.add('active');
            }
        });
    });

    // Handle hamburger menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.sidebar .close-btn');

    hamburgerMenu.addEventListener('click', function() {
        sidebar.classList.add('open');
        overlay.classList.add('show');
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    });

    overlay.addEventListener('click', function() {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    });

    // Close sidebar and overlay when clicking outside
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
        }
    });

    // Function to handle textarea visibility
    function updateTextareaVisibility(textarea, checkbox) {
        if (checkbox.checked) {
            textarea.classList.remove('hidden');
        } else {
            textarea.classList.add('hidden');
        }
    }

    // Set up event listeners for checkboxes and textareas
    function setupEventListeners(checkbox, textarea) {
        // Initial state
        updateTextareaVisibility(textarea, checkbox);

        checkbox.addEventListener('change', function() {
            updateTextareaVisibility(textarea, checkbox);
        });

        textarea.addEventListener('input', function() {
            updateTextareaVisibility(textarea, checkbox);
        });
    }

    // Get all checkboxes and textareas
    const checkboxes = document.querySelectorAll('.checkbox-container input[type="checkbox"]');
    const textareas = document.querySelectorAll('.checkbox-container-textArea');

    checkboxes.forEach((checkbox, index) => {
        if (textareas[index]) {
            setupEventListeners(checkbox, textareas[index]);
        }
    });




    document.querySelectorAll('.item-dropdown-button').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default button action
            
            // Close all other dropdowns
            document.querySelectorAll('.item-dropdown-content').forEach(content => {
                if (content !== button.nextElementSibling) {
                    content.classList.remove('show');
                }
            });
            
            // Toggle the current dropdown
            const dropdownContent = button.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });



    // Option selection functionality
    const optionItems = document.querySelectorAll('.option-item');
const dateContainer = document.getElementById('date-container');
const dateRangeContainer = document.getElementById('date-range-container');

optionItems.forEach(item => {
    item.addEventListener('click', function() {
        console.log(`Clicked item: ${this.textContent}`); // Debugging: Log the clicked item

        // Remove 'active' class from all options
        optionItems.forEach(opt => {
            if (opt.classList.contains('active')) {
                console.log(`Removing 'active' from: ${opt.textContent}`); // Debugging: Log class removal
            }
            opt.classList.remove('active');
        });

        // Add 'active' class to the clicked option
        this.classList.add('active');
        console.log(`Added 'active' to: ${this.textContent}`); // Debugging: Log class addition

        // Check current class list
        console.log(`Current class list for ${this.textContent}: ${this.classList}`); // Debugging: Check current class list

        // Show or hide the appropriate input based on the selected option
        if (this.textContent.trim() === "On" || this.textContent.trim() === "On and Before") {
            dateContainer.style.display = 'block';
            dateRangeContainer.style.display = 'none';
        } else if (this.textContent.trim() === "Between") {
            dateContainer.style.display = 'none';
            dateRangeContainer.style.display = 'block';
        } else {
            dateContainer.style.display = 'none';
            dateRangeContainer.style.display = 'none';
        }
    });
});





// const minusContainer = document.getElementById('minusContainer');
//         const plusContainer = document.getElementById('plusContainer');
//         const counter = document.getElementById('counter');
//         let count = 0;

//         // Function to update the visibility of minus icon and counter
//         function updateVisibility() {
//             if (count > 0) {
//                 minusContainer.classList.remove('hidden');
//                 counter.classList.remove('hidden');
//             } else {
//                 minusContainer.classList.add('hidden');
//                 counter.classList.add('hidden');
//             }
//         }

//         // Increment count when plus icon is clicked
//         plusContainer.addEventListener('click', () => {
//             count++;
//             counter.textContent = count;
//             updateVisibility();
//         });

//         // Decrement count when minus icon is clicked
//         minusContainer.addEventListener('click', () => {
//             if (count > 0) {
//                 count--;
//                 counter.textContent = count;
//                 updateVisibility();
//             }
//         });

//         // Initialize visibility
//         updateVisibility();
    


function updateVisibility(minusContainer, counter, count) {
    if (count > 0) {
        minusContainer.classList.remove('hidden');
        counter.classList.remove('hidden');
    } else {
        minusContainer.classList.add('hidden');
        counter.classList.add('hidden');
    }
}

// Function to update the total count
function updateTotalCount() {
    const counters = document.querySelectorAll('.counter');
    let total = 0;
    counters.forEach(counter => {
        total += parseInt(counter.textContent.trim());
    });
    document.getElementById('totalCount').textContent = total;
}












// // Initializing event listeners for each label
// document.querySelectorAll('.item-container3-label').forEach(label => {
//     const minusContainer = label.querySelector('.minusContainer');
//     const plusContainer = label.querySelector('.plusContainer');
//     const counter = label.querySelector('.counter');
//     let count = 0;

//     // Increment count when plus icon is clicked
//     plusContainer.addEventListener('click', () => {
//         count++;
//         counter.textContent = count;
//         updateVisibility(minusContainer, counter, count);
//         updateTotalCount();
//     });

//     // Decrement count when minus icon is clicked
//     minusContainer.addEventListener('click', () => {
//         if (count > 0) {
//             count--;
//             counter.textContent = count;
//             updateVisibility(minusContainer, counter, count);
//             updateTotalCount();
//         }
//     });

//     // Initialize visibility
//     updateVisibility(minusContainer, counter, count);
// });

// // Initialize the total count
// updateTotalCount();



// Function to update the visibility of minus icon and counter
function updateVisibility(minusContainer, counter, count) {
    if (count > 0) {
        minusContainer.classList.remove('hidden');
        counter.classList.remove('hidden');
    } else {
        minusContainer.classList.add('hidden');
        counter.classList.add('hidden');
    }
}

// Function to update the total count for a specific section (e.g., Bedrooms)
function updateTotalCount(section) {
    const counters = section.querySelectorAll('.counter');
    let total = 0;
    counters.forEach(counter => {
        total += parseInt(counter.textContent.trim());
    });
    section.querySelector('#totalCount').textContent = total;
}

// Initialize event listeners for each label in all sections
document.querySelectorAll('.item-dropdown').forEach(section => {
    section.querySelectorAll('.item-container3-label').forEach(label => {
        const minusContainer = label.querySelector('.minusContainer');
        const plusContainer = label.querySelector('.plusContainer');
        const counter = label.querySelector('.counter');
        let count = 0;

        // Increment count when plus icon is clicked
        plusContainer.addEventListener('click', () => {
            count++;
            counter.textContent = count;
            updateVisibility(minusContainer, counter, count);
            updateTotalCount(section);
        });

        // Decrement count when minus icon is clicked
        minusContainer.addEventListener('click', () => {
            if (count > 0) {
                count--;
                counter.textContent = count;
                updateVisibility(minusContainer, counter, count);
                updateTotalCount(section);
            }
        });

        // Initialize visibility
        updateVisibility(minusContainer, counter, count);
    });

    // Initialize the section total
    updateTotalCount(section);
});



function updateTotalCountColor() {
    const totalCountElement = document.getElementById('totalCount');
    const value = parseInt(totalCountElement.textContent, 10);

    if (value !== 0) {
        totalCountElement.classList.add('highlighted-text');
    } else {
        totalCountElement.classList.remove('highlighted-text');
    }
}

// Call the function to apply the initial color based on the value
updateTotalCountColor();




document.getElementById('dropdownButton').addEventListener('click', function() {
    const content = document.getElementById('dropdownContent');
    const text = document.getElementById('additionalItemsText');
    const totalCount = document.getElementById('totalCount');
    const dropdownButton = document.getElementById('dropdownButton');
    
    const totalCountValue = parseInt(totalCount.textContent, 10);

    if (content.classList.contains('open')) {
        content.classList.remove('open');
    } else {
        content.classList.add('open');
    }

    // Apply the red color if dropdown is open or totalCount is not zero
    if (content.classList.contains('open') || totalCountValue > 0) {
        dropdownButton.classList.add('red');
    } else {
        dropdownButton.classList.remove('red');
    }
});



});
