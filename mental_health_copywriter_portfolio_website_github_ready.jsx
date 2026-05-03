export default function MentalHealthCopywriterPortfolio() {
  const heroImage =
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80';

  const portfolioItems = [
    {
      title: 'Somatic Experiencing Landing Page',
      type: 'Landing Page Copy',
      description:
        'A complete trauma-informed landing page written for a somatic therapist specializing in nervous system regulation, burnout recovery, and emotional healing.',
      excerpt:
        'Healing does not begin when people force themselves to feel better. It begins when the nervous system finally experiences enough safety to soften its protective patterns.',
      tags: ['Somatic Therapy', 'Landing Pages', 'Trauma-Informed Copy'],
      image:
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
      link: '#somatic-article',
    },
    {
      title: 'CPTSD Therapist Sales Page',
      type: 'Sales Page Copy',
      description:
        'Long-form therapist sales page focused on emotional safety, attachment wounds, emotional flashbacks, and complex trauma healing.',
      excerpt:
        'Complex trauma often teaches people to disconnect from themselves in order to survive. Therapy for CPTSD is not about fixing what is broken.',
      tags: ['CPTSD', 'Sales Pages', 'Trauma Recovery'],
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
      link: '#cptsd-article',
    },
    {
      title: 'Why Anxiety Feels Constant',
      type: 'Educational Mental Health Article',
      description:
        'Long-form educational article explaining chronic anxiety through a trauma-informed nervous system perspective.',
      excerpt:
        'For many people, anxiety is not simply overthinking. It is a nervous system that has learned to stay alert for danger long after stressful experiences have passed.',
      tags: ['Anxiety', 'SEO Content', 'Mental Health Articles'],
      image:
        'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1200&q=80',
      link: '#anxiety-article',
    },
  ];

  const services = [
    {
      title: 'LinkedIn Ghostwriting for Therapists',
      description:
        'Thought leadership content designed to help trauma-informed therapists build visibility and credibility online.',
    },
    {
      title: 'Therapist Website Copy',
      description:
        'Emotionally intelligent website messaging that helps potential clients feel safe, understood, and ready to reach out.',
    },
    {
      title: 'Trauma-Informed Email Sequences',
      description:
        'Educational and nurturing email content tailored for therapists and wellness brands.',
    },
    {
      title: 'Educational Mental Health Articles',
      description:
        'SEO-informed long-form content written with emotional nuance and clarity.',
    },
    {
      title: 'Thought Leadership Content',
      description:
        'Strategic posts and essays positioning therapists as trusted voices in trauma and nervous system healing.',
    },
    {
      title: 'Sales Pages & Consultation Funnels',
      description:
        'Gentle conversion-focused copy that builds trust without manipulative tactics.',
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Olivia Bennett',
      role: 'CPTSD Therapist',
      quote:
        'The messaging felt aligned with my therapeutic values while still making my practice feel polished and professional.',
    },
    {
      name: 'Amelia Hart, SEP',
      role: 'Somatic Experiencing Practitioner',
      quote:
        'The content captured the emotional nuance of nervous system work in a way most marketers completely miss.',
    },
    {
      name: 'Claire Monroe, LPC',
      role: 'Anxiety Specialist',
      quote:
        'Clients regularly tell me my website feels calming and relatable before they even schedule a consultation.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#2d2d2d] font-sans">
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.25em] text-sm mb-4 text-[#7b6f66]">
            Trauma-Informed Mental Health Copywriter
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            Copy & Content for Somatic Therapists, CPTSD & Anxiety Specialists
          </h1>

          <p className="text-lg leading-relaxed text-[#5a5a5a] mb-8 max-w-xl">
            I help trauma-informed therapists and mental health brands communicate with clarity,
            emotional nuance, and trust through thoughtful content and ethical marketing.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="bg-black text-white px-6 py-3 rounded-2xl text-sm hover:opacity-90 transition inline-block"
            >
              View Portfolio
            </a>

            <a
              href="mailto:your@email.com"
              className="border border-black px-6 py-3 rounded-2xl text-sm hover:bg-black hover:text-white transition inline-block"
            >
              Book Discovery Call
            </a>
          </div>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-[#ece7e2] h-[600px]">
          <img
            src={heroImage}
            alt="Calm therapy aesthetic"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/30">
              <h3 className="text-xl font-medium mb-4">Specialized Niches</h3>

              <div className="flex flex-wrap gap-3 text-sm">
                <span className="bg-white px-4 py-2 rounded-full">Somatic Therapy</span>
                <span className="bg-white px-4 py-2 rounded-full">CPTSD</span>
                <span className="bg-white px-4 py-2 rounded-full">Anxiety</span>
                <span className="bg-white px-4 py-2 rounded-full">Nervous System Work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="uppercase tracking-[0.2em] text-sm text-[#7b6f66] mb-3">
            Services
          </p>

          <h2 className="text-4xl font-semibold">
            Strategic Content for Trauma-Informed Practices
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-[#ece7e2] hover:shadow-xl transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#efe8e1] mb-6 flex items-center justify-center text-lg font-semibold">
                0{index + 1}
              </div>

              <h3 className="text-xl font-medium mb-4">{service.title}</h3>

              <p className="text-[#5a5a5a] leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="bg-white py-20 border-t border-b border-[#ece7e2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="uppercase tracking-[0.2em] text-sm text-[#7b6f66] mb-3">
              Portfolio
            </p>

            <h2 className="text-4xl font-semibold mb-4">
              Selected Mental Health Copywriting Projects
            </h2>
          </div>

          <div className="grid gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 bg-[#faf7f4] rounded-[2rem] p-10 border border-[#ece7e2]"
              >
                <div>
                  <p className="uppercase text-sm tracking-[0.2em] text-[#7b6f66] mb-3">
                    {item.type}
                  </p>

                  <h3 className="text-3xl font-semibold mb-5">
                    {item.title}
                  </h3>

                  <p className="text-[#5a5a5a] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="bg-white rounded-2xl p-6 border border-[#ece7e2] mb-6">
                    <p className="text-[#4b4b4b] leading-relaxed text-[15px] italic">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-white px-4 py-2 rounded-full text-sm border border-[#e7dfd8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-3xl overflow-hidden border border-[#ece7e2] shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[260px] object-cover"
                  />

                  <div className="p-8">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white px-5 py-3 rounded-2xl text-sm inline-block hover:opacity-90 transition"
                    >
                      Read Full Sample
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.2em] text-sm text-[#7b6f66] mb-3">
            Testimonials
          </p>

          <h2 className="text-4xl font-semibold mb-6">
            Trusted by Trauma-Informed Practices
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] p-10 border border-[#ece7e2] shadow-sm"
            >
              <p className="text-lg leading-relaxed italic mb-8 text-[#4b4b4b]">
                “{testimonial.quote}”
              </p>

              <h4 className="font-semibold text-lg">{testimonial.name}</h4>

              <p className="text-sm text-[#7b6f66] mt-1">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="uppercase tracking-[0.2em] text-sm text-[#7b6f66] mb-3">
          About
        </p>

        <h2 className="text-4xl font-semibold mb-8">
          Ethical, Emotionally Intelligent Mental Health Marketing
        </h2>

        <p className="text-lg leading-relaxed text-[#5a5a5a] max-w-3xl mx-auto">
          The best therapist content builds trust without manipulation.
          My approach combines trauma-informed communication and emotional nuance
          to help mental health professionals connect with their audience.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-black text-white rounded-[2.5rem] p-14 text-center">
          <p className="uppercase tracking-[0.2em] text-sm opacity-70 mb-4">
            Work Together
          </p>

          <h2 className="text-4xl font-semibold mb-6 leading-tight">
            Thoughtful Content for Therapists Doing Deep Healing Work
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="mailto:your@email.com"
              className="bg-white text-black px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition inline-block"
            >
              Book Discovery Call
            </a>

            <a
              href="#portfolio"
              className="border border-white/30 text-white px-8 py-4 rounded-2xl font-medium hover:bg-white hover:text-black transition inline-block"
            >
              View Writing Samples
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#ece7e2] py-10 text-center text-sm text-[#7b6f66] bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="mb-3 font-medium text-[#4b4b4b]">
            Trauma-Informed Copywriter for Somatic Therapists, CPTSD & Anxiety Specialists
          </p>

          <div className="flex justify-center gap-6 mt-6 text-[#5a5a5a]">
            <a href="https://linkedin.com" className="hover:text-black transition">
              LinkedIn
            </a>
            <a href="#portfolio" className="hover:text-black transition">
              Portfolio
            </a>
            <a href="mailto:your@email.com" className="hover:text-black transition">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Full Writing Samples */}
      <section className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <article id="somatic-article" className="bg-white rounded-[2rem] p-12 border border-[#ece7e2] shadow-sm">
          <p className="uppercase tracking-[0.2em] text-sm text-[#7b6f66] mb-4">
            Somatic Experiencing Landing Page
          </p>

          <h2 className="text-4xl font-semibold mb-8 leading-tight">
            Your Body Has Been Protecting You For A Long Time
          </h2>

          <div className="space-y-6 text-[#4b4b4b] leading-relaxed text-lg">
            <p>
              Somatic Experiencing therapy helps people gently reconnect with their nervous system after stress, trauma, anxiety, burnout, and emotional overwhelm.
            </p>

            <p>
              Healing does not happen by forcing yourself to move on. It happens when the body finally experiences enough safety to soften survival patterns that may have been active for years.
            </p>

            <p>
              Through a compassionate, body-aware approach, Somatic Experiencing can help clients feel more grounded, emotionally regulated, connected, and present in daily life.
            </p>

            <h3 className="text-2xl font-semibold pt-6">
              What Somatic Therapy Helps With
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Chronic anxiety and hypervigilance</li>
              <li>Burnout and nervous system exhaustion</li>
              <li>Emotional overwhelm</li>
              <li>Dissociation and shutdown responses</li>
              <li>Difficulty relaxing or feeling safe</li>
              <li>Emotional flashbacks</li>
              <li>Stress held physically in the body</li>
            </ul>

            <h3 className="text-2xl font-semibold pt-6">
              Trauma Lives In The Nervous System
            </h3>

            <p>
              Trauma is not only about what happened. It is also about what your nervous system had to do to survive.
            </p>

            <p>
              Many survival responses begin as intelligent adaptations. The nervous system learns to stay alert, brace for danger, disconnect emotionally, or suppress needs in order to stay safe.
            </p>

            <p>
              Somatic Experiencing supports the body in gradually moving out of chronic protection and into greater flexibility, regulation, and emotional safety.
            </p>

            <h3 className="text-2xl font-semibold pt-6">
              Therapy That Moves At The Pace Of Safety
            </h3>

            <p>
              This work is not about forcing emotional release or reliving traumatic experiences.
            </p>

            <p>
              Sessions focus on helping clients build nervous system capacity slowly through body awareness, grounding, emotional regulation, and compassionate pacing.
            </p>
          </div>
        </article>

        <article id="cptsd-article" className="bg-white rounded-[2rem] p-12 border border-[#ece7e2] shadow-sm">
          <p className="uppercase tracking-[0.2em] text-sm text-[#7b6f66] mb-4">
            CPTSD Therapist Sales Page
          </p>

          <h2 className="text-4xl font-semibold mb-8 leading-tight">
            Therapy For Complex Trauma & Emotional Survival Patterns
          </h2>

          <div className="space-y-6 text-[#4b4b4b] leading-relaxed text-lg">
            <p>
              Complex PTSD often develops after long-term emotional stress, attachment wounds, chronic overwhelm, or relational trauma.
            </p>

            <p>
              Many people with CPTSD struggle with emotional flashbacks, shame, people-pleasing, self-criticism, hypervigilance, and difficulty feeling emotionally safe even in calm environments.
            </p>

            <p>
              These are not signs of weakness. They are nervous system adaptations developed for survival.
            </p>

            <h3 className="text-2xl font-semibold pt-6">
              CPTSD Can Feel Invisible
            </h3>

            <p>
              Many clients appear highly functional externally while privately carrying chronic exhaustion, emotional overwhelm, and deep relational fear.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Fear of abandonment or rejection</li>
              <li>Difficulty trusting yourself</li>
              <li>Overthinking interactions</li>
              <li>Constant emotional monitoring</li>
              <li>Emotional numbness or shutdown</li>
              <li>Feeling responsible for everyone around you</li>
            </ul>

            <h3 className="text-2xl font-semibold pt-6">
              Healing Begins With Emotional Safety
            </h3>

            <p>
              Therapy for CPTSD is not about fixing brokenness.
            </p>

            <p>
              It is about helping clients understand the protective strategies their nervous system developed over time while creating greater emotional regulation, self-trust, and internal stability.
            </p>

            <p>
              Sessions may include attachment-focused healing, somatic awareness, emotional processing, nervous system regulation, boundary work, and self-compassion practices.
            </p>

            <h3 className="text-2xl font-semibold pt-6">
              You Do Not Need To Heal Perfectly
            </h3>

            <p>
              Healing from complex trauma is rarely linear.
            </p>

            <p>
              The goal is not perfection. The goal is helping the nervous system experience more flexibility, connection, emotional steadiness, and safety over time.
            </p>
          </div>
        </article>

        <article id="anxiety-article" className="bg-white rounded-[2rem] p-12 border border-[#ece7e2] shadow-sm">
          <p className="uppercase tracking-[0.2em] text-sm text-[#7b6f66] mb-4">
            Anxiety Educational Article
          </p>

          <h2 className="text-4xl font-semibold mb-8 leading-tight">
            Why Anxiety Can Feel Constant — A Nervous System Perspective
          </h2>

          <div className="space-y-6 text-[#4b4b4b] leading-relaxed text-lg">
            <p>
              For many people, anxiety feels constant.
            </p>

            <p>
              Even during quiet moments, the body may still feel tense, restless, emotionally overwhelmed, or unable to fully relax.
            </p>

            <p>
              Anxiety is commonly treated as purely mental. But anxiety also lives in the nervous system.
            </p>

            <h3 className="text-2xl font-semibold pt-6">
              Anxiety Is Often A Body Response
            </h3>

            <p>
              The nervous system is designed to protect us from danger.
            </p>

            <p>
              When stress becomes chronic, the body can begin operating as though threat is always nearby, even when external danger no longer exists.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Racing thoughts</li>
              <li>Difficulty sleeping</li>
              <li>Digestive discomfort</li>
              <li>Hypervigilance</li>
              <li>Muscle tension</li>
              <li>Emotional overwhelm</li>
            </ul>

            <h3 className="text-2xl font-semibold pt-6">
              Chronic Stress Shapes The Nervous System
            </h3>

            <p>
              Attachment wounds, emotional unpredictability, burnout, and prolonged stress can all impact nervous system regulation.
            </p>

            <p>
              Many people blame themselves for anxiety symptoms when their body is actually responding exactly as it was conditioned to.
            </p>

            <h3 className="text-2xl font-semibold pt-6">
              Healing Anxiety Requires More Than Positive Thinking
            </h3>

            <p>
              Many anxious individuals logically understand that they are safe while their nervous system still reacts as though danger exists.
            </p>

            <p>
              This is why healing often requires emotional safety, nervous system regulation, body awareness, supportive relationships, and compassionate therapeutic work.
            </p>

            <p>
              Healing is not about forcing calm. It is about helping the nervous system gradually experience more safety over time.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
