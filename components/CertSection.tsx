"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const certs = [
  {
    name: "NUS Overseas Colleges",
    description:
      "A web app for both customers and administrators for leading maintenance service startup in Singapore",
    image: "/noc.png",
    link: "https://credentials.nus.edu.sg/24ebca87-8614-43aa-aaea-f63e78744acc",
  },
  {
    name: "ICT Solutioning Knowledge Area",
    description:
      "A web app for both customers and administrators for leading maintenance service startup in Singapore",
    image: "/ict.png",
    link: "https://credentials.nus.edu.sg/af2d0d63-d61f-49e4-9e1a-0b320f270c43",
  },
  {
    name: "SAP Cloud Accelerated Learning Experience",
    description:
      "A web app for both customers and administrators for leading maintenance service startup in Singapore",
    image: "/scale.png",
    link: "https://repair.sg/",
  },
  {
    name: "NUS Orbital - Software Engineering",
    description:
      "A web app for both customers and administrators for leading maintenance service startup in Singapore",
    image: "/orbital.png",
    link: "https://credentials.nus.edu.sg/d820e1dd-abb1-4e62-8ff6-7b26567fa356",
  },
  {
    name: "NUS Top Students for Ethics in Computing",
    description:
      "A web app for both customers and administrators for leading maintenance service startup in Singapore",
    image: "/ethics.png",
    link: "https://credentials.nus.edu.sg/75eff6ab-1035-4d29-ac08-229cd785d5c6",
  },
  {
    name: "Microsfot Excel - Advanced",
    description:
      "A web app for both customers and administrators for leading maintenance service startup in Singapore",
    image: "/excel.png",
    link: "https://e-prep.udemy.com/?next=%2Fcertificate%2FUC-1d5a6349-7632-4489-81fb-1b4b7459ecf1%2F%3Futm_campaign%3Demail%26utm_medium%3Demail%26utm_source%3Dsendgrid.com",
  },
];

export default function CertSection() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <section id="certifications">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="my-12 pb-12">
        <h1 className="my-10 text-center font-bold text-4xl">
        Certifications
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col items-center justify-center">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from(certs).map((cert, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Link href={cert.link}>
                          <Image
                            src={cert.image}
                            objectFit="cover"
                            alt=""
                          />
                        </Link>
                      </CardContent>
                      <CardFooter>{cert.name}</CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
