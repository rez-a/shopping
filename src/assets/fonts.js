import localFont from 'next/font/local';

const iranYekan = localFont({
  src: [
    {
      path: '../../public/fonts/iranYekan/iranyekanwebblackfanum.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iranYekan/iranyekanwebextraboldfanum.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iranYekan/iranyekanwebboldfanum.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iranYekan/iranyekanwebmediumfanum.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iranYekan/iranyekanwebregularfanum.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iranYekan/iranyekanweblightfanum.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iranYekan/iranyekanwebthinfanum.ttf',
      weight: '200',
      style: 'normal',
    },
  ],
  variable: '--font-iranyekan',
  display: 'swap',
});

const cazablanca = localFont({
  src: '../../public/fonts/cazablanca/Far_Casablanca.ttf',
  variable: '--font-cazablanca',
  display: 'swap',
});

export { iranYekan, cazablanca };
