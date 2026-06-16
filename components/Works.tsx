import Image from "next/image";
import { works } from "@/data/works";

const previewBarHeights = ["h-[35%]", "h-[52%]", "h-[44%]", "h-[68%]", "h-[78%]"];

function WorkImage({
  imageAlt,
  imageSrc,
}: {
  imageAlt: string;
  imageSrc?: string;
}) {
  if (imageSrc) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-outline-variant bg-white shadow-sm">
        <Image
          alt={imageAlt}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, 460px"
          src={imageSrc}
        />
      </div>
    );
  }

  return (
    <div
      aria-label={imageAlt}
      className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-outline-variant bg-[#EEF3F8] p-4 shadow-sm"
      role="img"
    >
      <div className="flex h-full flex-col rounded-md border border-outline-variant/70 bg-white/80 p-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-label-sm font-bold tracking-wider text-primary-blue">
            Dashboard Preview
          </span>
          <span className="h-2 w-12 rounded-full bg-accent-greige/70" />
        </div>
        <div className="grid flex-1 grid-cols-[0.8fr_1.2fr] gap-3">
          <div className="space-y-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                className="flex items-center justify-between rounded border border-outline-variant/50 bg-white px-2 py-1"
                key={item}
              >
                <span className="h-2 w-10 rounded-full bg-surface-container" />
                <span className="h-2 w-5 rounded-full bg-primary-blue/40" />
              </div>
            ))}
          </div>
          <div className="grid grid-rows-2 gap-3">
            <div className="rounded border border-outline-variant/50 bg-white p-3">
              <div className="mb-3 h-2 w-20 rounded-full bg-surface-container" />
              <div className="flex h-16 items-end gap-2">
                {previewBarHeights.map((heightClassName) => (
                  <span
                    className={`w-full rounded-t bg-primary-blue/50 ${heightClassName}`}
                    key={heightClassName}
                  />
                ))}
              </div>
            </div>
            <div className="rounded border border-outline-variant/50 bg-white p-3">
              <div className="mb-3 h-2 w-16 rounded-full bg-surface-container" />
              <div className="space-y-2">
                <span className="block h-2 w-4/5 rounded-full bg-primary/20" />
                <span className="block h-2 w-2/3 rounded-full bg-primary-blue/30" />
                <span className="block h-2 w-1/2 rounded-full bg-accent-greige/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Works() {
  return (
    <section className="bg-white py-14 md:py-24" id="works">
      <div className="mx-auto max-w-container-max px-4 sm:px-6">
        <h2 className="text-display-lg-mobile text-primary md:text-headline-md">
          制作・開発実績
        </h2>
        <div className="mt-3 mb-8 h-[2px] w-10 bg-accent-greige md:mb-12" />
        <div className="space-y-3 sm:space-y-4">
          {works.map((work, index) => (
            <details
              className="group rounded-xl border border-outline-variant bg-[#F8FAFC] shadow-sm transition-colors hover:bg-white"
              key={work.id}
              name="works-accordion"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none flex-col gap-4 p-5 marker:hidden [&::-webkit-details-marker]:hidden sm:p-6 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0">
                  <span className="mb-2 inline-block rounded bg-primary/10 px-2 py-0.5 text-label-sm font-bold text-primary">
                    {work.category}
                  </span>
                  <h3 className="text-headline-sm leading-snug text-primary transition-colors group-open:text-primary-blue">
                    {work.title}
                  </h3>
                  <div className="mt-1">
                    <span className="text-label-sm font-bold text-primary-blue">
                      [ {work.result} ]
                    </span>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined shrink-0 self-end text-outline transition-transform duration-300 ease-in-out group-open:rotate-180 motion-reduce:transition-none md:self-auto"
                >
                  expand_more
                </span>
              </summary>
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out group-open:grid-rows-[1fr] motion-reduce:transition-none">
                <div className="overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out group-open:opacity-100 motion-reduce:transition-none">
                  <div className="border-t border-outline-variant/40 px-5 pt-4 pb-5 sm:px-6 sm:pb-6">
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
                      <div className="w-full shrink-0 md:w-[45%]">
                        <WorkImage
                          imageAlt={work.imageAlt}
                          imageSrc={work.imageSrc}
                        />
                      </div>
                      <div className="flex-1 space-y-4 text-body-md text-[#4A5568]">
                        {work.descriptions.map((description) => (
                          <p key={description.label}>
                            <strong className="text-primary">
                              【{description.label}】
                            </strong>
                            {description.text}
                          </p>
                        ))}
                        {work.technologies?.length ? (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {work.technologies.map((technology) => (
                              <span
                                className="rounded-full border border-outline-variant bg-white px-3 py-1 text-label-sm font-medium text-primary"
                                key={technology}
                              >
                                {technology}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
