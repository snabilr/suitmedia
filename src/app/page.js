'use client';

import Banner from '@/component/Banner';
import ListPost from '@/component/ListPost';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Banner />
      <ListPost />
    </main>
  );
}
