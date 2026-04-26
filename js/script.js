// ==================== ISI UCAPAN DARI HATI KAMU DI SINI! ====================

// ✏️ EDIT bagian ini sesuai keinginan kamu!
const customMessages = {
    greeting: "Halo istri aku",
    subGreeting: "Aku buatin ini khusus buat kamu",
    
    message1: "Setiap hari tuh rasanya kurang lengkap kalau belum liat kamu. Senyum kamu tuh kayak vitamin buat hati aku.",
    
    message2: "Makasih ya udah mau sama aku yang masih banyak kurangnya Kamu tuh rumah paling nyaman buat pulang.",
    
    message3: "Kadang aku mikir 'beruntung banget ya aku punya kamu'. Kamu datang tepat waktu, pas aku paling butuh seseorang jadi alasan buat tersenyum.",
    
    message4: "Aku gak tau masa depan bakal gimana, tapi yang aku tau, aku mau jalani semuanya bareng kamu. Kamu bukan cuma pacar, kamu rumah. ❤️",
    
    surpriseMessage: "Halo sayang semoga kamu liat yang ini ya, kamu tau? aku bener bener sayang kamu lebih dari apa yang kamu kira, aku juga selalu cinta kamu setiap saat bahkan setiap detik nya aku bisa aja semakin jatuh cinta sama kamu. Aku cuman berharap, apapun yang terjadi nanti kamu selalu mau sama aku dan terus mau sama aku, aku bakal usahain semua buat kamu biar kamu terus bahagia sayang. I love you lebih dari apapun yang bisa aku tulis di sini. 💌"
};

// =============== FITUR SLIDER LOVE METER ===============

const loveSlider = document.getElementById('loveSlider');
const sliderPercent = document.getElementById('sliderPercent');
const sliderMessage = document.getElementById('sliderMessage');

// Pesan berdasarkan persentase cinta
const loveMessages = {
    0: "😢 0%? Gak mungkin dong! Coba geser lagi sayang...",
    10: "🥺 10%... Aku tahu kamu cuma iseng, geser terus dong!",
    20: "🙈 20%... Mulai ada rasa nih!",
    30: "😊 30%... Pelan-pelan tapi pasti ❤️",
    40: "😘 40%... Hampir setengah! Aku udah seneng nih!",
    50: "🥰 50%... Setengah jalan, tapi cintaku ke kamu lebih dari ini!",
    60: "😍 60%... Kamu tahu? Kamu makin spesial buat aku 💕",
    70: "🤗 70%... Aku mulai nggak bisa bayangin hari tanpa kamu!",
    75: "💖 75%... Nggak kerasa ya, ternyata sebesar ini cintaku!",
    80: "💗 80%... Kamu tuh alasan kenapa aku semangat setiap hari!",
    85: "💓 85%... Setiap detik bareng kamu berasa kayak mimpi ❤️",
    90: "💞 90%... Aku sayang banget sama kamu! Nggak mau lepas!",
    95: "💕 95%... Hampir penuh! Kamu mau lihat 100%?",
    100: "💘💘💘 100%! CINTAKU TAK TERHINGGA BUAT KAMU! 💘💘💘 Aku sayang kamu lebih dari apapun yang bisa aku ungkapin. Kamu adalah hadiah terindah dalam hidup aku. 🤍"
};

// Fungsi untuk mendapatkan pesan berdasarkan nilai
function getLoveMessage(value) {
    // Cari pesan yang paling mendekati
    const percentages = Object.keys(loveMessages).map(Number).sort((a,b) => a-b);
    let closest = percentages[0];
    for (let p of percentages) {
        if (value >= p) closest = p;
        else break;
    }
    return loveMessages[closest];
}

// Event saat slider digeser
if (loveSlider) {
    loveSlider.addEventListener('input', function() {
        const value = parseInt(this.value);
        sliderPercent.textContent = value;
        
        // Ubah warna slider berdasarkan nilai
        const colorPercent = (value / 100) * 120;
        this.style.background = `linear-gradient(90deg, #ff6b6b ${colorPercent}%, #ffe0e0 ${colorPercent}%)`;
        
        // Tampilkan pesan sesuai persentase
        const message = getLoveMessage(value);
        sliderMessage.textContent = message;
        
        // Efek hati saat digeser
        createFloatingHeart(
            loveSlider.getBoundingClientRect().left + loveSlider.offsetWidth / 2,
            loveSlider.getBoundingClientRect().top
        );
        
        // Kalau sudah 100%, tambah efek extra
        if (value === 100) {
            for(let i = 0; i < 15; i++) {
                setTimeout(() => {
                    createFloatingHeart(window.innerWidth / 2, window.innerHeight / 2);
                }, i * 100);
            }
        }
    });
}

// ==================== KODE JS ====================

// DOM Elements
const greetingText = document.getElementById('greetingText');
const subGreeting = document.getElementById('subGreeting');
const message1El = document.getElementById('message1');
const message2El = document.getElementById('message2');
const message3El = document.getElementById('message3');
const message4El = document.getElementById('message4');
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseModal = document.getElementById('surpriseModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const surpriseMsgEl = document.getElementById('surpriseMessage');

// Isi pesan custom
greetingText.textContent = customMessages.greeting;
subGreeting.textContent = customMessages.subGreeting;
message1El.textContent = customMessages.message1;
message2El.textContent = customMessages.message2;
message3El.textContent = customMessages.message3;
message4El.textContent = customMessages.message4;
surpriseMsgEl.textContent = customMessages.surpriseMessage;

// Floating hearts saat klik
function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.opacity = '0.8';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.transition = 'all 1s ease-out';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.transform = 'translateY(-100px) translateX(' + (Math.random() * 100 - 50) + 'px)';
        heart.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        heart.remove();
    }, 1000);
}

// Klik di mana saja muncul hati
document.body.addEventListener('click', function(e) {
    if (e.target.closest('button') || e.target.closest('.modal')) return;
    createFloatingHeart(e.clientX, e.clientY);
});

// Tombol kejutan
if (surpriseBtn) {
    surpriseBtn.addEventListener('click', () => {
        surpriseModal.classList.remove('hidden');
        for(let i = 0; i < 8; i++) {
            setTimeout(() => {
                createFloatingHeart(
                    surpriseBtn.getBoundingClientRect().left + surpriseBtn.offsetWidth / 2,
                    surpriseBtn.getBoundingClientRect().top + surpriseBtn.offsetHeight / 2
                );
            }, i * 60);
        }
    });
}

// Tutup modal kejutan
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        surpriseModal.classList.add('hidden');
    });
}

if (surpriseModal) {
    surpriseModal.addEventListener('click', (e) => {
        if (e.target === surpriseModal) {
            surpriseModal.classList.add('hidden');
        }
    });
}

// Animasi pesan muncul satu per satu
const messages = document.querySelectorAll('.love-message');
messages.forEach((msg, index) => {
    msg.style.opacity = '0';
    msg.style.transform = 'translateX(20px)';
    setTimeout(() => {
        msg.style.transition = 'all 0.4s ease';
        msg.style.opacity = '1';
        msg.style.transform = 'translateX(0)';
    }, index * 150);
});

// =============== FITUR FOTO KENANGAN ===============

document.addEventListener('DOMContentLoaded', function() {
    const photoCards = document.querySelectorAll('.photo-card');
    const photoModal = document.getElementById('photoMessageModal');
    const photoMessageText = document.getElementById('photoMessageText');
    const closePhotoModalBtn = document.getElementById('closePhotoModalBtn');
    
    function showPhotoModal(message) {
        if (photoMessageText) photoMessageText.innerHTML = message.replace(/\n/g, '<br>');
        if (photoModal) photoModal.classList.remove('hidden');
    }
    
    photoCards.forEach((card) => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            const message = card.getAttribute('data-message');
            if (message) {
                showPhotoModal(message);
                
                const rect = card.getBoundingClientRect();
                for(let i = 0; i < 6; i++) {
                    setTimeout(() => {
                        createFloatingHeart(
                            rect.left + rect.width / 2,
                            rect.top + rect.height / 2
                        );
                    }, i * 80);
                }
            }
        });
        card.style.cursor = 'pointer';
    });
    
    if (closePhotoModalBtn) {
        closePhotoModalBtn.addEventListener('click', () => {
            if (photoModal) photoModal.classList.add('hidden');
        });
    }
    
    if (photoModal) {
        photoModal.addEventListener('click', (e) => {
            if (e.target === photoModal) {
                photoModal.classList.add('hidden');
            }
        });
    }
});

console.log('💖 Website cinta siap!');
