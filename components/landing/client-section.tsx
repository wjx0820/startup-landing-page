import Marquee from "@/components/magicui/marquee";

export default function ClientSection() {
  return (
    <section
      id="clients"
      className="text-center mx-auto max-w-[80rem] px-6 md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold text-gray-600">
            Trusted by big companies
          </h2>
          <div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
              <li>
                <img
                  src="Google.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
              <li>
                <img
                  src="Microsoft.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
              <li>
                <img
                  src="GitHub.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>

              <li>
                <img
                  src="Uber.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
              <li>
                <img
                  src="Notion.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
