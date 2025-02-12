

// Sample property data
const properties = [
    {
        imageUrl: 'assets/images/house1.jpg',
        price: '6728',
        title: 'Appartment',
        description: 'Get started by choosing from one of our pre-built page templates to showcase your properties',
        bedrooms: '2',
        bathrooms: '2',
        area: '1050'
    },
    {
        imageUrl: 'assets/images/house 2/.jpg',
        price: '6728',
        title: 'Appartment',
        description: 'Get started by choosing from one of our pre-built page templates to showcase your properties',
        bedrooms: '2',
        bathrooms: '2',
        area: '1050'
    },
    {
        imageUrl: 'assets/images/house3.jpg',
        price: '6728',
        title: 'Office',
        description: 'Get started by choosing from one of our pre-built page templates to showcase your properties',
        bedrooms: '2',
        bathrooms: '2',
        area: '1050'
    }
];

// Load property cards
async function loadProperties() {
    const propertyCardTemplate = await fetch('components/property-card.html')
        .then(response => response.text());
    
    const propertiesContainer = document.getElementById('propertiesContainer');
    
    properties.forEach(property => {
        let propertyCard = propertyCardTemplate;
        // Replace placeholders with actual data
        propertyCard = propertyCard.replace('${imageUrl}', property.imageUrl)
            .replace('${price}', property.price)
            .replace('${title}', property.title)
            .replace('${description}', property.description)
            .replace('${bedrooms}', property.bedrooms)
            .replace('${bathrooms}', property.bathrooms)
            .replace('${area}', property.area);
        
        propertiesContainer.innerHTML += propertyCard;
    });
}