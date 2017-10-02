var colours = [
    "#ff0000",
    "#ff8000",
    "#40ff00",
    "#00ff00",
    "#00ff80",
    "#0040ff",
    "#0080ff",
    "#0000ff",
    "#8000ff",
    "#ff00ff",
    "#ff00bf",
    "#ff0040"
  ];
  var quotes = [
    [
      "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly", "Winston Churchill"
    ], 
    [
      "We are all here on earth to help others; what on earth the others are here for I don't know", "W. H. Auden"
    ], 
    [
      "Always remember that you are absolutely unique. Just like everyone else", "Margaret Mead"
    ], 
    [
      "Age is something that doesn't matter, unless you are a cheese", "Luis Bunuel"
    ], 
    [
      "I'm sorry, if you were right, I'd agree with you", "Robin Williams"
    ], 
    [
      "If at first you don't succeed... so much for skydiving", "Henny Youngman"
    ], 
    [
      "Always borrow money from a pessimist. He won’t expect it back", "Oscar Wilde"
    ], 
    [
      "The only mystery in life is why the kamikaze pilots wore helmets", "Al McGuire"
    ], 
    [
      "Going to church doesn’t make you a Christian any more than standing in a garage makes you a car", "Billy Sunday"
    ], 
    [
      "If you steal from one author, it’s plagiarism; if you steal from many, it’s research", "Wilson Mizner"
    ], 
    [
      "My mother never saw the irony in calling me a son-of-a-bitch", "Jack Nicholson"
    ], 
    [
      "Patience is something you admire in the driver behind you, but not in one ahead", "Bill McGlashen"
    ], 
    [
      "By the time a man realizes that his father was right, he has a son who thinks he’s wrong", "Charles Wadsworth"
    ], 
    [
      "Bisexuality immediately doubles your chances for a date on Saturday night", "Rodney Dangerfield"
    ]
  ];
  var laSelect = "";
  var lqSelect = "";
  function getQuote() {
    var randomQ = Math.floor(Math.random() * quotes.length);
    var qSelect = quotes[randomQ][0];
    var aSelect = quotes[randomQ][1];
    $(".jquote").html(qSelect);
    $(".jauthor").html(aSelect);
    laSelect = aSelect;
    lqSelect = qSelect;
  }
  function colourChange() {
    var randomC = Math.floor(Math.random() * colours.length);
    $("body").css("background-color", colours[randomC]);
    $(".mainBox").css("color", colours[randomC]);
    $(".tbutton").css("background-color", colours[randomC]);
    $(".qbutton").css("background-color", colours[randomC]);
  }
  
  $(document).ready(function() {
    getQuote();
    colourChange();
    $(".qbutton").on("click", function() {
      getQuote();
      colourChange();
    });
    $(".tbutton").click(function () {
      window.open("https://twitter.com/intent/tweet?url=&text=" + lqSelect + ". " + laSelect);
    });
  });