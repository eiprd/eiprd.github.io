import { sectionOrder, Section } from "@/data/section-order";

import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";

import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";

import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";

import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";

import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";

import { ReplicationEntry } from "@/components/replication-entry";
import { replicationData } from "@/data/replication";

import { workingpaperData } from "@/data/workingpapers";
import { WorkingPaperEntry } from "@/components/workingpaper-entry";

import { researchexpData } from "@/data/researchexp";
import { ResearchexpEntry } from "@/components/researchexp-entry";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      {/* <div className="max-w-screen-lg mx-auto px-6 py-24"> */}
      <div className="max-w-screen-xl mx-auto px-6 py-24">

        {/* Grid Layout */}
        {/* <div className="grid grid-cols-1 md:grid-cols-12 gap-"> */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-18">

          {/* Left Column - Fixed Info */}
          {/* <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0"> */}
          <div className="col-span-12 md:col-span-3 md:-translate-x-12 space-y-12 mb-8 md:mb-0">
            <div className="md:sticky top-12 space-y-20">
              {/* Profile */}
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          {/* <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-32"> */}
          <div className="col-span-12 md:col-span-9 space-y-32">
  
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <p
                  className="italic font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/*===== Map through sectionOrder to render sections in correct order =====*/}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                
                // NEWS
                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-lg mb-6 tracking-wide uppercase">
                          News
                        </h2>
                        <div className="space-y-6">
                          {newsData.map((news, index) => (
                            <div key={index}>
                              <NewsEntry news={news} />
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                
                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-bold font-serif text-lg mb-10 tracking-wide uppercase">
                          Publications
                        </h2>
                        <div className="space-y-12">
                          {publicationData.map((publication, index) => (
                            <div key={index}>
                              <PublicationEntry publication={publication} />
                              {index < publicationData.length - 1 && (
                                <div className="h-px bg-zinc-200 my-8" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );

                case Section.WorkingPapers:
                  return (
                    workingpaperData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-bold font-serif text-lg mb-10 tracking-wide uppercase">
                          Working Papers
                        </h2>
                        <div className="space-y-12">
                          {workingpaperData.map((workingpaper, index) => (
                            <div key={index}>
                              <WorkingPaperEntry workingpaper={workingpaper} />
                              {index < workingpaperData.length - 1 && (
                                <div className="h-px bg-zinc-200 my-8" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );

                case Section.Replication:
                  return (
                    replicationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-bold font-serif text-l mb-10 tracking-wide uppercase">
                          Replication codes
                        </h2>
                        <div className="space-y-12">
                          {replicationData.map((replication, index) => (
                            <ReplicationEntry key={index} replication={replication} />
                          ))}
                        </div>
                      </section>
                    )
                  );

                case Section.Researchexp:
                  return (
                    researchexpData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-bold font-serif text-l mb-10 tracking-wide uppercase">
                          Research Experience
                        </h2>
                        <div className="space-y-12">
                          {researchexpData.map((researchexp, index) => (
                            <ResearchexpEntry
                              key={index}
                              researchexp={researchexp}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );

                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-bold font-serif text-zinc-700 mb-10 tracking-wide uppercase">
                          Education
                        </h2>
                        <div className="space-y-6">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );

                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-bold font-serif text-md mb-10 tracking-wide uppercase">
                          Experience
                        </h2>
                        <div className="space-y-6">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );

                default:
                  return null;
              }
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
