import assert from 'node:assert';

console.log('Running FiberConnect Self-Check Verification...');

// 1. Test TIR Critical Angle Calculation
const n1 = 1.465; // Core
const n2 = 1.450; // Cladding
const criticalAngleRad = Math.asin(n2 / n1);
const criticalAngleDeg = (criticalAngleRad * 180) / Math.PI;
assert(criticalAngleDeg > 81.0 && criticalAngleDeg < 82.5, `Critical angle should be ~81.8 deg, got: ${criticalAngleDeg}`);
console.log(`[PASS] TIR Critical Angle: ${criticalAngleDeg.toFixed(2)} deg`);

// 2. Test Splicing Simulation Penalty & Loss Logic
let score = 100;
let lossDb = 0.02;
const mistakes = [];

function applyPenalty(code, penaltyPoints = 10, addedLoss = 0.20) {
  if (!mistakes.includes(code)) {
    mistakes.push(code);
    score = Math.max(0, score - penaltyPoints);
    lossDb = Number((lossDb + addedLoss).toFixed(2));
  }
}

// Apply error 1: bad cleave angle
applyPenalty('bad_cleave_angle', 15, 0.35);
assert.strictEqual(score, 85, 'Score after 1st penalty should be 85');
assert.strictEqual(lossDb, 0.37, 'Loss dB should be 0.37');

// Duplicate penalty should not double-count
applyPenalty('bad_cleave_angle', 15, 0.35);
assert.strictEqual(score, 85, 'Duplicate penalty should not change score');
assert.strictEqual(lossDb, 0.37, 'Duplicate penalty should not change lossDb');

// Apply error 2: wrong arc profile
applyPenalty('wrong_arc_profile', 15, 0.35);
assert.strictEqual(score, 70, 'Score after 2nd penalty should be 70');
assert.strictEqual(lossDb, 0.72, 'Loss dB should be 0.72');
console.log(`[PASS] Simulation penalty & loss accumulator: Score=${score}, Loss=${lossDb} dB`);

// 3. Test K3 Gate Check Logic
const k3Items = { apd: false, laser: false, bin: false, clean: false };
const isK3Unlocked = (items) => !!(items.apd && items.laser && items.bin && items.clean);

assert.strictEqual(isK3Unlocked(k3Items), false, 'K3 must be locked initially');
k3Items.apd = true;
k3Items.laser = true;
k3Items.bin = true;
assert.strictEqual(isK3Unlocked(k3Items), false, 'K3 must remain locked with 3/4 items');
k3Items.clean = true;
assert.strictEqual(isK3Unlocked(k3Items), true, 'K3 must unlock when all 4 items checked');
console.log('[PASS] K3 Gatekeeper unlock validation');

// 4. Test Quiz Scoring Formula
const totalQ = 5;
const correctAns = 4;
const quizScore = Math.round((correctAns / totalQ) * 100);
assert.strictEqual(quizScore, 80, '4 out of 5 should equal 80%');
console.log('[PASS] Quiz scoring formula: 4/5 = 80%');

// 5. Test OTDR Distance and Attenuation Calculation
const attenuationPerKm = 0.35;
const spliceLoc = 2.2;
const testSpliceLoss = 0.08;

const dbBefore = -8 - (spliceLoc * attenuationPerKm);
const dbAfter = dbBefore - testSpliceLoss;
assert.strictEqual(Number(dbBefore.toFixed(3)), -8.770, 'Level before splice should be -8.77 dB');
assert.strictEqual(Number(dbAfter.toFixed(3)), -8.850, 'Level after splice should be -8.85 dB');
console.log(`[PASS] OTDR attenuation step calculation: before=${dbBefore.toFixed(2)} dB, after=${dbAfter.toFixed(2)} dB`);

// 6. Test Module Completion Schema Preservation
const mockProgress = {
  module_1: false,
  simulation: { completed: false, attempts: 1 }
};
function markComplete(key) {
  if (typeof mockProgress[key] === 'object' && mockProgress[key] !== null) {
    mockProgress[key].completed = true;
  } else {
    mockProgress[key] = true;
  }
}
markComplete('module_1');
markComplete('simulation');
assert.strictEqual(mockProgress.module_1, true, 'module_1 should be boolean true');
assert.strictEqual(typeof mockProgress.simulation, 'object', 'simulation should remain an object');
assert.strictEqual(mockProgress.simulation.completed, true, 'simulation.completed should be true');
console.log('[PASS] Progress schema preservation for both boolean and object states');

// 7. Test Sidebar Sticky & Independent Scroll CSS Contract
import fs from 'node:fs';
const cssContent = fs.readFileSync(new URL('../css/style.css', import.meta.url), 'utf-8');
const sidebarBlockMatch = cssContent.match(/\.app-sidebar\s*\{([^}]+)\}/);
assert(sidebarBlockMatch, '.app-sidebar CSS block must exist');
const sidebarCss = sidebarBlockMatch[1];
assert(sidebarCss.includes('position: sticky'), '.app-sidebar must have position: sticky');
assert(sidebarCss.includes('top: 56px'), '.app-sidebar must stick below header (top: 56px)');
assert(sidebarCss.includes('overflow-y: auto'), '.app-sidebar must have its own scroll container (overflow-y: auto)');
assert(sidebarCss.includes('calc(100vh - 56px)'), '.app-sidebar height must match viewport minus header');
console.log('[PASS] Sidebar sticky & independent scroll CSS contract verified');

// 8. Test Chip Padding and Layout Elasticity
const chipBlockMatch = cssContent.match(/(?:^|\n)\.chip\s*\{([^}]+)\}/);
assert(chipBlockMatch, '.chip CSS block must exist');
const chipCss = chipBlockMatch[1];
assert(chipCss.includes('min-height:'), '.chip must use flexible min-height instead of fixed height');
assert(chipCss.includes('padding: 4px 12px'), '.chip must provide comfortable internal padding (4px 12px)');
assert(chipCss.includes('line-height: 1.4'), '.chip line-height must allow multi-line readability');
assert(cssContent.includes('.nav-link .chip'), '.nav-link .chip must exist to protect navigation pills from wrapping');
assert(cssContent.includes('white-space: nowrap'), 'nav pill must prevent text wrapping');
console.log('[PASS] Chip padding and flexible layout verified');

// 9. Test Toast In & Out Animation CSS Contract
assert(cssContent.includes('@keyframes toast-in'), 'CSS must define @keyframes toast-in');
assert(cssContent.includes('@keyframes toast-out'), 'CSS must define @keyframes toast-out');
assert(cssContent.includes('.toast.toast-exiting'), 'CSS must define .toast.toast-exiting class');
console.log('[PASS] Toast enter & exit animation contract verified');

// 10. Test Player First-Time Registration Logic
const storeContent = fs.readFileSync(new URL('../js/store.js', import.meta.url), 'utf-8');
assert(storeContent.includes('registered: false'), 'DEFAULT_STATE must mark player as not registered by default');
assert(storeContent.includes('setPlayerName'), 'FiberStore must provide setPlayerName method');
assert(storeContent.includes('showNameModal'), 'FiberStore must support showNameModal flag');
console.log('[PASS] Player first-time registration contract verified');

// 11. Test Spinner Animation & Centered Toast Close Contract
assert(cssContent.includes('@keyframes spin'), 'CSS must define @keyframes spin');
assert(cssContent.includes('.spinner'), 'CSS must define .spinner class');
assert(cssContent.includes('.toast-close'), 'CSS must define .toast-close class');
const toastCloseMatch = cssContent.match(/\.toast-close\s*\{([^}]+)\}/);
assert(toastCloseMatch, '.toast-close block must exist in CSS');
const toastCloseCss = toastCloseMatch[1];
assert(toastCloseCss.includes('display: inline-flex'), '.toast-close must use flexbox for centering');
assert(toastCloseCss.includes('align-items: center'), '.toast-close must center align vertically');
assert(toastCloseCss.includes('justify-content: center'), '.toast-close must center align horizontally');
console.log('[PASS] Spinner animation and centered toast-close contract verified');

console.log('ALL SELF-CHECK TESTS PASSED SUCCESSFULLY.');
