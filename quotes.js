// array of motivational quotes
var motivation = [
'<strong>"Failure will never overtake me if my determination to succeed is strong enough."</strong> <span id="author">- Og Mandino</span>',
'<strong>"What you do today can improve all your tomorrows."</strong> <span id="author">- Ralph Marston</span>',
'<strong>"Aim for the moon. If you miss, you may hit a star."</strong> <span id="author">- W. Clement Stone</span>',
'<strong>"In order to succeed, we must first believe that we can."</strong> <span id="author">- Nikos Kazantzakis</span>',
'<strong>"A creative man is motivated by the desire to achieve, not by the desire to beat others."</strong> <span id="author">- Ayn Rand</span>',
'<strong>"Always do your best. What you plant now, you will harvest later."</strong> <span id="author">- Og Mandino</span>',
'<strong>"You are never too old to set another goal or to dream a new dream."</strong> <span id="author">- C. S. Lewis</span>',
'<strong>"Don\'t watch the clock; do what it does. Keep going."</strong> <span id="author">- Sam Levenson</span>',
'<strong>"With the new day comes new strength and new thoughts."</strong> <span id="author">- Eleanor Roosevelt</span>',
'<strong>"It does not matter how slowly you go as long as you do not stop."</strong> <span id="author">- Confucius</span>'
]

// randomly generate number between 0 and 9 then assign them to array
function newQuote() {
	var num = Math.floor(Math.random() * 10);
    document.getElementById("quote").innerHTML = motivation[num];
}

newQuote();