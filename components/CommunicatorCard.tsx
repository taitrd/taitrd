'use client';
import { fadeInRight } from "@/lib/motion/variants";
import dynamic from "next/dynamic";

const MotionBlock = dynamic(() => import("./motions/Block"));

export default function CommunicatorCard() {
  return (
    <MotionBlock variants={fadeInRight} className="p-8 bg-yellow-400 dark:bg-yellow-700 rounded-xl text-black dark:text-white shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Effective Communicator</h2>
      {/* <p className="mb-4">
        I talk <span className="font-bold">tech</span> with devs, and{" "}
        <span className="font-bold italic">business</span> with stakeholders.
      </p> */}
      {/* <p className="mb-4">
        I can explain complex concepts in simple terms and bridge the gap
        between tech & non-tech.
      </p> */}
      <p className="mb-4">
        <span className="italic">Coding</span> is my default mode, but {"I'll"}{" "}
        jump on chats & calls whenever necessary.
      </p>
      <p>
        Remote yet responsive, {"I'm"} based in{" "}
        <a href="https://maps.app.goo.gl/KbJ5QRu7UDxtpr2eA" target="_blank" className="underline font-bold">
          Ho Chi Minh, Viet Nam
        </a>
        (UTC+7) and align best with teams in APAC.
      </p>
    </MotionBlock>
  );
}
