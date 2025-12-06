fetch('https://type.fit/api/quotes')
  .then(response => response.json())
  .then(data => {
    const quote = data[Math.floor(Math.random() * data.length)];
    document.getElementById('quote').innerText = `"${quote.text}" - ${quote.author || "Unknown"}`;
  })
  .catch(err => {
    document.getElementById('quote').innerText = "Stay positive and strong!";
  });
