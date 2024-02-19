import PageSection from "@/components/PageSection";
import Slider from "@/components/Slider";
import { capitalizeSentenceFirstLetters } from "@/functions/utils";
import {
  Button,
  Card,
  CardBody,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";

interface post {
  date: string;
  title: string;
  category: string;
  img: string;
  contents: {
    type: string;
    contents?: string[];
    content?: string;
  }[];
}

const BlogSection = () => {
  // const [pickedCategory, setPickedCategory] = useState("");

  const defaultPost = {
    date: "",
    title: "",
    category: "",
    img: "",
    contents: [
      {
        type: "",
        content: "",
      },
    ],
  };

  // const [pickedPost, setPickedPost] = useState<post>(defaultPost);

  // const closeModal = () => setPickedPost(defaultPost);

  const posts = [
    {
      date: "7 Dec 2023",
      title: capitalizeSentenceFirstLetters(
        "HOW SOLUTION FOCUSED COACHING TRANSFORMED MY TRAINING STYLE".toLowerCase()
      ),
      category: "Articles",
      img: "2.jpg",
      contents: [
        {
          type: "text",
          content:
            "In the dynamic world of professional development, it is essential to adapt and evolve to meet the ever-changing needs of learners. As a dedicated trainer, I have always strived to create an environment that fosters growth, empowerment, and positive change. However, it wasn't until I discovered the Solution-Focused Coaching approach that I truly experienced a profound shift in my training methodology.",
        },
        {
          type: "text",
          content:
            "Solution-Focused Coaching has become the cornerstone of my practice, enabling me to empower individuals and teams to identify their strengths, harness their potential, and navigate challenges with resilience and confidence. This powerful coaching approach emphasizes collaboration, future-focused thinking, and the belief that every individual possesses the inherent resources and abilities to create meaningful change in their lives and careers.",
        },
        {
          type: "text",
          content:
            "Gone are the days of dwelling on problems and obstacles. Instead, I have embraced a mindset centered around solutions, progress, and actionable steps. By focusing on what is already working well and leveraging existing strengths, I have witnessed firsthand how participants become energized, motivated, and inspired to take ownership of their learning journey.",
        },
        {
          type: "text",
          content:
            "Through Solution-Focused Coaching, I have witnessed remarkable transformations unfold before my eyes. Participants have discovered innovative solutions, tapped into their untapped potential, and achieved goals that once seemed insurmountable. The process has not only enhanced their performance and productivity but has also fostered a profound sense of fulfillment, purpose, and well-being.",
        },
        {
          type: "text",
          content:
            "Moreover, Solution-Focused Coaching has instilled a sense of empowerment in me as a trainer. It has allowed me to step into a coach / facilitator role, guiding individuals and teams towards their desired outcomes, and witnessing their growth and success has been an incredible source of joy and fulfillment for me. It is a privilege to witness the profound impact this approach can have on individuals' lives and professional trajectories.",
        },
        {
          type: "text",
          content:
            "I am committed to continuing my own growth and development as a Solution-Focused Coach. I will continually refine my skills, expand my knowledge, and collaborate with like-minded professionals to bring the very best training experiences to individuals and organizations seeking positive change.",
        },
        {
          type: "text",
          content:
            "If you're ready to unlock your potential, embrace a future- focused mindset, and achieve extraordinary results, let's connect! Together, we can embark on a transformative journey that will elevate your performance, amplify your success, and empower you to thrive.",
        },
      ],
    },
    {
      date: "7 Nov 2023",
      title: capitalizeSentenceFirstLetters(
        "WHEN COACHING CONVERGES WITH TRAINING: IGNITING THE FLAME OF PASSION AND UNLEASHING POTENTIAL".toLowerCase()
      ),
      category: "Articles",
      img: "3.png",
      contents: [
        {
          type: "text",
          content:
            "Navigating the ever-evolving landscape of personal and professional development introduces us to two stalwarts: coaching and training. Each boasting its own unique virtues, these methodologies furnish individuals with invaluable tools to augment their skills and traverse the intricate path to success. Yet, it is at the crossroads of coaching and training that an extraordinary alchemy transpiresan amalgamation of passion, guidance, and growth that transcends boundaries and propels individuals toward their zenith. This article delves into the enchanting synergy born when coaching meets training, unraveling the secrets of a transformative journey of self-discovery, learning, and triumph.",
        },
        { type: "title", content: "UNLEASHING THE POWER OF POTENTIAL" },
        {
          type: "text",
          content:
            "Coaching and training, in their distinctive capacities, act as catalysts for personal and professional growth. Coaching, with its empathetic and supportive ethos, centers on introspection, self-awareness, and goal setting. Meanwhile, training hones in on the impartation of specific skills, knowledge, and techniques. Together, they forge a potent alliance that not only empowers individuals to unveil their latent potential but also equips them with the acumen and proficiency needed to unfurl it",
        },
        {
          type: "title",
          content: "PASSION: THE CATALYST FOR CHANGE",
        },
        {
          type: "text",
          content:
            "The rendezvous of coaching and training introduces an extraordinary catalyst: passion. This intangible force propels individuals forward with unwavering determination and unyielding focus. The amalgamation of coaching and training, fueled by passion, transforms mundane objectives into extraordinary triumphs. Passion sparks the hunger for learning, growth, and triumph over obstacles—a constant beacon of motivation propelling individuals toward their aspirations.",
        },
        {
          type: "title",
          content: "BREAKING BARRIERS AND EXPANDING HORIZONS",
        },
        {
          type: "text",
          content:
            "The amalgamation of coaching and training holds the key to breaking through barriers and broadening horizons. While training imparts concrete skills and knowledge, coaching delves into the psychological and emotional realms. This symbiosis, merging the practicality of training with the introspection of coaching, emancipates individuals from limiting beliefs, conquers self-doubt, and nurtures fresh perspectives. It bestows the power to push boundaries, explore uncharted territories, and unveil dormant potentials.",
        },
        {
          type: "title",
          content: "BUILDING A SUPPORTIVE ALLIANCE",
        },
        {
          type: "text",
          content:
            "Coaching and training foster a supportive alliance that nurtures individual growth and resilience. A proficient coach serves as a guide, sounding board, and accountability partner. Simultaneously, training offers a structured framework for skill acquisition and refinement. The partnership between coach and trainer establishes a secure and empowering environment where individuals venture beyond comfort zones, make mistakes, and learn—all while receiving steadfast support.",
        },
        {
          type: "title",
          content: "A TRANSFORMATIVE JOURNEY",
        },
        {
          type: "text",
          content:
            "The convergence of coaching and training sets the stage for a transformative journey of self-discovery, learning, and triumph. The amalgamation of passionate drive, targeted training, and personalized guidance engineers a profound shift in perspective, empowering individuals to conquer obstacles, embrace change, and attain audacious goals. This metamorphic process reverberates not only in professional success but also in personal fulfillment—a harmonious equilibrium between ambition and contentment",
        },
        {
          type: "text",
          content:
            "At the end, badges and certifications serve different purposes and cater to different needs. Badges are more flexible and can be used for recognizing various achievements, while certifications are typically more comprehensive and are often required in specific professions or industries. The choice between badges and certifications in training depends on the goals of the training program and the desired level of recognition and expertise.",
        },
      ],
    },
    {
      date: "7 Oct 2023",
      title: capitalizeSentenceFirstLetters(
        "The Science of Adaptability: How to Evolve and Thrive in a Shifting World".toLowerCase()
      ),
      category: "Articles",
      img: "4.jpg",
      contents: [
        {
          type: "text",
          content:
            "In an ever-changing world, there’s only one thing that’s constant: Change. Change is a force which we can’t afford not to reckon with. Sadly, “being strong” or “just dealing with it” are not enough. One’s ability to adapt and thrive all boils down to science, and that’s where the ground-breaking AQai assessments come in.",
        },
        {
          type: "text",
          content:
            "But first, let me tell you my story. As an entrepreneur, professional speaker, and mentor to experts across various industries, the very foundation of my world shook in the face of the pandemic. I was forced to abandon the one thing I did best – face to face training – in favour of online coaching.",
        },
        {
          type: "text",
          content:
            "To put it bluntly, I had no idea what I was doing. I didn’t know how to provide people with the same personal attention and executive presence that I’d offered offline for so many years. But what could I do? The way I saw it, I had two choices.",
        },
        {
          type: "ol",
          contents: [
            "Let fear get the better of me, fall behind, and fail.",
            "Embrace the change and make it work",
          ],
        },
        {
          type: "boldText",
          content:
            "I chose the latter – and now, I want to help you do the same.",
        },
        {
          type: "text",
          content:
            "Today, I am proud to be certified in helping people to use the very AQai tools and assessments that changed my own life when transitioning from face-to-face training to the online sphere. So, what is this tool about? Here’s what you need to know:",
        },
        {
          type: "title",
          content: "It’s Threefold",
        },
        {
          type: "text",
          content:
            "AQai assesses three dimensions: Ability, Character, and Environment. It digs deeper into your why, when and how to make a change that positively impacts you and everyone around you. Once your AQ profile has been compiled, you’ll unlock personalized insights and plans of action to improve your adaptability now and in the future. You will gain valuable  understanding of your abilities and the various sub dimensions such as Mental flexibility, Grit, Unlearn, Mindset and Resilience.",
        },
        {
          type: "title",
          content: "Get to Know Yourself",
        },
        {
          type: "text",
          content:
            "Nick Nanton, who produced a mini-documentary about AQai, said: “We’re not all in the same boat, but we’re in the same storm.” So, while we can’t predict how the tides will turn, we can arm ourselves with the robust methodology we need to measure, comprehend, and improve our adaptability quotient. This way, we can gain a better understanding of why we often struggle so much to adapt to change – and what we can do about it.",
        },
        {
          type: "title",
          content: "Unlearning",
        },
        {
          type: "text",
          content:
            "what really got me intrigued was the idea of unlearning being an ability that we could develop and AQai has shown that by unlearning certain behaviours related to our skills, methods of working, and perception of the status quo – we can boost our adaptability by up to 40%. The secret lies in the continual re-evaluation of information, highlighting things that no longer serve you and committing to let go of at least one a day or week. Another surprise for me was the idea that there is a positive correlation between Unlearning and Grit (another ability sub-dimension ) that when we have perseverance and passion we are still  able to Unlearn, interesting right?",
        },
        {
          type: "title",
          content: "Experiment",
        },
        {
          type: "text",
          content:
            " A huge part of AQai success lies in testing – skills, processes, software, technology, and behaviours. Life is a series of choices, as you choose so you become. You could choose to dig deeper into your own self and create a new better version of yourself and maybe have a moment of epiphany only to realize how many years you’ve wasted not doing things in an adaptive way. But the good news is that it’s never too late to master the science of adaptability. In fact it is part of life's journey.",
        },
        {
          type: "boldText",
          content:
            "If you want to thrive in the new world – not just survive – then grasping the science of adaptability isn’t optional. It’s essential if you want to be resilient and robust enough to thrive when you ride the tides, personally and professionally.",
        },
        {
          type: "boldText",
          content:
            "To put AQai to the test and see how it can change your life – just as it did mine – let’s start a conversation today!",
        },
      ],
    },
  ];

  const categories = posts.reduce(
    (final: string[], { category }) =>
      final.includes(category) ? final : [...final, category],
    []
  );

  return (
    <PageSection title="Blog" id="blog" color="light">
      {/* <Col md={12} className="text-center p-0 m-0 mb-4">
        <ButtonGroup>
          <Button
            onClick={() => setPickedCategory("")}
            variant={pickedCategory === "" ? "primary" : "dark"}
          >
            All
          </Button>

          {categories.map((category, i) => (
            <Button
              onClick={() => setPickedCategory(category)}
              key={i}
              variant={pickedCategory === category ? "primary" : "dark"}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </Col> */}

      <Col md={12} className="text-center p-0 m-0">
        <Slider
          navigation
          indicators
          slides={posts
            // .filter(({ category }) =>
            //   pickedCategory ? category == pickedCategory : true
            // )
            .map((post, i) => {
              const { date, title, img, category } = post;

              return (
                <div
                  className="px-3 h-100"
                  style={{ display: "table" }}
                  key={i}
                >
                  <Card
                    role="button"
                    // onClick={() => setPickedPost(post)}
                    className="w-100 h-100"
                    style={{ display: "table-cell" }}
                  >
                    <div
                      style={{
                        height: "30vh",
                        backgroundImage: `url('/images/articles/${img}')`,
                        backgroundPositionX: "center",
                        backgroundPositionY: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                      className="w-100 p-0 m-0"
                    >
                      <Button className="m-3 p-2 float-end" variant="primary">
                        {category}
                      </Button>
                    </div>

                    <CardBody>
                      <small className="text-start text-dark">{date}</small>
                      <h6 className="text-justify text-dark">{title}</h6>
                    </CardBody>
                  </Card>
                </div>
              );
            })}
          slidesCount={3}
        />
      </Col>

      <Modal
        // show={!!pickedPost.title}
        // onHide={closeModal}
        size="xl"
      >
        <ModalHeader closeButton />

        <ModalBody className="px-4">
          {/* <Row>
            <Col md={4}>
              <img src={`/images/articles/${pickedPost.img}`} width="100%" />
            </Col>

            <Col md={8} className="py-5 px-3">
              <p>{pickedPost.date}</p>
              <h4>{pickedPost.title}</h4>
            </Col>

            <Col md={12} className="my-3">
              {pickedPost.contents?.map(({ type, content, contents }, i) => (
                <Fragment key={i}>
                  {type === "title" ? (
                    <h5 className="text-block fw-bold">{content}</h5>
                  ) : type === "ol" ? (
                    <ol>
                      {contents?.map((point, y) => (
                        <li key={y}>{point}</li>
                      ))}
                    </ol>
                  ) : type === "resources" ? (
                    <Fragment>
                      <h6>Resources:</h6>

                      <ul>
                        {contents?.map((resource, y) => (
                          <li key={y}>{resource}</li>
                        ))}
                      </ul>
                    </Fragment>
                  ) : (
                    <h6
                      className={`text-block mb-5 ${
                        type === "boldText" ? "fw-bold" : ""
                      }`}
                    >
                      {content}
                    </h6>
                  )}
                </Fragment>
              ))}
            </Col>
          </Row> */}
        </ModalBody>

        <ModalFooter>
          <Button
            variant="dark"
            // onClick={closeModal}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </PageSection>
  );
};

export default BlogSection;
