var rainyButton = $('.b1');
var sunnyButton = $('.b2');
var warmButton = $('.b3');
var coldButton = $('.b4');
var cheerfulButton = $('.b5');
var blueButton = $('.b6');
var lazyButton = $('.b7');
var adventurousButton = $('.b8');
var formalButton = $('.b9');
var casualButton = $('.b10');
var workButton = $('.b11');
var dateButton = $('.b12');
var section = $('.container');
//var section2 = $('.clear');
var deleteButton = $('.delete');

rainyButton.on("click", appendRainy);
  function appendRainy(){
    section.append(`
      <section class= "rainy">
        <div class = "picandcap">
          <h3>Feminine</h3>
          <img src="https://i.pinimg.com/736x/0d/25/e5/0d25e5b62bb93a2d35613b1be58970c1.jpg" alt="fpic">
        </div>
        <div class = "picandcap">
          <h3>Unisex</h3>
          <img src="https://i.pinimg.com/236x/27/b4/b2/27b4b2cc190ca3f66ebc9520f4455c00--niklas-garrn-unisex-style.jpg" alt="upic">
        </div>
        <div class = "picandcap">
          <h3>Masculine</h3>
          <img src="https://i.pinimg.com/originals/94/f3/85/94f3851a79e85dd0366d829324e43c7f.jpg" alt="mpic">
        </div>
      </section>`);
  }

sunnyButton.on("click", appendSunny);
  function appendSunny(){
    section.append(`
      <section class= "rainy">
        <div class = "picandcap">
          <h3>Feminine</h3>
          <img src="https://i.pinimg.com/236x/c3/ed/b0/c3edb066782201dad72b6ba1be499e1f--fall-party-outfits-rain-outfits.jpg" alt="fpic">
        </div>
        <div class = "picandcap">
          <h3>Unisex</h3>
          <img src="https://i.pinimg.com/236x/27/b4/b2/27b4b2cc190ca3f66ebc9520f4455c00--niklas-garrn-unisex-style.jpg" alt="upic">
        </div>
        <div class = "picandcap">
          <h3>Masculine</h3>
          <img src="https://i.pinimg.com/originals/94/f3/85/94f3851a79e85dd0366d829324e43c7f.jpg" alt="mpic">
        </div>
    </section>`);
  }

warmButton.on("click", appendWarm);
  function appendWarm(){
    section.append(`
      <section class= "rainy">
        <div class = "picandcap">
          <h3>Feminine</h3>
          <img src="https://i.pinimg.com/236x/c3/ed/b0/c3edb066782201dad72b6ba1be499e1f--fall-party-outfits-rain-outfits.jpg" alt="fpic">
        </div>
        <div class = "picandcap">
          <h3>Unisex</h3>
          <img src="https://i.pinimg.com/236x/27/b4/b2/27b4b2cc190ca3f66ebc9520f4455c00--niklas-garrn-unisex-style.jpg" alt="upic">
        </div>
        <div class = "picandcap">
          <h3>Masculine</h3>
          <img src="https://i.pinimg.com/originals/94/f3/85/94f3851a79e85dd0366d829324e43c7f.jpg" alt="mpic">
        </div>
      </section>`);
  }

coldButton.on("click", appendCold);
  function appendCold(){
    section.append(`
      <section class= "rainy">
        <div class = "picandcap">
          <h3>Feminine</h3>
          <img src="https://i.pinimg.com/236x/c3/ed/b0/c3edb066782201dad72b6ba1be499e1f--fall-party-outfits-rain-outfits.jpg" alt="fpic">
        </div>
        <div class = "picandcap">
          <h3>Unisex</h3>
          <img src="https://i.pinimg.com/236x/27/b4/b2/27b4b2cc190ca3f66ebc9520f4455c00--niklas-garrn-unisex-style.jpg" alt="upic">
        </div>
        <div class = "picandcap">
          <h3>Masculine</h3>
          <img src="https://i.pinimg.com/originals/94/f3/85/94f3851a79e85dd0366d829324e43c7f.jpg" alt="mpic">
        </div>
      </section>`);
  }

cheerfulButton.on("click", appendCheerful);
  function appendCheerful(){
    section.append(`
      <section class= "rainy">
        <div class = "picandcap">
          <h3>Feminine</h3>
          <img src="https://i.pinimg.com/236x/c3/ed/b0/c3edb066782201dad72b6ba1be499e1f--fall-party-outfits-rain-outfits.jpg" alt="fpic">
        </div>
        <div class = "picandcap">
          <h3>Unisex</h3>
          <img src="https://i.pinimg.com/236x/27/b4/b2/27b4b2cc190ca3f66ebc9520f4455c00--niklas-garrn-unisex-style.jpg" alt="upic">
        </div>
        <div class = "picandcap">
          <h3>Masculine</h3>
          <img src="https://i.pinimg.com/originals/94/f3/85/94f3851a79e85dd0366d829324e43c7f.jpg" alt="mpic">
        </div>
      </section>`);
  }

blueButton.on("click", appendBlue);
  function appendBlue(){
    section.append(`
      <section class= "rainy">
        <div class = "picandcap">
          <h3>Feminine</h3>
          <img src="https://i.pinimg.com/474x/d1/7f/b3/d17fb319d1db29acbc76ccff67edec67.jpg" alt="fpic">
        </div>
        <div class = "picandcap">
          <h3>Unisex</h3>
          <img src="https://i.pinimg.com/236x/27/b4/b2/27b4b2cc190ca3f66ebc9520f4455c00--niklas-garrn-unisex-style.jpg" alt="upic">
        </div>
        <div class = "picandcap">
          <h3>Masculine</h3>
          <img src="https://i.pinimg.com/originals/94/f3/85/94f3851a79e85dd0366d829324e43c7f.jpg" alt="mpic">
        </div>
      </section>`);
  }

lazyButton.on("click", appendLazy);
    function appendLazy(){
      section.append(`
        <section class= "rainy">
          <div class = "picandcap">
            <h3>Feminine</h3>
            <img src="assets/lazy.jpg" alt="fpic">
          </div>
          <div class = "picandcap">
            <h3>Unisex</h3>
            <img src="https://i.pinimg.com/236x/27/b4/b2/27b4b2cc190ca3f66ebc9520f4455c00--niklas-garrn-unisex-style.jpg" alt="upic">
          </div>
          <div class = "picandcap">
            <h3>Masculine</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpTAa-chzZKB_JEMtlJXG_htNj-VygJfzyenMpHSlAySutGOOkQ" alt="mpic">
          </div>
        </section>`);
    }

adventurousButton.on("click", appendAdventurous);
    function appendAdventurous(){
      section.append(`
        <section class= "rainy">
          <div class = "picandcap">
            <h3>Feminine</h3>
            <img src="https://i.pinimg.com/236x/c3/ed/b0/c3edb066782201dad72b6ba1be499e1f--fall-party-outfits-rain-outfits.jpg" alt="fpic">
          </div>
          <div class = "picandcap">
            <h3>Unisex</h3>
            <img src="https://i.pinimg.com/236x/27/b4/b2/27b4b2cc190ca3f66ebc9520f4455c00--niklas-garrn-unisex-style.jpg" alt="upic">
          </div>
          <div class = "picandcap">
            <h3>Masculine</h3>
            <img src="https://i.pinimg.com/originals/94/f3/85/94f3851a79e85dd0366d829324e43c7f.jpg" alt="mpic">
          </div>
        </section>`);
    }

formalButton.on("click", appendFormal);
    function appendFormal(){
      section.append(`
        <section class= "rainy">
          <div class = "picandcap">
            <h3>Feminine</h3>
            <img src="https://i.pinimg.com/236x/c3/ed/b0/c3edb066782201dad72b6ba1be499e1f--fall-party-outfits-rain-outfits.jpg" alt="fpic">
          </div>
          <div class = "picandcap">
            <h3>Unisex</h3>
            <img src="https://i.pinimg.com/236x/27/b4/b2/27b4b2cc190ca3f66ebc9520f4455c00--niklas-garrn-unisex-style.jpg" alt="upic">
          </div>
          <div class = "picandcap">
            <h3>Masculine</h3>
            <img src="https://i.pinimg.com/originals/94/f3/85/94f3851a79e85dd0366d829324e43c7f.jpg" alt="mpic">
          </div>
        </section>`);
    }

casualButton.on("click", appendCasual);
    function appendCasual(){
      section.append(`
        <section class= "rainy">
          <div class = "picandcap">
            <h3>Feminine</h3>
            <img src="https://i.pinimg.com/236x/c3/ed/b0/c3edb066782201dad72b6ba1be499e1f--fall-party-outfits-rain-outfits.jpg" alt="fpic">
          </div>
          <div class = "picandcap">
            <h3>Unisex</h3>
            <img src="https://i.pinimg.com/236x/27/b4/b2/27b4b2cc190ca3f66ebc9520f4455c00--niklas-garrn-unisex-style.jpg" alt="upic">
          </div>
          <div class = "picandcap">
            <h3>Masculine</h3>
            <img src="https://i.pinimg.com/originals/94/f3/85/94f3851a79e85dd0366d829324e43c7f.jpg" alt="mpic">
          </div>
        </section>`);
    }

workButton.on("click", appendWork);
  function appendWork(){
    section.append(`
      <section class= "rainy">
        <div class = "picandcap">
          <h3>Feminine</h3>
          <img src="https://i.pinimg.com/236x/c3/ed/b0/c3edb066782201dad72b6ba1be499e1f--fall-party-outfits-rain-outfits.jpg" alt="fpic">
        </div>
        <div class = "picandcap">
          <h3>Unisex</h3>
          <img src="https://i.pinimg.com/236x/27/b4/b2/27b4b2cc190ca3f66ebc9520f4455c00--niklas-garrn-unisex-style.jpg" alt="upic">
        </div>
        <div class = "picandcap">
          <h3>Masculine</h3>
          <img src="https://i.pinimg.com/originals/94/f3/85/94f3851a79e85dd0366d829324e43c7f.jpg" alt="mpic">
        </div>
      </section>`);
  }

dateButton.on("click", appendDate);
  function appendDate(){
    section.append(`
      <section class= "rainy">
        <div class = "picandcap">
          <h3>Feminine</h3>
          <img src="https://i.pinimg.com/236x/c3/ed/b0/c3edb066782201dad72b6ba1be499e1f--fall-party-outfits-rain-outfits.jpg" alt="fpic">
        </div>
        <div class = "picandcap">
          <h3>Unisex</h3>
          <img src="https://i.pinimg.com/236x/27/b4/b2/27b4b2cc190ca3f66ebc9520f4455c00--niklas-garrn-unisex-style.jpg" alt="upic">
        </div>
        <div class = "picandcap">
          <h3>Masculine</h3>
          <img src="https://i.pinimg.com/originals/94/f3/85/94f3851a79e85dd0366d829324e43c7f.jpg" alt="mpic">
        </div>
      </section>`);
  }

deleteButton.on("click", clearSection)
  function clearSection(){
    section.empty();
  }
