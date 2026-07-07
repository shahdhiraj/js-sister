/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-family-primary)'],
      },
      colors: {
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
        },
        surface: {
          base: 'var(--color-surface-base)',
          muted: 'var(--color-surface-muted)',
          strong: 'var(--color-surface-strong)',
          accent: 'var(--color-surface-accent)',
        },
        border: {
          DEFAULT: 'var(--color-border-default)',
          muted: 'var(--color-border-muted)',
        },
        focus: {
          ring: 'var(--color-focus-ring)',
        }
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        1: 'var(--shadow-1)',
        2: 'var(--shadow-2)',
        3: 'var(--shadow-3)',
        4: 'var(--shadow-4)',
      },
      transitionDuration: {
        instant: '0ms',
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
      }
    },
  },
  plugins: [],
}
