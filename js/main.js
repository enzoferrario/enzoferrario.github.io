  writeRandomQuote = function () {
    var quotes = new Array();
    quotes[0] = "Variety is the spice of life";
    quotes[1] = "You can't judge a book by its cover, and you can't judge a library by its books";
    quotes[2] = "Comedy = Tragedy + Time";
    quotes[3] = "The world is your oyster! Let's just hope you arent allergic to seafood";
    quotes[4] = "You can catch flies with honey, but you'll catch more honeys being fly";
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
  }
writeRandomQuote();
