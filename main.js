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
        <div class="text">
          <p>sksk</p>
        </div>
      </section>`);
  }

sunnyButton.on("click", appendSunny);
  function appendSunny(){
    section.append(`
      <section class= "rainy">
        <div class = "picandcap">
          <h3>Feminine</h3>
          <img src="https://i.pinimg.com/originals/0c/2c/f6/0c2cf6bb197b4a181d95cb539be7606c.jpg" alt="fpic">
        </div>
        <div class = "picandcap">
          <h3>Unisex</h3>
          <img src="https://i.pinimg.com/236x/f3/7b/3e/f37b3ee1b6b671f420a26c80d2dccae5--unisex-clothes-rad-hourani.jpg" alt="upic">
        </div>
        <div class = "picandcap">
          <h3>Masculine</h3>
          <img src="https://i.pinimg.com/originals/a9/77/44/a97744d81ff9d93e5b3cc00b5cd05562.jpg" alt="mpic">
        </div>
    </section>`);
  }

warmButton.on("click", appendWarm);
  function appendWarm(){
    section.append(`
      <section class= "rainy">
        <div class = "picandcap">
          <h3>Feminine</h3>
          <img src="https://i.pinimg.com/originals/f2/82/1a/f2821ae1d1ba577923ae546578d180b9.jpg" alt="fpic">
        </div>
        <div class = "picandcap">
          <h3>Unisex</h3>
          <img src="http://www.savageonline.co.uk/wp-content/uploads/2018/03/unisex-demin-h-a-m.jpg" alt="upic">
        </div>
        <div class = "picandcap">
          <h3>Masculine</h3>
          <img src="https://cdn.shopify.com/s/files/1/0071/3637/8998/files/mens-summer-street-style-blue-t-shirt-denim-shorts-trainers.jpg" alt="mpic">
        </div>
      </section>`);
  }

coldButton.on("click", appendCold);
  function appendCold(){
    section.append(`
      <section class= "rainy">
        <div class = "picandcap">
          <h3>Feminine</h3>
          <img src="https://www.fashion-women.com/wp-content/uploads/2017/11/17-beautiful-dressy-warm-winter-outfits-16.jpg" alt="fpic">
        </div>
        <div class = "picandcap">
          <h3>Unisex</h3>
          <img src="https://i.pinimg.com/originals/d4/81/48/d481480b63f0749a30afb051b5172d82.jpg" alt="upic">
        </div>
        <div class = "picandcap">
          <h3>Masculine</h3>
          <img src="http://www.machovibes.com/wp-content/uploads/2018/08/36Ways-to-Look-Stylish-in-Extreme-Cold-Weather.jpg" alt="mpic">
        </div>
      </section>`);
  }

cheerfulButton.on("click", appendCheerful);
  function appendCheerful(){
    section.append(`
      <section class= "rainy">
        <div class = "picandcap">
          <h3>Feminine</h3>
          <img src="https://i1.wp.com/fmag.com/wp-content/uploads/2018/10/yellow-polo-shirt-with-white-high-rise-skinny-ankle-jeans.jpg?resize=300%2C450&ssl=1" alt="fpic">
        </div>
        <div class = "picandcap">
          <h3>Unisex</h3>
          <img src="https://media1.popsugar-assets.com/files/thumbor/5RXpK8stBce2DvU-zml4lxEjtx8/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/06/06/740/n/1922564/1256d0d55cf94361baaef0.48778225_/i/Unisex-Clothes-Urban-Outfitters.jpg" alt="upic">
        </div>
        <div class = "picandcap">
          <h3>Masculine</h3>
          <img src="http://graphics8.nytimes.com/images/2014/06/23/t-magazine/24streetstyle-milan-slide-AJI2/24streetstyle-milan-slide-AJI2-jumbo.jpg" alt="mpic">
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
          <img src="assets/unisexsad.jpg" alt="upic">
        </div>
        <div class = "picandcap">
          <h3>Masculine</h3>
          <img src="https://ae01.alicdn.com/kf/HTB1YCy4bL6H8KJjSspmq6z2WXXav/Lazy-Cat-Cartoon-T-Shirt-Men-Street-Wear-Style-Black-White-T-Shirt-Men-Funny-Cotton.jpg_640x640.jpg" alt="mpic">
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
            <img src="https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/700ab33d174e4fa1b4fca9de0116f8f3_9366/SST_Track_Pants_Black_CW1275_03_standard.jpg" alt="upic">
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
            <img src="https://media.glamour.com/photos/5c0fe73842fe852d87efa0f6/master/w_400%2Cc_limit/GettyImages-845834446.jpg" alt="fpic">
          </div>
          <div class = "picandcap">
            <h3>Unisex</h3>
            <img src="http://img.over-blog-kiwi.com/1/48/40/59/20181018/ob_b774f5_97.jpg" alt="upic">
          </div>
          <div class = "picandcap">
            <h3>Masculine</h3>
            <img src="https://cdn.shopify.com/s/files/1/1023/3455/files/MFW19_Paris_OFFWHITE_StreetStyle_EvaAlDesnudo_01-800x1200_grande.jpg?v=1547680107" alt="mpic">
          </div>
        </section>`);
    }

formalButton.on("click", appendFormal);
    function appendFormal(){
      section.append(`
        <section class= "rainy">
          <div class = "picandcap">
            <h3>Feminine</h3>
            <img src="https://www.lulus.com/images/product/xlarge/2027692_352332.jpg" alt="fpic">
          </div>
          <div class = "picandcap">
            <h3>Unisex</h3>
            <img src="https://cdn.endource.com/image/s3-c448705c1d818179e15fa34eb98ed113/detail/hugo-boss-unisex-suit.jpg" alt="upic">
          </div>
          <div class = "picandcap">
            <h3>Masculine</h3>
            <img src="https://5.imimg.com/data5/JE/YF/MY-41899481/black-mens-suit-500x500.jpg" alt="mpic">
          </div>
        </section>`);
    }

casualButton.on("click", appendCasual);
    function appendCasual(){
      section.append(`
        <section class= "rainy">
          <div class = "picandcap">
            <h3>Feminine</h3>
            <img src="https://i.pinimg.com/originals/af/fc/89/affc8923992789c718c1ba3f78e0d69f.jpg" alt="fpic">
          </div>
          <div class = "picandcap">
            <h3>Unisex</h3>
            <img src="https://cdn.shopify.com/s/files/1/1017/2511/products/NIQUE_AUTUMN2081341782_500x.jpg?v=1564367847" alt="upic">
          </div>
          <div class = "picandcap">
            <h3>Masculine</h3>
            <img src="https://i.pinimg.com/originals/25/04/fa/2504fac12ee93b3f3bfb643ab58f0488.jpg" alt="mpic">
          </div>
        </section>`);
    }

workButton.on("click", appendWork);
  function appendWork(){
    section.append(`
      <section class= "rainy">
        <div class = "picandcap">
          <h3>Feminine</h3>
          <img src="http://www.stylishasians.com/wp-content/uploads/2019/02/Perfect-Work-Outfits-For-Asian-Women-26.jpg" alt="fpic">
        </div>
        <div class = "picandcap">
          <h3>Unisex</h3>
          <img src="https://womanuntamed.com/uploads/u/unisex-style/unisex-style_1.jpg" alt="upic">
        </div>
        <div class = "picandcap">
          <h3>Masculine</h3>
          <img src="https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/C2B3ADA3D9B848FC9D6F630C5137A626/204971203_9324_C2B3ADA3D9B848FC9D6F630C5137A626.jpg" alt="mpic">
        </div>
      </section>`);
  }

dateButton.on("click", appendDate);
  function appendDate(){
    section.append(`
      <section class= "rainy">
        <div class = "picandcap">
          <h3>Feminine</h3>
          <img src="https://i2.wp.com/www.silkfred.com/blog/wp-content/uploads/2019/04/xlarge_JeremyRice_DL_Final_JAG_3085.jpg?fit=1170%2C1872&ssl=1" alt="fpic">
        </div>
        <div class = "picandcap">
          <h3>Unisex</h3>
          <img src="https://images.express.com/is/image/expressfashion/0027_09393649_0098?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon" alt="upic">
        </div>
        <div class = "picandcap">
          <h3>Masculine</h3>
          <img src="https://globerapp.files.wordpress.com/2014/05/medium_6090798822.jpg" alt="mpic">
        </div>
      </section>`);
  }

deleteButton.on("click", clearSection)
  function clearSection(){
    section.empty();
  }
