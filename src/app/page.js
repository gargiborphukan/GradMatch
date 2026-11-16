import Image from "next/image";

import ApplicationFunctions from "@/components/ApplicationFunctions"

 
export default function Home() {
  return (
  <main  className="min-h-screen bg-background text-foreground">
    <header className="border-b border-boarder bg-card">
      <div classname="mx-auto flex max-w-6xl flex-wrap items-centre justify-between gap-5 px-6 py-5">{/*use AI to fix*/}
       <Image
        src="/images/gradmatch-logo.jpg"
        alt="GradMatch - Versatile Career Tracker"
        width={790}
        height={255}
        className="h-auto w-full max-w-[330px] rounded-md"
        />
        <div className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">{/*use AI to fix*/}
          Student/Graduates
        </div>
        </div>
        </header>

        {/*Main page contents*/} 
        <div className="mx-auto max-w-6xl px-6 py-10">
          <section className="mx-auto mb-7 max-w-3x1">{/*purpose of the screen*/}
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Your Career Journey
            </p>

            <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">{/*use AI to fix*/}
            Keep your next oppurtunity in view
            </h1>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Organize your applications, track your progress,
              and prepare for what comes next.
            </p>

            <p className="mt-5 round-lg border border-border bg-secondary px-4 py-3 text-sm text-sm text-secondary-foreground">
              Capstone Project I Group 14 - GradMatch
              Application Details are previewed only and are not permanently saved yet.
            </p>
          </section>

          <ApplicationFunctions/>{/*displaying the form without changing it*/}

        </div>

        <footer className="border-t border-border px-6 py-5 text-cemter text-sm text-muted-foreground">
        Team Memebers - Nicole , Vera, Clein, gargi Borphukan
        </footer> 
</main>

  );
}