"use client";
import Image from "next/image";
import banner from "../assets/images/banner.png";
import { useEffect, useState } from "react";
import HireMeModalPage from "./shared/Modal";
import { Link as ScrollLink } from "react-scroll";
import TypedText from "./shared/TypedText";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <section
      id="home"
      className="flex flex-col px-4 lg:p-0 lg:flex-row pt-20 my-10 justify-center lg:items-center"
    >
      <div className="flex-1  ">
        <h1 className="text-4xl hidden lg:block font-semibold font-montserrat ">
          HI, <span className="text-[#0084FF]">I'm</span>
        </h1>
        <h1 className="text-3xl lg:text-7xl font-bold">
          <span className="text-[#0084FF]">SAMSUL</span> KOBIR
        </h1>

        <div className="my-8 flex gap-2 text-blue-600 text-xl items-center space-y-3 lg:text-3xl border-l-2 px-2 border-cyan-600">
          💻 <TypedText />
        </div>

        <div className="flex space-x-4 my-4">
          <Link href="/blog">
            <Button>Explore Blog</Button>
          </Link>
          <div>
            <Dialog>
              <DialogTrigger>
                <Button className="bg-gradient-to-r from-purple-500 to-blue-500  hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500">
                  Hire Me
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-black border-gray-800">
                <DialogHeader>
                  <DialogTitle className="font-bold text-lg">
                    Hii There!! 👋
                  </DialogTitle>
                  <DialogDescription>
                    <div className="py-4">
                      <p className="my-2">What do you want? let's discuss</p>

                      <Input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered input-accent w-full "
                      />

                      <Textarea
                        name="message"
                        className="textarea textarea-info w-full my-2"
                        placeholder="Message"
                      />
                      <div>
                        <p className="text-sm text-green-600 my-2">
                          For Freelance Work
                        </p>
                        <div className=" flex gap-4 text-2xl  items-center">
                          <Link
                            className="text-green-500 hover:text-blue-600"
                            href="https://www.fiverr.com/pixprocoder"
                            target="_blank"
                          >
                            <TbBrandFiverr></TbBrandFiverr>
                          </Link>
                          <Link
                            className="text-green-500 hover:text-blue-600"
                            href="https://www.fiverr.com/pixprocoder"
                            target="_blank"
                          >
                            <SiUpwork></SiUpwork>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="modal-action">
                      <Button
                        type="submit"
                        className=" px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-500  hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-md text-xl"
                      >
                        Send
                      </Button>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden lg:block">
        <Image src={banner} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
