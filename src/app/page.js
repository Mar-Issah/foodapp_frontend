import Notice from '@/components/Notice';
import Welcome from '@/components/Welcome';

export default function Home() {
  return (
    <main className='w-screen'>
      <Notice />
      <Welcome />
    </main>
  );
}
