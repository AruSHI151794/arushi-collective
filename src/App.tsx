import React, { useState, useEffect, useRef } from 'react';
import { supabase } from './supabaseClient';

interface Chapter {
  id: number;
  number: number;
  title: string;
  titleHi: string;
  content: string;
}

interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string;
}

interface CommentItem {
  id: number;
  chapter_number: number;
  author_name: string;
  comment_text: string;
  created_at: string;
}

interface ChapterReaction {
  chapter_number: number;
  likes: number;
  dislikes: number;
}

const FIVE_CHAPTERS: Chapter[] = [
  {
    id: 1,
    number: 1,
    title: 'Sworn Siblings',
    titleHi: 'शपथबद्ध सहोदर',
    content: `It was raining heavily. The streets turned into mud; people pushed through it, running, shoving, and vanishing into the grey. It seemed so crowded. One could hear cries of a baby loud and sharp, luckily for the infant so did these three men. “My lord, we should leave from here,” one of the men said to another who was clearly of a high social ranking. “Who could leave a child here in this dirty mud?” another said. The man in the middle thought to himself as he approached the sound, “So, it’s finally here.” The nobleman had a waxed moustache. He wore a coat cut from expensive cloth, a long-sleeved shirt and trousers. Beside him were the servants with long-sleeved shirts and baggy half-shirts, their tight trousers were caked in mud. As they walked into the mansion, a woman adorned with golden ornaments and in a saree asked him about the baby. “Oh! Viraj, whose child is this?” Her husband had brought an unknown infant out of nowhere and she was confused. “This one... may change everything,” he said, hoping to consult with Acharya regarding this. The woman was not convinced he wouldn’t meet her eyes. “By the way, where is Aadya?” As soon as he said those words, a girl came running, wearing a saree over loose-fitting, wide-leg trousers. That’s me, the protagonist, but this is not my story. I ran as fast as I could and bumped into Ba.“Be careful, there’s a baby,” Ba said, but I barely heard him. ‘Sibling ’ the words hit me like a gong. A guard came toward my father to inform him that Acharya had finally arrived at our humble mansion. Acharya was white-haired with a sturdy build, half his age. A book in one hand. Copper vessel in the other. Today was also the day when Acharya was supposed to check my elemental constitution. Ba and Ma pressed their knees on the marble as they placed their palms flat at his feet. I followed them and stayed down until I felt a hand on my head “May you prosper!” Acharya sat in his seat, which was especially prepared for him, as he read my constitution. A blue symbol formed on his temple as five glowing orbs representing the elements became visible under the ceiling. 

Jal 45%

Agni 30%

Vayu 15%

Akaash 5%

Bhumi 5%

Acharya pressed a hand to his beard as he gently massaged it, and said: “Our Aadya’s elemental constitution is very lucky”. Even though I did not comprehend everything, just this one word, ‘lucky’, and the warmth spread throughout my chest to my fingertips. “Yippie, I am lucky,” but what about the baby, as I asked the elders? Ba's face shone as he spoke quietly with Acharya, something I would understand only much later. Five glowing orbs became visible again, but this time everyone was quiet 

Vayu 35%, 

Akaash 20%, 

Agni 20%, 

Bhumi 15% 

Jal 10%

“The child is born under unkind stars,” Acharya finally said. Ba's face was down, though calm, as he approached Acharya “Then... he is not the one.” Servants whispered among themselves, nothing important enough to note, while the young-me studied their faces, so different now from moments before. As everyone went to their designated places, I was sitting in the garden trying to make sense of things. I heard the footsteps and a voice of someone. “They always disagreed” this person had a reputation of talking with himself or in riddles . I turned back only to see Acharya with mischief in his eyes. “I don’t know what you’re talking about” I said as he found a place to sit beside me. “Have you ever had a tying ceremony?” Memories resurfaced of when I tied it to my family friends and cousins. My father was a very sociable person, so there was no doubt that there were so many people to count. “Yes, I have done it before,” I said, but I was very confused about where the conversation was going. “Why don’t you tie it to him and make him your brother?” Like lightning, those words struck me as I stood there with my hand on my chin, trying to think it through, but ultimately failed to do so. As I tilted toward him, I barely managed not to bump into him “Ba never leaves his sworn siblings, then I can make him my brother." It’s funny how the young me felt proud of this idea, which is clearly planted by someone else. I slowly and deliberately approached the baby who was lying on the bed as I took a strand of my hair and tied it to his little finger. “Now, nobody can separate us”, I said as I ran away before Ma noticed my absence. But soon the maids noticed the hair tied to the baby's finger and caused a commotion….. I felt an unknown presence there, but I couldn’t perceive what it was.`
  },
  {
    id: 2,
    number: 2,
    title: 'Satkrit',
    titleHi: 'सत्कृत',
    content: `The commotion reached my parents and their reaction was not pleasant. “Aadya, what were you thinking?” Ma asked more like a scold. “Do you even understand what you did?” Ba asked in a similar tone. I pressed my lips together as my head was down trying to think of something they’d take seriously. “You tied it around the baby’s finger.” I looked upon them with my head up and my eyes were glossy. “If I tie it to him…he won’t leave, right?” The conversation was soon postponed for a better time as Ba had work to do and Ma had her share of things to do. Ba shuffled the documents and set them on the table as he made a fist against his mouth. “I just couldn’t leave the baby regardless of whether he’s the one or not. I am glad Kirti understands that.” A knock sounded at the door. “Abhiram… come in.” Ba’s assistant, Abhiram, came from a not-too-well-to-do family. He started working early when he should have been studying, though his experience more than made up for it. “My lord, another threat has arrived. It’s the third one.” The throat of Ba tightened. His next question carried down the corridor, loud enough to reach the far end of the mansion. “Do you have any idea where we are getting these threats from?” He slammed the papers onto the table, letting them bear the brunt of his mood. “We are trying, my lord.” “You’ve been saying that since day one.” Ba said. He wasn’t wrong. I remember incidents of nobles being targeted by a force that, at the time, was still unknown . In the garden, I sat blowing my cheeks out when Acharya found me. “Looks like you got a good scolding.” “It was your idea. I am afraid they will separate him from me.” Acharya hummed, amused he had always been fond of teasing me. “Help me please, they won’t listen,” I said with a gleam in my eyes. “Then show them. That’s something only you have to do.” Scratching my cheek, I exclaimed, “Huh?! That’s not fair.” The baby lay on the bed, since there was no cradle yet. Maids cleaned the room and tended to the baby while Ma supervised. “Why is he crying?” she asked, taking the baby in her arms to pacify him. “Aaaaa…What happened? Ssssh… it’s alright.” Memories resurfaced of  when she used to do the same for me as an infant. The maids ,hand on their cheek, paused to watch.  “Where’s Aadya now?” Ma asked, carefully placing the baby on the bed before going to find me. Maids went on in their respective work while one was digging nails into her palm, bracing herself for something. I was pacing my room when I heard a loud sound. “What happened?!” The rooms, and corridor were  filled with grey ash, with red-orange flames licking the walls. Someone had set the fire deliberately. I wandered the corridor half crying- half coughing. “Ma, Ba where are you?!” A loud cry filled the mansion.”It’s the baby,” I directed toward the voice as I found the baby on the bed surrounded by the grey. “Why are you so heavy?” I picked up the baby and walked out of the room, only to bump into one of the maids. The same maid who had set the fire. 

“Where’s your father?” she demanded. I screamed in terror. “He should know what it costs. Just this once.” Before she could do anything to me, something blue appeared among the flames trapping her in a bubble. It was Acharya. In his calm, firm tone he asked, “What’s your motive?” “My family died because of these nobles,” she said. “What did these children do to you?” Acharya asked. “That’s the point. They don’t.” The maid’s family were beaten to death by goons the nobles knew about and did nothing to stop. “Prisha…?” Ma and Ba arrived just then. I hugged them while Ma was just staring at her in the bubble. With a screechier tone, Prisha said, “It was not one but all the nobles who chose to stay silent and actively abused us. My father begged them but he still died.” “It was Dhanuk. We let him keep his title for so long.” Ba said, clenching and unclenching his fist . “Proof, Viraj not impulse. Misery doesn’t amount to crime.” Acharya said as he tilted his head toward Ba, who answered with a bow. “Why were you here, Aadya? It was dangerous.” Ma asked, tears wetting her cheeks . “I am sorry but I will never leave my brother.” Ma and Ba looked at each other as she hugged me “You don’t have to be sorry for a long while.” Acharya asked his disciples to repair the mansion. Luckily, it was the arson’s only casualty. A few days later Ma and Ba woke me. “We have decided we will not separate you from the baby.” I looked at them, my eyes wide open, finally awake. “You already tied yourself to him. Guess we’re keeping our word.” I jumped on the bed as my parents were telling me to calm down . But it was impossible. I was so happy. “What should we name him?” Ba asked as the baby finally became part of our family. “What about Satkrit?” Acharya said. “What does it mean?” I asked as Ma poked me with her elbow. “It means someone who is revered, loved by everyone.” Acharya answered clearly amused by my excitement. “You are not going anywhere now, Satkrit.” My brother laughed with all this ruckus. Maybe he liked it too.`
  },
  {
    id: 3,
    number: 3,
    title: 'Peaceful Years',
    titleHi: 'शांत वर्ष',
    content: `Day broke. Ba was at his desk, Abhiram standing beside him, as he spoke.“So, it really was Dhanuk.” “Yes, my lord, that’s what we found. Many nobles saw it yet turned away.” Abhiram replied. Having lived closer to the life of a peasant himself, Abhiram was more sympathetic toward Prisha than Ba was. It wasn’t only because she’d tried to harm our family. The two men, one seated at the desk and one standing beside it, simply saw the world through very different lenses. Ba paused, looking towards him. “Are you sure?” “Yes, all evidence points to him. What should we do?” Abhiram asked. “Not yet. We can’t act impulsively. You may go,” Ba said as he gently massaged his temple and eyebrows. Just knowing who was behind what wasn’t the answer. It never was . “That’s not what frightens me,” Ba said,looking at us from the window instead of the documents he should have been finishing.

“O Trishna! Try to sweep there as well.Yes, that place,” Ma said as she pointed her hand toward that direction. “Ma! It didn’t even look like it was burned.” I said . Such were the skills of Acharya and his disciples that the mansion looked as good as before, if not better. “Speaking of which, the young lady is old enough for Shikshalaya now, is she not?” I tried to slowly slip away on my little feet, but it was inevitable. “Our Aadya is going to Shikshalaya soon. Where are you going?” Ma asked. “I don’t want to go to Shikshalaya. I don’t want to leave Satkrit,” I said. “He is just a baby. You can’t even carry him properly, forget about playing with him.” I did exactly what a textbook 5 year old would do in that situation. With hands covering both of my ears, I ran away. Looking back at my younger self was sweet, considering how wildly things would change. The people back home were among the few who ever saw my assertiveness. 

The younger me hid in the garden as I tried to make up a plan. “I don’t want to go to Shikshalaya. Yeah, but what do I tell them? Maybe if I convince Acharya to talk to Ba, then something can happen.” Again, there was an unknown yet familiar presence in the air. I was not alone in feeling it; even Acharya, who was walking in that direction, could feel it. But what is it? “Are you again talking to your horse friend, Aadya?” Ma asked. As a Jal-primary, I’d always had a hyperactive imagination and creativity, so I had imaginary friends common to my age. I yelled “No.” “Then come with me. Ba is calling you.”I rushed in that direction .

“So you found evidence of Dhanuk killing Prisha’s family. And how she was responsible for all the incidents with the nobles recently,”  Acharya said. Abhiram wanted to say something, but Ba cut him off. “I am going to handle this with the nobles. He will soon be stripped of his title. One sinner doesn’t condemn all, does it ? ”Ba said but his voice wavered. No matter how righteous one claims to be, punishing a noble is never simple. Ma and I soon arrived there. Formalities followed. Ma bowed to Acharya, as custom required  and younger-me soon followed suit.  Now comes the inevitable conversation . 

“Viraj! Aadya refuses to go to Shikshalaya.” Ma said. I looked at Ba and Acharya with pleading eyes since they were my only hope left. “Speak, my child,” Acharya said. “I want to be with Satkrit. I know he is a baby. I can't play with him, but I want to see my brother grow.” “Very well,” Acharya said. Both Ba and Ma looked at him as he added more to the conversation. “One of my disciples can tutor her, and when she comes of age we can send her to Shikshalaya, maybe with Satkrit then.” “Yes, master,” Ba agreed. Ma had a lot on her mind, but it was against her nature to give voice to it. I rushed toward Acharya and hugged him tight. These were the most cherished and peaceful years of my life. But I didn’t know that yet.`
  },
  {
    id: 4,
    number: 4,
    title: 'Shikshalaya',
    titleHi: 'शिक्षालय',
    content: `6 years have passed since that event. I was in the garden with Satkrit when Ma caught me. 

“You have to stop procrastinating .You’ve been doing this for weeks.You have to go to Shikshalaya,” Ma said. “Almost done,” I mumbled, my face clearly showing mischief . A year back  I was with Acharya with my legs both crossed when he enlightened some of my queries. “How am I lucky?” I asked. “Hmm…you want to know about elemental constitution.” I nodded. “You know about five elements right? Human beings are made of five elements. Their proportion and compatibility decide if they are healthy or not. You are Jal-primary. You can overpower Agni, but you’re vulnerable to Bhumi and Aakash though both are low in your chart by proportion, so their pull on you is weak.”  Something had been bothering me for a long time. “And with Satkrit that’s not the case. Is that why he is weak?”  I asked. “He is Vayu the only element that is vanquished by all except Aakash.” I was half-convinced and half-confused with my mouth opening then closing, struggling to find the right words. “That’s simply the Swaroop of the world,” Acharya said, like he’d figured out my inner conflict. “Then… How can I read these like you?” I glanced at him sideways.

 “Actually, it’s highly probable for you. I am also a Jal-primary like you,” he said. “Really?!” The gleam in my eyes returned for better or worse. 

In the garden, Satkrit, now almost as old as I once was, blew his cheeks out. Ba walked towards him. “What happened?” he asked. “Why can’t the teacher come like before? Didi is going. Who will play with me?” The innocence in his face when he asked could melt a glacier away, and he knew it. “But she will come to meet you on vacation,” Ba said. Ma and I interrupted the conversation at that exact moment. “Are you crying?! Oh… Why would you cry? Our Satkrit is brave,” I said.  “I want to go with you too, Didi,” he said. I looked towards Ma and Ba. After all, they would decide what to do. “Of course he can,” a familiar voice said. “Acharya,” I said, as I ran toward him and did all the formalities. Ma, Ba and Satkrit also bowed toward Acharya. “May you prosper!” he said. Acharya was always there whenever we faced difficulties like he knew it all along. “Aadya was an exception. She was only supposed to come to Shikshalaya when she was Satkrit’s age. It’s only right that we don’t separate the siblings. Without Aadya, Satkrit would feel lonely.” It was not as though this hadn’t crossed my parents’ mind, but with time, everyone was so fond of him, they couldn’t bear letting go of both of their children. “Acharya’s right. I will sit still, I will be quiet and a good kid. I promise.” I still remember the look of determination on his face .It was so funny that we couldn’t stop laughing. 

“Satkrit, let me see through the window too,” I said. Satkrit and I were both sitting in our car, which looked quite vintage from today’s standards. “But I am sitting here. You see through your own window,” he said. “ Shikshalaya is in that direction, so how would I see it from my window?” I said. As we grew, so did our banter. Shikshalaya came into view before the road did. It was not built like our mansion, all straight lines and waxed floor .The building was built in tiers. The lowest walls were the color of wet Bhumi, as if the building had simply grown there rather than been built. Still it was beautiful. Above that tier rose a building of blue-grey, most likely representing Jal. Higher still was a wall the color of ember, not that bright but warm, with small windows set into it. I thought I saw a flicker, but it was actually lanternlight. Above the ember-colored tier was a building representing Vayu. As we reached Shikshalaya, we could hear a faint hum from the whole structure, because of how the wind moved through it. At the very top was the Aakash ring, quite sober in comparison to the others. “Acharya for sure lived at the very top,” I said, as I finally gave up on his window. “How do you know?” Satkrit asked. “I don’t.It just sounds right.” It did sound right, maybe because of my younger self’s intuition or just common sense. The building was nothing flashy unlike the tiers below, probably because there was nothing left to want to see.`
  },
  {
    id: 5,
    number: 5,
    title: 'Peers',
    titleHi: 'सहपाठी',
    content: `It was understood that Satkrit and I would live in separate dorms. We got down from our transport as we reached Shikshalaya. All the luggage was unloaded when we saw someone approaching us. It was Acharya. To us, he may have been a familiar figure, but to Shikshalaya he was its head. “Satkrit! You will have to live here without your Didi. Are you ready for this?”  Acharya asked. “Yes!” he said, although he was quite expressive with us in this age. Satkrit was a man of few words, which was evident even here. I was sad to part from Satkrit here but I was even more excited to meet new people. When you were homeschooled, you didn’t really get chances to meet people your age. Ba’s friends do have children but can they be considered friends? 

A room was allotted to me. Apparently, I would be sharing my room with one more person. She would become the person I’d share many memories with. Each Dorm had rooms with sub-rooms for two people. The sub rooms were quite organized. Desks, almirahs attached to the walls , a bed for two and a restroom for personal business. I moved to my designated place and found a girl lying down on the bed. The girl had dark skin,with even darker, frizzy curls framing her face. She was quite pretty. “Hello! I am Aadya, you are Agnija right?!” I said. “I don’t want to talk to anyone. My stomach hurts.” Agnija said, her tone rude. “Aah! What happened? Is there anything I can do for help?” I asked. “Yeah, if you shut your mouth,” she said, again rudely. 

A knock could be heard. It was Shikshalaya’s healer. “Agnija! We do meet quite a lot, don’t we? With the same issue even,” the healer said.“ It's just my stomach that troubles me a lot,” Agnija said. “ It's just your elemental constitution. As you grow older, with some training, you will be fine. Have you met Aadya yet? You two are practically the same, if we just replace Agni with Jal,” she said, “Really!” I said. Because of my elemental constitution, younger me never needed healers of any sort, so that was a new experience for me. The healer put her hand on Agnija's stomach as a crimson symbol formed on her temple. She must be on her third Stara, then, I thought. I thought. There weren’t an abundance of doctors here. I’d seen a few doctors for Satkrit as he was really weak but a healer that was rare. My younger self was fascinated with it. I guess it was one of the few starting points of my ambition moving forward.  “Your classes start tomorrow. Be prepared,” the healer said. I nodded. So did Agnija, amidst pain that was slowly going away. The healer left, leaving me and Agnija behind in our room. It was awkward.

Satkrit was also placed in a dorm. Because he was younger, he’d been placed with a senior. The dorm setup was similar to the girls. “You’ll be living with me. I am Arnav," the senior said. Satkrit nodded. This was his first time leaving apart from his parents. Even with his sister here, they weren't in the same dorm.“He is living here now. That Ritul!” Someone said to Arnav. “Who is Ritul?” Satkrit asked. “He’s from a noble family infamous here because of his luck.” This ‘Luck’ again. No matter how hard my parents tried, word of Satkrit’s bad luck still reached him. This was the first time he’d heard anyone else labeled ‘Unlucky’. Ritul was born with an unkind constitution, maybe more than Satkrit. 

Classes were supposed to start tomorrow. There were separate mess halls for both males and females. Though people of the same kin, and friends, could visit each other in commonplace : the garden. Satkrit sat in his place; there were separate sections and times for people of different ages to have their meal. This was the first time for Satkrit to engage with his peers. Kids showed off their strength to each other. It didn’t look peaceful at all. Shikshalaya was definitely lenient at that time. “You are the new kid right?!” a kid asked. He was burly or at least from Satkrit’s perspective. Satkrit nodded. He noticed that this kid was previously challenging others back and forth. He may have come to him for the same reason. It was not wise to give in  to these fools. I was in the garden on my way to visit Satkrit. I reached the males’ mess hall when I saw some kids fighting. Maybe the same thing would have happened to me,  if I’d come here at Satkrit’s age or maybe not at all. One kid looked oddly familiar. “Wait! Is it Satkrit?” I asked. Not a good first day here for both of us.`
  },
  {
    id: 6,
    number: 6,
    title: 'Vaanya and Agnija',
    titleHi: 'वान्या और अग्निजा',
    content: `Bad luck never leaves Satkrit. “You are the new kid, right?” The boy blocking the bench asked. He had wide shoulders and thick knuckles, his clothes straining across his chest. The mess hall smelled of heat from all the kids crowded together. Steel plates clattered together on stone. Attendants' side glances were also not able to calm down the crowd. Satkrit looked at his half-eaten meal as he nodded. “Let’s fight! You and me,” the kid roared. “Why?!” Satkrit asked as he put down his spoon. This kid and his gang were the reason for all this ruckus here. “You are weak, right?” He said. Satkrit’s pulse quickened as he poked his cheek with his tongue. What an absolute drag it is. A heavy hand shoved him back into the wooden bench. “What are you doing?” Satkrit asked as he bared his teeth. Whatever this kid was up to, he succeeded. The kid moved back his right arm and threw his heavy, looping fist at my sibling, though Satkrit was faster as he dipped inside the swing and drove his knuckles into the boy’s abdomen not once, twice, but many times until the boy was wheezing. The mess hall stopped bustling, steel plates stopped clattering, everyone staring at the one-sided brawl. 

“What are you doing?” I shouted. The oddly familiar kid was Satkrit after all. As a kid, Satkrit was prone to anger to the point his whole body shook.  My younger-self broke through among the spectators. What he got into on the first day itself.“Di…” Before he could finish, I cut in.  “I am really sorry for my brother. He is a good kid, he doesn't do these things easily.” Satkrit looked up at me, biting and chewing at his lip. The stare could kill me, really. “He beat us for no reason at all. I will make a complaint to the teachers,” The kid roared. I bowed my head down deeper than my trust in my sibling. “We are sorry. Please let this slide only once,” I said. The bell rang. It was time for the kids to leave. I walked Satkrit to his dorm. “You shouldn’t do this again,” I told him. Satkrit went in without saying anything. Oh, these tendencies of my younger self would come with a great price. 

I sat in the common room, processing everything, when someone put a hand on me. I looked up to see a girl my age. She was dusky, like the lowest walls of Shikshalaya, adorned with gold. “Hello, I am Vaanya. You are roommates with Agnija if I am not wrong,” she said. “Uhm….Yes,” I said. “I heard the one shifting with her would be homeschooled, so I suppose it's your first time here?” she asked. “Yes,” I said as a flush crept toward my face. Vaanya was definitely more approachable and more interested in me than my roommate. “Here you are, Vaanya.” Agnija yelled, fully recovered, as she walked toward us with peers and seniors. “You are the new kid”, one said. “You came along with your brother, right?” said another, “I heard you are homeschooled,” said a third. Okay, a lot more people were interested in me than I had initially imagined. 

I soon began talking with them, at least listening to what they had to say. Classes, Shikshalaya, Entertainment, and all that. Classes were supposed to run from 8am to 4pm with study, chores, and then evening practices. Some of our leisure time went to books though even those were supposed to be monitored as we grew older, along with sports and these dorm common rooms and mess halls, where there was little supervision for gossip. “Ah….” I wanted to ask something regarding experience with the class I was going in and tips to get on with the studies, what to do and what not to, but the whole common room was bustling with chatter, and I couldn't help but swallow all my words back down. “Do you have any questions? Sorry about this, it's often this bustling,” Vaanya, sitting beside me, whispered. I shot my best polite smile back at her. “Everybody quiet, Aadya was saying something,” a familiar voice roared. It was Agnija. She remembered my name? What was she doing, I thought, my eyes widening. “Agnija, you don’t need to yell! You can just say that,” a senior said, finger stuck in her ear, laughing. The room quieted, everyone looking at me and Agnija. Agnija was popular even with her personality. I sighed, completely forgetting what I was going to say.`
  }
];

const ELEMENTS = [
  { en: 'Bhūmi', dev: 'भूमि', element: 'Landform', color: 'from-amber-700/30 to-stone-900', border: 'border-amber-600/50' },
  { en: 'Jal', dev: 'जल', element: 'Water', color: 'from-cyan-700/30 to-blue-950', border: 'border-cyan-500/50' },
  { en: 'Agni', dev: 'अग्नि', element: 'Fire', color: 'from-rose-700/30 to-orange-950', border: 'border-rose-500/50' },
  { en: 'Vayu', dev: 'वायु', element: 'Air', color: 'from-teal-700/30 to-emerald-950', border: 'border-teal-400/50' },
  { en: 'Akash', dev: 'आकाश', element: 'Space', color: 'from-indigo-700/30 to-violet-950', border: 'border-indigo-400/50' },
];

export default function App() {
  const [theme, setTheme] = useState<'light' | 'sepia' | 'dark'>('dark');
  const [activeTab, setActiveTab] = useState<'home' | 'panchmool' | 'blog' | 'admin'>('home');
  const [fontSize, setFontSize] = useState<number>(18);
  const [isPlayingTTS, setIsPlayingTTS] = useState(false);

  const [chapters, setChapters] = useState<Chapter[]>(FIVE_CHAPTERS);
  const [currentChapterId, setCurrentChapterId] = useState<number>(1);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcodeAttempt, setPasscodeAttempt] = useState('');
  const [authError, setAuthError] = useState('');
  const [adminSection, setAdminSection] = useState<'chapters' | 'blog' | 'stats'>('stats');

  const [chapNum, setChapNum] = useState(7);
  const [chapTitleEn, setChapTitleEn] = useState('');
  const [chapTitleHi, setChapTitleHi] = useState('');
  const [chapBody, setChapBody] = useState('');

  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogContent, setNewBlogContent] = useState('');

  // Interactions State
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);

  // Admin Stats State
  const [totalViews, setTotalViews] = useState(0);
  const [allReactions, setAllReactions] = useState<ChapterReaction[]>([]);
  const [totalCommentsCount, setTotalCommentsCount] = useState(0);

  const currentChapter = chapters.find(c => c.id === currentChapterId) || chapters[0];
  const ttsAbortController = useRef(false);

  // 1. Record site visits and load Google Translate
  useEffect(() => {
    const recordVisit = async () => {
      try {
        const { data } = await supabase
          .from('site_metrics')
          .select('total_views')
          .eq('id', 'main')
          .single();

        if (data) {
          const updatedViews = (data.total_views || 0) + 1;
          await supabase
            .from('site_metrics')
            .update({ total_views: updatedViews })
            .eq('id', 'main');
        }
      } catch (err) {
        console.error('Error tracking site visit:', err);
      }
    };

    recordVisit();

    (window as any).googleTranslateElementInit = () => {
      const container = document.getElementById('google_translate_element');
      if (container && container.childNodes.length > 0) return;

      if ((window as any).google && (window as any).google.translate) {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,ja,ko,es,fr,de',
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.type = 'text/javascript';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    } else if ((window as any).googleTranslateElementInit) {
      (window as any).googleTranslateElementInit();
    }
  }, []);

  // 2. Fetch reactions and comments whenever chapter changes
  useEffect(() => {
    fetchChapterReactions(currentChapter.number);
    fetchChapterComments(currentChapter.number);
  }, [currentChapter.number]);

  // 3. Stop narration on navigation
  useEffect(() => {
    ttsAbortController.current = true;
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingTTS(false);
  }, [currentChapterId, activeTab]);

  const fetchChapterReactions = async (chapterNumber: number) => {
    try {
      const { data } = await supabase
        .from('chapter_reactions')
        .select('likes, dislikes')
        .eq('chapter_number', chapterNumber)
        .single();

      if (data) {
        setLikes(data.likes || 0);
        setDislikes(data.dislikes || 0);
      } else {
        setLikes(0);
        setDislikes(0);
      }
    } catch {
      setLikes(0);
      setDislikes(0);
    }
  };

  const handleReaction = async (type: 'likes' | 'dislikes') => {
    const nextLikes = type === 'likes' ? likes + 1 : likes;
    const nextDislikes = type === 'dislikes' ? dislikes + 1 : dislikes;

    setLikes(nextLikes);
    setDislikes(nextDislikes);

    try {
      await supabase
        .from('chapter_reactions')
        .upsert(
          {
            chapter_number: currentChapter.number,
            likes: nextLikes,
            dislikes: nextDislikes,
          },
          { onConflict: 'chapter_number' }
        );
    } catch (err) {
      console.error('Error recording reaction:', err);
    }
  };

  const fetchChapterComments = async (chapterNumber: number) => {
    try {
      const { data } = await supabase
        .from('comments')
        .select('*')
        .eq('chapter_number', chapterNumber)
        .order('created_at', { ascending: false });

      if (data) setComments(data);
    } catch (err) {
      console.error('Error fetching comments:', err);
    }
  };

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || isSubmittingComment) return;

    setIsSubmittingComment(true);
    const payload = {
      chapter_number: currentChapter.number,
      author_name: authorName.trim() || 'Anonymous Reader',
      comment_text: newComment.trim(),
    };

    try {
      const { error } = await supabase.from('comments').insert([payload]);
      if (!error) {
        setNewComment('');
        fetchChapterComments(currentChapter.number);
      }
    } catch (err) {
      console.error('Error posting comment:', err);
    } finally {
      setIsSubmittingComment(false);
    }
  };

  const loadAdminStats = async () => {
    try {
      const { data: metrics } = await supabase
        .from('site_metrics')
        .select('total_views')
        .eq('id', 'main')
        .single();
      if (metrics) setTotalViews(metrics.total_views || 0);

      const { data: reactions } = await supabase
        .from('chapter_reactions')
        .select('*')
        .order('chapter_number', { ascending: true });
      if (reactions) setAllReactions(reactions);

      const { count } = await supabase
        .from('comments')
        .select('*', { count: 'exact', head: true });
      setTotalCommentsCount(count || 0);
    } catch (err) {
      console.error('Error fetching admin statistics:', err);
    }
  };

  const handleAdminAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    const input = passcodeAttempt.trim();
    const validPasscode = String(
      (import.meta as any).env?.VITE_ADMIN_PASSCODE || 'arushi86289'
    ).trim();

    if (input === validPasscode) {
      setIsAuthenticated(true);
      setPasscodeAttempt('');
      loadAdminStats();
    } else {
      setAuthError('Incorrect passcode. Please try again.');
    }
  };

  const handleSaveChapter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chapTitleEn.trim() || !chapBody.trim()) return;

    const newChap: Chapter = {
      id: Date.now(),
      number: chapNum,
      title: chapTitleEn,
      titleHi: chapTitleHi || chapTitleEn,
      content: chapBody,
    };

    setChapters([...chapters, newChap]);
    setCurrentChapterId(newChap.id);
    setChapNum(prev => prev + 1);
    setChapTitleEn('');
    setChapTitleHi('');
    setChapBody('');
  };

  const handlePublishBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBlogTitle.trim() || !newBlogContent.trim()) return;

    const newEntry: BlogPost = {
      id: Date.now(),
      title: newBlogTitle,
      date: new Date().toLocaleDateString(),
      content: newBlogContent,
    };

    setBlogs([newEntry, ...blogs]);
    setNewBlogTitle('');
    setNewBlogContent('');
  };

  const toggleTTS = () => {
    if (!window.speechSynthesis) {
      alert('Text-to-speech is not supported on this browser.');
      return;
    }

    if (isPlayingTTS) {
      ttsAbortController.current = true;
      window.speechSynthesis.cancel();
      setIsPlayingTTS(false);
      return;
    }

    ttsAbortController.current = false;

    let activeLang = 'en-US';
    const cookieMatch = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
    if (cookieMatch && cookieMatch[1]) {
      activeLang = cookieMatch[1];
    } else if (document.documentElement.lang && document.documentElement.lang !== 'en') {
      activeLang = document.documentElement.lang;
    }

    const contentElement = document.getElementById('chapter-content');
    let textChunks: string[] = [];

    if (contentElement) {
      const pElements = contentElement.querySelectorAll('p');
      if (pElements.length > 0) {
        pElements.forEach(p => {
          const t = (p as HTMLElement).innerText.trim();
          if (t) textChunks.push(t);
        });
      } else {
        const fullText = (contentElement as HTMLElement).innerText.trim();
        if (fullText) textChunks.push(fullText);
      }
    }

    if (textChunks.length === 0) {
      textChunks = currentChapter.content.split('\n\n').filter(p => p.trim().length > 0);
    }

    if (textChunks.length === 0) return;

    const voices = window.speechSynthesis.getVoices();
    const langPrefix = activeLang.toLowerCase().slice(0, 2);
    const matchedVoice = voices.find(v => v.lang.toLowerCase().startsWith(langPrefix)) || null;

    setIsPlayingTTS(true);
    window.speechSynthesis.cancel();

    let currentIndex = 0;

    const speakNextChunk = () => {
      if (ttsAbortController.current || currentIndex >= textChunks.length) {
        setIsPlayingTTS(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(textChunks[currentIndex]);
      utterance.lang = activeLang;
      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }
      utterance.rate = 0.95;

      utterance.onend = () => {
        currentIndex++;
        speakNextChunk();
      };

      utterance.onerror = () => {
        if (ttsAbortController.current) {
          setIsPlayingTTS(false);
        } else {
          currentIndex++;
          speakNextChunk();
        }
      };

      window.speechSynthesis.speak(utterance);
    };

    speakNextChunk();
  };

  const getThemeStyle = () => {
    if (theme === 'light') return 'bg-[#FAFAFA] text-[#1A1A1A]';
    if (theme === 'sepia') return 'bg-[#F4ECD8] text-[#433422]';
    return 'bg-[#121212] text-[#E4E4E7]';
  };

  const totalLikes = allReactions.reduce((sum, r) => sum + (r.likes || 0), 0);
  const totalDislikes = allReactions.reduce((sum, r) => sum + (r.dislikes || 0), 0);

  return (
    <div className={`min-h-screen font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-200 ${getThemeStyle()}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-[#F4B8C5]/20 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
          <span className="font-serif tracking-wider text-xl font-bold notranslate">
            <span className="text-[#D87D94]">A</span>ru<span className="text-[#D87D94]">SHI</span> Collective
          </span>
        </div>

        <nav className="flex items-center gap-5 text-sm">
          <button onClick={() => setActiveTab('home')} className={`hover:text-[#D87D94] transition ${activeTab === 'home' ? 'text-[#D87D94] font-semibold' : ''}`}>Home</button>
          <button onClick={() => setActiveTab('panchmool')} className={`hover:text-[#D87D94] transition ${activeTab === 'panchmool' ? 'text-[#D87D94] font-semibold' : ''}`}>Panch Mool</button>
          <button onClick={() => setActiveTab('blog')} className={`hover:text-[#D87D94] transition ${activeTab === 'blog' ? 'text-[#D87D94] font-semibold' : ''}`}>Blog</button>

          {/* Google Translate Mount */}
          <div id="google_translate_element" className="scale-90"></div>

          {/* Theme Switcher */}
          <div className="flex items-center gap-1 bg-black/10 dark:bg-white/10 p-1 rounded-full text-xs">
            <button onClick={() => setTheme('light')} className={`px-2.5 py-0.5 rounded-full ${theme === 'light' ? 'bg-white text-black font-bold shadow-sm' : 'opacity-60'}`}>Light</button>
            <button onClick={() => setTheme('sepia')} className={`px-2.5 py-0.5 rounded-full ${theme === 'sepia' ? 'bg-[#EBDCB9] text-[#433422] font-bold shadow-sm' : 'opacity-60'}`}>Sepia</button>
            <button onClick={() => setTheme('dark')} className={`px-2.5 py-0.5 rounded-full ${theme === 'dark' ? 'bg-[#222] text-[#F4B8C5] font-bold shadow-sm' : 'opacity-60'}`}>Dark</button>
          </div>
        </nav>
      </header>

      {/* 1. HOME TAB */}
      {activeTab === 'home' && (
        <main className="max-w-3xl mx-auto px-6 py-16 space-y-12">
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#D87D94] tracking-wide" style={{ fontFamily: 'Cinzel, serif' }}>
              AruSHI Collective
            </h1>
            <p className="font-['Lora'] text-base md:text-lg opacity-85 leading-relaxed italic max-w-xl mx-auto">
              Home to art of narrative craft, Panch Mool, and other creative ventures.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActiveTab('panchmool')}
                className="px-6 py-2.5 rounded-full bg-[#D87D94] text-white hover:bg-[#B85B6C] text-xs font-semibold uppercase tracking-wider transition shadow"
              >
                Explore Panch Mool &rarr;
              </button>
            </div>
          </section>

          {/* Meet the Person Section */}
          <section className="border-t border-[#F4B8C5]/20 pt-10">
            <div className="p-8 rounded-3xl border border-[#F4B8C5]/40 bg-gradient-to-br from-[#F4B8C5]/15 via-white/5 to-[#D87D94]/10 backdrop-blur-md shadow-sm text-center space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D87D94]">Behind The Collective</span>
              <h2 className="text-2xl font-serif font-bold text-[#D87D94]" style={{ fontFamily: 'Cinzel, serif' }}>Meet the Person</h2>
              <p className="text-sm opacity-90 leading-relaxed font-['Lora'] max-w-xl mx-auto">
                Welcome to my personal sanctuary. AruSHI Collective where I bring my narrative craft to life, develop long form serialized fantasy worlds like Panch Mool and share meaningful independent projects.
              </p>
              <div className="pt-2">
                <button 
                  onClick={() => setActiveTab('blog')}
                  className="text-xs font-semibold text-[#D87D94] hover:underline"
                >
                  Read Creator Notes &amp; Updates &rarr;
                </button>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* 2. COMBINED PANCH MOOL & READER TAB */}
      {activeTab === 'panchmool' && (
        <main className="max-w-4xl mx-auto px-6 py-10 space-y-12">
          {/* Novel Overview */}
          <section className="text-center space-y-4 max-w-2xl mx-auto">
            <div>
              <span className="px-3 py-1 text-xs font-semibold rounded-md border border-[#F4B8C5]/40 text-[#D87D94] uppercase tracking-wider">
                Serialized Web Novel
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#D87D94] tracking-wider" style={{ fontFamily: 'Cinzel, serif' }}>
              Panch Mool
            </h1>

            <p className="font-['Lora'] italic text-sm opacity-85 leading-relaxed">
              Five roots of existence. One waking reality. Follow Aadya, Satkrit, and their peers within Shikshalaya as their elemental constitutions govern life, strength, and duty.
            </p>

            {/* External Platform Links */}
            <div className="pt-4 border-t border-[#F4B8C5]/20 flex flex-col items-center gap-2">
              <p className="text-xs font-semibold tracking-widest uppercase opacity-60">
                Also Available On
              </p>
              <div className="flex items-center justify-center gap-3 w-full max-w-md notranslate">
                <a 
                  href="https://www.royalroad.com/home" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 text-center py-2 px-3 rounded-full text-xs font-medium border border-[#D87D94]/40 bg-black/5 dark:bg-white/5 hover:bg-[#D87D94] hover:text-white hover:border-[#D87D94] transition shadow-sm"
                >
                  Royal Road
                </a>
                <a 
                  href="https://www.wattpad.com/story/415923958-panch-mool" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 text-center py-2 px-3 rounded-full text-xs font-medium border border-[#D87D94]/40 bg-black/5 dark:bg-white/5 hover:bg-[#D87D94] hover:text-white hover:border-[#D87D94] transition shadow-sm"
                >
                  Wattpad
                </a>
                <a 
                  href="https://wbnv.in/a/e5k65Qk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 text-center py-2 px-3 rounded-full text-xs font-medium border border-[#D87D94]/40 bg-black/5 dark:bg-white/5 hover:bg-[#D87D94] hover:text-white hover:border-[#D87D94] transition shadow-sm"
                >
                  Webnovel
                </a>
              </div>
            </div>
          </section>

          {/* Elemental Resonance System */}
          <section className="space-y-6 text-center border-t border-[#F4B8C5]/20 pt-8">
            <h2 className="font-serif text-2xl font-bold text-[#D87D94]" style={{ fontFamily: 'Cinzel, serif' }}>Pancha Mool &bull; पञ्चमूल</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {ELEMENTS.map((el) => (
                <div key={el.en} className={`p-5 rounded-2xl border ${el.border} bg-gradient-to-b ${el.color} flex flex-col items-center transition hover:-translate-y-1`}>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-lg font-['Noto_Sans_Devanagari'] font-bold text-white mb-2 shadow">
                    {el.dev}
                  </div>
                  <span className="font-semibold text-xs text-white">{el.en}</span>
                  <span className="text-[11px] text-gray-300">{el.element}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Integrated Reader Section */}
          <section className="border-t border-[#F4B8C5]/20 pt-8 space-y-6">
            <div className="sticky top-20 z-40 p-3 rounded-xl backdrop-blur-md bg-black/10 dark:bg-neutral-900/90 border border-[#F4B8C5]/30 flex flex-wrap items-center justify-between gap-3 text-xs shadow-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#D87D94]">Chapter:</span>
                <select 
                  value={currentChapterId} 
                  onChange={(e) => setCurrentChapterId(Number(e.target.value))}
                  className="bg-transparent border border-[#F4B8C5]/40 rounded px-2.5 py-1 outline-none text-xs"
                >
                  {chapters.map(c => (
                    <option key={c.id} value={c.id} className="text-black">
                      Ch. {c.number}: {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="opacity-60">Font:</span>
                <button onClick={() => setFontSize(Math.max(14, fontSize - 2))} className="px-2 py-0.5 rounded border border-gray-400/30">A-</button>
                <button onClick={() => setFontSize(Math.min(24, fontSize + 2))} className="px-2 py-0.5 rounded border border-gray-400/30">A+</button>
              </div>

              <button 
                onClick={toggleTTS} 
                className="px-3.5 py-1 rounded-full bg-[#D87D94] text-white hover:bg-[#B85B6C] font-semibold transition shadow-sm flex items-center gap-1.5"
              >
                {isPlayingTTS ? (
                  <>
                    <span className="inline-block animate-pulse">⏹</span> Stop Narration
                  </>
                ) : (
                  <>
                    <span>▶</span> Listen Narration
                  </>
                )}
              </button>
            </div>

            <article 
              id="chapter-content"
              className="font-['Lora'] leading-relaxed space-y-6 max-w-3xl mx-auto" 
              style={{ fontSize: `${fontSize}px` }}
            >
              <div className="text-center mb-8 border-b border-[#F4B8C5]/20 pb-6">
                <span className="text-xs uppercase tracking-widest text-[#D87D94] font-semibold">
                  Chapter {currentChapter.number}
                </span>
                <h2 className="font-serif font-bold text-3xl mt-2 text-[#D87D94]" style={{ fontFamily: 'Cinzel, serif' }}>
                  {currentChapter.title}
                </h2>
                <p className="text-sm font-['Noto_Sans_Devanagari'] text-[#D87D94]/80 mt-1">{currentChapter.titleHi}</p>
              </div>

              {currentChapter.content
                .split('\n\n')
                .map((paragraph, idx) => (
                  <p key={idx} className="text-justify leading-loose whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
            </article>

            {/* Chapter Pagination */}
            <div className="flex items-center justify-between border-t border-[#F4B8C5]/20 pt-6 mt-12 text-xs max-w-3xl mx-auto">
              <button
                disabled={currentChapter.number === 1}
                onClick={() => {
                  const prev = chapters.find(c => c.number === currentChapter.number - 1);
                  if (prev) setCurrentChapterId(prev.id);
                }}
                className="px-4 py-2 rounded-full border border-[#D87D94]/40 disabled:opacity-30 hover:border-[#D87D94] transition"
              >
                &larr; Previous Chapter
              </button>

              <span className="opacity-50">
                Chapter {currentChapter.number} of {chapters.length}
              </span>

              <button
                disabled={currentChapter.number === chapters.length}
                onClick={() => {
                  const next = chapters.find(c => c.number === currentChapter.number + 1);
                  if (next) setCurrentChapterId(next.id);
                }}
                className="px-4 py-2 rounded-full border border-[#D87D94]/40 disabled:opacity-30 hover:border-[#D87D94] transition"
              >
                Next Chapter &rarr;
              </button>
            </div>

            {/* LIKES, DISLIKES & COMMENT SECTION */}
            <div className="max-w-3xl mx-auto mt-14 pt-8 border-t border-[#F4B8C5]/20 space-y-8">
              {/* Like / Dislike Bar */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-[#F4B8C5]/20">
                <span className="text-xs uppercase font-semibold text-[#D87D94] tracking-wider">
                  React to Chapter {currentChapter.number}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleReaction('likes')}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 text-xs font-semibold transition"
                  >
                    👍 <span>{likes}</span>
                  </button>
                  <button
                    onClick={() => handleReaction('dislikes')}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose-500/40 text-rose-400 hover:bg-rose-500/10 text-xs font-semibold transition"
                  >
                    👎 <span>{dislikes}</span>
                  </button>
                </div>
              </div>

              {/* Comments Header & Form */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#D87D94]">Comments ({comments.length})</h3>
                
                <form onSubmit={handleAddComment} className="space-y-3 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-[#F4B8C5]/20">
                  <input
                    type="text"
                    placeholder="Your name or handle (optional)"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[#F4B8C5]/30 bg-transparent text-xs outline-none focus:border-[#D87D94]"
                  />
                  <textarea
                    rows={3}
                    placeholder="Share your thoughts about this chapter..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[#F4B8C5]/30 bg-transparent text-xs font-['Lora'] outline-none focus:border-[#D87D94]"
                    required
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmittingComment}
                      className="px-5 py-2 rounded-full bg-[#D87D94] text-white hover:bg-[#B85B6C] text-xs font-semibold uppercase tracking-wider transition disabled:opacity-50"
                    >
                      {isSubmittingComment ? 'Posting...' : 'Post Comment'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Comments Feed */}
              <div className="space-y-3">
                {comments.length === 0 ? (
                  <p className="text-xs opacity-50 italic">No comments yet. Be the first to share your thoughts!</p>
                ) : (
                  comments.map((item) => (
                    <div key={item.id} className="p-3.5 rounded-xl border border-[#F4B8C5]/20 bg-black/5 dark:bg-white/5 text-xs space-y-1.5">
                      <div className="flex items-center justify-between opacity-60">
                        <span className="font-semibold text-[#D87D94]">{item.author_name}</span>
                        <span className="text-[10px]">{new Date(item.created_at).toLocaleDateString()}</span>
                      </div>
                      <p className="opacity-85 font-['Lora'] leading-relaxed whitespace-pre-line text-sm">
                        {item.comment_text}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        </main>
      )}

      {/* 3. BLOG TAB */}
      {activeTab === 'blog' && (
        <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-3xl font-bold text-[#D87D94]" style={{ fontFamily: 'Cinzel, serif' }}>Blog</h2>
          </div>

          <div className="space-y-6">
            {blogs.length === 0 ? (
              <p className="text-center text-sm opacity-60">No posts yet.</p>
            ) : (
              blogs.map((post) => (
                <article key={post.id} className="p-6 rounded-2xl border border-[#F4B8C5]/30 bg-black/5 dark:bg-white/5 space-y-3">
                  <div className="flex items-center justify-between text-xs opacity-60">
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold hover:text-[#D87D94] transition">{post.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed whitespace-pre-line">{post.content}</p>
                </article>
              ))
            )}
          </div>
        </main>
      )}

      {/* 4. SECRET ADMIN DASHBOARD */}
      {activeTab === 'admin' && (
        <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
          {!isAuthenticated ? (
            <div className="max-w-md mx-auto p-8 rounded-2xl border border-[#D87D94]/40 bg-black/10 dark:bg-neutral-900/80 backdrop-blur text-center space-y-5">
              <span className="text-4xl">🗝️</span>
              <h2 className="font-serif text-2xl font-bold text-[#D87D94]" style={{ fontFamily: 'Cinzel, serif' }}>Admin</h2>
              <form onSubmit={handleAdminAuth} className="space-y-4">
                <input 
                  type="password" 
                  value={passcodeAttempt}
                  onChange={(e) => setPasscodeAttempt(e.target.value)}
                  placeholder="Passcode"
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-700 bg-neutral-950 text-white text-center tracking-widest text-sm focus:border-[#D87D94] outline-none"
                  autoFocus
                />
                {authError && <p className="text-xs text-rose-500 font-semibold">{authError}</p>}
                <button type="submit" className="w-full py-2.5 rounded-full bg-[#D87D94] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#B85B6C] transition">
                  Unlock
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex flex-wrap items-center justify-between border-b border-[#F4B8C5]/20 pb-4 gap-4">
                <h2 className="font-serif text-2xl font-bold text-[#D87D94]" style={{ fontFamily: 'Cinzel, serif' }}>Admin Dashboard</h2>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => { setAdminSection('stats'); loadAdminStats(); }} 
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${adminSection === 'stats' ? 'bg-[#D87D94] text-white' : 'border border-[#F4B8C5]/30'}`}
                  >
                    Overview & Stats
                  </button>
                  <button 
                    onClick={() => setAdminSection('chapters')} 
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${adminSection === 'chapters' ? 'bg-[#D87D94] text-white' : 'border border-[#F4B8C5]/30'}`}
                  >
                    Chapters ({chapters.length})
                  </button>
                  <button 
                    onClick={() => setAdminSection('blog')} 
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${adminSection === 'blog' ? 'bg-[#D87D94] text-white' : 'border border-[#F4B8C5]/30'}`}
                  >
                    Blog ({blogs.length})
                  </button>
                  <button 
                    onClick={() => setIsAuthenticated(false)} 
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-rose-500/40 text-rose-400 hover:bg-rose-500 hover:text-white transition"
                  >
                    Lock
                  </button>
                </div>
              </div>

              {/* STATS SECTION */}
              {adminSection === 'stats' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl border border-blue-500/30 bg-blue-500/5">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400">Total Site Visits</span>
                      <p className="text-2xl font-bold mt-1 text-blue-300">{totalViews}</p>
                    </div>
                    <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">Total Likes</span>
                      <p className="text-2xl font-bold mt-1 text-emerald-300">{totalLikes}</p>
                    </div>
                    <div className="p-4 rounded-xl border border-rose-500/30 bg-rose-500/5">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-400">Total Dislikes</span>
                      <p className="text-2xl font-bold mt-1 text-rose-300">{totalDislikes}</p>
                    </div>
                    <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/5">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-400">Total Comments</span>
                      <p className="text-2xl font-bold mt-1 text-purple-300">{totalCommentsCount}</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl border border-[#F4B8C5]/30 bg-black/5 dark:bg-white/5 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#D87D94]">Chapter Reactions Breakdown</h3>
                    <table className="w-full text-left text-xs border border-neutral-700/40 rounded-lg overflow-hidden">
                      <thead className="bg-black/10 dark:bg-white/10 text-[#D87D94]">
                        <tr>
                          <th className="p-2.5">Chapter</th>
                          <th className="p-2.5">Likes</th>
                          <th className="p-2.5">Dislikes</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-700/30">
                        {allReactions.length === 0 ? (
                          <tr>
                            <td colSpan={3} className="p-3 text-center opacity-60">No reactions logged yet.</td>
                          </tr>
                        ) : (
                          allReactions.map(r => (
                            <tr key={r.chapter_number}>
                              <td className="p-2.5 font-medium">Chapter {r.chapter_number}</td>
                              <td className="p-2.5 text-emerald-400 font-semibold">{r.likes}</td>
                              <td className="p-2.5 text-rose-400 font-semibold">{r.dislikes}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* CHAPTERS SECTION */}
              {adminSection === 'chapters' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-xl border border-[#F4B8C5]/30 bg-black/5 dark:bg-white/5 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#D87D94]">Chapters</h3>
                    <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                      {chapters.map(c => (
                        <div key={c.id} className="p-2.5 rounded-lg border border-neutral-700/40 bg-black/10 dark:bg-white/5 text-xs flex justify-between items-center">
                          <div>
                            <span className="font-semibold block">Ch {c.number}: {c.title}</span>
                            <span className="opacity-50 text-[10px]">{c.titleHi}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSaveChapter} className="md:col-span-2 p-6 rounded-xl border border-[#F4B8C5]/30 bg-black/5 dark:bg-white/5 space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#D87D94]">Add Chapter {chapNum}</h3>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="text-[11px] opacity-60">Chapter #</label>
                        <input 
                          type="number" 
                          value={chapNum} 
                          onChange={(e) => setChapNum(Number(e.target.value))}
                          className="w-full mt-1 p-2 rounded-lg border border-neutral-700 bg-neutral-900 text-white text-xs" 
                          required
                        />
                      </div>
                      <div>
                        <label className="text-[11px] opacity-60">Title</label>
                        <input 
                          type="text" 
                          value={chapTitleEn} 
                          onChange={(e) => setChapTitleEn(e.target.value)}
                          placeholder="e.g. Sworn Siblings"
                          className="w-full mt-1 p-2 rounded-lg border border-neutral-700 bg-neutral-900 text-white text-xs" 
                          required
                        />
                      </div>
                      <div>
                        <label className="text-[11px] opacity-60">Title (Hindi)</label>
                        <input 
                          type="text" 
                          value={chapTitleHi} 
                          onChange={(e) => setChapTitleHi(e.target.value)}
                          placeholder="e.g. शपथबद्ध सहोदर"
                          className="w-full mt-1 p-2 rounded-lg border border-neutral-700 bg-neutral-900 text-white text-xs" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] opacity-60 mb-1 block">Content</label>
                      <textarea 
                        rows={10}
                        value={chapBody} 
                        onChange={(e) => setChapBody(e.target.value)}
                        className="w-full p-3 rounded-lg border border-neutral-700 bg-neutral-900 text-white text-xs font-['Lora'] outline-none focus:border-[#D87D94]"
                        required
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-2.5 rounded-full bg-[#D87D94] text-white hover:bg-[#B85B6C] font-semibold text-xs tracking-wider uppercase transition shadow"
                    >
                      Publish Chapter
                    </button>
                  </form>
                </div>
              )}

              {/* BLOG SECTION */}
              {adminSection === 'blog' && (
                <form onSubmit={handlePublishBlog} className="p-6 rounded-xl border border-[#F4B8C5]/30 bg-black/5 dark:bg-white/5 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#D87D94]">New Blog Post</h3>
                  <div>
                    <label className="text-[11px] opacity-60">Title</label>
                    <input 
                      type="text" 
                      value={newBlogTitle} 
                      onChange={(e) => setNewBlogTitle(e.target.value)}
                      className="w-full mt-1 p-2 rounded-lg border border-neutral-700 bg-neutral-900 text-white text-xs" 
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[11px] opacity-60">Content</label>
                    <textarea 
                      rows={6}
                      value={newBlogContent} 
                      onChange={(e) => setNewBlogContent(e.target.value)}
                      className="w-full mt-1 p-3 rounded-lg border border-neutral-700 bg-neutral-900 text-white text-xs"
                      required
                    />
                  </div>
                  <button type="submit" className="w-full py-2.5 rounded-full bg-[#D87D94] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#B85B6C] transition">
                    Publish Post
                  </button>
                </form>
              )}
            </div>
          )}
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-[#F4B8C5]/20 mt-20 py-8 px-6 text-center space-y-3">
        <p className="text-xs uppercase font-semibold text-[#D87D94] tracking-widest">Connect & Support</p>
        <div className="flex justify-center gap-4 text-sm notranslate">
          <a 
            href="https://instagram.com/panchmoolcomic" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#D87D94] transition"
          >
            Instagram
          </a>
          <a 
            href="https://youtube.com/@arushi-n6l" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#D87D94] transition"
          >
            YouTube
          </a>
          <a 
            href="https://patreon.com/AruSHI631" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-3 py-0.5 rounded-full border border-[#D87D94] text-[#D87D94] hover:bg-[#D87D94] hover:text-white transition"
          >
            Patreon
          </a>
          <a 
            href="https://ko-fi.com/arushi86289" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-3 py-0.5 rounded-full bg-[#D87D94] text-white hover:bg-[#B85B6C] transition"
          >
            Ko-fi
          </a>
        </div>
        
        <p className="text-xs opacity-70 pt-2 select-none">
          <span 
            onClick={() => setActiveTab('admin')} 
            className="cursor-pointer hover:text-[#D87D94] transition"
          >
            &copy;
          </span>{' '}
          <span className="font-serif font-semibold notranslate">
            <span className="text-[#D87D94]">A</span>ru<span className="text-[#D87D94]">SHI</span> Collective
          </span>{' '}
          &bull; Panchmūla
        </p>
      </footer>
    </div>
  );
} 