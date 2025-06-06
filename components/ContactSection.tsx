import ContactForm from "@/components/ContactForm";
import Title from "@/components/Title";
import Section from "@/components/Section";

export default function ContactSection() {
    return (
        <Section id="contact">
            <Title text={"Contactez-moi!"} />
            <ContactForm />
        </Section>
    )
}