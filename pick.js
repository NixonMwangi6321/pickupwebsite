class Main {
    static listen_events = (type,node,func)=>{

        node.addEventListener(type, func);
    }

    static close_side_bar = ()=>{
        sidebar.style.display = "none";
        overlay.style.display = 'none';
    }

    static open_side_bar = ()=>{
        sidebar.style.display = 'block';
        overlay.style.display = 'block';
    }

    static read_comments = async()=>{
        entercomment.style.display = "block";
        comments[1].style.display = "none";
    }
    static select_element = (tag_name,tag,many)=>{

        if (many === true && tag === "class") {
            return document.querySelectorAll("." + tag_name);
        }
        if (many === true && tag === "id") {
            return document.querySelectorAll("#" + tag_name);
        }

        if (tag === "class")
            return document.querySelector("." + tag_name);
        if (tag === "id")
            return document.querySelector("#" + tag_name);

    }
}

const back_button = Main.select_element("back", "class", false);
const overlay = Main.select_element("overlay", "class", false);
const sidebar = Main.select_element("sidebar", "class", false);
const sandwich = Main.select_element("sandwich", "class", false);
const comments = Main.select_element("comments", "class", true);
const entercomment = Main.select_element("entercomment", "class", false);

Main.listen_events("click", back_button, Main.close_side_bar);
Main.listen_events("click", sandwich, Main.open_side_bar);

overlay.addEventListener("click", (e)=>{
    sidebar.style.display = "none";
    overlay.style.display = "none";
}
)

var a = [["Now I see why Da Vinci painted Monalisa cause he couldn't find you", "I was blinded by your beauty… You'll have to give me your name and number for insurance purpose","Let me guess, your middle name is Gillette, right? Because you're the best a man can get!","I'm in the mood for pizza. A pizza you, that is!","Your body  must be made of jelly, cause jam don't shake like that.","Roses are red, violets are blue DaVinci painted Mona, cause he couldn't find you","I want our love to be like the number Pi: irrational and never-ending.","Excuse me, but you dropped something back there. (What?) This conversation, let’s pick it up later tonight","Does your left eye hurt? Cause you’ve been looking right all day.","I'm writing a term paper on the finer things in life, and I was wondering if I could interview you","Are you http? Because without you I'm just ://","I went to your boyfriend's Instagram page. It said /edit profile/.","Is your birthday October the 10th? Cos you definitely look like a 10/10.","Anyone who says Disneyland is the happiest place on Earth, has clearly never stood next to you","If nothing lasts forever, will you be my nothing","Hey girl, I would ask for Netflix and chill... But, you look like you're into Stranger Things.","What Are You Doing For The Rest Of Your Life Because I Want To Spend It With You?","My life is a puzzle and I've found the missing piece in you.","I Had Two Wonderful Pickup Lines All Ready And Waiting. Then I Realized You Deserve Better","Hey, should we go out to eat first, or should I feed you my love right away?","Honey, You Give New Meaning To The Definition Of 'Edible","Your body is a wonderland, and I want to be Alice","I've got 1-ply, I've got 2-ply, but all I really want is your re-ply","I'm Scared To Have One Apple A Day Because I Don't Want You To Go Away<i>(if she's doing medicine)</i>","Can You Take Me To The Bakery Because I Want A Cutiepie Like You?!","I Wasn't Sure If You Were A Beautiful Angel Or A Sexy Devil, But Now That I'm Close I See Heaven In Your Eyes.","Just saw you in my instagram recommendations and thought I'd slide into your DM","I’m invisible, can you see me? (Her:Uh… yeah?) What about tomorrow night?","I was wondering if you had an extra heart… because mine was just stolen","Hey, I’m from out of town. Is there anything else worth seeing besides you?","I've Been Wondering, Do Your Lips Taste As Good As They Look?","What other hobbies do you have other than being pretty and irresistible?","When I saw you, I just had to speak to you. Otherwise, I would be afraid I might never see you again","People call me John you can call me your's.","My doctor said I'm cross-eyed! I'm happy since I can see you twice.","Love is a sensation caused by a temptation to feel a penetration; a guy sticks his location in a girl’s destination to increase the population for the next generation.Did you get my explanation or you need a demonstration?","f it weren’t for that DAMNED sun, you’d be the hottest thing ever created.","Could You Please Step Away From The Bar? You’re Melting All The Ice","If I had to choose between breathing or loving you, I would say “I love you” with my last breath!.","If I promise to catch you, would you fall for me?","I am a fortune-teller. I just need your name; then I’ll tell you what your name is!","If I was an octopus, all my 3 hearts would beat for you.","I Didn't See Any Stars In The Sky Tonight, The Most Heavenly Body Was Standing Right Next To Me","You have to come to my wedding! Because what kind of wedding would it be without the bride/groom?","You’re pretty. I’m cute. Together, we’d be pretty cute","Greenpeace should sue you: you are the real cause of global warming.","If I promise to catch you, would you fall for me?","You Know, You Might Be Asked To Leave Soon. You Are Making The Other Women Look Bad.","I'm Not Trying To Impress You Or Anything, But... I'm Batman!<i>(your favorite superhero)</i>","I Advise You To Surrender Immediately, Or I’ll Have To Use A Pickup Line","If you were a Transformer… you’d be Optimus Fine","Can I call you Google? Because you have everything I’ve been searching for","You must be a magician. Because any time I look at you, everyone else disappears.","You are so beautiful; I forgot my pick-up line","You and I are like nachos with jalapeños. I'm super cheesy, you're super hot, and we belong together","Where have I seen you before? Oh yeah, I remember now. It was in the dictionary next to the word “gorgeous”!"], ["My doctor says I’m lacking vitamin U", "Will you be the 1....4 me on February 14 th", "You must be made of Copper and Tellurium—because you’re CuTe", "Are you at a 45-degree angle? Because you’re a-cutie", "Forget hydrogen. You should be the number one element", "Is it hot in here or it's just you","Damn, you have a dog! Does that mean I’ll never win the “best ever cuddler” title?","Geography should be cancelled because Why would I need to know about the solar system? My whole world revolves around you.", "Are you a volcano? Coz I lava you!", "Are you from Japan ‘cause I’m trying to get in Japanties", "You must be Jamaican, because Jamaican me crazy", "Are you Australian? Because you meet all of my koala-fications", "Are you my homework? Because I’m not doing you, but I definitely should be", "Are you the square root of -1? Because you seriously can’t be real", "Drake would call you and me God’s Plan.", "I’m good at algebra; I can replace your X and you wouldn’t need to figure out Y", "I’d rate you a nine… because I'm the one you need", "If a fat man puts you in a bag at night, don’t worry I told Santa I wanted you for Christmas", "Are you lost ma’am? Because heaven is a long way from here.", "Your dad must have been a thief because he stole all the stars from the sky and put them in your eyes", "Didn’t I see you on the cover of Vogue? Somebody call the cops,<br>because it’s got to be illegal to look this good", "Damn, you have a dog! Does that mean I’ll never win the “best ever cuddler” title?", "Your father must have been an alien?<i>(why)</i>Because there’s nothing else like you on Earth!", "If you were a burger at McDonald’s, you’d be the McGorgeous.", "Do you smoke pot <i>(weed)</i>? Because weed be cute together", "I’ve got 1-ply, I’ve got 2-ply, but all I really want is your re-ply", "When I text you goodnight later, what phone number should I use?", "My friend over there really wants your number so they know where to get a hold of me in the morning", "My friend over there really wants your number so they know where to get a hold of me in the morning", "If being sexy was a crime, you’d be guilty as charged", "Did you swallow magnets? Cause you’re attractive.", "You know, your smile has been lighting up the room all night and I just had to come and say hello", "If you were a fruit you’d be a fineapple.", "I don’t know which is prettier today—the weather, or your eyes.", "If you were a vegetable, you’d be a cute-cumber", "If you were a potato, you’d be a sweet one", "No wonder the sky is gray (or dark, if at night)—all the color is in your eyes.", "Heaven might charge me for stealing an angel since you’re here with me.", "Your name must be Coca-Cola, because you’re soda-licious"], ["Are you an eco-friendly kind of girl? The condom in my pocket goes out of date tomorrow, so why don’t you help me use it<", "If I had a garden I’d put your tulips and my tulips together", "Damn girl, I’d love to kiss those beautiful, luscious lips. And the ones on your face.", "Do you have any room for an extra tongue in your mouth?", "Are you from Africa? Cause I wanna know Kenya suck this d**k?", "Are you an archaeologist? Because I’ve got a bone for you to examine.", "Are your legs made of Nutella? Because I’d love to spread them", "I’m no weather man, but you can expect a few inches tonight.", "You’re just like my little toe because I’m going to bang you on every piece of furniture in my home.", "My doctor told me I have a vitamin D deficiency. Want to go back to my place and save me?", "There will only be 7 planets left after I destroy Uranus", "There is a lot of fish in the sea, but you’re the only one I’d like to mount", "I may not be a windshield repairman, but I can still fill your crack in", "I have an oral fixation with giving oral gratification. If you are willing to receive, I am more than willing to give", "Would you like to add a new bone to your anatomy", "I’d like to get between your legs and eat my way straight to your heart", "I’ll make you shiver when I deliver", "If you place your tits on my face I bet I can guess how much they weight", "My biology teacher told me that the lips are the most sensitive part of the body, wanna <br> find out which set of lips she was talking about", "I’ll marry you tomorrow, but let’s honeymoon tonight.", "Are you into food play? You can be the pasta and I’ll let you mix yourself up with my balls", "Usually my favorite planet is Pluto, but I reckon it could be Uranus if you let me explore it", "If we were playing poker, I would go all in.", "Is your a** insured? (No, why?) Well, do you want it to be in good hands?", "The only reason I would kick you out of bed would be to f**k you on the floor.", "You can get arrested for thinking what I’m thinking", "I’m leaving this place… want to cum?", "I hope you have pet insurance, because I’m about to destroy your pussy cat.", "Can you start printing out some missing person posters? I’m gonna have you tied up for a long time", "Let us let only latex stand between our love", "Are you fertilizer? Cause you just made me grow 6 inches", "Are you from Japan ‘cause I’m trying to get in Japanties."],["Heyy","Hello knock knock"]];

var smoothbtn = document.getElementById("smoothbtn");
var dirtybtn = document.getElementById("dirtybtn");
var funnybtn = document.getElementById("funnybtn");
var knockjokesbtn = document.getElementById("knockjokesbtn");

var container = document.getElementById("slides");
var smooth = a[0];
var funny = a[1];
var dirty = a[2];
var knockjokes = a[3];

const showSmooth = ()=>{
    smoothbtn.classList.add("active");
    funnybtn.classList.remove("active");
    dirtybtn.classList.remove("active");
    
    container.innerHTML = "";
    for (let i = 0; i < smooth.length; i++) {
        var x = `<div class="postcard">
    <div class="user">
        <div class="namecontainer">
            <h4>${a[0][i]}</h4>
        </div>
    </div>
</div>`;

        if (x)
            container.innerHTML += x;
    }
}
document.body.onload = showSmooth();

const showFunny = ()=>{
    funnybtn.classList.add("active");
    dirtybtn.classList.remove("active");
    smoothbtn.classList.remove("active");
    container.innerHTML = "";
    for (let i = 0; i < funny.length; i++) {
        var x = `<div class="postcard">
    <div class="user">
        <div class="namecontainer">
            <h4>${funny[i]}</h4>
        </div>
    </div>
</div>`;

        if (x)
            container.innerHTML += x;
    }
}

const showDirty = ()=>{
    dirtybtn.classList.add("active");
    smoothbtn.classList.remove("active");
    funnybtn.classList.remove("active");
    container.innerHTML = "";

    for (let i = 0; i < dirty.length; i++) {
        var x = `<div class="postcard">
    <div class="user">
        <div class="namecontainer">
            <h4>${dirty[i]}</h4>
        </div>
    </div>
</div>`;

        if (x)
            container.innerHTML += x;
    }
}

const showknockjokes = ()=>{
    dirtybtn.classList.add("active");
    smoothbtn.classList.remove("active");
    funnybtn.classList.remove("active");
    container.innerHTML = "";

    for (let i = 0; i < knockjokes.length; i++) {
        var x = `<div class="postcard">
    <div class="user">
        <div class="namecontainer">
            <h4>${knockjokes[i]}</h4>
        </div>
    </div>
</div>`;

        if (x)
            container.innerHTML += x;}
    }

smoothbtn.addEventListener("click", showSmooth);
dirtybtn.addEventListener("click", showDirty);
funnybtn.addEventListener("click", showFunny);
knockjokes.addEventListener("click",showknockjokes)
