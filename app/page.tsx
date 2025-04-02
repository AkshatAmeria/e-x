import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "@/components/hero";
import { featuresData, statsData , howItWorksData, testimonialsData} from "@/data/landing";
import { Card, CardContent } from "@/components/ui/card";
import { PinContainer } from "@/components/ui/3d-pin";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero/>
<section className="py-15 mt-2 ">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {statsData.map((statsData,index) => (
        <div key={index} className="text-center animate-pulse">
          <div className="text-4xl font-bold text-purple-600 mb-2">{statsData.value}</div>
          <div className="text-gray-600">{statsData.label}</div>
        </div>
      ))}
    </div>
  </div>
  </section>



  <section className="py-20 ">
    <div className="container mx-auto px-4">
<h2 className="text-3xl font-bold text-center mb-10 next-title">Everything you need to manage your finances</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
  {featuresData.map((feature,index) => (
    
    <Card key={index} className="p-6 bg-white/60 hover:bg-white ">
      
      <CardContent className="space-y-4 pt-4">
      <div className="color-white">{feature.icon}</div>
      
        
        <h3 className="text-xl font-semibold">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </CardContent>
    </Card>
    
  ))}
</div>
    </div>
  </section>

{/* how it works */}
  <section className="py-10 ">
    <div className="container mx-auto px-4">
<h2 className="text-3xl font-bold text-center mb-20 next-title">How it works?</h2>
<div className="grid grid-cols-1 md:grid-cols-3  gap-8" >
  {howItWorksData.map((step,index) => (
    <div key={index} className="text-center">
      <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">{step.icon}</div>
      <h3 className="text-xl font-semibold mb-4 next-title ">{step.title}</h3>
      <p className="text-gray-600">{step.description}</p>
    </div>
  ))}
</div>
    </div>
  </section>


  {/* testimonials */}


  <section className="py-5 mt-5">
    <div className="container mx-auto px-4">
<h2 className="text-3xl font-bold text-center mb-12 next-title">What people say about our product?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
  {testimonialsData.map((testimonial,index) => (
    
    <Card key={index} className="p-6 bg-white/60 hover:bg-white ">
      
      <CardContent className="pt-4">
        <div className="flex items-center mb-4">
          <Image src={testimonial.image} alt={testimonial.name} width={40} height={40} className="rounded-full"/>
          <div className="ml-4">
            <div className="font-semibold">{testimonial.name}</div>
            <div className="text-sm text-gray-600">{testimonial.role}</div>
          </div>
        </div>
        <p className="text-gray-600">{testimonial.quote}</p>
      </CardContent>
    </Card>
    
  ))}
</div>
    </div>
  </section>

{/* ready for change  */}
<section className=" w-full">
<div className="text-center">
  <div className="mt-10">
  <h3 className="text-3xl font-bold text-center mb-5 next-title ">Let's make your x positive for exponential growth</h3>
  </div>
  <div className="mt-2 ">
  <p className="text-sm text-center font-semibold text-white">Join thousands of users who are already managing their finances smater with e^x</p>
  </div>
  <div className="mt-10">
    <Link href={'/dashboard'}>
    <Button size='lg' className="bg-white text-black font-semibold hover:bg-[#6A4CAF] animate-bounce">Start Free Trial</Button>
    </Link>
    
  </div>

</div>
</section>


    </main>
  );
}
