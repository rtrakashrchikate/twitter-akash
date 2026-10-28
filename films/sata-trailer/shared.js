export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const ramp = (t, a, b) => clamp((t - a) / (b - a));
export const easeOut = (x) => 1 - Math.pow(1 - clamp(x), 3);
export const fontsReady = () => document.fonts.ready.then(() => Promise.all([...document.fonts].map((f) => f.load().catch(() => {}))));
