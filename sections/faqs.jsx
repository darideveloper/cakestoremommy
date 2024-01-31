import Faq from "@/components/faq"
import Section from "@/sections/section"

/**
 * Faqs section
 * @param {string} title - section title
 * @param {object} questions - questions and answers
 * @returns 
 */
export default function Faqs({ title, questions }) {

  return (
    <Section
      title={title}
      container={true}
      extraClasses={`
        pt-28
        mb-32
        max-w-6xl
      `}
      id="faqs"
    >

    <div 
      className={`
        content
        grid
        grid-cols-1
        md:grid-cols-2
      `}
    >
      {/* Render all faqs */}
      {
        questions.map((question, index) => {
          return (
            <Faq
              key={index}
              question={question.question}
              text={question.text}
              images={question.images}
            />
          )
        })
      }
    </div>


    </Section>
  )
}