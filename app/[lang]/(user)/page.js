import Amenities from '../../../components/Amenities';
import Explore from '../../../components/Explore';
import Features from '../../../components/Features';
import Hero from '../../../components/Hero';
import Spesification from '../../../components/Spesification';
import Location from '../../../components/Location';
import Contact from '../../../components/Contact';
import Footer from '../../../components/Footer';
import Navbar from '@/components/Navbar';
import { getDictionary } from '../../../getDictionary';

export default async function Home({params}) {
const lang=await getDictionary(params.lang)

  const images = [
    { id: 1, thumbnail: '/assets/BG.png', full: '/assets/BG.png', title: lang.Hero.buttons.Tulip },
    { id: 2, thumbnail: '/assets/BG2.png', full: '/assets/BG2.png', title: lang.Hero.buttons.Orchid },
    { id: 3, thumbnail: '/assets/BG3.png', full: '/assets/BG3.png', title: lang.Hero.buttons.Iris },
    // ...
  ];
  const featuresImage = [
    { id: 1, thumbnail: '/features/features_1.png', full: '/features/features_1.png', title: lang.Features.Park.Park1 },
    { id: 2, thumbnail: '/features/features_2.png', full: '/features/features_2.png', title:  lang.Features.Park.Park2 },
    { id: 3, thumbnail: '/features/features_3.png', full: '/features/features_3.png', title:  lang.Features.Park.Park3 },
    { id: 3, thumbnail: '/features/features_4.png', full: '/features/features_4.png', title:  lang.Features.Park.Park4 },
    // ...
  ];
  const cards = [
    {id: 1, image : '/spesification/structure.png', title: lang.Specification.Buttons.image1.title, description : lang.Specification.Buttons.image1.description},
    {id: 1, image : '/spesification/wall_finish.png', title: lang.Specification.Buttons.image2.title, description :  lang.Specification.Buttons.image2.description},
    {id: 1, image : '/spesification/door_windows.png', title: lang.Specification.Buttons.image3.title, description :  lang.Specification.Buttons.image3.description},
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Navbar lang={lang}/>
      <Hero images={images}  lang={lang} />
      <Features featuresImage={featuresImage} lang={lang} />
      <Explore lang={lang}/>
      <Spesification cards={cards} lang={lang}/>
      <Amenities  lang={lang}/>
      <Location  lang={lang}/>
      <Contact  lang={lang}/>
      <Footer lang={lang}/>
    </main>
  )
}
