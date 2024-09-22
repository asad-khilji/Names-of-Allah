const flashcards = [
    { question: "Allah", answer: "The Greatest Name" },
    { question: "Al Ilah", answer: "The God" },
    { question: "Al Hayy", answer: "The Ever Living" },
    { question: "Al Qayyum", answer: "The Self Sustaining" },
    { question: "Ar Rabb", answer: "The Master" },
    { question: "Ar Rahman", answer: "The Extremely Loving and Caring" },
    { question: "Ar Raheem", answer: "The Always Loving and Caring" },
    { question: "Al Maalik", answer: "The Owner" },
    { question: "Al Malik", answer: "The King" },
    { question: "Al Quddus", answer: "The Blessed" },
    { question: "As Subooh", answer: "The Perfect" },
    { question: "As Salam", answer: "The Giver of Peace" },
    { question: "Al Mumin", answer: "The Giver of Faith" },
    { question: "Al Muhaymin", answer: "The Dominant" },
    { question: "Al Aziz", answer: "The All Mighty" },
    { question: "Al Jabbar", answer: "The Compeller" },
    { question: "Al Mutakbir", answer: "The Greatest" },
    { question: "Al Khaliq", answer: "The Creator" },
    { question: "Al Khalaq", answer: "The Frequent Creator" },
    { question: "Al Bari", answer: "The Originator" },
    { question: "Al Mussawir", answer: "The Fashioner" },
    { question: "Al Wahed", answer: "The One and Only" },
    { question: "Al Ahad", answer: "The Uniquely One" },
    { question: "As Samad", answer: "The Self Sufficient" },
    { question: "Al Ghafar", answer: "The Most Forgiving" },
    { question: "Al Ghafoor", answer: "The Most Forgiving" },
    { question: "Al Afuw", answer: "The Pardoner" },
    { question: "At Tawwab", answer: "The Frequent Repenter" },
    { question: "Al Haleem", answer: "The Forbearing" },
    { question: "Al Kareem", answer: "The Noble" },
    { question: "Al Akhram", answer: "The Most Noble" },
    { question: "Al Muti", answer: "The Giver" },
    { question: "Al Mani", answer: "The Withholder" },
    { question: "At Tayyib", answer: "The Pure" },
    { question: "Al Rauf", answer: "The Most Kind" },
    { question: "Al Mubeen", answer: "The Clear" },
    { question: "Al Haqq", answer: "The Ultimate Truth" },
    { question: "Al Barr", answer: "The Source of All Good" },
    { question: "Al Hameed", answer: "The Praiseworthy" },
    { question: "Al Majeed", answer: "The Glorious" },
    { question: "Al Wahhab", answer: "The Bestower of Gifts" },
    { question: "Al Latif", answer: "The Subtle" },
    { question: "Al Fatah", answer: "The Opener" },
    { question: "Al Wadud", answer: "The Most Loving and Caring" },
    { question: "Al Mannan", answer: "The Giver of Gifts" },
    { question: "Al Wasi", answer: "The Vast" },
    { question: "Al Hafeez", answer: "The Perserver" },
    { question: "Al Hafiz", answer: "The Protector" },
    { question: "Al Muqaddim", answer: "The One who puts first" },
    { question: "Al Muakhir", answer: "The One who puts last" },
    { question: "Al Muiz", answer: "The One who honors" },
    { question: "Al Muzill", answer: "The One who humiliates" },
    { question: "As Sayyed", answer: "The One who everyone needs" },
    { question: "Al Muqit", answer: "The Faciliator" },
    { question: "As Sami", answer: "The All Hearing" },
    { question: "Al Baseer", answer: "The All Seeing" },
    { question: "Al Aleem", answer: "The All Knowing" },
    { question: "Al Khabir", answer: "The All Aware" },
    { question: "Ash Shaheed", answer: "The Witness" },
    { question: "Al Raqib", answer: "The Observer" },
    { question: "Al Muhit", answer: "The All Encompassing" },
    { question: "Al Haseeb", answer: "The Reckoner" },
    { question: "Ad Dayyan", answer: "The Accountant" },
    { question: "Al Hakam", answer: "The Judge" },
    { question: "Al Hakeem", answer: "The Wise" },
    { question: "Al Qadir", answer: "The All Powerful" },
    { question: "Al Qadeer", answer: "The All Powerful" },
    { question: "Al Muqtadir", answer: "The All Powerful" },
    { question: "Al Jameel", answer: "The Most Beautiful" },
    { question: "As Siteer", answer: "The Concealer" },
    { question: "Ash Shakir", answer: "The Appreciative" },
    { question: "Ash Shakoor", answer: "The Appreciative" },
    { question: "Al Wakeel", answer: "The Disposer of Affairs" },
    { question: "Al Qabid", answer: "The Withholder" },
    { question: "Al Basit", answer: "The Extender" },
    { question: "Al Kabeer", answer: "The Grand" },
    { question: "Al Adheem", answer: "The Magnificant" },
    { question: "Al Qawiyy", answer: "The Most Strong" },
    { question: "Al Mateen", answer: "The Firm" },
    { question: "Al Ali", answer: "The Most High" },
    { question: "Al A'la", answer: "The Most High" },
    { question: "Al Muta'al", answer: "The Most High" },
    { question: "Al Awwal", answer: "The First" },
    { question: "Al Akhir", answer: "The Last" },
    { question: "Az Zahir", answer: "The Apparent" },
    { question: "Al Batin", answer: "The Close" },
    { question: "Al Jawad", answer: "The Most Generous" },
    { question: "Al Rafiq", answer: "The Most Gentle" },
    { question: "Al Wali", answer: "The Friend" },
    { question: "Al Mola", answer: "The Protector" },
    { question: "An Naseer", answer: "The Helper" },
    { question: "Al Mujeeb", answer: "The Responsive" },
    { question: "Al Qareeb", answer: "The Near" },
    { question: "Al Ghaniyy", answer: "The Rich" },
    { question: "Al Hadi", answer: "The Guide" },
    { question: "Ash Shafie", answer: "The Cure" },
    { question: "Al Witr", answer: "The One and Only" },
    { question: "An Noor", answer: "The Light" },
    { question: "Al Fatir", answer: "The Originator" },
    { question: "Al Badi", answer: "The Originator" },
    { question: "Al Malik ul Mulk", answer: "The King of All Kings" },
    { question: "Dhul Jalili Wal Iqram", answer: "The Possessor of Majesty and Honor" },
    { question: "As Saboor", answer: "The Patient" },
    { question: "Ar Razaaq", answer: "The Provider" },
    { question: "Al Muhyee", answer: "The Giver of Life" },
    { question: "Al Mumeet", answer: "The Giver of Death" },
    { question: "Al Qahhar", answer: "The Overwhelming" },
    // Add more questions up to 100
];

let currentCardIndex = 0;

function displayCard() {
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    
    const currentCard = flashcards[currentCardIndex];
    questionElement.textContent = currentCard.question;
    answerElement.textContent = currentCard.answer;
    
    // Reset the card to show the front initially
    const flashcard = document.querySelector('.flashcard');
    flashcard.classList.remove('clicked');
}

function toggleCard() {
    const flashcard = document.querySelector('.flashcard');
    flashcard.classList.toggle('clicked');
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    displayCard();
}

// Initialize the first card
displayCard();