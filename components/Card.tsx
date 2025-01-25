"use client";
import { PropsWithChildren } from "react";
import Image from "./Image";
import Link from "./Link";

const Card = ({
  title,
  description,
  imgSrc,
  href,
  tags,
}: PropsWithChildren<any>) => (
  <div
    className={`flex flex-col flex-1 overflow-hidden rounded-md border-0 border-gray-200 border-opacity-60 shadow bg-slate-50 dark:bg-slate-900 hover:dark:bg-slate-800 hover:shadow-xl dark:hover:shadow-primary/10 hover:scale-105 transition-transform duration-300`}
  >
    {imgSrc && (
      <Link href={href} aria-label={`Link to ${title}`} className="flex">
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover"
          width={680}
          height={420}
        />
      </Link>
    )}
    <div className="p-6 flex-1 flex flex-col">
      <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400 flex-1">
        {description}
      </p>
      <p className="text-sm">Tech stack: {tags && tags.join(", ")}</p>
      {href && (
        <Link
          href={href}
          className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label={`Link to ${title}`}
        >
          Preview &rarr;
        </Link>
      )}
    </div>
  </div>
);

export default Card;
