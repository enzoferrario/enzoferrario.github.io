  writeRandomQuote = function () {
    var quotes = new Array();
    quotes[0] = "Variety is the spice of life";
    quotes[1] = "You can't judge a book by its cover, and you can't judge a library by its books";
    quotes[2] = "Comedy = Tragedy + Time";
    quotes[3] = "The world is your oyster! Let's just hope you aren't allergic to seafood";
    quotes[4] = "You can catch flies with honey, but you'll catch more honeys being fly";
    quotes[5] = "You never notice glass until it breaks";
    quotes[6] = "What's the difference between a literalist and a kleptomaniac? One takes things literally and the other takes things, literally";
    quotes[7] = "You're incomparable, like a...";
    quotes[8] = "You might try and fail, but what matters is you don't fail at trying";
    quotes[9] = "The Los Angeles Angels translates to The The Angels Angels";
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
  }
writeRandomQuote();
