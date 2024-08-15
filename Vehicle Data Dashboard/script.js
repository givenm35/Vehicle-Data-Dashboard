document.addEventListener('DOMContentLoaded', () => {
    const apiEndpoints = {
        makes: 'https://whitebook-engine.kuala.io/get-vehicle-makes',
        models: 'https://whitebook-engine.kuala.io/model',
        variants: 'https://whitebook-engine.kuala.io/get-vehicle-variants/24'
    };

    async function fetchData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.data; 
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }

    async function updateCard(endpointKey, countId) {
        const data = await fetchData(apiEndpoints[endpointKey]);
        const countElement = document.getElementById(countId);
        countElement.textContent = data.length;
    }

    updateCard('makes', 'makes-count');
    updateCard('models', 'models-count');
    updateCard('variants', 'variants-count');
});

function viewDetails(type) {
    console.log(`View details for ${type}`);
}
