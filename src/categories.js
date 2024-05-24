const categories = [
  {
    id: 1,
    title: 'جدیدترین',
    icon: '⚡',
    slug: 'new-in',
    brands: [],
  },
  {
    id: 2,
    title: 'تن پوش',
    icon: '👚',
    slug: 'clothing',
    brands: [
      { id: 1, brandTitle: 'آدیداس', brandSlug: 'adidas' },
      { id: 2, brandTitle: 'نایک', brandSlug: 'nike' },
      { id: 3, brandTitle: 'پوما', brandSlug: 'puma' },
    ],
  },
  {
    id: 3,
    title: 'کفش',
    icon: '👠',
    slug: 'shoes',
    brands: [
      { id: 1, brandTitle: 'آدیداس', brandSlug: 'adidas' },
      { id: 2, brandTitle: 'نایک', brandSlug: 'nike' },
      { id: 3, brandTitle: 'پوما', brandSlug: 'puma' },
    ],
  },
  {
    id: 4,
    title: 'اکسسوری',
    icon: '👜',
    slug: 'accessories',
    brands: [],
  },
  {
    id: 5,
    title: 'لباس ورزشی',
    icon: '🤸',
    slug: 'activewear',
    brands: [
      { id: 1, brandTitle: 'آدیداس', brandSlug: 'adidas' },
      { id: 2, brandTitle: 'نایک', brandSlug: 'nike' },
      { id: 3, brandTitle: 'پوما', brandSlug: 'puma' },
    ],
  },
  { id: 6, title: 'گیفت', icon: '🎁', slug: 'gifts', brands: [] },
  {
    id: 7,
    title: 'جواهرآلات',
    icon: '💎',
    slug: 'inspiration',
    brands: [],
  },
];

export default categories;