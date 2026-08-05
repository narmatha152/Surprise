// ============================================================
//  BIRTHDAY DATA — Change everything here easily!
// ============================================================

// ── Memory images ──────────────────────────────────────────
import memOne    from '../assets/memory/memory_one.jpeg';
import memTwo    from '../assets/memory/memory_two.jpeg';
import memThree  from '../assets/memory/memory_three.jpeg';
import memFour   from '../assets/memory/memory_four.jpeg';
import memFive   from '../assets/memory/memory_five.jpeg';
import memSix    from '../assets/memory/memory_six.jpeg';
import memSeven  from '../assets/memory/memory_seven.jpeg';
import memHand   from '../assets/memory/memory_hand.jpeg';

// ── Story images ───────────────────────────────────────────
import scratchCardImg     from '../assets/story/scratch_card_img.jpg';
import videoMemory        from '../assets/story/vedio_memory.mov';
import story12th          from '../assets/story/12th_img.webp';
import storyBby           from '../assets/story/bby_img.png';
import storyBluetooth     from '../assets/story/bluthooth_img.png';
import storyBluetooth2    from '../assets/story/blutooth_img2.png';
import storyCheeksKiss    from '../assets/story/cheeks_kiss_img.webp';
import storyChestSleep    from '../assets/story/chestsleep_img.webp';
import storyCollege       from '../assets/story/college_img.webp';
import storyEighth        from '../assets/story/eigth_img.webp';
import storyFifth         from '../assets/story/fifth_img.png';
import storyForeheadKiss  from '../assets/story/forehead_kiss_img.png';
import storyLeft          from '../assets/story/left_img.webp';
import storyMirrorHug     from '../assets/story/mirror_hug_img.webp';
import storyMirrorPurple  from '../assets/story/mirror_img_purple.webp';
import storyPeaceful      from '../assets/story/peacefull_img.webp';
import storySareePull     from '../assets/story/sareepull_img.webp';
import storySleepLap      from '../assets/story/sleep_lap_img.png';
import storySleepChest    from '../assets/story/sleep_onchest_img.webp';
import storySleepShoulder from '../assets/story/sleep_onshoulder_img.webp';
import puzzleImg          from '../assets/story/puzzle_img.jpeg';

// ============================================================

export const birthdayConfig = {
  name: "Jeeva Mama",
  loadingDuration: 5000,
  correctAnswers: ["narmatha", "narmadha"],
  secretQuestion: "Who is your favourite girl in this world? 💖",
  answerHint: "Type her name...",
};

export const videoConfig = {
  src: videoMemory,
  poster: "",
};

export const scratchCardImage = scratchCardImg;

// ── UI text — English & Tamil ───────────────────────────────
export const uiText = {
  en: {
    // BalloonSurprise
    galleryHeading: "Her Beautiful Journey 🌸",
    gallerySub: "From little girl to the love of his life — every moment is precious 💖",
    balloonTitle: "Pop each balloon to reveal our story 🎈",
    balloonSub: (done, total) => `${done} of ${total} revealed`,
    allPoppedText: "You discovered the whole story! 🥹✨",
    allPoppedLoading: "Opening your story gallery... 📖",
    introTitle: "There are still a few surprises waiting for you Mah sweet heart...",
    introSub: "Pop the balloons to discover a beautiful love story 💖",
    continueBtn: "Continue 🎈",
    nextBtn: "Next Surprise 🧩",
    closeBtn: "Close 💖",

    // GiftBox
    giftPreText: "✨ Something special, just for you Mr.Handsome ✨",
    giftTitle: "A surprise is waiting for you bby ✨",
    giftTapOpen: "Tap the gift to open 🎁",
    giftOpening: "✨ Opening your surprise...",

    // QuestionLock
    qLockTag: "🔐 A little secret is locked away",
    qLockWrong1: "Hmm... that's not quite right ✨",
    qLockWrong2: (left) => `Try again (${left} tries left)`,
    qLockCorrect: "✨ Yes! That's right! Opening... 💖",
    qLockAngryText1: "That's not right! 😤",
    qLockAngryText2: "Think harder... you know who! 💭",
    qLockAngrySub: "( Hint: She's rowdy 💖 )",
    qLockAngryPlaceholder: "Come on, you know her! 💫",
    qLockAngryBtn: "Try Again 💪",
    qLockUnlockBtn: "Unlock 🔓",
    qLockOpeningBtn: "Opening ✨",

    // LoadingScreen
    loadMainText: "Opening something special for you Mine...",
    loadPhases: [
      'Unlocking your surprise...',
      'Sprinkling some magic ✨',
      'Lighting the candles 🕯️',
      'Getting everything ready 🌟',
      'Almost there... 💖',
    ],

    // BirthdayReveal
    revealSub: "Today is your special day ✨",
    revealPlayBtn: "▶ Play Your Special Video 🎬",
    revealVideoLabel: "🎬 A moment just for you",
    revealNextBtn: "See Your Memories 📸",

    // MemoryCarousel
    memEyebrow: "📸 Memory Lane",
    memHeading: "Beautiful Moments Together",
    memNextBtn: "One More Surprise 🎈",

    // PuzzleGame
    puzEyebrow: "🧩 Puzzle Surprise",
    puzHeading: "Put the pieces together to reveal the next surprise 🧩",
    puzHintCoarse: "Tap one piece, then tap another to swap",
    puzHintFine: "Drag and drop pieces to rearrange",
    puzLoading: "Loading image... ✨",
    puzSuccess: "You solved it! 🥳",
    puzCaption: "Ammu, idhu mari oru frame in future la namalum edukakanum...💖konjam cringe ah eruko srikadha da 😅",
    puzFinalBtn: "Final Surprise ✨",
    puzShuffleBtn: "↺ Shuffle Again",

    // ScratchCard
    scrEyebrow: "💳 Final Surprise",
    scrHeading: "Scratch to reveal your surprise ✨",
    scrLabel1: "✦  Scratch here  ✦",
    scrLabel2: "Reveal your surprise ✨",
    scrProgress: (pct) => `${pct}% scratched`,
    scrSuccess: "Your surprise is revealed 💖",
    scrLetterBtn: "A Letter For You 💌",
    scrLetterHeading: "A Letter For You",
    scrSkipBtn: "Skip to end ⏩",
    scrEndBtn: "The Journey Ends Here 🌟",

    // EndingScreen
    endTitle: (name) => `Happy Birthday ${name}! 🎂`,
    endMessage1: "This journey was made with love, just for you.",
    endMessage2: "May every single day of your life feel this magical. ✨",
    endSign: "With all the love in the world 🌍",
    endReplayBtn: "↺ Replay the Journey",
  },
  ta: {
    // BalloonSurprise
    galleryHeading: "அவளின் அழகான பயணம் 🌸",
    gallerySub: "சின்னப் பொண்ணிலிருந்து என் இதயத்தின் ராணி வரை — ஒவ்வொரு தருணமும் விலைமதிக்க முடியாதது 💖",
    balloonTitle: "ஒவ்வொரு பலூனையும் வெடி — நம்ம கதை தெரியும் 🎈",
    balloonSub: (done, total) => `${total} ல் ${done} தெரிந்தது`,
    allPoppedText: "நம்ம கதை முழுசா கண்டுபிடிச்சே! 🥹✨",
    allPoppedLoading: "உன்னோட கதை gallery திறக்குது... 📖",
    introTitle: "உனக்காக இன்னும் சில surprises காத்திருக்கு மா...",
    introSub: "பலூன்களை வெடி — ஒரு அழகான காதல் கதை தெரியும் 💖",
    continueBtn: "தொடரலாம் 🎈",
    nextBtn: "அடுத்த surprise 🧩",
    closeBtn: "மூடு 💖",

    // GiftBox
    giftPreText: "✨ உனக்காக ஸ்பெஷல் ஒண்ணு காத்திருக்கு ஹேண்ட்சம் ✨",
    giftTitle: "உனக்காக ஒரு சர்ப்ரைஸ் காத்துக்கிட்டு இருக்கு செல்லம் ✨",
    giftTapOpen: "பரிசை திறக்க தட்டு 🎁",
    giftOpening: "✨ உன் சர்ப்ரைஸ் திறக்குது...",

    // QuestionLock
    qLockTag: "🔐 ஒரு குட்டி ரகசியம் பூட்டப்பட்டிருக்கு",
    qLockWrong1: "ஹ்ம்ம்... அது சரியில்ல ✨",
    qLockWrong2: (left) => `மறுபடியும் ட்ரை பண்ணு (${left} வாய்ப்புகள் இருக்கு)`,
    qLockCorrect: "✨ சூப்பர்! கரெக்ட்! திறக்குது... 💖",
    qLockAngryText1: "அது தப்பு! 😤",
    qLockAngryText2: "நல்லா யோசி... உனக்கு தெரியும்! 💭",
    qLockAngrySub: "( Hint: அவ ரொம்ப அழகானவ 💖 )",
    qLockAngryPlaceholder: "கமான், உனக்கு அவள தெரியும்! 💫",
    qLockAngryBtn: "மறுபடியும் ட்ரை பண்ணு 💪",
    qLockUnlockBtn: "திற 🔓",
    qLockOpeningBtn: "திறக்குது ✨",

    // LoadingScreen
    loadMainText: "உனக்காக ஒரு ஸ்பெஷல் பரிசு திறக்கப்படுது...",
    loadPhases: [
      'உன் சர்ப்ரைஸ் அன்லாக் ஆகுது...',
      'கொஞ்சம் மேஜிக் தூவப்படுது ✨',
      'மெழுகுவர்த்திகள் ஏற்றப்படுது 🕯️',
      'எல்லாம் ரெடி ஆகுது 🌟',
      'நெருங்கிட்டோம்... 💖',
    ],

    // BirthdayReveal
    revealSub: "இன்று உன்னோட ஸ்பெஷல் நாள் ✨",
    revealPlayBtn: "▶ உன்னோட ஸ்பெஷல் வீடியோவ ப்ளே பண்ணு 🎬",
    revealVideoLabel: "🎬 உனக்காக ஒரு தருணம்",
    revealNextBtn: "நம்ம நினைவுகளை பாரு 📸",

    // MemoryCarousel
    memEyebrow: "📸 நினைவுகளின் பயணம்",
    memHeading: "நம்ம அழகான தருணங்கள்",
    memNextBtn: "இன்னொரு சர்ப்ரைஸ் 🎈",

    // PuzzleGame
    puzEyebrow: "🧩 பஸில் சர்ப்ரைஸ்",
    puzHeading: "அடுத்த சர்ப்ரைஸ பாக்க துண்டுகளை ஒண்ணா சேரு 🧩",
    puzHintCoarse: "ஒரு துண்ட தொட்டுட்டு, இன்னொன்ன தொட்டு மாத்து",
    puzHintFine: "துண்டுகளை இழுத்து வந்து வை",
    puzLoading: "படம் லோட் ஆகுது... ✨",
    puzSuccess: "நீ கண்டுபிடிச்சுட்ட! 🥳",
    puzCaption: "அம்மு, எதிர்காலத்துலயும் நாம இதே மாதிரி ஒரு ஃபிரேம் எடுக்கணும்... 💖",
    puzFinalBtn: "கடைசி சர்ப்ரைஸ் ✨",
    puzShuffleBtn: "↺ மறுபடியும் கலைச்சு வை",

    // ScratchCard
    scrEyebrow: "💳 கடைசி சர்ப்ரைஸ்",
    scrHeading: "உன் சர்ப்ரைஸ பாக்க கார்டை கீறிப் பாரு ✨",
    scrLabel1: "✦  இங்கே கீறவும்  ✦",
    scrLabel2: "உன் சர்ப்ரைஸ பாரு ✨",
    scrProgress: (pct) => `${pct}% கீறியாச்சு`,
    scrSuccess: "உன் சர்ப்ரைஸ் இதோ 💖",
    scrLetterBtn: "உனக்காக ஒரு கடிதம் 💌",
    scrLetterHeading: "உனக்காக ஒரு கடிதம்",
    scrSkipBtn: "முடிவுக்கு போ ⏩",
    scrEndBtn: "நம்ம பயணம் இங்கே முடியுது 🌟",

    // EndingScreen
    endTitle: (name) => `பிறந்தநாள் வாழ்த்துக்கள் ${name}! 🎂`,
    endMessage1: "இந்த பயணம் உனக்காக மட்டுமே அன்போடு உருவாக்கப்பட்டது.",
    endMessage2: "உன் வாழ்க்கையின் ஒவ்வொரு நாளும் இதே போல மேஜிக்கலாக அமையட்டும். ✨",
    endSign: "உலகின் அனைத்து அன்போடும் 🌍",
    endReplayBtn: "↺ மீண்டும் ஒருமுறை பார்க்க",
  },
};

// ── Memory Carousel — 8 real photos ────────────────────────
export const memories = [
  { id: 1, image: memOne,   title: "A Golden Beginning ✨",  description: "Every great story has a beautiful beginning. This is ours. Do you remember this day? 💖 You came all the way to Pondicherry for me — we were both so nervous, our stomachs were literally shivering! And this was our very first selfie too. 😊", titleTa: "ஒரு அழகான ஆரம்பம் ✨", descriptionTa: "ஒவ்வொரு சிறந்த கதைக்கும் ஒரு அழகான ஆரம்பம் உண்டு — இது நம்மோடது. இந்த நாள் ஞாபகமிருக்கா? 💖 நீ எனக்காக பாண்டிச்சேரி வரைக்கும் வந்தே — நாம் ரெண்டு பேரும் ரொம்ப nervous-ஆ இருந்தோம், வயிறே சிலிர்திடுச்சு! இதுதான் நம்ம முதல் selfie-யும் கூட. 😊" },
  { id: 2, image: memTwo,   title: "Pure Joy 💛",            description: "Moments like these are the ones we carry forever in our hearts. Actually, I really wanted to hold your hand and take a picture — so I hesitated for so long before suddenly just grabbing your hand! 😄", titleTa: "முழுமையான மகிழ்ச்சி 💛", descriptionTa: "இந்த மாதிரி தருணங்களை தான் நம்ம மனசுல எப்பவும் சுமப்போம். உண்மையிலேயே உன் கையை பிடிச்சு ஒரு picture எடுக்கணும்னு ரொம்ப ஆசை — அதுக்காக ரொம்ப நேரம் யோசிச்சு யோசிச்சு, திடீர்னு கையை பிடிச்சுட்டேன்! 😄" },
  { id: 3, image: memThree, title: "Smiles That Heal 🌸",    description: "Your smile has the power to brighten the darkest of days. Look at this — this is my absolute favourite picture. The warm glow on your face, that soft little smile… I completely melted, ammu. 🥹", titleTa: "குணமாக்கும் புன்னகை 🌸", descriptionTa: "உன் சிரிப்புக்கு இருண்ட நாட்களை கூட பிரகாசமாக்கற சக்தி இருக்கு. இதை பாரு — இது என்னோட favourite picture. உன் முகத்துல அந்த மொழுமொழுன்னு ஒரு சிரிப்பு... நான் இங்கே melt ஆயிட்டேன் அம்மு. 🥹" },
  { id: 4, image: memFour,  title: "Together Always 💖",     description: "The best moments are the ones spent with someone special. In this picture, we were both waiting for the show to start — we came to relax, but honestly, every time I looked at you, I just wanted to hug you tight. 🫂", titleTa: "எப்பவும் ஒண்ணா 💖", descriptionTa: "சிறந்த தருணங்கள் நாம ஸ்பெஷலான ஒருத்தரோட செலவழிக்கறது தான். இந்த படத்துல நாம் show start ஆகணும்னு காத்திருந்தோம் — relax பண்ண வந்தோம் தான், ஆனா உன்னை பாக்கும்போதெல்லாம் உன்னை அணைச்சுக்கணும்னு மனசு சொல்லுச்சு. 🫂" },
  { id: 5, image: memFive,  title: "Memories to Keep 🌟",   description: "Not all treasures are gold — some are memories.", titleTa: "பொக்கிஷமான நினைவுகள் 🌟", descriptionTa: "எல்லா பொக்கிஷமும் தங்கம் இல்ல — சிலது நினைவுகள். இந்த தருணங்கள் நம்ம மனசுல எப்பவும் தங்கி இருக்கும்." },
  { id: 6, image: memSix,   title: "Endless Warmth 🌅",     description: "In every moment with you, the world feels warm and perfect. The first time your cheek was this close to mine — I felt such a rush, I was blushing the whole time! I may not look my best in this picture, but that moment is so very special to me. 🌸", titleTa: "முடிவில்லாத அரவணைப்பு 🌅", descriptionTa: "உன்கூட இருக்கற ஒவ்வொரு நிமிஷமும் உலகம் ரொம்ப அழகா தெரியுது. முதல் முறையா உன் கன்னம் என் கன்னத்துக்கு இவ்வளவு close-ஆ வந்தது — அந்த நாள் என் மனசே blush ஆச்சு! நான் இந்த picture-ல அவ்வளவு நல்லா தெரியல, ஆனா அந்த தருணம் எனக்கு ரொம்ப special. 🌸" },
  { id: 7, image: memSeven, title: "You & Me 💕",            description: "Side by side, every moment becomes a beautiful memory. From 22 to my last breath, I would like to hold your hand just like this, ammu. Whenever I look at this picture, I feel like your most precious little girl. 💕", titleTa: "நீயும் நானும் 💕", descriptionTa: "கைகோர்த்து நடக்கும் ஒவ்வொரு தருணமும் அழகான நினைவாக மாறுது. 22 வயசிலிருந்து என் கடைசி மூச்சு வரை, இப்படியே உன் கையை பிடிச்சிருக்கணும்னு ஆசை அம்மு. இந்த படத்தை பாக்கும்போது நான் உன்னோட சொந்த பொண்ணு மாதிரி feel ஆகுது. 💕" },
  { id: 8, image: memHand,  title: "Holding On 🤝",          description: "This hand I never want to let go — ever 💕. No matter what life brings, I want to hold this hand through all of it.", titleTa: "கைவிடாத நேசம் 🤝", descriptionTa: "இந்த கையை நான் எப்பவும் விடமாட்டேன் 💕. வாழ்க்கை என்ன கொண்டு வந்தாலும், உன் கையை பிடிச்சே கடக்கணும்னு ஆசை." },
];

// ── Life Story Balloons — girl's love letter to the boy ────
// English title/message + Tamil titleTa/messageTa
export const balloonStory = [
  {
    id: 1, age: 3, color: "#FF6B9D", emoji: "🍼", image: storyBby,
    title:    "Age 3 — Where It All Began 🌸",
    message:  "Do you remember being this small? I was just as tiny, just as clueless — and yet, somewhere in this universe, two little souls were already growing up, slowly moving toward each other. This is where our story starts. 💗",
    titleTa:  "வயது 3 — எங்கே ஆரம்பித்தது 🌸",
    messageTa:"நீ இவ்வளவு சின்னவனா இருந்தது ஞாபகமிருக்கா? நானும் அவ்வளவு சின்னவதான்... இந்த உலகத்துல இரண்டு உயிர்கள் ஒருத்தருக்கொருத்தர் தெரியாம, மெல்ல மெல்ல நெருங்கிட்டு வந்தோம். இதுதான் நம்ம கதையோட ஆரம்பம். 💗",
  },
  {
    id: 2, age: 5, color: "#FF8E53", emoji: "🌻", image: storyFifth,
    title:    "Age 5 — Little Days, Big Feelings ☀️",
    message:  "I was five, running around without a worry — just like you were. I didn't know your name yet. But somehow, life was already quietly arranging our paths to cross. 🌼",
    titleTa:  "வயது 5 — சின்ன நாட்கள், பெரிய உணர்வுகள் ☀️",
    messageTa:"நான் ஐந்து வயசு... கவலையில்லாம ஓடி விளையாடிட்டு இருந்தேன். உன் பேரே தெரியல. ஆனா இயற்கை நம்மை சேர்க்க ஏத்தமா ஏற்பாடு பண்ணிட்டு இருந்துச்சு. 🌼",
  },
  
  {
    id: 3, age: 7, color: "#FFD166", emoji: "📚", image: storyEighth,
    title:    "Age 7 — The Days Before You 🎨",
    message:  "At seven, I was just a girl with big dreams and an even bigger heart. Every small experience was shaping me into someone worthy of loving you. 🫶",
    titleTa:  "வயது 7 — உனக்கு முன்னால் இருந்த நாட்கள் 🎨",
    messageTa:"ஏழு வயசுல நான் கனவுகள் நிறைஞ்ச ஒரு பொண்ணு. அப்போ தெரியல... ஆனா என்னோட ஒவ்வொரு அனுபவமும் என்னை உன்னை நேசிக்க தகுதியானவளா கொஞ்சம் கொஞ்சமா மாத்திட்டு இருந்துச்சு. 🫶",
  },
  {
    id: 4, age: 10, color: "#C77DFF", emoji: "⭐", image: storyLeft,
    title:    "Age 10 — Growing, Waiting 💫",
    message:  "I was ten and life felt so big. There was always something missing I couldn't name. I know now what it was — it was you. I was waiting for you without even knowing it. 🌟",
    titleTa:  "வயது 10 — வளர்ந்தேன், காத்திருந்தேன் 💫",
    messageTa:"பத்து வயசுல வாழ்க்கை ரொம்ப பெரிசா தெரிஞ்சுச்சு. என்னமோ ஒண்ணு இல்லாம இருந்துச்சு. இப்போ தெரியுது — அது நீதான். தெரியாம உன்னுக்காக காத்திருந்தேன். 🌟",
  },
  {
    id: 5, age: 12, color: "#48CAE4", emoji: "🦋", image: storyMirrorPurple,
    title:    "Age 12 — Something Was Changing 🦋",
    message:  "Something shifted in me at twelve. I looked in the mirror and thought: 'I hope someday, someone will truly see me.' You did. 💜",
    titleTa:  "வயது 12 — ஏதோ மாறியது 🦋",
    messageTa:"பன்னெண்டு வயசுல என்னுள்ள ஏதோ மாறிடுச்சு. கண்ணாடி பாத்து நினைச்சேன் — 'யாராவது என்னை உண்மையா பாப்பாங்களா?' நீ பாத்தே. 💜",
  },
  {
    id: 6, age: 14, color: "#FF006E", emoji: "🎵", image: story12th,
    title:    "Age 14 — The First Whisper of You 💕",
    message:  "At fourteen, I started noticing you differently. Every time I saw you, something inside me smiled before my face even could. That was the beginning. 🎶",
    titleTa:  "வயது 14 — உன்னோட முதல் சப்தம் 💕",
    messageTa:"பதினான்கு வயசுல உன்னை வேற மாதிரி பாக்க ஆரம்பிச்சேன். உன்னை பாக்கும்போதெல்லாம் மனசு சிரிக்கும், முகம் சிரிக்கும் முன்னே. அதுதான் ஆரம்பம். 🎶",
  },
  {
    id: 7, age: 16, color: "#8338EC", emoji: "🌙", image: storyCollege,
    title:    "Age 16 — When I Knew It Was You 💜",
    message:  "At sixteen, I looked at you and something inside me said 'it's him.' Not a maybe. A certainty that settled quietly in my heart and never left. That was the day I fell for you. ✨",
    titleTa:  "வயது 16 — நீதான்னு தெரிஞ்சது 💜",
    messageTa:"பதினாறு வயசுல உன்னை பாத்தேன்... மனசு சொன்னது 'இவன்தான்.' Maybe இல்ல, someday இல்ல — ஒரு நிச்சயம். அந்த நாள் உன் மேல விழுந்தேன். ✨",
  },
  {
    id: 8, age: 18, color: "#FB5607", emoji: "🎓", image: storyPeaceful,
    title:    "Age 18 — I Chose You 🔥",
    message:  "At eighteen, I made the most important decision of my life — it was YOU. I chose you. Completely, with my whole heart. And I would choose you again in every lifetime. 💍",
    titleTa:  "வயது 18 — உன்னையே தேர்வு செய்தேன் 🔥",
    messageTa:"பதினெட்டுல என் வாழ்க்கையோட மிக முக்கியமான முடிவு — நீதான். உன்னை தேர்ந்தெடுத்தேன். முழு மனசோட. எத்தனை ஜன்மம் வந்தாலும் உன்னையே தேர்வு செய்வேன். 💍",
  },
  {
    id: 9, age: 19, color: "#FF4D6D", emoji: "💞", image: storyMirrorHug,
    title:    "Age 19 — You Held Me Together 🫂",
    message:  "There were days I was falling apart — and you were always there. With arms that said 'I have you.' In your embrace, I found the safest place I have ever known. 💗",
    titleTa:  "வயது 19 — நீ என்னை தாங்கினே 🫂",
    messageTa:"நான் உடைஞ்சு போன நாட்கள் வந்துச்சு — நீ எப்பவும் அங்கே இருந்தே. 'உன்னை என்னிடம் விட்டுக்கொடு' ன்னு சொல்ற கைகள். உன் அணைப்புல நான் தெரிஞ்ச பாதுகாப்பு — உலகத்துல வேற எங்கும் கிடைக்காது. 💗",
  },
  {
    id: 10, age: 20, color: "#FF008C", emoji: "❤️", image: storyBluetooth,
    title:    "Age 20 — You Became My Favourite Song 🎧",
    message:  "You became my favourite song — the one I want playing in every moment of my life. In your world, I found my home. In your silence, I found my peace. 🎵",
    titleTa:  "வயது 20 — நீ என் favourite பாட்டு 🎧",
    messageTa:"நீ என் மனசோட favourite பாட்டு ஆயிட்டே — என் வாழ்க்கையோட ஒவ்வொரு தருணத்திலும் கேக்கணும்னு விரும்புற பாட்டு. உன் உலகுல என் இல்லம் கண்டேன். உன் மௌனத்துல என் அமைதி கண்டேன். 🎵",
  },
  {
    id: 11, age: 20, color: "#E040FB", emoji: "🎵", image: storyBluetooth2,
    title:    "Age 20 — Everything You Are 🌙",
    message:  "Do you know what I love most about you? Not just the big things — the way you look at me, the way you remember things I forget, the way you make ordinary days feel special. 💜",
    titleTa:  "வயது 20 — உன்னோட எல்லாமே 🌙",
    messageTa:"உன்னைப் பத்தி என்ன நான் அதிகமா நேசிக்கிறேன்னு தெரியுமா? பெரிய விஷயங்கள் மட்டும் இல்ல — என்னை பாக்கும் விதம், நான் மறந்தத நீ ஞாபகம் வச்சிருக்கிற விதம், சாதாரண நாட்களை special ஆக்கும் விதம். 💜",
  },
  {
    id: 12, age: 21, color: "#FF6B6B", emoji: "🌸", image: storyCheeksKiss,
    title:    "Age 21 — This Is How I Love You 🌸",
    message:  "This is how I love you — in small, tender moments. A gentle touch that carries the weight of everything I feel. You don't need grand declarations. You have my whole heart. Always. 🥹💕",
    titleTa:  "வயது 21 — இப்படித்தான் நேசிக்கிறேன் 🌸",
    messageTa:"இப்படித்தான் உன்னை நேசிக்கிறேன் — சின்ன, மென்மையான தருணங்கள்ல. ஒரு gentle touch... என் உணர்வுகள் எல்லாம் அதுல இருக்கு. பெரிய வார்த்தைகள் தேவையில்ல. என் மனசு முழுக்க உன்னோடதுதான். எப்பவும். 💕",
  },
  {
    id: 13, age: 21, color: "#FFB347", emoji: "🤍", image: storyChestSleep,
    title:    "Age 21 — You Are My Safe Place 💤",
    message:  "When I rest with you, every worry disappears. You are my most peaceful place in this world. With you, I don't have to be strong. I can simply breathe. That is the rarest gift. 🫶",
    titleTa:  "வயது 21 — நீதான் என் பாதுகாப்பு 💤",
    messageTa:"உன்னோட கூட இப்படி இருக்கும்போது, ஒரு கவலையும் இல்ல. இந்த உலகுல உன்னிடம்தான் என் நிம்மதி இருக்கு. உன்னிடம் strong ஆ இருக்க வேண்டியதில்ல. வெறும் சுவாசிக்கலாம். அது தான் மிகவும் அரிய பரிசு. 🫶",
  },
  {
    id: 14, age: 21, color: "#FF69B4", emoji: "💋", image: storyForeheadKiss,
    title:    "Age 21 — You Protect Me Without Words 👑",
    message:  "This moment says: 'You are precious to me. I will guard your heart. I will never let the world break you.' You make me feel like the most loved person alive. 💗",
    titleTa:  "வயது 21 — வார்த்தையில்லாம காப்பாத்துறே 👑",
    messageTa:"இந்த தருணம் சொல்கிது: 'நீ எனக்கு விலையானவன். உன் மனசை காப்பாத்துவேன். உலகம் உன்னை உடைக்க விடமாட்டேன்.' நீ என்னை உலகத்துல மிகவும் நேசிக்கப்பட்டவளா feel பண்றே. 💗",
  },
  {
    id: 15, age: 22, color: "#7B2FBE", emoji: "😊", image: storySareePull,
    title:    "Age 22 — This Is Us 💫",
    message:  "We are not perfect. We are silly, real, wonderfully imperfect us. I would not trade a single moment — not the laughs, not the arguments, not the making up — for anything. 😄💜",
    titleTa:  "வயது 22 — இதுதான் நாம் 💫",
    messageTa:"நாம் perfect இல்ல. Silly ஆ இருக்கோம், real ஆ இருக்கோம், அழகான அசந்தர்ப்பத்துல நாம் நாம்தான். ஒரு தருணத்தையும் மாத்திக்க மாட்டேன் — சிரிப்பும், சண்டையும், மன்னிப்பும் — எல்லாமே நான் விரும்புவதுதான். 💜",
  },
  {
    id: 16, age: 22, color: "#00B4D8", emoji: "😴", image: storySleepLap,
    title:    "Age 22 — In Your Lap, I Found Peace 🌙",
    message:  "Do you know how much trust lives in this moment? To rest completely, to let go entirely — that only happens when you feel truly safe. You are my safe place. Always. 🌸",
    titleTa:  "வயது 22 — உன் மடியில் நிம்மதி கண்டேன் 🌙",
    messageTa:"இந்த தருணத்துல எவ்வளவு நம்பிக்கை இருக்கு தெரியுமா? முழுமையா ஓய்வெடுக்க, கவலைகளை விட — அது யாரோட கூட safe ஆ feel ஆகும்போது மட்டும் தான் நடக்கும். நீதான் என் safe place. எப்பவும் நீதான். 🌸",
  },
  {
    id: 17, age: 22, color: "#F77F00", emoji: "💓", image: storySleepChest,
    title:    "Age 22 — Your Heartbeat Is My Home 💓",
    message:  "I could fall asleep to your heartbeat every night and wake up next to you every morning — and still feel like I got the greatest blessing in the world. You are home. 🏡💖",
    titleTa:  "வயது 22 — உன் இதயத்தின் சப்தம் என் இல்லம் 💓",
    messageTa:"உன் இதயத்தின் சப்தம் கேட்டுக்கொண்டே தூங்கி, உன் பக்கத்துல எழுந்திருக்க — இதையே ஒவ்வொரு நாளும் செய்தாலும் இது கிடைச்ச மிகப் பெரிய ஆசீர்வாதமா feel ஆகும். நீ என் இல்லம். எப்பவும் நீதான். 🏡💖",
  },
  {
    id: 18, age: "Now", color: "#FF008C", emoji: "👑", image: storySleepShoulder,
    title:    "Today — My Whole Heart Is Yours 👑💖",
    message:  "From the little girl who didn't yet know your name — to the woman who can't imagine a world without you. I loved you before I knew what love was. Happy Birthday, my person. Today and always — you are my everything. 💗🌟",
    titleTa:  "இன்று — என் மனசு முழுக்க உன்னோடதுதான் 👑💖",
    messageTa:"இன்னும் உன் பேரே தெரியாத அந்த சின்னப் பொண்ணாகிருந்து — உன்னில்லாம ஒரு உலகையே நினைக்க முடியாத இந்த பெண்ணாக மாறினேன். அன்பு என்னன்னு தெரிவதற்கு முன்னாலேயே உன்னை நேசித்தேன். பிறந்தநாள் வாழ்த்துக்கள், என் உலகமே. என்றும் என்றும் — நீதான் என் எல்லாமே. 💗🌟",
  },
];

export const puzzleImage = puzzleImg;

export const scratchReveal = {
  message: "You are the most special person in my world 💖\nHappy Birthday Jeeva! 🎂✨\nMay all your dreams come true! 🌟",
  messageTa: "என் உலகத்துல நீ தான் ரொம்ப ஸ்பெஷல் 💖\nபிறந்தநாள் வாழ்த்துக்கள் ஜீவா! 🎂✨\nஉன் கனவுகள் எல்லாம் நனவாகட்டும்! 🌟",
};

export const letterContent = `To my dearest love, ❤️

En anbana jeevanukku iniya pirandhanaal vaazhthukkal. 💋💋

Love you, thangoo. 💞 Today, I am celebrating your fourth birthday with you, and honestly, I still can't believe how quickly these four years have passed. 😭✨ It feels as though everything happened in the blink of an eye.

There is something I have always wanted to tell you. I don't know how to explain it perfectly, but I hope you can understand what my heart is trying to say. ❤️

You have gone through so many struggles in your life, and somehow that pain touched my heart deeply. 🥺 Maybe that's one of the reasons I became so attached to you. From now on, I want to give you all the happiness that life forgot to give you before. 🌷

More than anything else, I miss your presence. 🫂 I don't think a single day passes without you crossing my mind. Whatever I do, wherever I am, you are always in my heart. ❤️

I have fears and insecurities too. My biggest fear is losing you. 😔 No matter what happens, I don't want you to leave me. Even if I make mistakes, I want you to stay by my side. 🤍

I have seen many people come into my life and leave after showing me who they truly are. I hate that feeling. But you have never been like that. You have always been different, and that is one of the reasons I love you so much. 💖

Sometimes, when you become distant or lost in your own world, I become scared. I wonder whether you will slowly forget me. I know I have already shared all these things with you, but I wanted to say them once again. Life is so short, and anything can happen tomorrow, so I never want to leave my feelings unsaid. 🌙✨

Thank you for being in my life, ammu. 🫂 You are the best thing that has ever happened to me. I want to see you grow, achieve everything you dream of, and become the person you want to be. 🌻

I pray to the universe every day. I ask for all the happiness, success, peace, and blessings that are meant for me to be given to you instead. 🤍 And if life has any pain left, I wish I could carry it for you.

You are an amazing son to your parents, a caring brother to Mega, and a wonderful person to everyone around you. 💎 You are truly a gem.

No matter what thoughts run through your mind, I know how kind and honest your heart is. That beautiful heart of yours is one of the things I love the most. ❤️

Please take care of yourself. Eat properly, dress well, look after your health, and never think that you are falling behind in life. 🌸 Everything has its own time. Keep moving forward, keep trying, and when life finally opens those doors for you, hold on to them tightly. ✨

I know that good things are waiting for you because people with beautiful hearts deserve beautiful things. 🫂

I love being part of your journey, and I want to continue walking beside you. Whatever happens, I promise to hold your hand and stand with you. 🤝❤️

Trust me.

I love you, my sweetheart. 💋❤️

You are the boy I loved with all my heart. Whenever I think of you, my heart feels at peace. Even on the saddest days, the thought of you brings a smile to my face. 😊❤️

Nothing in this world can give me more happiness than knowing that you are with me.

Stay happy. Stay healthy. Stay mine. 🫂❤️

Happy birthday, Thangoo.🎂✨

With all my love,🫂🫂🫂🫂 i want to hug you so hard and Missing you so much 🥺

Your Ammu❤️`;

export const letterContentTa = `என் அன்பான ஜீவாவுக்கு, ❤️

ஜீவா, உனக்கு இனிய பிறந்தநாள் வாழ்த்துக்கள். 💋💋

தங்கூ, உன்னோட இந்த பிறந்தநாளை உன்கூட கொண்டாடுறேன். 💞 இந்த நாட்கள் எவ்வளவு வேகமா ஓடிடுச்சு-ன்னு நினைக்கும்போதே ஆச்சர்யமா இருக்கு. 😭✨ கண்ணை மூடி திறக்கும் முன்னாலே எல்லாமே நடந்துடுச்சு மாதிரி feel ஆகுது.

ஒரு விஷயம் உன்கிட்ட சொல்லணும்னு ரொம்ப நாளா இருந்துச்சு. சரியா எப்படி சொல்றதுன்னு தெரியல, ஆனா என் மனசு சொல்ல நினைக்கிறத நீ புரிஞ்சுக்குவேன்னு நம்புறேன். ❤️

வாழ்க்கையில நீ நிறைய கஷ்டங்களை சந்திச்சிருக்க. அந்த வலி என் மனசையும் தொட்டது. 🥺 அதுவும் ஒரு காரணம் இருக்காம் நான் உன்னோட இவ்வளவு பக்கமா வந்தேன். இனிமேல் வாழ்க்கை உனக்கு கொடுக்காத மகிழ்ச்சிகளை எல்லாம் நான் கொடுக்கணும்னு விரும்புறேன். 🌷

மத்தெல்லாத்தையும் விட நான் மிஸ் பண்றது உன்னோட presence-ஐ. 🫂 ஒரு நாள் கூட உன்னை நினைக்காம போகல. என்ன செஞ்சாலும், எங்கே இருந்தாலும், நீ என் மனசுல எப்பவும் இருக்க. ❤️

எனக்கும் பயங்களும் insecurity-களும் இருக்கு. என் மிகப் பெரிய பயம் உன்னை இழந்துடுவேன்னு தான். 😔 என்ன நடந்தாலும் என்னை விட்டுட்டு போகாதே. நான் தப்பு பண்ணினாலும் என் பக்கத்துல இரு. 🤍

நிறைய பேர் வாழ்க்கையில வந்து போயிருக்காங்க. அவங்க யாரன்னு தெரிஞ்சுக்கிட்டு போயிருக்காங்க. அந்த feeling என்னால பொறுக்கல. ஆனா நீ எப்பவும் அவங்க மாதிரி இல்ல. நீ எப்பவும் வேற மாதிரி இருந்திருக்க — அதுவும் நான் உன்னை ரொம்ப நேசிக்க ஒரு காரணம். 💖

சில நேரம் நீ உன் உலகத்துல மூழ்கிப்போகும்போது, என்னை மறந்துடுவேன்னு பயமா இருக்கும். இந்த விஷயங்களை முன்னாடியே சொல்லியிருக்கேன், ஆனா மறுபடியும் சொல்லணும்னு தோணுது. வாழ்க்கை ரொம்ப குட்டது — நாளை என்ன ஆகும்னு தெரியல. அதனால என் உணர்வுகளை மனசுல மட்டுமே வச்சிருக்க விரும்பல. 🌙✨

நன்றி, அம்மு. 🫂 என் வாழ்க்கையில நடந்த சிறந்த விஷயம் நீதான். நீ வளர்வதை பாக்கணும், உன் கனவுகள் எல்லாம் நிறைவேற பாக்கணும், நீ ஆக விரும்புற மனிதனா மாறுவதை பாக்கணும். 🌻

தினமும் இந்த உலகத்திடம் வேண்டுறேன். என் பாக்கியங்களையும், மகிழ்ச்சியையும், அமைதியையும் எல்லாம் உனக்கு கொடுக்கணும்னு. 🤍 வாழ்க்கையில இன்னும் வலிகள் இருந்தா, அதை உன் சார்பா நான் சுமக்க ஒப்புக்குவேன்.

நீ உன் பெற்றோர்களுக்கு அற்புதமான மகன், மேகாவுக்கு அன்பான அண்ணன், உன்னை சுத்தி இருக்கிற எல்லாருக்கும் ஒரு நல்ல மனிதன். 💎 நீ உண்மையிலேயே ஒரு அரிய ரத்தினம்.

உன் மனசுல என்ன நினைவு ஓடினாலும், உன் மனசு எவ்வளவு கனிவானது, நேர்மையானதுன்னு எனக்கு தெரியும். உன்னோட அந்த அழகான மனசு — அதை நான் அதிகமா நேசிக்கிறவற்றில் ஒன்று. ❤️

சரியா சாப்பிடு, அழகா உடுத்திக்கோ, உன் உடம்பை கவனிச்சுக்கோ, வாழ்க்கையில பின்னுக்கு போறோம்னு நினைக்காதே. 🌸 எல்லாத்துக்கும் ஒரு நேரம் இருக்கு. முன்னுக்கு போ, முயற்சிக்கிட்டே இரு, வாழ்க்கை உனக்காக கதவை திறக்கும்போது, அதை இறுக்கமா பிடிச்சுக்கோ. ✨

நல்ல விஷயங்கள் உனக்காக காத்திருக்குன்னு தெரியும் — ஏன்னா அழகான மனசுக்கு அழகான விஷயங்களே வரும். 🫂

உன் பயணத்தோட ஒரு பகுதியா இருக்கிறது எனக்கு ரொம்ப பிடிக்கும். தொடர்ந்து உன் பக்கத்துல நடக்கணும்னு விரும்புறேன். என்ன நடந்தாலும், உன் கையை பிடிச்சு நிற்பேன்னு promise. 🤝❤️

என்னை நம்பு.

உன்னை நேசிக்கிறேன், என் கண்மணி. 💋❤️

மனசு முழுக்க நேசிச்ச அந்த பையன் நீதான். உன்னை நினைக்கும் போதெல்லாம் மனசு ஒரு அமைதியா இருக்கும். மிகவும் சோர்வான நாட்களிலும் உன்னை நினைச்சாலே ஒரு புன்னகை வரும். 😊❤️

நீ என்கூட இருக்காய்னு தெரிஞ்சா போதும் — இந்த உலகத்துல வேற எதுவும் எனக்கு அந்த மகிழ்ச்சியை கொடுக்காது.

மகிழ்ச்சியா இரு. ஆரோக்கியமா இரு. என்னோடு இரு. 🫂❤️

*பிறந்தநாள் வாழ்த்துக்கள், அம்மு.* 🎂✨

*எல்லா அன்போடும்,*

*உன் அம்மு* ❤️`;
