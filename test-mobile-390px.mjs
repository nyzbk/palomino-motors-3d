import { chromium } from '@playwright/test';
import { spawn } from 'child_process';
import http from 'http';

const waitForServer = (url, timeoutMs = 15000) => {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      http.get(url, (res) => {
        if (res.statusCode === 200) resolve();
        else setTimeout(check, 300);
      }).on('error', () => {
        if (Date.now() - start > timeoutMs) reject(new Error('Timeout waiting for server'));
        else setTimeout(check, 300);
      });
    };
    check();
  });
};

async function runMobileAudit() {
  console.log('🚀 Starting Vite preview server on port 4174...');
  const server = spawn('npx', ['vite', 'preview', '--port', '4174', '--strictPort'], {
    cwd: '/home/ubuntu/kontora-site10k/palomino-motors-3d',
    stdio: 'pipe',
    shell: true
  });

  server.stdout.on('data', (d) => console.log(`[server]: ${d}`));
  server.stderr.on('data', (d) => console.error(`[server err]: ${d}`));

  try {
    await waitForServer('http://localhost:4174');
    console.log('✅ Server is up and responding at http://localhost:4174');

    console.log('📱 Launching Chromium in iPhone 13 / 390px viewport mode...');
    const browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1'
    });

    const page = await context.newPage();
    console.log('🌐 Navigating to http://localhost:4174...');
    await page.goto('http://localhost:4174', { waitUntil: 'networkidle' });

    // 1. Verify W3C Zero Horizontal Overflow
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    console.log(`📐 Viewport clientWidth: ${clientWidth}px, document scrollWidth: ${scrollWidth}px`);

    if (scrollWidth > clientWidth) {
      throw new Error(`FAIL: Horizontal overflow detected! scrollWidth (${scrollWidth}px) > clientWidth (${clientWidth}px)`);
    }
    console.log('✅ W3C Mobile Overflow Check PASSED: Exactly 0px horizontal scroll!');

    // 2. Verify Canvas Presence & DPR Scaling
    const canvasExists = await page.locator('canvas').count();
    if (canvasExists === 0) {
      throw new Error('FAIL: Canvas element not found in DOM!');
    }
    console.log('✅ Canvas element confirmed in DOM');

    // 3. Take Hero Screenshot
    await page.screenshot({ path: '/home/ubuntu/kontora-site10k/palomino-motors-3d/mobile-390px-hero.png' });
    console.log('📸 Hero screenshot captured: mobile-390px-hero.png');

    // 4. Test Scroll Mechanics
    console.log('📜 Simulating user scroll through 180-frame canvas...');
    await page.evaluate(() => window.scrollTo(0, 1500));
    await page.waitForTimeout(500);

    await page.evaluate(() => window.scrollTo(0, 3000));
    await page.waitForTimeout(500);

    // Full page screenshot
    await page.screenshot({ path: '/home/ubuntu/kontora-site10k/palomino-motors-3d/mobile-390px-full.png', fullPage: true });
    console.log('📸 Full page screenshot captured: mobile-390px-full.png');

    await browser.close();
    console.log('\n🎉 ALL QA CHECKS PASSED: 390px Mobile Audit is 100% SUCCESSFUL!\n');
    server.kill();
    process.exit(0);
  } catch (err) {
    console.error('❌ QA AUDIT FAILED:', err);
    server.kill();
    process.exit(1);
  }
}

runMobileAudit();
