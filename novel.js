const welcomeBlock = document.getElementById('welcomeBlock');
const cardBox = document.getElementById('cardBox');
const quoteCard = document.getElementById('quoteCard');
const cardBtn = document.getElementById('cardBtn');
const resetBtn = document.getElementById('resetBtn');
const messageBox = document.getElementById('messageBox');
const langSwitcher = document.getElementById('langSwitcher') || document.getElementById('langSelect');

let currentLang = 'my'; // Default language state

const translations = {
    my: {
        "welcome_title": "နှစ်လွှာပေါင်း၍သာတစ်ရွက်မည်သော စွယ်တော်ရွက်ငယ်",
        "welcome_span": "တစ်လွှာကြွေလွင့်ပြီမို့ တစ်ရွက်မမည်သာသော",
        "welcome_subtitle": "အထီးကျန် ဤဘဝဝယ်",
        "btn_continue": "ဆက်ရန်...",
        "btn_reset": "ပြန်စရန်",

        "message_text": "မမြင်နိုင်သောအနာဂတ်ကို ရှုမျှော်ခြင်းသည် ဒုက္ခသာမည်၏ <br> မြင်မက်ဆုံမက်ခဲ့သော အတိတ်ကို လွမ်းဆွတ်ခြင်းသည်လည်း ဒုက္ခသာမည်သည်။",
        "message_author": "# ကံ့ကော်မောင်",

        "quote1_text": "သံသရာလမ်းဘုံဘဝ ကွန်းထောက်တစ်စခန်းမှာ <br> ရေစက်အဟုန်ကြောင့်​ ခိုင်နှင့် မောင်ပြန်တွေ့ဆုံလျှင် မောင့်ကို ခွင့်လွှတ်နိုင်ပါစေ ခိုင် ...။ ။",
        "quote1_author": "# တက္ကသိုလ်ဘုန်းနိုင် <br> # သူငယ်ချင်းလို့ဆက်၍ခေါ်မည်ခိုင်",

        "quote2_text": "ဤမြေမှသည် စတင်ခဲ့သော သံယောဇဉ်တို့သည် ဤမြေမှာပင် အဆုံးသတ်သွားပါစေဦးတော့၊ ငါတို့ထားခဲ့သော မေတ္တာကား ဘယ်တော့မှ ပျက်စီးလိမ့်မည် မဟုတ် ...။ ။",
        "quote2_author": "# တက္ကသိုလ်ဘုန်းနိုင် <br> # ဤမြေမှသည်",

        "quote3_text": "လူတွေဟာ အကြိမ်ကြိမ် ဆုံတွေ့ကြသလို၊ အကြိမ်ကြိမ်လည်း ဝေးကွာသွားကြပြန်တယ်။ အရေးကြီးတာက မုန်းလို့ ခွဲခွာတာ မဟုတ်ဘဲ ချစ်လျက်နဲ့ ခွဲရတဲ့ ဝေဒနာကို နားလည်ဖို့ပါပဲ ...။ ။",
        "quote3_author": "# တက္ကသိုလ်ဘုန်းနိုင် <br> # သူငယ်ချင်းလို့ဆက်၍ခေါ်မည်ခိုင်",

        "quote4_text": "ကိုယ်ဟာ လူတစ်ယောက်ကိုချစ်ဖို့လောက်ပဲ သိတာ။ အဲဒီသူက ကိုယ့်ကိုလိုချင်ရဲ့လား မလိုချင်ဘူးလားဆိုပြီး အကဲခတ်တဲ့နေရာတော့ သိပ်ညံ့တာပါပဲ ...။ ။",
        "quote4_author": "# ခဲတံ <br> # ကိုယ်တို့တွဲရအောင်",

        "quote5_text": "နှစ်စဉ် ပိတောက်တွေ ပွင့်ဆဲ၊ လတွေ သာဆဲ ဖြစ်နေဦးမှာပါပဲ။ ဒါပေမဲ့ အတူတူ ကြည့်ခဲ့ဖူးတဲ့ ကာလတွေကိုတော့ ပိတောက်ပန်းရနံ့နဲ့အတူ လွမ်းဆွတ်စွာပဲ သတိရနေရတော့မယ်ပဲ ...။ ။",
        "quote5_author": "# တက္ကသိုလ်ဘုန်းနိုင် <br> # ပိတောက်ပွင့်ဆဲ လသာဆဲဝယ်",

        "quote6_text": "ကျွန်တော့်ချစ်သူကို တကယ်ချစ်လေသူ တစ်ဦးအား ကျွန်တော် ဘာကြောင့် မုန်းရလေမည်နည်း ...။ ။",
        "quote6_author": "# တက္ကသိုလ်ဘုန်းနိုင် <br> # မောင့်ဘဝ ညအလားကွယ်",

        "quote7_text": "သေကွဲပဲကွဲကွဲ ရှင်ကွဲပဲကွဲကွဲ ဘယ်ကွေကွင်းခြင်းမှ မကောင်းပါဘူး ချစ်သောသူနဲ့ဘယ်သူများဝေးချင်မလဲ လွီဇာငယ် ...။ ။",
        "quote7_author": "# ဗိုလ်တွန် <br> # AVA",

        "quote8_text": "ကျွန်တော် မပန်သာသော ပန်တော်ဝင်သည် ထိုက်တန်သူ၏ဦးခေါင်းထက်၌ စံရသည်ကို ကျွန့်တော့်အတွက် ဝမ်းသာရန်မှလွဲ၍ အခြား အကြောင်းမရှိ ...။ ။",
        "quote8_author": "# တက္ကသိုလ်ဘုန်းနိုင် <br> # မောင့်ဘဝ ညအလားကွယ်",

        "quote9_text": "လူသာအိုမည်၊ နှလုံးသားကအိုချင်မှ အိုမည်။ အိုလေသည့်တိုင်အောင် နှလုံးသားသည် နုပျိုစဥ်က တွယ်တာခဲ့ရသော သံယောဇဥ်များကို ထိန်းသိမ်းထားမည်။ <br> မိမိပင် ချစ်လှစွာသော နုနုငယ်၏ စာလေးများကိုသိမ်းထားဆဲဖြစ်၏။ တစ်ခုတည်းသော နုနုငယ်၏ဓာတ်ပုံကလေးကိုလည်း သိမ်းထားဆဲဖြစ်၏ ...။ ။",
        "quote9_author": "# တက္ကသိုလ်ဘုန်းနိုင် <br> # ဝသန်လေချိန်မှန်ကူး",

        "quote10_text": "ကျွန်တော်ရပ်နေတယ်။ မမေ့နိုင်တဲ့ ဒီနေရာမှာ ကျွန်တော်မျက်ရည်ဝဲရင်း​ ရပ်နေတယ်။ မျက်ရည်ဝဲသာက သက်သက်၊ ရပ်တည်နိုင်သေးတာကသက်သက် ...။ ။",
        "quote10_author": "# တက္ကသိုလ်ဘုန်းနိုင် <br> # မောင့်ဘဝ ညအလားကွယ်"
    },

    en: {
        "welcome_title": "A delicate orchid-tree leaf, whole only when twin lobes entwine",
        "welcome_span": "Now that one half has fallen away, no longer complete,",
        "welcome_subtitle": "In this solitary life of mine.",
        "btn_continue": "Read more...",
        "btn_reset": "Start Anew",

        "message_text": "Gazing into an unseen future brings nothing but sorrow; <br> Longing for a past we once dreamed and shared is sorrow all the same.",
        "message_author": "# KantKaw Maung",

        "quote1_text": "If, by the pull of karmic destiny, you and I should cross paths again at a resting stop along this endless cycle of rebirth, may you find it in your heart to forgive me, Khine...",
        "quote1_author": "# Tekkatho Bhone Naing <br> # I Shall Continue to Call You Friend, Khine",

        "quote2_text": "Though the affections that took root in this soil may come to an end upon this very ground, the love we leave behind shall never perish...",
        "quote2_author": "# Tekkatho Bhone Naing <br> # From This Earth",

        "quote3_text": "People meet time and time again, only to drift apart just as often. What truly matters is understanding the agony of parting—not out of hatred, but while loving each other still...",
        "quote3_author": "# Tekkatho Bhone Naing <br> # I Shall Continue to Call You Friend, Khine",

        "quote4_text": "I only know how to love someone. When it comes to discerning whether they truly want me or not, I am dreadfully foolish...",
        "quote4_author": "# Khetan <br> # Let's Be Together",

        "quote5_text": "Year after year, the Padauk will bloom and the moon will shine bright. Yet those moments we once watched together will linger only in longing, drifting forever on the scent of the Padauk blossoms...",
        "quote5_author": "# Tekkatho Bhone Naing <br> # While Padauks Bloom and the Moon Shines",

        "quote6_text": "Why should I harbor hatred for one who truly loves the person I love...",
        "quote6_author": "# Tekkatho Bhone Naing <br> # My Life Is Like the Night, My Dear",

        "quote7_text": "Whether parted by death or parted in life, no separation is ever kind. Who would ever wish to be parted from the one they love, my sweet Louisa...",
        "quote7_author": "# Bo Ton <br> # AVA",

        "quote8_text": "The royal bloom I could not wear now rests upon the crown of one worthy; for me, there is nothing left but to rejoice...",
        "quote8_author": "# Tekkatho Bhone Naing <br> # My Life Is Like the Night, My Dear",

        "quote9_text": "The body may grow old, but the heart might never. Even as age takes its toll, the heart will hold fast to the attachments nurtured in its youth. I myself still treasure the gentle letters from my beloved Nu Nu Ngae, and still keep her solitary photograph close to my heart...",
        "quote9_author": "# Tekkatho Bhone Naing <br> # As the Monsoon Winds Return",

        "quote10_text": "I stand here. In this unforgettable place, I stand with tear-filled eyes. Tears welling in one's eyes is one thing; remaining standing is quite another...",
        "quote10_author": "# Tekkatho Bhone Naing <br> # My Life Is Like the Night, My Dear"
    }
};

// Primary Language Switcher Function
function setLanguage(lang) {
    currentLang = lang; // Keep global state synchronized
    const langData = translations[lang];
    if (!langData) return;

    document.body.setAttribute('data-lang', lang)

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        if (langData[key] !== undefined) {
            element.innerHTML = langData[key];
        }
    });

    localStorage.setItem('userLanguage', lang);

    if (typeof swiper !== 'undefined' && swiper) {
        swiper.update();
    }
}

// Function to render single dynamic quotes if used outside Swiper
function displayQuote(index) {
    const quoteEl = document.querySelector('.quote-text');
    const authorEl = document.querySelector('.quote-author');
    
    if (quoteEl && authorEl) {
        const qKey = `quote${index}_text`;
        const aKey = `quote${index}_author`;

        quoteEl.setAttribute('data-i18n', qKey);
        authorEl.setAttribute('data-i18n', aKey);

        quoteEl.innerHTML = translations[currentLang][qKey] || "";
        authorEl.innerHTML = translations[currentLang][aKey] || "";
    }
}

// Dropdown Change Listener
if (langSwitcher) {
    langSwitcher.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
}

// Initial Load Handler
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('userLanguage') || 'my';
    if (langSwitcher) langSwitcher.value = savedLang;
    setLanguage(savedLang);
});

// Helper Function for CSS Animations
function clearTransitions(element) {
    if (element) {
        element.classList.remove('transition-fade-out', 'transition-fade-in');
    }
}

// Transition logic to Quotes Screen
if (cardBtn) {
    cardBtn.addEventListener('click', () => {
        clearTransitions(welcomeBlock);
        clearTransitions(cardBox);

        welcomeBlock.classList.add('transition-fade-out');
        cardBox.classList.add('transition-fade-out');

        setTimeout(() => {
            welcomeBlock.classList.add('hidden');
            cardBox.classList.add('hidden');

            clearTransitions(welcomeBlock);
            clearTransitions(cardBox);

            if (quoteCard) quoteCard.classList.remove('hidden');
            if (messageBox) messageBox.classList.remove('hidden');
            if (resetBtn) resetBtn.classList.remove('hidden');

            clearTransitions(quoteCard);
            if (resetBtn) clearTransitions(resetBtn);

            if (typeof swiper !== 'undefined' && swiper) {
                swiper.update();
                swiper.slideTo(0, 0);
            }

            if (quoteCard) quoteCard.classList.add('transition-fade-in');
            if (resetBtn) resetBtn.classList.add('transition-fade-in');
        }, 500);
    });
}

// Transition logic to Welcome Screen
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        clearTransitions(quoteCard);
        clearTransitions(resetBtn);

        if (quoteCard) quoteCard.classList.add('transition-fade-out');
        resetBtn.classList.add('transition-fade-out');

        setTimeout(() => {
            if (quoteCard) quoteCard.classList.add('hidden');
            resetBtn.classList.add('hidden');
            if (messageBox) messageBox.classList.add('hidden');

            clearTransitions(quoteCard);
            clearTransitions(resetBtn);
            if (typeof swiper !== 'undefined' && swiper) swiper.slideTo(0, 0);

            if (welcomeBlock) welcomeBlock.classList.remove('hidden');
            if (cardBox) cardBox.classList.remove('hidden');

            clearTransitions(welcomeBlock);
            clearTransitions(cardBox);

            if (welcomeBlock) welcomeBlock.classList.add('transition-fade-in');
            if (cardBox) cardBox.classList.add('transition-fade-in');
        }, 500);
    });
}

// Swiper Initialization
var swiper = new Swiper(".mySwiper", {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 0,

    observer: true,
    observeParents: true,
    allowTouchMove: false, 
    simulateTouch: false,
    mousewheel: false,

    keyboard: {
        enabled: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            allowTouchMove: false, // Disables swiping on mobile (arrows only)
        },
        769: {
            allowTouchMove: true,  // Keeps swiping enabled on desktop/tablets if desired
        }
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    keyboard: true,
    mousewheel: true,
});