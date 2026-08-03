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
import storyBby           from '../assets/story/bby_img.webp';
import storyBluetooth     from '../assets/story/bluthooth_img.png';
import storyBluetooth2    from '../assets/story/blutooth_img2.png';
import storyCheeksKiss    from '../assets/story/cheeks_kiss_img.webp';
import storyChestSleep    from '../assets/story/chestsleep_img.webp';
import storyCollege       from '../assets/story/college_img.webp';
import storyEighth        from '../assets/story/eigth_img.webp';
import storyFifth         from '../assets/story/fifth_img.webp';
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
  name: "Jeeva",
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
    qLockAngrySub: "( Hint: She's amazing 💖 )",
    qLockAngryPlaceholder: "Come on, you know her! 💫",
    qLockAngryBtn: "Try Again 💪",
    qLockUnlockBtn: "Unlock 🔓",
    qLockOpeningBtn: "Opening ✨",

    // LoadingScreen
    loadMainText: "Opening something special for you...",
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
    puzCaption: "Ammu, idhu mari oru frame in future laum edukakanum namba... 💖",
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
  { id: 1, image: memOne,   title: "A Golden Beginning ✨",  description: "Every great story has a beautiful beginning. This is ours.", titleTa: "ஒரு அழகான ஆரம்பம் ✨", descriptionTa: "ஒவ்வொரு சிறந்த கதைக்கும் ஒரு அழகான ஆரம்பம் உண்டு. இது நம்மோடது." },
  { id: 2, image: memTwo,   title: "Pure Joy 💛",            description: "Moments like these are the ones we carry forever in our hearts.", titleTa: "முழுமையான மகிழ்ச்சி 💛", descriptionTa: "இந்த மாதிரி தருணங்களை தான் நம்ம மனசுல எப்பவும் சுமப்போம்." },
  { id: 3, image: memThree, title: "Smiles That Heal 🌸",    description: "Your smile has the power to brighten the darkest of days.", titleTa: "குணமாக்கும் புன்னகை 🌸", descriptionTa: "உன் சிரிப்புக்கு இருண்ட நாட்களை கூட பிரகாசமாக்கற சக்தி இருக்கு." },
  { id: 4, image: memFour,  title: "Together Always 💖",     description: "The best moments are the ones spent with someone special.", titleTa: "எப்பவும் ஒண்ணா 💖", descriptionTa: "சிறந்த தருணங்கள் நாம ஸ்பெஷலான ஒருத்தரோட செலவழிக்கறது தான்." },
  { id: 5, image: memFive,  title: "Memories to Keep 🌟",   description: "Not all treasures are gold — some are memories.", titleTa: "பொக்கிஷமான நினைவுகள் 🌟", descriptionTa: "எல்லா பொக்கிஷமும் தங்கம் இல்ல — சிலது நினைவுகள்." },
  { id: 6, image: memSix,   title: "Endless Warmth 🌅",     description: "In every moment with you, the world feels warm and perfect.", titleTa: "முடிவில்லாத அரவணைப்பு 🌅", descriptionTa: "உன்கூட இருக்கற ஒவ்வொரு நிமிஷமும் உலகம் ரொம்ப அழகா தெரியுது." },
  { id: 7, image: memSeven, title: "You & Me 💕",            description: "Side by side, every moment becomes a beautiful memory.", titleTa: "நீயும் நானும் 💕", descriptionTa: "கைகோர்த்து நடக்கும் ஒவ்வொரு தருணமும் அழகான நினைவாக மாறுது." },
  { id: 8, image: memHand,  title: "Holding On 🤝",          description: "This hand I never want to let go — ever.", titleTa: "கைவிடாத நேசம் 🤝", descriptionTa: "இந்த கையை நான் எப்பவும் விடமாட்டேன்." },
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

export const letterContent = `Dear Jeeva,

Some people walk into your life and quietly become
the reason you believe in beautiful things again.

You are one of those rare, magical people.

From the very first moment I saw you,
you brought warmth, light, and something
impossible to describe into everything around you.

I remember the days when we were just two people
finding our way — and how naturally you became
the person I wanted to find my way with.

Every memory I have of us is something I hold
close to my heart. Every small moment,
every laugh, every quiet second together —
they all mean the world to me.

On this special birthday, I want you to know —
you are deeply valued, endlessly celebrated,
and genuinely loved — by me, always.

May this year bring you everything your
beautiful heart deserves.

The world is better because you are in it. 🌍

Happy Birthday Jeeva 🎂

With all my love,
Your person — always ✨`;

export const letterContentTa = `அன்புள்ள ஜீவா,

சிலர் நம்ம வாழ்க்கையில வந்து, அழகான விஷயங்கள் 
மேல நமக்கு திரும்பவும் நம்பிக்கை வர வைப்பாங்க.

நீ அந்த மாதிரி ஒரு அபூர்வமான, மேஜிக்கான நபர்.

உன்ன முதன்முதல்ல பாத்த நிமிஷத்துல இருந்து,
நீ ஒரு அளவற்ற அன்பையும், வெளிச்சத்தையும்,
விவரிக்க முடியாத ஒரு மகிழ்ச்சியையும் கொடுத்திருக்க.

நாம ரெண்டு பேரும் நம்ம பாதைய தேடிட்டு இருந்த 
அந்த நாட்கள் எனக்கு ஞாபகம் இருக்கு... எப்படி நீ 
என் வாழ்க்கையோட மிக முக்கியமான ஒருத்தரா மாறுன 
அப்படின்னு நினைக்கிறப்போ ரொம்ப ஆச்சரியமா இருக்கு.

நம்மோட ஒவ்வொரு நினைவும் என் மனசுக்கு ரொம்ப 
நெருக்கமானது. சின்ன சின்ன தருணங்கள், நாம 
ஒன்றா சிரிச்சது, அமைதியா உக்கார்ந்திருந்த நொடிகள் — 
எல்லாமே எனக்கு என் உலகம்.

இந்த ஸ்பெஷலான பிறந்தநாள்ல, நீ தெரிஞ்சுக்க 
வேண்டிய ஒண்ணு — நீ எப்பவும் என் மனசுல 
ஸ்பெஷலானவன், நீ எப்பவும் என்னால 
அதிகமா நேசிக்கப்படுபவன்.

இந்த வருஷம் உன்னோட அழகான மனசுக்கு 
தேவையான எல்லாமே கிடைக்கட்டும்.

நீ இருக்கறதால இந்த உலகம் இன்னும் அழகா இருக்கு. 🌍

பிறந்தநாள் வாழ்த்துக்கள் ஜீவா 🎂

என்றும் அன்புடன்,
உன் அன்பானவள் ✨`;
