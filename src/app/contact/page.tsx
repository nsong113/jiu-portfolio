import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-center font-dohyeon text-brown_color text-xl md:text-3xl mb-10 selection:bg-redbrown_color">
        Contact Us
      </h2>
      <ContactForm />
    </main>
  );
}
