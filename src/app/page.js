'use client';

import Banner from '@/components/Banner';
import ListPost from '@/components/ListPost';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Banner />
      <ListPost />
    </main>
  );
}
