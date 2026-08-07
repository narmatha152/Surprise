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
  {
    id: 1,
    image: memOne,
    title: "A Golden Beginning ✨",
    description:
      "Every beautiful story has a beautiful beginning, and this is ours. Do you remember this day? 💖 You came all the way to Pondicherry just to see me. We were both so nervous that our hearts were racing. And this was our very first selfie together. 😊",

    titleTa: "ஒரு பொன்னான தொடக்கம் ✨",
    descriptionTa:
      "ஒவ்வொரு அழகான கதைக்கும் ஒரு அழகான தொடக்கம் இருக்கும்; இது நம்முடைய கதை. இந்த நாள் உனக்கு ஞாபகம் இருக்கிறதா? 💖 எனக்காக நீ பாண்டிச்சேரி வரை வந்தாய். நாம் இருவரும் மிகவும் பதற்றமாக இருந்தோம். இதுதான் நம்முடைய முதல் செல்ஃபியும் கூட. 😊",
  },

  {
    id: 2,
    image: memTwo,
    title: "Pure Joy 💛",
    description:
      "Moments like these stay in our hearts forever. I truly wanted to hold your hand and take a picture, but I hesitated for a long time before finally gathering the courage to hold it. 😄",

    titleTa: "தூய்மையான மகிழ்ச்சி 💛",
    descriptionTa:
      "இப்படிப்பட்ட தருணங்கள்தான் வாழ்நாள் முழுவதும் நம் மனதில் நிலைத்திருக்கும். உண்மையாகவே உன் கையைப் பிடித்து ஒரு புகைப்படம் எடுக்க வேண்டும் என்று ஆசைப்பட்டேன். நீண்ட நேரம் தயங்கிய பிறகு, தைரியமாக உன் கையைப் பிடித்தேன். 😄",
  },

  {
    id: 3,
    image: memThree,
    title: "Smiles That Heal 🌸",
    description:
      "Your smile has the power to brighten even the darkest days. This is one of my favourite pictures of you. That gentle smile on your face was enough to make me melt completely, ammu. 🥹",

    titleTa: "குணமாக்கும் புன்னகை 🌸",
    descriptionTa:
      "உன்னுடைய புன்னகைக்கு இருண்ட நாட்களைக்கூட ஒளிரச் செய்யும் சக்தி இருக்கிறது. இந்தப் படம் எனக்கு மிகவும் பிடித்தமான படங்களில் ஒன்று. உன்னுடைய அந்த மென்மையான புன்னகை என்னை முழுவதுமாக உன்னிடம் கரைய வைத்துவிட்டது, அம்மு. 🥹",
  },

  {
    id: 4,
    image: memFour,
    title: "Together Forever 💖",
    description:
      "The most beautiful moments are the ones we spend with the people we love. In this picture, we were waiting for the show to begin. Even though we came there to relax, every time I looked at you, all I wanted was to hug you tightly. 🫂",

    titleTa: "என்றும் ஒன்றாக 💖",
    descriptionTa:
      "நாம் நேசிக்கும் ஒருவருடன் செலவிடும் தருணங்கள்தான் வாழ்க்கையின் அழகான தருணங்களாக மாறுகின்றன. இந்தப் படத்தில் நாம் நிகழ்ச்சி தொடங்குவதற்காகக் காத்திருந்தோம். ஆனால் உன்னைப் பார்க்கும் ஒவ்வொரு முறையும் உன்னை இறுக்கமாக அணைத்துக்கொள்ள வேண்டும் என்று தோன்றியது. 🫂",
  },

  {
    id: 5,
    image: memFive,
    title: "Memories to Treasure 🌟",
    description:
      "Not every treasure is made of gold. Some treasures are made of memories, and these are the moments that will stay in our hearts forever. ✨",

    titleTa: "பொக்கிஷமான நினைவுகள் 🌟",
    descriptionTa:
      "எல்லாப் பொக்கிஷங்களும் தங்கத்தால் ஆனவை அல்ல. சில பொக்கிஷங்கள் அழகான நினைவுகளால் உருவானவை. இந்தத் தருணங்கள் என்றென்றும் நம் மனதில் வாழ்ந்துகொண்டே இருக்கும். ✨",
  },

  {
    id: 6,
    image: memSix,
    title: "Endless Warmth 🌅",
    description:
      "Every moment spent with you feels warm and beautiful. The first time your cheek came so close to mine, my heart started racing, and I couldn't stop blushing. Even though I may not look my best in this picture, this memory is incredibly special to me. 🌸",

    titleTa: "முடிவில்லா அரவணைப்பு 🌅",
    descriptionTa:
      "உன்னுடன் செலவிடும் ஒவ்வொரு நொடியும் இந்த உலகத்தை இன்னும் அழகாக மாற்றுகிறது. முதல் முறையாக உன் கன்னம் என் கன்னத்திற்கு அருகில் வந்தபோது என் இதயம் வேகமாகத் துடித்தது. இந்த நினைவு எனக்கு மிகவும் சிறப்பானது. 🌸",
  },

  {
    id: 7,
    image: memSeven,
    title: "You & Me 💕",
    description:
      "Every moment we spend together becomes a beautiful memory. From the age of twenty-two until my very last breath, I want to hold your hand just like this, ammu. Whenever I look at this picture, I feel like the most precious girl in your world. 💕",

    titleTa: "நீயும் நானும் 💕",
    descriptionTa:
      "கைகோர்த்து நடக்கும் ஒவ்வொரு தருணமும் அழகான நினைவாக மாறுகிறது. என்னுடைய இருபத்திரண்டாவது வயதிலிருந்து என் கடைசி மூச்சு வரை இப்படியே உன் கையைப் பிடித்துக்கொண்டே இருக்க வேண்டும் என்று ஆசைப்படுகிறேன், அம்மு. இந்தப் படத்தைப் பார்க்கும்போதெல்லாம் நான் உன்னுடைய மிகவும் செல்லமான பெண்ணாக உணர்கிறேன். 💕",
  },

  {
    id: 8,
    image: memHand,
    title: "Holding On 🤝",
    description:
      "This is the hand I never want to let go of. 💕 No matter what life brings us, I want to hold your hand and walk through every moment together. ❤️",

    titleTa: "கைவிடாத பந்தம் 🤝",
    descriptionTa:
      "இந்தக் கையை நான் ஒருபோதும் விட விரும்பவில்லை. 💕 வாழ்க்கை எதை நம் முன் கொண்டு வந்தாலும், உன் கையைப் பிடித்துக்கொண்டு எல்லாவற்றையும் கடந்து செல்ல வேண்டும் என்பதே என்னுடைய ஆசை. ❤️",
  },
];

// ── Life Story Balloons — girl's love letter to the boy ────
// English title/message + Tamil titleTa/messageTa
export const balloonStory = [
  {
    id: 1, age: 3, color: "#FF6B9D", emoji: "🍼", image: storyBby,
    title:    "Age 3 — Where It All Began 🌸",
    message:  "A long time ago, there was a little boy with innocent eyes and a beautiful smile. I wasn't there beside you then, but if I had been, I would have held your tiny hand and followed you everywhere. From that moment itself, my story would have begun with yours. 💗",
    titleTa:  "வயது 3 — எங்கே ஆரம்பித்தது 🌸",
    messageTa:"அப்போது நீ ஒரு சின்ன பையன். நானும் ஒரு சின்னப் பொண்ணு. அந்த வயதில் நமக்கு ஒருவரையொருவர் தெரியாது. ஆனால் இந்தப் பிரபஞ்சம் நம்மை ஒன்றாகச் சேர்ப்பதற்கான கதையை அப்போதே எழுதத் தொடங்கியிருந்தது. அந்த நேரத்தில் நான் உன் அருகில் இருந்திருந்தால், உன் சின்னக் கையைப் பிடித்துக்கொண்டு எங்கே சென்றாலும் உன்னுடன் வந்திருப்பேன். 💗",
  },
  {
    id: 2, age: 5, color: "#FF8E53", emoji: "🌻", image: storyFifth,
    title:    "Age 5 — Little Days, Big Feelings ☀️",
    message:  "At five years old, the world must have looked huge to you. If I had been there, I would have run beside you, laughed with you, and shared every little moment with you. Even then, I would have wanted to protect your smile. ☀️",
    titleTa:  "வயது 5 — சின்ன நாட்கள், பெரிய உணர்வுகள் ☀️",
    messageTa:"உலகத்தைப் பற்றிய எந்தக் கவலையும் இல்லாமல் நீ சிரித்துக்கொண்டும் விளையாடிக்கொண்டும் இருந்திருப்பாய். அந்த நாட்களில் நான் உன்னுடன் இருந்திருந்தால், உன்னோடு சேர்ந்து ஓடியிருப்பேன், சிரித்திருப்பேன், உன் சின்னச் சின்ன மகிழ்ச்சிகளை என்னுடைய மகிழ்ச்சியாக மாற்றியிருப்பேன். ☀️",
  },
  
  {
    id: 3, age: 7, color: "#FFD166", emoji: "📚", image: storyEighth,
    title:    "Age 7 — The Days Before You 🎨",
    message:  "At seven, we were just two little souls living our own lives. We didn't know each other, but I like to believe that destiny had already decided that our paths would meet one day. 🌸",
    titleTa:  "வயது 7 — உனக்கு முன்னால் இருந்த நாட்கள் 🎨",
    messageTa:"அப்போது நாம் இருவரும் வெவ்வேறு இடங்களில் இருந்தாலும், நம் வாழ்க்கைப் பாதை ஒருநாள் ஒன்றாக இணையப் போகிறது என்பதை விதி ஏற்கனவே முடிவு செய்திருந்தது. நீ உன் உலகத்தில் இருந்தாய்; நான் என் உலகத்தில் இருந்தேன். ஆனால் நம் இதயங்கள் ஒன்றையொன்று நோக்கி பயணித்துக்கொண்டிருந்தன. 🌸",
  },
  {
    id: 4, age: 10, color: "#C77DFF", emoji: "⭐", image: storyLeft,
    title:    "Age 10 — Growing, Waiting 💫",
    message:  "You were growing up, learning about the world and discovering yourself. If I had been there, I would have reminded you every single day that you were stronger than you thought. 💫",
    titleTa:  "வயது 10 — வளர்ந்தேன், காத்திருந்தேன் 💫",
    messageTa:"வாழ்க்கையைப் புரிந்துகொள்ளும் வயதில் நீ இருந்தாய். நான் உன்னுடன் இருந்திருந்தால், உன் கனவுகளை என்னுடைய கனவுகளாக மாற்றியிருப்பேன். நீ சோர்ந்துபோகும் நேரங்களில், உன் அருகில் நின்று உன்னை உற்சாகப்படுத்தியிருப்பேன். 💫",
  },
  {
    id: 5, age: 12, color: "#48CAE4", emoji: "🦋", image: storyMirrorPurple,
    title:    "Age 12 — Something Was Changing 🦋",
    message:  "As the years passed, your heart became even more beautiful. If I had been there, I would have stood proudly beside you and reminded you that you were always enough. 💜",
    titleTa:  "வயது 12 — ஏதோ மாறியது 🦋",
    messageTa:"நாட்கள் நகர்ந்துகொண்டே இருந்தன. நீ வளர்ந்துகொண்டே இருந்தாய். உன்னுடைய மனம் இன்னும் அழகாக மாறிக்கொண்டே இருந்தது. அந்த நேரத்தில் நான் உன்னுடன் இருந்திருந்தால், நீ எவ்வளவு சிறப்பானவன் என்பதை ஒவ்வொரு நாளும் உனக்கு உணர வைத்திருப்பேன். 💜",
  },
  {
    id: 6, age: 14, color: "#FF006E", emoji: "🎵", image: story12th,
    title:    "Age 14 — The First Whisper of You 💕",
    message:  "Life kept moving, and you kept growing. If I had known you then, I would have become your best friend. I would have listened to every thought and shared every dream with you. 💕",
    titleTa:  "வயது 14 — உன்னோட முதல் சப்தம் 💕",
    messageTa:"இந்த உலகம் உன்னை மாற்ற முயன்றிருக்கலாம். ஆனால் உன்னுடைய அழகான மனதை மட்டும் யாராலும் மாற்ற முடியவில்லை. அந்த வயதில் நான் உன்னைச் சந்தித்திருந்தால், உன்னுடைய மிகச் சிறந்த நண்பராக இருந்திருப்பேன். 💕",
  },
  {
    id: 7, age: 16, color: "#8338EC", emoji: "🌙", image: storyCollege,
    title:    "Age 16 — When I Knew It Was You 💜",
    message:  "By then, you had already become the wonderful person you are today. I think I would have fallen in love with your heart even then. ✨",
    titleTa:  "வயது 16 — நீதான்னு தெரிஞ்சது 💜",
    messageTa:"உன்னுடைய கண்களில் இருந்த கனவுகளையும், உன்னுடைய மனதில் இருந்த நம்பிக்கைகளையும் நான் பார்த்திருப்பேன். அப்போதே உன்னுடைய இதயத்தை நான் காதலித்திருப்பேன். ✨",
  },
  {
    id: 8, age: 18, color: "#FB5607", emoji: "🎓", image: storyPeaceful,
    title:    "Age 18 — I Chose You 🔥",
    message:  "At eighteen, you stood at the beginning of a new chapter in life. If I had been there, I would have walked beside you and reminded you that no matter what happened, you would never be alone. 💍",
    titleTa:  "வயது 18 — உன்னையே தேர்வு செய்தேன் 🔥",
    messageTa:"வாழ்க்கையின் புதிய அத்தியாயத்தை நோக்கி நீ நடந்துகொண்டிருந்தாய். அந்த நேரத்தில் நான் உன்னுடன் இருந்திருந்தால், உன் கையைப் பிடித்துக்கொண்டு, நீ ஒருபோதும் தனியாக இல்லை என்று சொல்லியிருப்பேன். 💍",
  },
  {
    id: 9, age: 19, color: "#FF4D6D", emoji: "💞", image: storyMirrorHug,
    title:    "Age 19 — You Held Me Together 🫂",
    message:  "Every smile, every fear, every dream and every struggle would have become my own. Your happiness would have been my happiness, and your tears would have become mine as well. 🫂",
    titleTa:  "வயது 19 — நீ என்னை தாங்கினே 🫂",
    messageTa:"உன் சிரிப்பு என்னுடைய மகிழ்ச்சியாகவும், உன் கண்ணீர் என்னுடைய வலியாகவும் மாறியிருக்கும். உன் இதயம் சுமக்கும் எல்லாவற்றையும் நான் சுமந்திருக்க விரும்பியிருப்பேன். 🫂",
  },
  {
    id: 10, age: 20, color: "#FF008C", emoji: "❤️", image: storyBluetooth,
    title:    "Age 20 — You Became My Favourite Song 🎧",
    message:  "If I had been there, I would have made countless memories with you. I would have laughed with you, argued with you, and loved you a little more every single day. 🎵",
    titleTa:  "வயது 20 — நீ என் favourite பாட்டு 🎧",
    messageTa:"நாம் சேர்ந்து எண்ணற்ற நினைவுகளை உருவாக்கியிருப்போம். சிரிப்பும், குறும்புகளும், சின்னச் சின்ன சண்டைகளும், மீண்டும் சமாதானம் ஆகும் தருணங்களும் நம் வாழ்க்கையை அழகாக்கியிருக்கும். 🎵",
  },
  {
    id: 11, age: 20, color: "#E040FB", emoji: "🎵", image: storyBluetooth2,
    title:    "Age 20 — Everything You Are 🌙",
    message:  "I don't think I would have fallen in love with your appearance. I think I would have fallen in love with your heart, your kindness, your patience, and the goodness hidden inside you. 💜",
    titleTa:  "வயது 20 — உன்னோட எல்லாமே 🌙",
    messageTa:"நான் உன்னுடைய தோற்றத்தை மட்டும் காதலிக்கவில்லை. உன்னுடைய மனதையும், பொறுமையையும், அன்பையும், நேர்மையையும் காதலித்தேன். அதுதான் உன்னை இன்னும் அதிகமாக நேசிக்க என்னைத் தூண்டியது. 💜",
  },
  {
    id: 12, age: 21, color: "#FF6B6B", emoji: "🌸", image: storyCheeksKiss,
    title:    "Age 21 — This Is How I Love You 🌸",
    message:  "I would have held your hand and reminded you that no matter how difficult life became, I would always stay beside you. 🥹💕",
    titleTa:  "வயது 21 — இப்படித்தான் நேசிக்கிறேன் 🌸",
    messageTa:"உன்னுடைய கையைப் பிடித்துக்கொண்டு, என்ன நடந்தாலும் நான் உன்னுடன் இருப்பேன் என்று சொல்லியிருப்பேன். உன்னுடைய எல்லா கனவுகளையும் என்னுடைய கனவுகளாக மாற்றியிருப்பேன். 💕",
  },
  {
    id: 13, age: 21, color: "#FFB347", emoji: "🤍", image: storyChestSleep,
    title:    "Age 21 — You Are My Safe Place 💤",
    message:  "If you had ever felt tired, I would have become your place of comfort. If you had ever felt lost, I would have become your way back home. 🫶",
    titleTa:  "வயது 21 — நீதான் என் பாதுகாப்பு 💤",
    messageTa:"நீ சோர்ந்துபோன நேரங்களில் உனக்கான அமைதியாக நான் இருந்திருப்பேன். நீ தனிமையை உணர்ந்த நேரங்களில் உனக்கான துணையாக நான் இருந்திருப்பேன். 🫶",
  },
  {
    id: 14, age: 21, color: "#FF69B4", emoji: "💋", image: storyForeheadKiss,
    title:    "Age 21 — You Protect Me Without Words 👑",
    message:  "The world may not always be kind, but I promise that I will always protect your heart. You deserve a lifetime of love, happiness, and peace. 💗",
    titleTa:  "வயது 21 — வார்த்தையில்லாம காப்பாத்துறே 👑",
    messageTa:"இந்த உலகம் உன்னை எவ்வளவு சோதித்தாலும், உன்னுடைய இதயத்தை நான் எப்போதும் பாதுகாத்திருப்பேன். ஏனென்றால் உன்னுடைய புன்னகை எனக்கு மிகவும் விலைமதிப்பற்ற ஒன்று. 💗",
  },
  {
    id: 15, age: 22, color: "#7B2FBE", emoji: "😊", image: storySareePull,
    title:    "Age 22 — This Is Us 💫",
    message:  "By now, we would have shared thousands of memories together. Every smile, every argument, and every moment would have become another beautiful chapter in our story. 💜",
    titleTa:  "வயது 22 — இதுதான் நாம் 💫",
    messageTa:"ஆயிரக்கணக்கான நினைவுகளை நாம் உருவாக்கியிருப்போம். ஒவ்வொரு சிரிப்பும், ஒவ்வொரு சண்டையும், ஒவ்வொரு தருணமும் நம் காதலை இன்னும் அழகாக மாற்றியிருக்கும். 💜",
  },
  {
    id: 16, age: 22, color: "#00B4D8", emoji: "😴", image: storySleepLap,
    title:    "Age 22 — In Your Lap, I Found Peace 🌙",
    message:  "I would have found peace in your presence, just as I do now. Even your silence would have been enough to make me feel safe. 🌙",
    titleTa:  "வயது 22 — உன் மடியில் நிம்மதி கண்டேன் 🌙",
    messageTa:"உன் அருகில் இருக்கும்போது எனக்கு ஒரு விதமான அமைதி கிடைக்கிறது. உன் மௌனம் கூட எனக்கு நிம்மதியைத் தருகிறது. 🌙",
  },
  {
    id: 17, age: 22, color: "#F77F00", emoji: "💓", image: storySleepChest,
    title:    "Age 22 — Your Heartbeat Is My Home 💓",
    message:  "Home isn't a place. Home is a feeling. And if someone asked me where my home was, I would simply point towards you. 🏡💖",
    titleTa:  "வயது 22 — உன் இதயத்தின் சப்தம் என் இல்லம் 💓",
    messageTa:"'இல்லம்' என்பது ஒரு இடம் அல்ல. அது ஒரு உணர்வு. என்னுடைய இல்லம் எங்கே என்று யாராவது கேட்டால், நான் உன்னைக் காட்டுவேன். 🏡💖",
  },
  {
    id: 18, age: "Now", color: "#FF008C", emoji: "👑", image: storySleepShoulder,
    title:    "Today — My Whole Heart Is Yours 👑💖",
    message:  "Today, when I look at you, I don't see only the man standing in front of me. I see the little boy you once were, the young man you became, and the wonderful person you are today.I know I cannot go back and change the past.But if I could, I would choose to stand beside you in every single moment of your life.Your past would have been mine.Your present is mine.And if destiny is kind to us, your future will be mine as well. ❤️Because, in my heart, I have always been there.And I always will be. 🫂💖🥹❤️",
    titleTa:  "இன்று — என் மனசு முழுக்க உன்னோடதுதான் 👑💖",
    messageTa:"இன்று உன்னைப் பார்க்கும்போது, என் கண்களுக்கு முன்னால் ஒரு மனிதன் மட்டும் தெரியவில்லை.ஒரு சின்னப் பையன் தெரிகிறான்.கனவுகள் நிறைந்த ஒரு இளைஞன் தெரிகிறான்.அழகான மனம் கொண்ட ஒரு மனிதன் தெரிகிறான்.என்னுடைய உலகம் தெரிகிறது. ❤️உன்னுடைய கடந்த காலத்தில் நான் இல்லாமல் இருந்திருக்கலாம்.ஆனால் என் மனதில், நான் எப்போதுமே உன்னுடன் இருந்திருக்கிறேன்.உன் சிரிப்பில்...உன் கண்ணீரில்...உன் மகிழ்ச்சியில்...உன் வலியில்...எல்லாவற்றிலும்...இன்று உன்னுடைய நிகழ்காலமாக நான் இருக்கிறேன்.நாளை உன்னுடைய எதிர்காலமாக இருக்க விரும்புகிறேன்.ஏனென்றால் உன்னுடைய கடந்த காலமும், நிகழ்காலமும், எதிர்காலமும் எனக்கு மிகவும் முக்கியமானவை.என்றென்றும் நான் உன்னுடன் இருப்பேன். ❤️🫂. I may have arrived late, but I promise I am here to stay. Forever. ❤️'",
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

ஜீவா, இனிய பிறந்தநாள் வாழ்த்துகள். 💋💋

தங்கூ, உன்னோடு இந்தப் பிறந்தநாளைக் கொண்டாடுவதில் எனக்கு அளவில்லாத மகிழ்ச்சி. 💞 இந்த நான்காவது பிறந்தநாளை உன்னுடன் சேர்ந்து கொண்டாடுகிறேன் என்பதை நினைக்கும்போது, இந்த நான்கு ஆண்டுகள் எவ்வளவு வேகமாகக் கடந்துவிட்டன என்று ஆச்சரியமாக இருக்கிறது. 😭✨ கண்ணை மூடித் திறப்பதற்குள் எல்லாமே நடந்துவிட்டது போலத் தோன்றுகிறது.

ஒரு விஷயத்தை உன்னிடம் சொல்ல வேண்டும் என்று பல நாட்களாக நினைத்துக் கொண்டிருக்கிறேன். அதை எப்படிச் சொல்வது என்று எனக்குத் தெரியவில்லை. ஆனால் என் மனம் சொல்ல நினைப்பதை நீ புரிந்துகொள்வாய் என்று நம்புகிறேன். ❤️

வாழ்க்கையில் நீ நிறைய கஷ்டங்களைச் சந்தித்திருக்கிறாய். அந்த வலிகள் என் மனதையும் தொட்டன. 🥺 அதுவும் நான் உன்னுடன் இவ்வளவு நெருக்கமாக இணைந்ததற்கான ஒரு காரணம் என்று நினைக்கிறேன். இனிமேல் வாழ்க்கை உனக்குக் கொடுக்காத மகிழ்ச்சிகளை எல்லாம் நான் உனக்குக் கொடுக்க வேண்டும் என்று ஆசைப்படுகிறேன். 🌷

எல்லாவற்றையும் விட நான் அதிகமாக நினைப்பது உன்னுடைய இருப்பைத்தான். 🫂 ஒரு நாள்கூட உன்னை நினைக்காமல் கடந்ததில்லை. நான் என்ன செய்தாலும், எங்கு இருந்தாலும், நீ எப்போதும் என் மனதிலும் இதயத்திலும் இருக்கிறாய். ❤️

எனக்கும் பயங்களும், கவலைகளும் இருக்கின்றன. 😔 என்னுடைய மிகப்பெரிய பயம் உன்னை இழந்துவிடக் கூடாது என்பதுதான். என்ன நடந்தாலும் என்னைவிட்டு நீ போய்விடக் கூடாது. நான் தவறு செய்தாலும், என்னுடன் நீ இருக்க வேண்டும் என்று நினைக்கிறேன். 🤍

என் வாழ்க்கையில் பலரைப் பார்த்திருக்கிறேன். அவர்கள் யார் என்பதை அவர்கள் செய்த செயல்கள் எனக்குப் புரிய வைத்திருக்கின்றன. அந்த மாதிரியான விஷயங்களை நான் வெறுக்கிறேன். ஆனால் நீ ஒருபோதும் அப்படி இருந்ததில்லை. நீ எப்போதும் மற்றவர்களிடமிருந்து வேறுபட்டவனாகவே இருந்திருக்கிறாய். அதனால்தான் நான் உன்னை இன்னும் அதிகமாக நேசிக்கிறேன். 💖

சில நேரங்களில் நீ உன்னுடைய உலகத்தில் மூழ்கிப் போகும்போது, என்னை மறந்துவிடுவாயோ என்ற பயம் எனக்கு ஏற்படுகிறது. நான் இந்த விஷயங்களை ஏற்கனவே உன்னிடம் கூறியிருந்தாலும், மீண்டும் ஒருமுறை சொல்ல வேண்டும் என்று தோன்றியது. வாழ்க்கை மிகவும் சிறியது. நாளை என்ன நடக்கும் என்று யாருக்கும் தெரியாது. அதனால்தான் என் உணர்வுகளை மனதிற்குள் மட்டும் வைத்துக்கொள்ள விரும்பவில்லை. 🌙✨

என் வாழ்க்கையில் நீ வந்ததற்கு நன்றி, அம்மு. 🫂 என்னுடைய வாழ்க்கையில் கிடைத்த மிக அழகான பரிசு நீதான். நீ உயர உயர வளர வேண்டும். உன்னுடைய கனவுகள் அனைத்தும் நனவாக வேண்டும். உன்னுடைய வெற்றிகளை எல்லாம் நான் பார்க்க வேண்டும். 🌻

ஒவ்வொரு நாளும் நான் பிரபஞ்சத்திடம் வேண்டிக்கொள்கிறேன். எனக்குக் கிடைக்கும் எல்லா மகிழ்ச்சிகளும், வெற்றிகளும், ஆசீர்வாதங்களும் உனக்குக் கிடைக்க வேண்டும் என்று நினைக்கிறேன். 🤍 வாழ்க்கையில் வலி வந்தால், அதை உனக்காக நான் ஏற்றுக்கொள்ளத் தயாராக இருக்கிறேன்.

உன்னுடைய பெற்றோருக்கு ஒரு சிறந்த மகனாகவும், மேகாவுக்கு அன்பான அண்ணனாகவும், எனக்கு மிகப்பெரிய ஆதரவாகவும் நீ இருக்கிறாய். 💎 உண்மையில், நீ ஒரு அரிய ரத்தினம்.

உன் மனதில் எத்தனை எண்ணங்கள் ஓடினாலும், உன் இதயம் எவ்வளவு அழகானது, நேர்மையானது, கருணையானது என்பது எனக்குத் தெரியும். அதனால்தான் உன்னை நான் மிகவும் நேசிக்கிறேன். ❤️

உன்னைக் கவனித்துக்கொள். சரியாகச் சாப்பிடு. உன்னுடைய உடல்நலனில் அக்கறை கொள். வாழ்க்கையில் எதுவும் தொடங்கவில்லை என்று ஒருபோதும் நினைக்காதே. 🌸 எல்லாவற்றிற்கும் ஒரு சரியான நேரம் இருக்கும். நீ உன்னால் முடிந்த அளவிற்கு முயற்சி செய்துகொண்டே இரு. பிரபஞ்சம் உனக்கான பாதையை நிச்சயமாகத் திறக்கும். அந்த வாய்ப்பை நீ தைரியமாகப் பயன்படுத்திக்கொள். ✨

உன்னுடைய நல்ல மனதிற்கு நல்ல விஷயங்களே நடக்கும் என்று நான் நம்புகிறேன். 🫂

உன்னுடைய வாழ்க்கைப் பயணத்தின் ஒரு பகுதியாக இருப்பதில் எனக்கு மிகவும் மகிழ்ச்சி. இனியும் உன்னுடன் தொடர்ந்து பயணம் செய்ய வேண்டும் என்று ஆசைப்படுகிறேன். என்ன நடந்தாலும், உன்னுடைய கையைப் பிடித்துக்கொண்டு உன்னுடன் இருப்பேன். 🤝❤️

என்னை நம்பு.

நான் உன்னை மிகவும் நேசிக்கிறேன், என் அன்பே. 💋❤️

என் மனம் முழுவதுமாக நேசித்த அந்த மனிதன் நீதான். உன்னை நினைத்தாலே என் மனதிற்கு ஒரு அமைதி கிடைக்கிறது. எவ்வளவு சோகமாக இருந்தாலும், உன்னை நினைக்கும்போது என் முகத்தில் ஒரு புன்னகை வந்துவிடுகிறது. 😊❤️

நீ என்னுடன் இருக்கிறாய் என்ற உணர்வை விட, இந்த உலகத்தில் வேறு எந்த விஷயமும் எனக்கு அதிக மகிழ்ச்சியைக் கொடுக்க முடியாது.

மகிழ்ச்சியாக இரு. ஆரோக்கியமாக இரு. என்றும் என்னுடன் இரு. 🫂❤️

இனிய பிறந்தநாள் வாழ்த்துகள், தங்கூ. 🎂✨

என்னுடைய எல்லா அன்போடும், 🫂🫂🫂🫂

உன்னை இறுக்கமாகக் கட்டிப்பிடிக்க வேண்டும் என்று தோன்றுகிறது. உன்னை மிகவும் நினைத்துக்கொண்டிருக்கிறேன். 🥺❤️

உன் அம்மு ❤️`;