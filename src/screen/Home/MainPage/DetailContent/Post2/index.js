import DefaultDetailContent from '../../../../../components/DefaultDetailContent'
import '../Post.scss'

function Post2() {
   return (
      <DefaultDetailContent
         heading="<h1 class='topic__heading black__color'>Synchron combo - Yu-Gi-Oh Master Duel</h1>"
         time="<div class='topic__time'>June 26, 2022 · 5 min read</div>"
         avatar='<img src="https://doko.clip-sub.com/img/avatar_doraemon.jpg">'
         content__title="<div class='content__title'>Doko</div>"
         position='<div>Adminnitrator</div>'
         headingsideBarPost=''
         lists={['requiment', 'the combo']}
      >
         <div>
            <img src='https://doko.clip-sub.com/assets/images/shooting-majestic-star-dragon-78890b4e5620574261b0e92d21b23a08.png' />
         </div>
         <p className='pharse mt-4'>
            Recently I got back into Yu-Gi-Oh, a popular card game that I used
            to play when I was a teenager. Synchron is one of my favorite decks,
            along with Cyber Dragon and Madolche.
         </p>
         <p className='pharse mt-4'>
            This post is where I note down my regular combo with Synchron deck
            (after Dawn of Majesty booster pack).
         </p>
         <p className='pharse my-4'>
            Deck list: <mark>Link</mark> - This is a sample deck, you may want
            to adjust it to fit your playstyle.
         </p>
         <ul className='listItem'>
            <li className='item'>Converging Wills Dragon (1x)</li>
            <li className='item'>Maxx C (2x)</li>
            <li className='item'>Synchron Carrier (2x)</li>
            <li className='item'>Junk Converter (3x)</li>
            <li className='item'>Omni Dragon Brotaur (2x)</li>
            <li className='item'>Satellite Synchron (2x)</li>
            <li className='item'>Junk Synchron (3x)</li>
            <li className='item'>Jet Synchron (2x)</li>
            <li className='item'>Ash Blossom (2x)</li>
            <li className='item'>Ghost Belle (2x)</li>
            <li className='item'>Stardust Synchron (2x)</li>
            <li className='item'>
               Quickdraw Synchron (1x) or Cyberse Synchron (1x)
            </li>
            <li className='item'>Nibiru The Primal Being (1x)</li>
            <li className='item'>Monster Reborn (1x)</li>
            <li className='item'>Harpie Feather Duster (1x)</li>
            <li className='item'>Reinforcement of the Army (1x)</li>
            <li className='item'>Tuning (3x)</li>
            <li className='item'>Lightning Storm (1x)</li>
            <li className='item'>Synchro Overtake (2x)</li>
            <li className='item'>Black Garden (1x)</li>
            <li className='item'>Arrive in Light (1x)</li>
            <li className='item'>Called by the grave (2x)</li>
            <li className='item'>Crossout Designator (2x)</li>
            <li className='item'>Forbidden Droplet (2x)</li>
            <li className='item'>Infinite Impermanence (1x)</li>
            <li className='item'>Majestic Mirage (1x)</li>
         </ul>
         <p className='pharse my-3'>Extra Deck (all are 1x):</p>
         <ul class='listItem'>
            <li className='item'>Celestial Double Star Shaman</li>
            <li className='item'>Martial Metal Marcher</li>
            <li className='item'>Junk Warrior</li>
            <li className='item'>T.G Hyper Librarian</li>
            <li className='item'>Accel Synchron</li>
            <li className='item'>Garden Rose Maiden</li>
            <li className='item'>Gaiarmor Dragonshell</li>
            <li className='item'>Stardust Dragon</li>
            <li className='item'>Psy-Framelord Omega</li>
            <li className='item'>Crystal Wing Synchro Dragon</li>
            <li className='item'>Baronne de Fleur</li>
            <li className='item'>Shooting Majestic Star Dragon</li>
            <li className='item'>Shooting Quasar Dragon</li>
            <li className='item'>Cosmic Blazar Dragon</li>
         </ul>
         <h2 className='heading__2'>Requirements</h2>
         <p className='pharse my-3'>
            After the release of Dawn of Majesty pack, Synchron is now a very
            consistent deck with many ways to start. For example:
         </p>
         <ul class='listItem'>
            <li className='item'>
               Maxx C + Junk Synchron (yes, you can use Maxx C as starter)
            </li>
            <li className='item'>
               Synchron Carrier + Junk Synchron: Summon Synchron Carrier, then
               Junk Synchron
            </li>
            <li className='item'>
               Junk Converter + 1 tuner: so that you can discard Junk Converter
               along with it to add Junk Synchron
            </li>
            <li className='item'>
               Reinforcement of the Army + 1 level 2 monster
            </li>
            <li className='item'>Reinforcement of the Army + Junk Synchron</li>
            <li className='item'>
               Any level 2 non-tuner monster (warrior preferred) + Synchro
               Overtake
            </li>
         </ul>
         <h2 className='heading__2'>The combo</h2>
         <p className='pharse my-3'>
            If you have prepared those requirements, let's get into action.
            Assuming you have Synchron Carrier and Junk Synchron in your hand:
         </p>
         <ul class='listItem'>
            <li className='item'>Normal Summon Synchron Carrier</li>
            <li className='item'>
               Normal Summon Junk Synchron (thanks to Synchron Carrier's effect)
            </li>
            <li className='item'>Synchro Summon Junk Speeder</li>
            <li className='item'>
               Activate Junk Speeder's effect, Special Summon: Jet Synchron,
               Satellite Synchron, Junk Synchron, Stardust Synchron and
               Quickdraw Synchron.
            </li>
            <li className='item'>
               Activate Stardust Synchron's effect, add "Arrive in Light" into
               hand.
            </li>
            <li className='item'>
               Synchro Summon Gaiarmor Dragonshell using Jet Synchron and Junk
               Speeder (Level 1 + Level 5). Do not activate Jet Synchron's
               effect in GY.
            </li>
            <li className='item'>
               Activate "Arrive in Light", target "Converging Wills Dragon".
               It's now on the top of your deck.
            </li>
            <li className='item'>
               Synchro Summon Stardust Dragon using Satellite Synchron and
               Gaiarmor Dragonshell (Level 2 + Level 6)
            </li>
            <li className='item'>
               Activate "Arrive in Light"'s effect. Choose "Draw 1 card"
            </li>
            <li className='item'>
               Converging Wills Dragon drawn, activate its effect, Special
               Summon it from your hand.
            </li>
            <li className='item'>
               Activate Converging Wills Dragon's effect, Special Summon Omni
               Dragon Brotaur
            </li>
            <li className='item'>
               Activate Omni Dragon Brotaur's effect, target Junk Synchron,
               discard 1 card, add Doppel Warrior into hand (if you already have
               Doppel Warrior, you can skip this step)
            </li>
            <li className='item'>
               Synchro Summon T.G Hyper Librarian using Stardust Synchron and
               Omni Dragon Brotaur (Level 4 + Level 1)
            </li>
            <li className='item'>
               Activate Stardust Synchron's effect in GY. Tribute Quickdraw
               Synchron, Special Summon it from GY.
            </li>
            <li className='item'>
               Doppel Warrior's effect is now triggered. Special Summon it from
               hand. Your field should now have: Stardust Dragon, Converging
               Wills Dragon, T.G Hyper Librarian, Junk Synchron, Stardust
               Synchron, Doppel Warrior.
            </li>
            <li className='item'>
               Synchro Summon Shooting Majestic Star Dragon using Converging
               Wills Dragon, Stardust Dragon and Doppel Warrior, into{' '}
               <em>Extra Monster Zone</em>.
            </li>
            <li className='item'>
               T.G Hyper Librarian and Doppel Warrior's effect triggered, summon
               2 tokens and draw 1 card.
            </li>
            <li className='item'>
               Synchro Summon Garden Rose Maiden using Stardust Synchron and 1
               token (Level 4 + Level 1).
            </li>
            <li className='item'>
               Activate Librarian's effect and Maiden's effect. Draw 1 card and
               add Black Garden into hand.
            </li>
            <li className='item'>
               Activate Jet Synchron's effect in GY, discard 1 card (except
               Black Garden). Special Summon it from GY.
            </li>
            <li className='item'>Activate Black Garden.</li>
            <li className='item'>
               Synchro Summon Celestial Double Star Shaman using Jet Synchron
               and 1 token.
            </li>
            <li className='item'>
               Now it's a chain 3: Black Garden, Librarian and Shaman. Special
               Summon Doppel Warrior from GY. Special summon a token to
               opponent's field, then draw 1 card. Again, special summon a token
               to opponent's field. There should be 2 Rose Tokens now.
            </li>
            <li className='item'>
               Synchro Summon Cosmic Blazar Dragon using Garden Rose Maiden, T.G
               Hyper Librarian and Celestial Double Star Shaman.
            </li>
            <li className='item'>
               Cosmic Blazar Dragon's ATK is halved, don't worry as it can
               restore ATK easily. Don't activate Arrive in Light's Special
               Summon effect.
            </li>
            <li className='item'>
               Activate Black Garden's effect, destroy all tokens and Special
               Summon T.G Hyper Librarian from GY.
            </li>
            <li className='item'>
               Synchro Summon Accel Synchron using Junk Synchron and Doppel
               Warrior (Level 3 + Level 2).
            </li>
            <li className='item'>
               Activate Accel Synchron's effect. Send Stardust Synchron from the
               deck to GY and <strong>reduce</strong> its level to 1.
            </li>
            <li className='item'>
               Synchro Summon Martial Metal Marcher. Activate its effect (also
               T.G Librarian's effect) to Special Summon a level 2 tuner from GY
               (either Shaman or Satellite Synchron)
            </li>
            <li className='item'>
               Activate Garden Rose Maiden's effect in GY. Special Summon
               Stardust Dragon from GY.
            </li>
            <li className='item'>
               Now you can Synchro Summon Baronne de Fleur and Psy-Framelord
               Omega (or Crystal Wing Synchro Dragon). Personally I prefer
               Psy-Framelord Omega to get back banished cards. Make sure to
               Synchro Summon Baronne first to make use of Librarian's draw
               effect.
            </li>
            <li className='item'>
               The end field should have 4 synchro monsters (3 omni-negates, 1
               disruption or 1 monster negate). The deck should have roughly
               24-26 cards left.
            </li>
         </ul>
         <div className='hightLight__wrap my-5'>
            <span>Tags:</span>
            <button className='btn'>software</button>
            <button className='btn'>vietnamese</button>
            <button className='btn'>guide</button>
         </div>
         <div className='select  mb-5'>
            <div className='select__option'>
               <h3 className='select__option--or mb-2'>Newer Post</h3>
               <p className='select__option--names'>
                  Hướng dẫn rip đĩa CD sang FLAC bằng Exact Audio Copy
               </p>
            </div>
            <div className='select__option right'>
               <h3 className='select__option--or mb-2'>Older Post</h3>
               <p className='select__option--names right'>Thể ていない</p>
            </div>
         </div>
      </DefaultDetailContent>
   )
}

export default Post2
