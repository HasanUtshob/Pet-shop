# 🐾 Pet Shop - Pet Adoption Platform

A modern, responsive pet adoption website that connects loving families with their perfect furry companions. Built with vanilla JavaScript and styled with Tailwind CSS and DaisyUI.

## 🌟 Features

- **Pet Category Filtering**: Browse pets by different categories (dogs, cats, birds, rabbits)
- **Detailed Pet Information**: View comprehensive details about each pet including breed, age, gender, vaccination status, and price
- **Interactive Adoption Process**: Countdown timer for adoption process with visual feedback
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modal System**: Pop-up modals for detailed pet information viewing
- **Smooth Navigation**: Smooth scrolling between sections for better user experience
- **Newsletter Subscription**: Email subscription feature for updates
- **Social Media Integration**: Links to social media platforms

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling and animations
- **JavaScript (ES6+)**: Dynamic functionality and API integration
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **DaisyUI**: Component library built on top of Tailwind CSS
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Lato font family for typography

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN resources and API calls)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pet-shop.git
   cd pet-shop
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have live-server installed)
   npx live-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Access the application**
   - Open your browser and navigate to `http://localhost:8000` (if using a local server)
   - Or directly open the `index.html` file in your browser

## 📖 Usage

### Browsing Pets

1. **View All Categories**: The homepage displays category buttons for different types of pets
2. **Filter by Category**: Click on any category button (Dog, Cat, Bird, Rabbit) to filter pets
3. **View Pet Details**: Click the "Details" button on any pet card to see comprehensive information
4. **Adopt a Pet**: Click the "Adopt" button to start the adoption process with a 3-second countdown

### Navigation

- **Home**: Returns to the main landing page
- **Shop**: Scrolls to the pet adoption section
- **Contact**: Scrolls to the footer contact information
- **View More**: Smooth scroll to the adoption section

## 🔌 API Integration

This project integrates with the Programming Hero Pet API:

- **Base URL**: `https://openapi.programming-hero.com/api/peddy/`
- **Endpoints Used**:
  - `GET /categories` - Fetch all pet categories
  - `GET /category/{category}` - Fetch pets by category
  - `GET /pet/{id}` - Fetch detailed information for a specific pet

### API Response Structure

```javascript
// Categories endpoint
{
  "categories": [
    {
      "id": 1,
      "category": "Cat",
      "category_icon": "https://..."
    }
  ]
}

// Pet details endpoint
{
  "petData": {
    "petId": 1,
    "pet_name": "Sunny",
    "breed": "Golden Retriever",
    "date_of_birth": "2023-01-15",
    "gender": "Male",
    "price": 1200,
    "image": "https://...",
    "vaccinated_status": "Fully",
    "pet_details": "..."
  }
}
```

## 📁 Project Structure

```
pet-shop/
├── index.html              # Main HTML file
├── index.js                # JavaScript functionality
├── tailwind.config.js      # Tailwind CSS configuration
├── README.md               # Project documentation
└── images/                 # Image assets
    ├── logo.webp           # Site logo
    ├── pet.webp            # Hero section pet image
    ├── login.png           # Login icon
    ├── error.webp          # Error state image
    ├── 1.png - 6.png       # Gallery images
    ├── Frame 43.png        # UI elements
    ├── Frame 43 (1).png    # UI elements
    ├── Group 2.png         # Social media icons
    ├── Group 6.png         # Social media icons
    ├── Group 7.png         # Social media icons
    └── x-2 1.png           # Social media icons
```

## 🎨 Key Components

### JavaScript Functions

- `smoothScroll(id)`: Implements smooth scrolling to specific sections
- `Countdown(id)`: Manages the adoption countdown timer
- `loadModal(id)`: Fetches and displays detailed pet information in modal
- `categoryButton()`: Loads and displays pet category buttons
- `loadInfo(id)`: Fetches pets by category
- `showProductData(infos)`: Renders pet cards dynamically

### CSS Classes

- Responsive grid layouts using Tailwind CSS
- Custom color scheme with primary color `#0E7A81`
- Mobile-first responsive design approach
- DaisyUI components for consistent UI elements

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contact

- **Location**: av. Washington 165, NY CA 54003
- **Phone**: +31 85 964 47 25
- **Email**: info@yourdomain.com
- **Hours**: 9.00 AM - 5.00 PM

## 🙏 Acknowledgments

- [Programming Hero](https://programming-hero.com/) for providing the Pet API
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [DaisyUI](https://daisyui.com/) for the beautiful component library
- [Font Awesome](https://fontawesome.com/) for the icon library
- [Google Fonts](https://fonts.google.com/) for the Lato font family

---

Made with ❤️ for pet lovers everywhere
