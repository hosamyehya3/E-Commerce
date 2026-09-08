import FeaturedProuducts from "./_components/FeaturedProducts/FeaturedProuducts";
import Slider from "./_components/Slider/Slider";
import 'animate.css/animate.min.css';

export default function Home() {
  return (
    <div className="bg-gray-200 text-white my-24 ">
      <Slider 
        spaceBetween={0} 
        slidesPerView={1} 
        pageList={[
          "/assets/images/blog-img-1.jpeg",
          "/assets/images/blog-img-2.jpeg",
          "/assets/images/grocery-banner.png"
        ]} 
      />
     
      <FeaturedProuducts />
    </div>
  );
}