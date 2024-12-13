import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const skillsTags = ["FE", "UI/UX", "React", "Next-JS", "Angular", "Tailwind-Css"];
  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <div className="flex flex-col items-center justify-center mt-[80px]">
        <img
          src={require("@site/static/img/raul-new.jpg").default}
          draggable={false}
          className="w-[140px] h-[140px] rounded-full object-cover"
          alt="rahul-pict"
        />
        <div className="text-center mt-2">
          <div className="font-light text-2xl">
            Hi, I'm <span className="font-bold text-green-600">RahulSya</span> 🖐
          </div>
          <div className="text-3xl font-light pt-2 w-[500px]">
            Dedicated <span className="text-yellow-500">Front-End Developer ,</span> <br />
            Specializing in Creating <span className="text-red-500">Responsive</span> and Accessible{" "}
            <span className="text-pink-600">Digital Experiences</span>
          </div>
          <div className="flex flex-row justify-center gap-2 mt-4">
            {skillsTags.map((skill, index) => (
              <div key={index} className="px-2 py-1 bg-red-200 rounded-lg text-xs text-red-500">
                #{skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-[120px]">
        <section>
          <div className="font-bold text-2xl">Latest Blog Update</div>
          <div className="flex"></div>
        </section>
        <section>
          <div className="font-bold text-2xl ">Projects</div>
          <div className="flex"></div>
        </section>
      </div>
    </Layout>
  );
}
