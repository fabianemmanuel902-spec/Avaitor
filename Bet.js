
### JavaScript (script.js)
```javascript
function predictOdd() {
    const userBet = document.getElementById("userBet").value;
    const predictionResult = document.getElementById("predictionResult");

    // A simple mocked prediction logic. Replace this with your own logic.
    if (userBet > 0) {
        const predictedOdd = (Math.random() * 10).toFixed(2);
        predictionResult.innerHTML = `Predicted Odd for your bet of $${userBet} is: ${predictedOdd}`;
    } else {
        predictionResult.innerHTML = "Please enter a valid bet amount.";
    }
}
```

### 
