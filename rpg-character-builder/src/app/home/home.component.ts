import { Component } from '@angular/core';
@Component({
selector: 'app-home',
standalone: true,
imports: [], template: `
<div>
<h1>Character Builder</h1>
<h2>The Character Builder is located conveniently online</h2>
<p>
We specialize in bringing your favorite characters to life just like Dr. Frankenstein! From classic heroes to modern icons, our character builder allows you to create all kinds of players that you can imagine for your RPG adventures. This month get the halloween characters you love from Beetlejuce to Freddy Kruger!Now you begin your adventure into the wicked worlds from beyond the grave.
</p>
<p>
Start building your perfect RPG character today and embark on your fun adventures! Online you can be whoever you want to be. Will you be good or evil?
</p>
<div class="highlights-container">
<div class="highlight">
<img class="feature-img" src="assets/beetlejuice.jpg" alt="image of beetlejuice standing" />
<p>
Step into the whimsical world of Beetlejuice, where the ordinary meets the eerie! Our Beetlejuice character is the same mischievous spirit with a charm like no other. Are you ready to bring sandworms and a misunderstood bio-exorcist to your RPG adventures? With his iconic black-and-white striped suit and shaggy green hair, Beetlejuice is the perfect addition to any spooky setting. Embrace the bizarre and let Beetlejuice lead you on a wild ride through the unknown!
</p>
</div>
<div class="highlight">
<img class="feature-img"
src="assets/freddie-kruger.jpg"
alt="image of freddie kruger standing"
/>
<p>
Step into the nightmare that is Freddy Krueger. The iconic dream demon is back again! With his razor-sharp hand and relentless pursuit, Freddy is the ultimate horror antagonist, ready to haunt your RPG meetings. His ability to appear in your dreams and tear you to shreds makes him a hauntingly horrific creature for any brave adventurer to face. Embrace the terror and let Freddy Krueger take you on a terrifying journey through your dreams.
</p>
</div>
<div class="highlight">
<img class="feature-img" src="assets/Michael-Myers.jpg" alt="image of Michael Myers standing" />
<p>
You are invited into the frightening world of Michael Myers, he will stop at nothing to kill anyone that gets in his way! With his emotionless mask and ongoing pursuit, Michael is one of the most popular slasher villains of all time. Are you ready for him to stalk your RPG? His silent demeanor and killing ability makes him a terrifying adversary for any hero brave enough to face him. Embrace the fear and let Michael Myers lead you on a frighting adventure of chases and escapes!
</p>
</div>
</div>
</div>
`,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Roboto:wght@400;700&family=MedievalSharp&display=swap');

    .landing-wrapper {
      font-family: 'Roboto', sans-serif;
      padding: 20px;
      background-color: #f4f1ee;
      color: #2c2c2c;
    }

    .hero-banner {
      text-align: center;
      background-color: #1e1e2f;
      color: #f8f8f8;
      padding: 40px 20px;
      font-family: 'Cinzel', serif;
    }

    .banner-img {
      max-width: 100%;
      height: auto;
      margin-bottom: 20px;
    }

    .intro-section, .features-section, .call-to-action {
      margin-top: 40px;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    h2 {
      font-family: 'MedievalSharp', cursive;
      color: #5a2a83;
    }

    ul {
      list-style-type: square;
      padding-left: 20px;
      font-family: 'Roboto', sans-serif;
    }

    .feature-img {
      display: block;
      margin: 20px auto;
      max-width: 100%;
      border-radius: 6px;
      box-shadow: 0 0 8px rgba(0,0,0,0.2);
    }

    .call-to-action {
      text-align: center;
      background-color: #e8d8f8;
    }
  `]
})
export class HomeComponent {}
