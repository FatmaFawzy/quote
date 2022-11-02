var quotes=[
    {'author': '- Marilyn Monroe', 
    'quote': ` &quot; I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. &quot;`
   },
   {'author': '- Oscar Wilde', 
    'quote': ' &quot; Be yourself; everyone else is already taken. &quot;'
   },
   {'author': '- Marcus Tullius Cicero', 
    'quote': ' &quot; A room without books is like a body without a soul. &quot;'
   },
   {'author': '- Bernard M. Baruch', 
    'quote': `&quot; Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. &quot;`
   },
   {'author': '- Mae West', 
    'quote': ' &quot; You only live once, but if you do it right, once is enough. &quot;'
   },
   {'author': '- Elbert Hubbard', 
    'quote': '&quot; Do not take life too seriously. You will not get out alive. &quot;'
   }
];

function displayQuote() {
    var random = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[random].quote;
    document.getElementById('quoteDisplay2').innerHTML = quotes[random].author;
  };

