// --- Tailwind Configuration ---
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
                serif: ['Merriweather', 'serif'], // Added for Journal reading
            },
            colors: {
                papaya: '#FFEFD5', // Papaya Whip (Main BG)
                cream: '#FFF5E6', // Lighter shade for gradients
                primary: '#FB923C', // Orange 400
                secondary: '#F472B6', // Pink 400
                accent: '#22D3EE', // Cyan 400
                textMain: '#1F2937', // Gray 800
                textMuted: '#4B5563', // Gray 600
                glassBorder: 'rgba(255, 255, 255, 0.4)',
            },
            animation: {
                'blob': 'blob 7s infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        }
    }
}

// --- 1. Article/Journal Logic (The Content Database) ---

const articles = {
    'article1': {
        title: "Just Dont Give Up: My Web3 Journey",
        date: "April 4th, 2025",
        body: `
            <p>A lot of you are tired of the space atm. Not lazy, tired. Tired of showing up daily with no wins. Tired of doing everything “right” and still seeing nothing print.</p>
            <p>I’ve received tons of DM of lots of folks that i onboarded going back to web2, now this leaves me with the question… WHY?</p>
            
            <h3 class="font-bold text-xl mt-6 mb-2">MY JOURNEY</h3>
            <p>I started my web3 journey in 2022, i was brought into the NFT space by @cryptee__. He told me about a pakistan boy then that sold his NFT for like ~4m$. I was so blown, came in with that get rich mentality.</p>
            <p>After 8 months i still haven’t made a single dollar from web3. Those 8 months were hell, but then i kept on pushing. Was i burnt out? Yeah. I was so tired fr, sometimes i had to even sneak and send data to my phone from my mums phone.</p>
            <p>It kept on going until one day, i filled a form and got 80$ airdrop. i still remembered how @cryptee__ and i were jubilating because it was literally our first win. I mean we were screaming through the whole house.</p>
            <p>That’s was how everything changed, i suddenly realized its not a get rich scheme, rather you have an edge when you have knowledge.</p>
            
            <p>I started with degen because twitter influenced me so much, i was so naive that i was pressured by people that keep posting their wins. I wanted to have same things to show off for… and that was where i got it all wrong, i was comparing myself to people that have been here for like ~5-8 years with myself that’s not up a year. i lost half of the 80$ on degen.</p>
            <p>Then… i put it on myself to learn how to trade shit coins, found some resources, got tips and i started looking into onchain analyst. I was on this for about 5 months (without using my real money) i tracked wallets, and test run many dex filters, all of these while also interacting with airdrops.</p>
            
            <p>My biggest problem then was how to get data. i mostly use night sub then to do most of these stuffs. I mastered the art of tracking smart wallets and i started marketing myself. Luckily i met someone that was willing to allow me make calls for him.</p>
            <p>My first 3 calls were shit, i felt like a complete failure, i told him i wanted to back down, but he told me to learn more and he’ll be willing to still bet on me.</p>
            <p>Then… $Wen came, $Jup came, and other airdrops came. Life was so good, but… the airdrop szn seized, no TGE, nothing.</p>
            
            <p>That was when i decided i needed a skill instead of waiting on a project to decide when i’m gonna have money, i went off web3 for like 3 weeks.</p>
            <p>Started my html course, then moved to CSS, and then java. I’ve been on this for like 7 months now today inclusive. And i charge least 100$-1k$ depends on how complex you want the site to be. I mainly focus on meme projects.</p>
            
            <p>NOW… i use two phones, an iphone 14 pro and a samsung, i have my PC and all these fully bought with my own money. i could buy any amount of data i want. I’m not even half of where i dream to be, but i’m grateful for how far i’ve come.</p>
            <p>If you are the type that feels like you’re not seeing the wins but you’re putting in the efforts. i want you to take a step back and re-strategize. Sometimes you might be consistent with something but in a wrong way, consistency is key but smart consistency also matters.</p>
            <p>It was never easy for anyone, but trust in God and do your hard work smartly. You can’t be farming 300 projects at once and expect to call that smartness? you might get lucky but the chances are slim compared to me that picks 5 protocols and max click them for highest allo.</p>
            <p>Work smart and hard. these two combos are what keeps you going.</p>
        `
    },
    'article2': {
        title: "The idea of privacy",
        date: "Nov 05, 2025",
        body: `
            <p>DeFi has grown, exponentially. Layers upon layers of liquid flowing into the eco.</p>
            <p>And yet, for all its scale, there’s a core structural flaw that nobody can deny:</p>
            
            <p class="font-bold italic text-center my-6 text-xl text-textMain">(Privacy doesn’t exist)</p>
            
            <p>The current trajectory of DeFi atm treats transparency as synonymous with trust.</p>
            <p>This might sound appealing on the surface (everyone can see everything, so the network is transparent) but in practice, it’s a trap.</p>
            
            <p>Visibility favors the opportunistic:</p>
            
            <div class="my-6 p-6 bg-white/50 border-l-4 border-primary rounded-r-lg shadow-sm">
                <ul class="space-y-2 font-medium">
                    <li><i class="fas fa-angle-right text-primary mr-2"></i> Front runners</li>
                    <li><i class="fas fa-angle-right text-primary mr-2"></i> Copy traders</li>
                    <li><i class="fas fa-angle-right text-primary mr-2"></i> And bots that thrive on exposed data</li>
                </ul>
            </div>
            
            <p>This has led to builders hesitating to test bold ideas. And traders behave cautiously because exposure invites risk.</p>
            
            <p>Yeah,</p>
            <p>The network scales numerically, but it doesn’t scale autonomously. It scales under constant surveillance.</p>
            
            <p>And that is the gap <strong>miden</strong> is trying to bridge.</p>
            
            <p>It treats privacy as foundational. And from day one, it ensures that transactions, notes, and contracts can exist w/o exposure.</p>
            
        `
    }
};

const modal = document.getElementById('article-modal');
const modalTitle = document.getElementById('modal-title');
const modalDate = document.getElementById('modal-date');
const modalBody = document.getElementById('modal-body');

function openArticle(id) {
    const article = articles[id];
    if (!article) return;

    modalTitle.textContent = article.title;
    modalDate.textContent = article.date;
    modalBody.innerHTML = article.body;

    modal.classList.remove('hidden-modal');
    modal.classList.add('visible-modal');
    document.body.classList.add('modal-open');
}

function closeArticle() {
    modal.classList.remove('visible-modal');
    modal.classList.add('hidden-modal');
    document.body.classList.remove('modal-open');
}

// --- 2. Navbar Glass Effect ---
const navbar = document.getElementById('navbar');
// Added simple throttle to reduce scroll event firing
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            if (window.scrollY > 50) {
                navbar.classList.add('glass', 'shadow-sm');
                navbar.classList.remove('py-4');
                navbar.classList.add('py-2');
            } else {
                navbar.classList.remove('glass', 'shadow-sm');
                navbar.classList.remove('py-2');
                navbar.classList.add('py-4');
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// --- 3. Mobile Menu Toggle ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    mobileMenu.classList.toggle('translate-x-full');
    document.body.classList.toggle('overflow-hidden');
}

mobileMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

// --- 4. Scroll Reveal Animation ---
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;
    revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
};
// Debounce scroll reveal slightly
let revealTimeout;
window.addEventListener('scroll', () => {
    if (revealTimeout) return;
    revealTimeout = setTimeout(() => {
        revealOnScroll();
        revealTimeout = null;
    }, 20);
});
revealOnScroll();

// --- 5. Canvas Animation (Optimized) ---
const canvas = document.getElementById('network-canvas');
const ctx = canvas.getContext('2d');
let width, height;
let particles = [];

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Slower speed for smoother look
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(251, 146, 60, 0.4)'; 
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    // OPTIMIZATION: Drastically reduced particle count (dividing by 25 instead of 10)
    // Capped at 30 particles max instead of 60
    const particleCount = Math.min(Math.floor(window.innerWidth / 25), 30); 
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}
initParticles();
// Debounce resize to prevent memory leaks during window dragging
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initParticles, 200);
});

function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        // OPTIMIZATION: Reduced connection distance to limit drawing operations
        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            // Simplified distance check (avoid sqrt if possible, but kept for gradient opacity)
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) { // Reduced connect distance
                ctx.beginPath();
                ctx.strokeStyle = `rgba(251, 146, 60, ${0.15 - distance/1000})`; 
                ctx.lineWidth = 1;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animate);
}
animate();