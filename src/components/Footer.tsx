import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MailIcon } from "lucide-react";
import { LinkedinIcon  } from "lucide-react";
import { Github } from "lucide-react";

export default function Footer() {
  // get the current time in UTC+1 time zone
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      date.setHours(date.getHours());
      setTime(
        date.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 space-y-4 md:space-y-0">
    {/* Left Section */}
    <div className="flex flex-row items-center space-x-4">
      <p className="text-xs text-muted-foreground">
        Made with ❤️ by{" "}
        <Link
          href="https://github.com/Avinash73-DA"
          target="_blank"
          passHref
          className="text-foreground transition hover:text-primary"
        >
          Avinash
        </Link>
      </p>
      <span className="hidden md:flex h-6 border-l border-muted" />
      <div className="hidden md:flex flex-row items-center space-x-2">
        <p className="text-xs text-muted-foreground">Local time:</p>
        <p className="text-sm font-semibold">{time} UTC+1</p>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex flex-row space-x-2">
      <Link
        href="mailto:avinashsolai@gmail.com"
        passHref
        className="text-xs text-muted-foreground hover:text-foreground"
      >
        <Button variant={"outline"}>
          <MailIcon className="h-4 w-4 md:mr-2" />
          <span className="hidden md:flex">avinashsolai@gmail.com</span>
        </Button>
      </Link>

      <Link
        href="https://www.linkedin.com/in/avinash-m-va73"
        target="_blank"
        passHref
        className="text-xs text-muted-foreground hover:text-foreground"
      >
        <Button variant={"outline"}>
          <LinkedinIcon className="h-4 w-4 md:mr-2" />
          <span className="hidden md:flex"><strong>Avinash</strong></span>
        </Button>
      </Link>

      <Link
        href="https://github.com/Avinash73-DA"
        target="_blank"
        passHref
        className="text-xs text-muted-foreground hover:text-foreground"
      >
        <Button variant={"outline"}>
          <Github className="h-4 w-4 md:mr-2" />
          <span className="hidden md:flex"><strong>Avinash</strong></span>
        </Button>
      </Link>
    </div>
  </div>

  <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
</footer>
  );
}
