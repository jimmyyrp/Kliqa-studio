const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outDir = path.join(__dirname, 'public', 'illustrations');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. BOY IN BACKWARDS CAP & WHITE OVERALLS (Exact replica of user's image)
const boyOverallsSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1200" height="1200" fill="none">
  <rect width="1000" height="1000" fill="#FFFFFF" />

  <!-- Signature: ian_studioo -->
  <text x="220" y="695" fill="#111111" font-family="'Comic Sans MS', 'Chalkboard', 'Arial Rounded MT Bold', cursive, sans-serif" font-size="34" font-weight="bold" letter-spacing="0.02em">ian_studioo</text>

  <!-- BOY ILLUSTRATION -->
  <g stroke="#111111" stroke-linecap="round" stroke-linejoin="round">
    
    <!-- LEFT ARM & BODY HOODIE (Solid Black Hoodie Behind Overalls) -->
    <!-- Black Hoodie Body & Sleeves -->
    <path d="M470 355 C370 395 330 460 325 550 L320 635 C330 685 365 720 405 730 L450 730 L455 520 C460 480 470 450 485 415 Z" fill="#111111" stroke="#111111" stroke-width="4" />
    
    <!-- Right Raised Arm (Black Hoodie with White Contour Highlight) -->
    <path d="M470 240 C430 200 320 205 285 240 C265 260 265 310 280 390 C295 440 330 490 355 525 L405 500 C375 450 345 385 340 330 C335 290 355 265 385 255 C420 245 445 270 470 320 Z" fill="#111111" stroke="#111111" stroke-width="6" />
    <!-- White contour stripe along right raised arm -->
    <path d="M295 248 C280 270 278 310 290 380 C302 430 330 475 352 505" stroke="#FFFFFF" stroke-width="5" fill="none" />

    <!-- Right Elbow & Shoulder Lines -->
    <path d="M285 240 C270 260 272 300 282 360" stroke="#111111" stroke-width="7" />

    <!-- Right Forearm & Hand behind Head -->
    <path d="M385 255 C400 215 440 185 475 180 L470 230 C455 235 435 245 425 260" fill="#111111" stroke="#111111" stroke-width="5" />
    <!-- Fingers resting behind cap -->
    <path d="M465 190 C460 175 475 160 495 160 C510 160 520 170 525 185" stroke="#111111" stroke-width="5" fill="#FFFFFF" />
    <path d="M495 160 L495 185" stroke="#111111" stroke-width="4" />
    <path d="M510 165 L510 185" stroke="#111111" stroke-width="4" />

    <!-- Left Hand & Arm (Downwards into pocket) -->
    <path d="M590 380 C630 395 700 440 715 540 C725 615 715 750 685 830 C660 880 620 885 590 870 L585 800 C625 810 655 770 665 720 C675 660 670 560 645 490 C630 450 600 420 580 405" fill="#111111" stroke="#111111" stroke-width="6" />
    <!-- White highlight on left hoodie sleeve -->
    <path d="M700 710 C705 760 690 820 665 850" stroke="#FFFFFF" stroke-width="5" fill="none" />
    <path d="M698 550 C705 600 705 660 700 700" stroke="#FFFFFF" stroke-width="4" fill="none" />

    <!-- HEAD, CAP, FACE -->
    <!-- Backwards Cap -->
    <!-- Cap Dome (White) -->
    <path d="M465 240 C455 185 470 160 535 158 C600 156 620 190 615 245 Z" fill="#FFFFFF" stroke="#111111" stroke-width="6" />
    <!-- Cap Brim / Visor Backwards (Folded edge & strap) -->
    <path d="M460 250 C465 200 480 165 535 165 C590 165 610 200 615 250" stroke="#111111" stroke-width="4" fill="none" />
    <!-- Cap Button Top -->
    <ellipse cx="533" cy="158" rx="7" ry="4" fill="#111111" />
    <!-- Cap Back Cutout (Semi-circle gap) -->
    <path d="M485 210 C485 185 520 175 550 175 C575 175 585 185 580 210 Z" fill="#111111" stroke="#111111" stroke-width="4" />
    <!-- Cap Adjustment Strap (White bar with buckle) -->
    <rect x="490" y="195" width="85" height="16" rx="4" fill="#FFFFFF" stroke="#111111" stroke-width="4" />
    <line x1="535" y1="195" x2="535" y2="211" stroke="#111111" stroke-width="3" />
    <!-- Subtle stitches on cap -->
    <path d="M500 175 L525 160" stroke="#111111" stroke-width="2.5" stroke-dasharray="3 3" />
    <path d="M565 175 L540 160" stroke="#111111" stroke-width="2.5" stroke-dasharray="3 3" />

    <!-- Hair under cap (Cropped straight bangs) -->
    <path d="M465 245 C465 230 480 205 535 205 C590 205 605 230 605 245 L612 285 C610 290 600 295 595 285 L590 270 C585 280 575 282 568 272 L560 282 C550 285 540 282 535 272 L525 285 C515 285 505 280 500 270 L492 285 C485 285 475 280 472 270 L465 280 Z" fill="#111111" stroke="#111111" stroke-width="3" />
    <!-- Hair Texture hatch marks -->
    <line x1="495" y1="235" x2="495" y2="255" stroke="#FFFFFF" stroke-width="2" />
    <line x1="515" y1="232" x2="515" y2="252" stroke="#FFFFFF" stroke-width="2" />
    <line x1="535" y1="230" x2="535" y2="250" stroke="#FFFFFF" stroke-width="2" />
    <line x1="555" y1="232" x2="555" y2="252" stroke="#FFFFFF" stroke-width="2" />
    <line x1="575" y1="235" x2="575" y2="255" stroke="#FFFFFF" stroke-width="2" />

    <!-- Face Outline -->
    <path d="M472 275 C468 310 472 340 495 370 C518 395 545 395 565 375 C595 345 605 310 602 275" fill="#FFFFFF" stroke="#111111" stroke-width="5" />

    <!-- Ears -->
    <!-- Left Ear (viewer right) -->
    <path d="M602 280 C615 285 618 310 605 325 C598 332 595 325 595 320" stroke="#111111" stroke-width="4.5" fill="#FFFFFF" />
    <path d="M605 295 C608 300 605 310 600 312" stroke="#111111" stroke-width="2.5" />

    <!-- Facial Features -->
    <!-- Left Eyebrow -->
    <path d="M490 288 Q505 282 518 288" stroke="#111111" stroke-width="4" stroke-linecap="round" />
    <!-- Right Eyebrow -->
    <path d="M545 285 Q562 280 575 288" stroke="#111111" stroke-width="4" stroke-linecap="round" />

    <!-- Left Eye -->
    <path d="M495 302 Q505 296 518 300" stroke="#111111" stroke-width="4" stroke-linecap="round" />
    <ellipse cx="508" cy="305" rx="4" ry="5.5" fill="#111111" />
    <circle cx="506" cy="303" r="1.5" fill="#FFFFFF" />

    <!-- Right Eye -->
    <path d="M545 300 Q558 295 568 302" stroke="#111111" stroke-width="4" stroke-linecap="round" />
    <ellipse cx="556" cy="304" rx="4" ry="5.5" fill="#111111" />
    <circle cx="554" cy="302" r="1.5" fill="#FFFFFF" />

    <!-- Nose -->
    <path d="M534 300 L532 342 L542 344" stroke="#111111" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />

    <!-- Friendly Smile -->
    <path d="M526 362 Q542 368 562 358" stroke="#111111" stroke-width="4.5" stroke-linecap="round" />

    <!-- Neck -->
    <path d="M500 380 L498 425" stroke="#111111" stroke-width="5" />
    <path d="M565 375 L570 420" stroke="#111111" stroke-width="5" />

    <!-- White Inner Polo Collar & Button Placket -->
    <path d="M492 410 L535 440 L505 455 Z" fill="#FFFFFF" stroke="#111111" stroke-width="4" />
    <path d="M575 405 L535 440 L558 450 Z" fill="#FFFFFF" stroke="#111111" stroke-width="4" />
    <!-- Center Button Placket -->
    <path d="M535 435 L535 495 L560 495 L560 435 Z" fill="#111111" stroke="#111111" stroke-width="3" />
    <!-- Buttons -->
    <circle cx="548" cy="448" r="3.5" fill="#FFFFFF" stroke="#111111" stroke-width="2" />
    <circle cx="548" cy="475" r="3.5" fill="#FFFFFF" stroke="#111111" stroke-width="2" />

    <!-- Hood Neckline opening around collar -->
    <path d="M485 415 C460 430 455 460 450 510 L480 500" stroke="#111111" stroke-width="5" fill="none" />
    <path d="M575 405 C605 415 635 430 670 430 L630 455" stroke="#111111" stroke-width="5" fill="none" />

    <!-- OVERALLS / DUNGAREES (White with bold ink lines) -->
    <!-- Overall Right Strap (clipped over hoodie) -->
    <path d="M485 375 L450 465 L485 470 L502 385 Z" fill="#FFFFFF" stroke="#111111" stroke-width="5.5" />
    <!-- Strap buckle clip -->
    <rect x="450" y="465" width="34" height="10" fill="#FFFFFF" stroke="#111111" stroke-width="4" />
    <circle cx="455" cy="488" r="4.5" fill="#111111" />

    <!-- Overall Main Body (Chest Bib & Dropped Pocket) -->
    <!-- Main Chest Bib -->
    <path d="M450 475 L315 700 C300 740 280 810 270 885 L615 885 C615 850 610 790 575 705 L480 515 Z" fill="#FFFFFF" stroke="#111111" stroke-width="6" />

    <!-- Angled Bib Flap & Seams (Prominent in reference image) -->
    <path d="M480 515 L480 625 C480 645 500 665 520 675 L625 745 L635 730 L520 655 C508 648 498 635 498 615 L498 518" fill="#FFFFFF" stroke="#111111" stroke-width="5" />
    <circle cx="490" cy="625" r="3.5" fill="#111111" />

    <!-- Double Stitches on Overalls -->
    <path d="M440 540 L345 705" stroke="#111111" stroke-width="2.5" stroke-dasharray="5 3" />
    <path d="M448 545 L353 710" stroke="#111111" stroke-width="2.5" stroke-dasharray="5 3" />

    <!-- Front Bib Center Pocket Line -->
    <path d="M430 685 L570 735" stroke="#111111" stroke-width="5" />
    <path d="M430 692 L570 742" stroke="#111111" stroke-width="2" stroke-dasharray="4 3" />

    <!-- Overalls Waist Seam Line -->
    <path d="M315 750 C380 770 480 800 580 810" stroke="#111111" stroke-width="5" />

    <!-- Side Pocket (Where Left Hand is Resting) -->
    <path d="M295 780 C320 780 340 800 340 825 L320 885" stroke="#111111" stroke-width="5" />
    <!-- Overalls pocket curve right -->
    <path d="M575 798 C565 820 565 850 575 870" stroke="#111111" stroke-width="4.5" />

    <!-- Overall Bottom Edge Line -->
    <line x1="270" y1="885" x2="620" y2="885" stroke="#111111" stroke-width="6" />

    <!-- Crease and shadow tick marks (ian_studioo signature line hatching) -->
    <line x1="275" y1="850" x2="285" y2="875" stroke="#111111" stroke-width="3" />
    <line x1="285" y1="845" x2="295" y2="870" stroke="#111111" stroke-width="2.5" />
    <line x1="585" y1="835" x2="575" y2="865" stroke="#111111" stroke-width="3" />
  </g>
</svg>
`;

// 2. GIRL IN OVERSIZED TEE "AVOIR UN IDÉA" (Exact replica of user's first image)
const girlOversizedSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" width="1200" height="1440" fill="none">
  <rect width="1000" height="1200" fill="#FFFFFF" />

  <!-- Signature tag -->
  <text x="250" y="240" fill="#111111" font-family="'Comic Sans MS', 'Chalkboard', 'Arial Rounded MT Bold', cursive, sans-serif" font-size="30" font-weight="bold" letter-spacing="0.02em">ian_studioo</text>

  <g stroke="#111111" stroke-linecap="round" stroke-linejoin="round">
    <!-- HAIR (Solid Black with white highlight sheen) -->
    <path d="M430 150 C370 180 340 260 345 380 C350 470 355 540 365 600 C380 570 410 500 410 420 C410 280 430 190 470 160 Z" fill="#111111" stroke="#111111" stroke-width="5" />
    <path d="M550 150 C610 180 650 260 655 380 C660 480 670 550 670 610 C655 570 635 500 630 420 C615 280 590 190 550 150 Z" fill="#111111" stroke="#111111" stroke-width="5" />
    <!-- Top & Bangs -->
    <path d="M440 180 C455 120 540 120 560 170 C570 200 565 230 555 250 C540 220 515 210 485 220 C465 225 450 215 440 180 Z" fill="#111111" stroke="#111111" stroke-width="4" />
    <!-- Hair Sheen Highlights -->
    <path d="M475 160 Q500 150 530 160" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" fill="none" />
    <path d="M465 170 Q500 158 538 170" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" />

    <!-- Face -->
    <path d="M455 240 C450 290 460 340 500 365 C540 340 550 290 545 240" fill="#FFFFFF" stroke="#111111" stroke-width="6" />
    <!-- Face Features -->
    <!-- Eyes -->
    <path d="M468 270 Q478 264 488 270" stroke="#111111" stroke-width="5" stroke-linecap="round" />
    <circle cx="478" cy="278" r="3.5" fill="#111111" />
    <path d="M512 270 Q522 264 532 270" stroke="#111111" stroke-width="5" stroke-linecap="round" />
    <circle cx="522" cy="278" r="3.5" fill="#111111" />
    <!-- Nose -->
    <path d="M502 285 L498 302 L505 304" stroke="#111111" stroke-width="4" />
    <!-- Smile -->
    <path d="M488 325 Q502 334 518 325" stroke="#111111" stroke-width="4.5" stroke-linecap="round" />

    <!-- Neck -->
    <path d="M480 355 L475 410" stroke="#111111" stroke-width="5" />
    <path d="M525 355 L530 410" stroke="#111111" stroke-width="5" />

    <!-- OVERSIZED GRAPHIC T-SHIRT -->
    <!-- Collar -->
    <path d="M470 415 Q502 440 535 415" stroke="#111111" stroke-width="6" fill="none" />
    <path d="M465 425 Q502 450 540 425" stroke="#111111" stroke-width="3" fill="none" />

    <!-- T-Shirt Outline (Boxy Oversized Drop-Shoulder) -->
    <path d="M470 415 C425 435 390 470 370 505 L335 620 L410 655 L430 585 L395 830 L610 845 L580 585 L600 655 L675 620 L640 505 C620 470 585 435 535 415" fill="#FFFFFF" stroke="#111111" stroke-width="7" />

    <!-- Sleeve seams & folds -->
    <path d="M410 505 C395 540 390 575 385 615" stroke="#111111" stroke-width="4" />
    <path d="M595 505 C610 540 615 575 620 615" stroke="#111111" stroke-width="4" />
    <!-- Drape creases -->
    <path d="M420 740 Q455 715 485 740" stroke="#111111" stroke-width="3.5" />
    <path d="M515 795 Q550 770 580 790" stroke="#111111" stroke-width="4" />
    <path d="M430 605 L475 675" stroke="#111111" stroke-width="3.5" />

    <!-- GRAPHIC TEXT: AVOIR UN IDÉA (Exact from reference) -->
    <g transform="translate(500, 520)">
      <text x="0" y="30" text-anchor="middle" fill="#111111" font-family="'Impact', 'Arial Black', sans-serif" font-size="44" letter-spacing="0.12em">AVOIR</text>
      <!-- pill 'un' -->
      <rect x="-24" y="42" width="48" height="22" rx="11" fill="#111111" />
      <text x="0" y="58" text-anchor="middle" fill="#FFFFFF" font-family="'Arial Black', sans-serif" font-size="14" font-weight="bold">UN</text>
      <text x="0" y="115" text-anchor="middle" fill="#111111" font-family="'Impact', 'Arial Black', sans-serif" font-size="52" letter-spacing="0.1em">IDÉA</text>
    </g>

    <!-- SOLID BLACK SHORTS WITH WHITE DRAWSTRING -->
    <path d="M398 835 L608 848 L618 975 L525 1005 L510 910 L498 1005 L380 975 Z" fill="#111111" stroke="#111111" stroke-width="6" />
    <!-- White Drawstrings -->
    <path d="M504 850 L504 895 Q504 905 510 905 Q516 905 516 895 L516 850" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" fill="none" />
    <!-- White creases on black shorts -->
    <path d="M400 885 Q410 940 390 965" stroke="#FFFFFF" stroke-width="3.5" />
    <path d="M605 885 Q595 940 610 965" stroke="#FFFFFF" stroke-width="3.5" />
    <path d="M495 955 L475 990" stroke="#FFFFFF" stroke-width="3" />
    <path d="M525 955 L545 990" stroke="#FFFFFF" stroke-width="3" />

    <!-- LEGS & REMOTE SHUTTER CORD -->
    <!-- Right Hand holding shutter remote -->
    <path d="M640 605 C655 675 650 760 618 840" stroke="#111111" stroke-width="6" />
    <path d="M640 780 Q670 810 660 870 Q650 920 670 970" stroke="#111111" stroke-width="3.5" stroke-dasharray="6 3" />
    <!-- Shutter Remote -->
    <rect x="655" y="960" width="26" height="42" rx="8" fill="#111111" stroke="#111111" stroke-width="4" />
    <circle cx="668" cy="975" r="5.5" fill="#FFFFFF" />

    <!-- Left Hand into pocket -->
    <path d="M370 605 C355 675 360 760 385 830" stroke="#111111" stroke-width="6" />

    <!-- Legs -->
    <path d="M405 985 L412 1080" stroke="#111111" stroke-width="6" />
    <path d="M485 1005 L490 1080" stroke="#111111" stroke-width="6" />
    <path d="M530 1005 L535 1080" stroke="#111111" stroke-width="6" />
    <path d="M595 985 L645 1080" stroke="#111111" stroke-width="6" />
  </g>
</svg>
`;

// 3. DUO STREETWEAR (Boy in cap + overalls AND Girl in oversized tee together)
const duoStreetwearSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1100" width="1200" height="1200" fill="none">
  <rect width="1100" height="1100" fill="#FFFFFF" />
  <text x="120" y="140" fill="#111111" font-family="'Comic Sans MS', cursive, sans-serif" font-size="32" font-weight="bold">ian_studioo</text>
  <text x="820" y="140" fill="#111111" font-family="'DM Mono', monospace" font-size="18" font-weight="bold" letter-spacing="0.1em">// BARENG 02</text>

  <g stroke="#111111" stroke-linecap="round" stroke-linejoin="round">
    <!-- LEFT: GIRL IN BEANIE & OVERSIZED HOODIE -->
    <g transform="translate(-40, 40)">
      <!-- Beanie Hat (Solid Black) -->
      <path d="M300 240 C300 150 420 150 420 240 Z" fill="#111111" stroke="#111111" stroke-width="5" />
      <path d="M285 240 Q360 252 435 240 L435 265 Q360 277 285 265 Z" fill="#111111" stroke="#111111" stroke-width="4" />
      <!-- Bob Hair -->
      <path d="M290 268 C275 315 285 375 305 420 C320 375 312 315 310 268 Z" fill="#111111" />
      <path d="M425 268 C440 315 435 375 418 420 C408 375 412 315 418 268 Z" fill="#111111" />
      <!-- Face -->
      <path d="M312 268 C308 325 320 378 360 400 C405 378 415 325 412 268" stroke="#111111" stroke-width="5" fill="#FFFFFF" />
      <!-- Wink & Smile -->
      <path d="M332 320 Q342 312 352 320" stroke="#111111" stroke-width="4.5" />
      <circle cx="382" cy="320" r="4.5" fill="#111111" />
      <path d="M350 355 Q362 368 376 355" stroke="#111111" stroke-width="4" />

      <!-- Peace Sign Hand -->
      <path d="M255 355 L248 295 L262 280 L270 340 L285 288 L300 302 L285 362 Z" fill="#FFFFFF" stroke="#111111" stroke-width="4.5" />

      <!-- Oversized Hoodie -->
      <path d="M310 415 C250 445 220 505 205 655 L295 685 L302 595 L288 835 L452 835 L445 595 L460 685 L505 648 C490 505 460 445 408 415" fill="#FFFFFF" stroke="#111111" stroke-width="6" />
      <text x="360" y="610" text-anchor="middle" fill="#111111" font-family="'Arial Black', sans-serif" font-size="32" letter-spacing="0.05em">KLIQA</text>

      <!-- Shorts -->
      <path d="M288 835 L452 835 L460 948 L385 962 L378 888 L370 962 L280 948 Z" fill="#111111" stroke="#111111" stroke-width="5" />
    </g>

    <!-- RIGHT: BOY IN BACKWARDS CAP & OVERALLS (From reference) -->
    <g transform="translate(180, 0)">
      <!-- Backwards Cap -->
      <path d="M530 240 C520 180 540 150 610 148 C680 146 700 180 695 240 Z" fill="#FFFFFF" stroke="#111111" stroke-width="5.5" />
      <path d="M555 195 C555 170 595 160 625 160 C655 160 665 170 660 195 Z" fill="#111111" />
      <rect x="560" y="185" width="90" height="17" rx="4" fill="#FFFFFF" stroke="#111111" stroke-width="4" />
      <!-- Cropped Bangs Hair -->
      <path d="M530 245 C530 220 550 205 610 205 C670 205 690 220 690 245 L698 280 L650 270 L610 280 L570 270 L530 280 Z" fill="#111111" />
      <!-- Face -->
      <path d="M540 275 C535 315 540 348 570 375 C600 400 630 400 652 375 C685 345 695 310 692 275" fill="#FFFFFF" stroke="#111111" stroke-width="5" />
      <!-- Retro Sunglasses -->
      <rect x="548" y="295" width="46" height="28" rx="5" fill="#111111" />
      <line x1="594" y1="309" x2="606" y2="309" stroke="#111111" stroke-width="4" />
      <rect x="606" y="295" width="46" height="28" rx="5" fill="#111111" />
      <line x1="555" y1="316" x2="570" y2="301" stroke="#FFFFFF" stroke-width="3.5" />
      <line x1="613" y1="316" x2="628" y2="301" stroke="#FFFFFF" stroke-width="3.5" />
      <!-- Smirk -->
      <path d="M592 360 Q612 368 638 358" stroke="#111111" stroke-width="4.5" stroke-linecap="round" />

      <!-- Right hand scratching cap -->
      <path d="M695 240 C735 200 810 215 835 260 C855 305 845 375 825 435 L775 415 C795 365 805 315 785 285 C770 260 740 250 715 270" fill="#111111" stroke="#111111" stroke-width="5" />
      <path d="M830 265 C840 290 840 340 820 400" stroke="#FFFFFF" stroke-width="4" fill="none" />

      <!-- Black Hoodie & White Overalls -->
      <path d="M515 415 C485 450 470 510 465 650 L545 680 L560 580 L545 790 L710 790 L705 580 L720 680 L790 640 C775 490 740 445 690 415" fill="#111111" stroke="#111111" stroke-width="6" />

      <!-- Overalls Front Body -->
      <path d="M510 500 L445 720 L425 870 L735 870 L730 720 L660 500 Z" fill="#FFFFFF" stroke="#111111" stroke-width="6" />
      <!-- Strap -->
      <path d="M555 410 L520 500 L555 505 L572 415 Z" fill="#FFFFFF" stroke="#111111" stroke-width="5" />
      <!-- Chest bib flap -->
      <path d="M550 540 L550 645 C550 665 570 685 590 695 L685 755" fill="#FFFFFF" stroke="#111111" stroke-width="4.5" />
      <circle cx="560" cy="645" r="3.5" fill="#111111" />

      <!-- Studio shutter remote in hand -->
      <rect x="420" y="690" width="22" height="36" rx="6" fill="#111111" stroke="#111111" stroke-width="3" />
      <circle cx="431" cy="702" r="4.5" fill="#FFFFFF" />
      <path d="M431 726 L431 780" stroke="#111111" stroke-width="3" stroke-dasharray="4 3" />
    </g>
  </g>
</svg>
`;

// 4. VINTAGE SLR CAMERA & FLASH (Studio Art Style)
const cameraClickSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1200" height="1200" fill="none">
  <rect width="1000" height="1000" fill="#FFFFFF" />
  <text x="80" y="100" fill="#111111" font-family="'Comic Sans MS', cursive, sans-serif" font-size="32" font-weight="bold">ian_studioo</text>

  <!-- Flash Beams -->
  <g stroke="#111111" stroke-width="5" stroke-linecap="round">
    <line x1="500" y1="60" x2="500" y2="150" />
    <line x1="680" y1="130" x2="610" y2="200" />
    <line x1="780" y1="280" x2="690" y2="320" />
    <line x1="320" y1="130" x2="390" y2="200" />
    <line x1="220" y1="280" x2="310" y2="320" />
  </g>

  <!-- Character Peaking Eyes behind Camera -->
  <g stroke="#111111" stroke-linecap="round" stroke-linejoin="round">
    <path d="M340 360 C300 240 700 240 660 360 Z" fill="#111111" stroke-width="5" />
    <!-- Bangs -->
    <path d="M370 340 L410 410 L450 340 L490 410 L530 340 L570 410 L610 340" fill="#111111" stroke-width="5" />
    <!-- Left Wink Eye -->
    <path d="M410 400 Q436 380 460 400" stroke-width="8" />
    <!-- Right Open Eye -->
    <circle cx="560" cy="396" r="14" fill="#111111" />
    <circle cx="564" cy="392" r="5" fill="#FFFFFF" />
  </g>

  <!-- VINTAGE SLR CAMERA BODY -->
  <g stroke="#111111" stroke-linecap="round" stroke-linejoin="round">
    <!-- Camera Main Body -->
    <rect x="260" y="440" width="480" height="320" rx="28" fill="#FFFFFF" stroke-width="10" />
    <!-- Black Leatherette Grip -->
    <rect x="270" y="510" width="460" height="230" fill="#111111" />
    <line x1="290" y1="530" x2="290" y2="720" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="8 8" />
    <line x1="710" y1="530" x2="710" y2="720" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="8 8" />

    <!-- Pentaprism Viewfinder Triangle -->
    <polygon points="420,440 500,350 580,440" fill="#FFFFFF" stroke-width="10" />
    <text x="500" y="420" text-anchor="middle" fill="#111111" font-family="'Impact', sans-serif" font-size="22" letter-spacing="0.1em">KLIQA</text>

    <!-- Big Center Lens -->
    <circle cx="500" cy="600" r="116" fill="#FFFFFF" stroke-width="12" />
    <circle cx="500" cy="600" r="88" fill="#111111" stroke-width="8" />
    <circle cx="500" cy="600" r="60" fill="#FFFFFF" stroke-width="6" />
    <circle cx="500" cy="600" r="32" fill="#111111" />
    <!-- Lens reflection -->
    <path d="M464 564 A 50 50 0 0 1 536 564" stroke="#FFFFFF" stroke-width="7" fill="none" />

    <!-- Dials and Shutter -->
    <rect x="310" y="400" width="44" height="40" rx="6" fill="#FFFFFF" stroke-width="8" />
    <rect x="640" y="412" width="56" height="28" rx="4" fill="#FFFFFF" stroke-width="8" />
    <!-- Flash strobe unit -->
    <rect x="470" y="280" width="60" height="70" rx="8" fill="#FFFFFF" stroke-width="8" />
    <rect x="480" y="290" width="40" height="28" rx="4" fill="#111111" />

    <!-- Hands holding camera -->
    <path d="M200 580 C200 520 270 500 280 560 L280 660 C270 720 190 680 200 580 Z" fill="#FFFFFF" stroke-width="8" />
    <path d="M790 580 C790 480 720 440 720 500 L720 660 C730 720 800 680 790 580 Z" fill="#FFFFFF" stroke-width="8" />
  </g>
</svg>
`;

// 5. CLASSIC 4-CUT PHOTOSTRIP
const photostrip4CutSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 1600" width="1120" height="3200" fill="none">
  <rect width="560" height="1600" fill="#FFFFFF" stroke="#111111" stroke-width="8" />

  <!-- FRAME 1: Boy in cap peace sign -->
  <g transform="translate(50, 60)">
    <rect width="460" height="310" fill="#FFFFFF" stroke="#111111" stroke-width="6" />
    <!-- Cap -->
    <path d="M190 70 C190 30 270 30 270 70 Z" fill="#FFFFFF" stroke="#111111" stroke-width="4" />
    <path d="M210 60 L250 60" fill="#111111" stroke="#111111" stroke-width="4" />
    <!-- Bangs -->
    <path d="M190 75 L270 75 L260 110 L200 110 Z" fill="#111111" />
    <!-- Face -->
    <path d="M200 100 C200 170 220 210 260 225 C300 210 320 170 320 100" fill="#FFFFFF" stroke="#111111" stroke-width="5" />
    <!-- Wink -->
    <path d="M220 145 Q235 135 250 145" stroke="#111111" stroke-width="5" />
    <circle cx="285" cy="145" r="5" fill="#111111" />
    <path d="M245 180 Q260 192 275 180" stroke="#111111" stroke-width="4.5" />
    <!-- Hand Peace -->
    <path d="M120 180 L110 120 L130 110 L140 160 L160 118 L176 130 L160 190 Z" fill="#FFFFFF" stroke="#111111" stroke-width="4.5" />
    <text x="20" y="290" fill="#111111" font-family="'DM Mono', monospace" font-size="18" font-weight="bold">01 // PEACE OUT</text>
  </g>

  <!-- FRAME 2: Girl in oversized tee with glasses -->
  <g transform="translate(50, 410)">
    <rect width="460" height="310" fill="#FFFFFF" stroke="#111111" stroke-width="6" />
    <!-- Hair -->
    <path d="M150 70 C150 20 310 20 310 70 C330 150 330 250 290 270 L170 270 C130 250 130 150 150 70 Z" fill="#111111" />
    <path d="M170 100 C170 170 190 220 230 235 C270 220 290 170 290 100" fill="#FFFFFF" stroke="#111111" stroke-width="5" />
    <!-- Glasses -->
    <rect x="180" y="130" width="44" height="32" rx="6" stroke="#111111" stroke-width="4" fill="none" />
    <rect x="236" y="130" width="44" height="32" rx="6" stroke="#111111" stroke-width="4" fill="none" />
    <line x1="224" y1="146" x2="236" y2="146" stroke="#111111" stroke-width="4" />
    <path d="M216 190 Q230 204 244 190" stroke="#111111" stroke-width="4" />
    <text x="20" y="290" fill="#111111" font-family="'DM Mono', monospace" font-size="18" font-weight="bold">02 // RETRO SHADES</text>
  </g>

  <!-- FRAME 3: Boy scratching cap (Signature Pose) -->
  <g transform="translate(50, 760)">
    <rect width="460" height="310" fill="#FFFFFF" stroke="#111111" stroke-width="6" />
    <!-- Scratching arm -->
    <path d="M180 80 C130 60 70 90 70 160 L120 180 C120 130 150 110 180 120 Z" fill="#111111" stroke="#111111" stroke-width="4" />
    <path d="M180 80 L280 80 C280 40 210 40 180 80 Z" fill="#FFFFFF" stroke="#111111" stroke-width="4" />
    <path d="M200 90 L260 90 L255 125 L205 125 Z" fill="#111111" />
    <path d="M205 110 C205 180 220 220 250 235 C280 220 295 180 295 110" fill="#FFFFFF" stroke="#111111" stroke-width="5" />
    <!-- Smile -->
    <path d="M225 150 Q235 142 245 148" stroke="#111111" stroke-width="4.5" />
    <circle cx="235" cy="155" r="4" fill="#111111" />
    <path d="M265 148 Q275 142 285 150" stroke="#111111" stroke-width="4.5" />
    <circle cx="275" cy="155" r="4" fill="#111111" />
    <path d="M242 185 Q255 195 268 185" stroke="#111111" stroke-width="4" />
    <text x="20" y="290" fill="#111111" font-family="'DM Mono', monospace" font-size="18" font-weight="bold">03 // SCRATCH HEAD</text>
  </g>

  <!-- FRAME 4: Shutter remote click -->
  <g transform="translate(50, 1110)">
    <rect width="460" height="310" fill="#FFFFFF" stroke="#111111" stroke-width="6" />
    <circle cx="230" cy="140" r="12" fill="#111111" />
    <circle cx="234" cy="136" r="4" fill="#FFFFFF" />
    <circle cx="290" cy="140" r="12" fill="#111111" />
    <circle cx="294" cy="136" r="4" fill="#FFFFFF" />
    <!-- Big Open Smile -->
    <path d="M240 175 Q260 205 280 175 Z" fill="#111111" stroke="#111111" stroke-width="4" />
    <!-- Remote held in foreground -->
    <rect x="235" y="235" width="50" height="70" rx="12" fill="#111111" stroke="#111111" stroke-width="5" />
    <circle cx="260" cy="258" r="10" fill="#FFFFFF" />
    <text x="20" y="290" fill="#111111" font-family="'DM Mono', monospace" font-size="18" font-weight="bold">04 // SAY CHEESE!</text>
  </g>

  <!-- Bottom Branding -->
  <g transform="translate(50, 1450)">
    <text x="230" y="50" text-anchor="middle" fill="#111111" font-family="'DM Serif Display', serif" font-size="44" font-weight="bold">KLIQA STUDIO</text>
    <text x="230" y="85" text-anchor="middle" fill="#111111" font-family="'DM Mono', monospace" font-size="18" font-weight="bold" letter-spacing="0.15em">SELF PHOTO &amp; BOOTH • 2026</text>
    <text x="230" y="115" text-anchor="middle" fill="#555555" font-family="'Comic Sans MS', cursive, sans-serif" font-size="18">art by ian_studioo</text>
  </g>
</svg>
`;

const items = [
  { name: 'ian_studioo_boy_overalls', svg: boyOverallsSvg },
  { name: 'ian_studioo_girl_oversized', svg: girlOversizedSvg },
  { name: 'ian_studioo_duo_streetwear', svg: duoStreetwearSvg },
  { name: 'ian_studioo_camera_shutter', svg: cameraClickSvg },
  { name: 'ian_studioo_photostrip_4cut', svg: photostrip4CutSvg },
];

console.log('Generating high-res JPG files...');

for (const item of items) {
  const resvg = new Resvg(item.svg, {
    fitTo: { mode: 'width', value: 1200 },
  });
  const pngData = resvg.render();
  const pngPath = path.join(outDir, `${item.name}.png`);
  const jpgPath = path.join(outDir, `${item.name}.jpg`);

  fs.writeFileSync(pngPath, pngData.asPng());
  execSync(`convert "${pngPath}" -quality 96 "${jpgPath}"`);
  fs.unlinkSync(pngPath); // clean up intermediate png

  console.log(`✓ Created: public/illustrations/${item.name}.jpg (${fs.statSync(jpgPath).size} bytes)`);
}

console.log('All JPG illustrations generated successfully!');
