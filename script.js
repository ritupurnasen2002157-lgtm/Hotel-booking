
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        gold: {
                            "50": "#fefce8",
                            "100": "#fef9c3",
                            "200": "#fef08a",
                            "300": "#fde047",
                            "400": "#facc15",
                            "500": "#eab308",
                            "600": "#ca8a04",
                            "700": "#a16207",
                            "800": "#854d0e",
                            "900": "#713f12",
                        },
                        luxury: {
                            "dark": "#0c0a09",
                            "navy": "#1e293b",
                            "cream": "#f5f5f0",
                            "maroon": "#7f1d1d",
                            "charcoal": "#292524"
                        }
                    },
                    fontFamily: {
                        'serif': ['Playfair Display', 'serif'],
                        'sans': ['Montserrat', 'sans-serif']
                    },
                    spacing: {
                        '128': '32rem',
                        '144': '36rem'
                    }
                }
            }
        }

        const hotelAmenities = [
            {
                "id": 1,
                "name": "Infinity Pool",
                "icon": "fas fa-swimming-pool",
                "description": "Heated infinity pool with panoramic city views"
            },
            {
                "id": 2,
                "name": "Luxury Spa",
                "icon": "fas fa-spa",
                "description": "World-class spa with expert therapists"
            },
            {
                "id": 3,
                "name": "Fine Dining",
                "icon": "fas fa-utensils",
                "description": "Michelin-starred restaurant & rooftop bar"
            },
            {
                "id": 4,
                "name": "Fitness Center",
                "icon": "fas fa-dumbbell",
                "description": "24/7 gym with personal trainers"
            },
            {
                "id": 5,
                "name": "Concierge",
                "icon": "fas fa-concierge-bell",
                "description": "24/7 personalized concierge service"
            },
            {
                "id": 6,
                "name": "Business Center",
                "icon": "fas fa-briefcase",
                "description": "Fully equipped business facilities"
            },
            {
                "id": 7,
                "name": "Valet Parking",
                "icon": "fas fa-car",
                "description": "Complimentary valet parking service"
            },
            {
                "id": 8,
                "name": "Kids Club",
                "icon": "fas fa-child",
                "description": "Supervised activities for children"
            }
        ];

         const luxuryRooms = [
            {
                "id": 1,
                "name": "Deluxe King Room",
                "description": "Spacious room with king-sized bed, city view, and premium amenities",
                "price": 1300,
                "size": "45 m²",
                "capacity": "2 Guests",
                "image": "https://image-tc.galaxy.tf/wijpeg-edkzn2vs3jnfsonl8alh6lx6w/ctm-deluxe-king-room_wide.jpg?crop=0%2C83%2C1588%2C893&width=1200",
                "features": ["City View", "King Bed", "Free WiFi", "Mini Bar", "Smart TV"],
                "type": "deluxe"
            },
            {
                "id": 2,
                "name": "Executive Suite",
                "description": "Luxurious suite with separate living area and executive lounge access",
                "price": 2500,
                "size": "75 m²",
                "capacity": "3 Guests",
                "image": "https://www.hoteltentrem.com/yogyakarta/wp-content/uploads/sites/2/2025/01/Executive-Suite-1.jpg",
                "features": ["Executive Lounge", "Living Area", "Panoramic View", "Butler Service", "Jacuzzi"],
                "type": "executive"
            },
            {
                "id": 3,
                "name": "Presidential Suite",
                "description": "Ultimate luxury with private terrace, dining area, and personalized service",
                "price": 3500,
                "size": "150 m²",
                "capacity": "4 Guests",
                "image": "https://www.fourseasons.com/alt/img-opt/~70.1530/publish/content/dam/fourseasons/images/web/SZH/SZH_293_aspect16x9.jpg",
                "features": ["Private Terrace", "Dining Room", "Personal Butler", "Private Spa", "Home Theater"],
                "type": "presidential"
            },
            {
                "id": 4,
                "name": "Honeymoon Suite",
                "description": "Romantic suite with champagne on arrival and couples spa package",
                "price": 3000,
                "size": "85 m²",
                "capacity": "2 Guests",
                "image": "https://kondodyhotels.com/images/resorts/amber-dale/rooms/honeymoon-suite-banner.jpg",
                "features": ["Romantic Decor", "Champagne Service", "Couples Spa", "Rose Petal Turndown", "Private Balcony"],
                "type": "honeymoon"
            }
        ];

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
    
            const roomsContainer = document.getElementById('rooms-container');
            luxuryRooms.forEach(room => {
                const roomElement = createRoomCard(room);
                roomsContainer.appendChild(roomElement);
            });

            
            const amenitiesContainer = document.getElementById('amenities-container');
            hotelAmenities.forEach(amenity => {
                const amenityElement = createAmenityCard(amenity);
                amenitiesContainer.appendChild(amenityElement);
            });

            
            const roomTypeSelect = document.getElementById('room-type');
            luxuryRooms.forEach(room => {
                const option = document.createElement('option');
                option.value = room.id;
                option.textContent = `${room.name} - ${room.price}/night`;
                roomTypeSelect.appendChild(option);
            });

            
            initializeBookingForm();
        });

    
        function createRoomCard(room) {
            const div = document.createElement('div');
            div.className = 'bg-white rounded-2xl shadow-xl overflow-hidden room-image-hover border border-gold-100';
            div.innerHTML = `
                <div class="relative h-64 overflow-hidden">
                    <img 
                        src="${room.image}" 
                        alt="${room.name}" 
                        class="w-full h-full object-cover"
                        loading="lazy"
                    />
                    <div class="absolute top-4 right-4 bg-gold-500 text-luxury-dark font-bold px-3 py-1 rounded-full">
                        ${room.price}<span class="text-sm font-normal">/night</span>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-serif font-bold text-luxury-dark mb-2">${room.name}</h3>
                    <p class="text-gray-600 mb-4">${room.description}</p>
                    
                    <div class="flex justify-between text-sm text-gray-500 mb-4">
                        <div class="flex items-center">
                            <i class="fas fa-expand-arrows-alt mr-2"></i>
                            <span>${room.size}</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-user-friends mr-2"></i>
                            <span>${room.capacity}</span>
                        </div>
                    </div>
                    
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${room.features.map(feature => `
                            <span class="bg-gold-50 text-gold-700 px-3 py-1 rounded-full text-sm">
                                ${feature}
                            </span>
                        `).join('')}
                    </div>
                    
                    <button 
                        class="w-full bg-luxury-dark hover:bg-luxury-navy text-white font-semibold py-3 rounded-lg transition-colors duration-300 book-room-btn"
                        data-room-id="${room.id}"
                    >
                        <i class="fas fa-calendar-check mr-2"></i>Book This Room
                    </button>
                </div>
            `;
            return div;
        }

    
        function createAmenityCard(amenity) {
            const div = document.createElement('div');
            div.className = 'text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gold-100';
            div.innerHTML = `
                <div class="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                    <i class="${amenity.icon} text-luxury-dark text-2xl amenity-icon"></i>
                </div>
                <h4 class="font-semibold text-luxury-dark mb-2">${amenity.name}</h4>
                <p class="text-sm text-gray-600">${amenity.description}</p>
            `;
            return div;
        }

        
        function initializeBookingForm() {
            const checkinInput = document.getElementById('checkin-date');
            const checkoutInput = document.getElementById('checkout-date');
            const guestsInput = document.getElementById('guests');
            const roomTypeSelect = document.getElementById('room-type');
            const roomPriceElement = document.getElementById('room-price');
            const nightsCountElement = document.getElementById('nights-count');
            const totalAmountElement = document.getElementById('total-amount');
            
            const decreaseGuestsBtn = document.getElementById('decrease-guests');
            const increaseGuestsBtn = document.getElementById('increase-guests');
            
    
            const today = new Date().toISOString().split('T')[0];
            checkinInput.min = today;
            checkoutInput.min = today;
            
        
            checkinInput.addEventListener('change', function() {
                checkoutInput.min = this.value;
                if (checkoutInput.value < this.value) {
                    checkoutInput.value = this.value;
                }
                calculateTotal();
            });
            
            checkoutInput.addEventListener('change', calculateTotal);
            roomTypeSelect.addEventListener('change', calculateTotal);
            

            decreaseGuestsBtn.addEventListener('click', function() {
                let guests = parseInt(guestsInput.value);
                if (guests > 1) {
                    guestsInput.value = guests - 1;
                }
            });
            
            increaseGuestsBtn.addEventListener('click', function() {
                let guests = parseInt(guestsInput.value);
                if (guests < 8) {
                    guestsInput.value = guests + 1;
                }
            });
            
            
            document.querySelectorAll('.book-room-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const roomId = parseInt(this.getAttribute('data-room-id'));
                    const room = luxuryRooms.find(r => r.id === roomId);
                    if (room) {
                        roomTypeSelect.value = roomId;
                        calculateTotal();
                        roomTypeSelect.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
            
            
            function calculateTotal() {
                const roomId = parseInt(roomTypeSelect.value);
                const room = luxuryRooms.find(r => r.id === roomId);
                
                if (!room) return;
                
                const checkinDate = new Date(checkinInput.value);
                const checkoutDate = new Date(checkoutInput.value);
                
                if (checkinDate && checkoutDate && checkinDate < checkoutDate) {
                    const nights = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
                    const total = room.price * nights;
                    
                    roomPriceElement.textContent = `${room.price}`;
                    nightsCountElement.textContent = nights;
                    totalAmountElement.textContent = `${total}`;
                }
            }
            
        
            document.getElementById('booking-form').addEventListener('submit', function(e) {
                e.preventDefault();
                
    
                const formData = {
                    checkin: checkinInput.value,
                    checkout: checkoutInput.value,
                    guests: guestsInput.value,
                    roomType: roomTypeSelect.options[roomTypeSelect.selectedIndex].text,
                    total: totalAmountElement.textContent
                };
                
                
                showBookingConfirmation(formData);
            });
            
    
            calculateTotal();
        }

    
        function showBookingConfirmation(data) {

            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-2xl max-w-md w-full p-6 text-center">
                    <div class="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-check text-luxury-dark text-3xl"></i>
                    </div>
                    
                    <h3 class="text-2xl font-serif font-bold text-luxury-dark mb-4">Booking Confirmed!</h3>
                    
                    <div class="text-left space-y-3 mb-6">
                        <div class="flex justify-between">
                            <span class="text-gray-600">Room Type:</span>
                            <span class="font-semibold">${data.roomType}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Check-in:</span>
                            <span class="font-semibold">${data.checkin}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Check-out:</span>
                            <span class="font-semibold">${data.checkout}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Guests:</span>
                            <span class="font-semibold">${data.guests}</span>
                        </div>
                        <div class="flex justify-between text-lg font-bold border-t border-gray-300 pt-3">
                            <span>Total Amount:</span>
                            <span class="text-gold-600">${data.total}</span>
                        </div>
                    </div>
                    
                    <p class="text-gray-600 mb-6">
                        A confirmation email has been sent to your inbox. Our concierge will contact you soon.
                    </p>
                    
                    <button 
                        class="w-full gold-gradient text-luxury-dark font-bold py-3 rounded-lg transition-all duration-300 hover:scale-105 close-confirmation"
                    >
                        <i class="fas fa-home mr-2"></i>Return to Home
                    </button>
                </div>
            `;
            
            document.body.appendChild(modal);
            
        
            modal.querySelector('.close-confirmation').addEventListener('click', function() {
                document.body.removeChild(modal);
    
                document.getElementById('booking-form').reset();
    
                setTimeout(() => {
                    const event = new Event('change');
                    document.getElementById('checkin-date').dispatchEvent(event);
                }, 100);
            });
            
        
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                    document.getElementById('booking-form').reset();
                }
            });
        }


        document.querySelector('button[class*="md:hidden"]').addEventListener('click', function() {
            const nav = document.querySelector('.hidden.md\\:flex');
            nav.classList.toggle('hidden');
            nav.classList.toggle('flex');
            nav.classList.toggle('flex-col');
            nav.classList.toggle('absolute');
            nav.classList.toggle('top-16');
            nav.classList.toggle('right-4');
            nav.classList.toggle('bg-luxury-dark');
            nav.classList.toggle('p-4');
            nav.classList.toggle('rounded-lg');
            nav.classList.toggle('shadow-2xl');
        });