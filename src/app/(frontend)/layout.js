// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';
// import '../globals.css';

// export const metadata = {
//   title: 'E-Store - Public',
//   description: 'Best shopping site',
// };

// export default function FrontendLayout({ children }) {
//   return (
//     <>
//     <Navbar />
//       <main>{children}</main>
//       <Footer />
//     </>
//   );
// }

// app/(frontend)/layout.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/app/globals.css';

export const metadata = {
  title: 'E-Store - Public',
  description: 'Best shopping site',
};

export default function FrontendLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
