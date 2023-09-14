document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch a random quote
    function getQuote() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                document.getElementById('text').textContent = data.content;
                document.getElementById('author').textContent = `- ${data.author}`;
                document.getElementById('tweet-quote').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${data.content}" - ${data.author}`)}`;
            })
            .catch(error => console.error('Error fetching quote:', error));
    }

    // Event listener for new quote button
    document.getElementById('new-quote').addEventListener('click', getQuote);

    // Initial call to get a random quote
    getQuote();
});
